import { RequestService } from "@/lib/request-service"
import { apiResponseSchema } from "@/schemas/api-response-schema"
import { queryOptions } from "@tanstack/react-query"
import { z } from "zod"

const categoryresponseSchema = apiResponseSchema.extend({
  data: z.array(
    z.object({
      title: z.string(),
      desc: z.string(),
      courses_total: z.number(),
    }),
  ),
})
export type CategoryResponseType = z.infer<typeof categoryresponseSchema>
export const fetchCategory = async (): Promise<CategoryResponseType> => {
  const requestService = new RequestService({
    url: "/publik/category",
    method: "GET",
    schema: categoryresponseSchema,
  })
  const response = await requestService.sendRequest()
  return response as CategoryResponseType
}

export const useCategoryQuery = () => {
  return queryOptions({
    queryKey: ["category"],
    queryFn: () => fetchCategory(),
  })
}
