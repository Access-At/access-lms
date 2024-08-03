import { z } from "zod"

export const pageAddSchema = z.object({
  title: z.string().min(1, { message: "Title harus diisi" }),
  content: z.string().min(12, { message: "Content harus diisi" }),
})

export type PageAddSchemaType = z.infer<typeof pageAddSchema>
