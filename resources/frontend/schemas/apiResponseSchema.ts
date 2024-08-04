import { z } from "zod"

export const apiResponseSchema = z.object({
  status: z.boolean(),
  message: z.string(),
})

export type ApiResponseType = z.infer<typeof apiResponseSchema>
