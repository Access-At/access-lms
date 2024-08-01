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

interface UserType {
  id: string
  email: string
  username: string
  imageUrl: null
  created_at: string
  updated_at: string
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
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) as string)
    : null
}

function setStoredUser(user: UserType | null) {
  if (user) {
    localStorage.setItem(key, JSON.stringify(user))
  } else {
    localStorage.removeItem(key)
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
