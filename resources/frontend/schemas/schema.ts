import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
})

export type Task = z.infer<typeof taskSchema>

export const blogSchema = z.array(
  z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    status: z.string(),
    label: z.string(),
    priority: z.string(),
    content: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
  }),
)

export type Blog = z.infer<typeof blogSchema>
