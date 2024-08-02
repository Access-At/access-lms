import { RequestService } from "@/lib/request-service"
import { apiResponseSchema } from "@/schemas/api-response-schema"
import { queryOptions } from "@tanstack/react-query"
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
    url: "/publik/feature-section",
    method: "GET",
    schema: featureResponseSchema,
  })
  const response = await requestService.sendRequest()
  return response as FeatureResponseType
}

export const useFeatureQuery = () => {
  return queryOptions({
    queryKey: ["feature"],
    queryFn: () => fetchFeature(),
  })
}
