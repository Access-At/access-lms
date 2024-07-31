import { toast } from "sonner"

export const success = (message: string, description?: string) =>
  toast.success(message, {
    className: "toaster-success",
    description,
  })

export const error = (message: string, description?: string) =>
  toast.error(message, {
    className: "toaster-error",
    description,
  })
