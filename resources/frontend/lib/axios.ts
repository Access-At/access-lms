import axiosIntance from "axios"

export const axiosApi = axiosIntance.create({
  baseURL: `${window.location.origin}/api/v1`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

if (localStorage.getItem("token")) {
    axiosApi.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
}

export const axios = axiosIntance.create({
  baseURL: `${window.location.origin}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
