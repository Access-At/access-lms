import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { RequestService } from "@/lib/requestService"
import { apiResponseSchema } from "@/schemas/apiResponseSchema"
import { z } from "zod"

const categoryresponseSchema = apiResponseSchema.extend({
  data: z.array(
    z.object({
      title: z.string(),
      courses_total: z.number(),
    }),
  ),
})
export type CategoryResponseType = z.infer<typeof categoryresponseSchema>
export const fetchCategory = async (): Promise<CategoryResponseType> => {
  const requestService = new RequestService({
    url: "/public/category",
    method: "GET",
    schema: categoryresponseSchema,
  })
  const response = await requestService.sendRequest()
  return response as CategoryResponseType
}

export function useCategoryQuery(): UseQueryOptions<CategoryResponseType, unknown> {
  return {
    queryKey: ["category"],
    queryFn: fetchCategory,
  }
}

export function useFetchCategory(): UseQueryResult<CategoryResponseType, unknown> {
  const options = useCategoryQuery()
  return useQuery<CategoryResponseType, unknown>(options)
}
