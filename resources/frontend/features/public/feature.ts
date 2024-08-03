import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { RequestService } from "@/lib/request-service"
import { apiResponseSchema } from "@/schemas/api-response-schema"
import { z } from "zod"

const featureResponseSchema = apiResponseSchema.extend({
  data: z.array(
    z.object({
      title: z.string(),
      desc: z.string(),
    }),
  ),
})
export type FeatureResponseType = z.infer<typeof featureResponseSchema>
export const fetchFeature = async (): Promise<FeatureResponseType> => {
  const requestService = new RequestService({
    url: "/public/feature-section",
    method: "GET",
    schema: featureResponseSchema,
  })
  const response = await requestService.sendRequest()
  return response as FeatureResponseType
}

export function useFeatureQuery(): UseQueryOptions<FeatureResponseType, unknown> {
  return {
    queryKey: ["feature"],
    queryFn: fetchFeature,
  }
}

export function useFetchCategory(): UseQueryResult<FeatureResponseType, unknown> {
  const options = useFeatureQuery()
  return useQuery<FeatureResponseType, unknown>(options)
}