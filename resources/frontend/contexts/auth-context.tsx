import { axios, axiosApi } from "@/lib/axios"
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

import { sleep } from "@/lib/utils"
import Cookies from "js-cookie" // import js-cookie

interface UserType {
  id: string
  email: string
  username: string
  role: string
}

export interface AuthContext {
  isAuthenticated: boolean
  login: (user: UserType) => Promise<void>
  logout: (onlyRemove?: boolean) => Promise<void>
  csrfToken: () => Promise<boolean>
  user: UserType | null
}

const AuthContext = createContext<AuthContext | null>(null)

const key = "auth"

function getStoredUser(): UserType | null {
  const cookie = Cookies.get(key)
  return cookie ? JSON.parse(cookie) : null
}

function setStoredUser(user: UserType | null) {
  if (user) {
    Cookies.set(key, JSON.stringify(user), {
      expires: 7,
      sameSite: "Lax",
    }) // menyimpan cookie selama 7 hari
  } else {
    Cookies.remove(key, { path: "/" })
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(getStoredUser())
  const isAuthenticated = !!user

  const logout = useCallback(async (onlyRemove = false) => {
    await sleep(250)

    setStoredUser(null)
    setUser(null)

    if (!onlyRemove) {
      await axiosApi.get("/logout")
    }
  }, [])

  const login = useCallback(async (user: UserType) => {
    await sleep(500)

    setStoredUser(user)
    setUser(user)
  }, [])

  useEffect(() => {
    setUser(getStoredUser())
  }, [])

  // csrf token generation for guest methods
  const csrfToken = async () => {
    await axios.get("/sanctum/csrf-cookie")
    return true
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, csrfToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
