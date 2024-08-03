import { z } from "zod"

export const PageFormSchema = z.object({
  title: z.string().min(1, { message: "Title harus diisi" }),
  content: z.string().min(1, { message: "Content harus diisi" }),
})

export type PageFormType = z.infer<typeof PageFormSchema>
