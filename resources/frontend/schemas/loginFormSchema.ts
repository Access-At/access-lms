import { z } from "zod"

export const loginFormSchema = z.object({
  email: z.string().email().min(1, { message: "Email harus diisi" }),
  password: z.string().min(1, { message: "Password harus diisi" }),
})

export type LoginFormType = z.infer<typeof loginFormSchema>
