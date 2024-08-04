import {
  UseMutationResult,
  UseQueryOptions,
  useMutation,
} from "@tanstack/react-query"

import { RequestService } from "@/lib/requestService"
import { PageFormType } from "@/schemas/admin/pageFormSchema"
import { apiResponseSchema } from "@/schemas/apiResponseSchema"
import { AxiosError } from "axios"
import { z } from "zod"

const ResponsePageSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
})

const PagesResponseShema = apiResponseSchema.extend({
  data: ResponsePageSchema,
})

export type PagesResponse = z.infer<typeof PagesResponseShema>
export type ResponsePage = z.infer<typeof ResponsePageSchema>

interface Props {
  onSuccess: (responses: PagesResponse) => void
  onError: (error: AxiosError<PagesResponse>) => void
}

export const useAddPagesQuery = ({
  onSuccess,
  onError,
}: Props): UseMutationResult<
  PagesResponse,
  AxiosError<PagesResponse>,
  PageFormType
> => {
  return useMutation<PagesResponse, AxiosError<PagesResponse>, PageFormType>({
    mutationKey: ["add.pages"],
    mutationFn: (data: PageFormType) => addPages(data),
    onSuccess,
    onError,
  })
}

const addPages = async (data: PageFormType): Promise<PagesResponse> => {
  const requestService = new RequestService({
    url: `/admin/pages`,
    data,
    method: "POST",
    schema: PagesResponseShema,
  })
  const response = await requestService.sendRequest()
  return response as PagesResponse
}

export const useUpdatePagesQuery = ({
  onSuccess,
  onError,
}: Props): UseMutationResult<
  PagesResponse,
  AxiosError<PagesResponse>,
  { data: PageFormType; id: string }
> => {
  return useMutation<
    PagesResponse,
    AxiosError<PagesResponse>,
    { data: PageFormType; id: string }
  >({
    mutationKey: ["update.pages"],
    mutationFn: ({ data, id }) => updatePages(data, id),
    onSuccess,
    onError,
  })
}

const updatePages = async (
  data: PageFormType,
  id: string,
): Promise<PagesResponse> => {
  const requestService = new RequestService({
    url: `/admin/pages/${id}`,
    data,
    method: "PUT",
    schema: PagesResponseShema,
  })
  const response = await requestService.sendRequest()
  return response as PagesResponse
}

export const useDeletePagesQuery = ({
  onSuccess,
  onError,
}: Props): UseMutationResult<
  PagesResponse,
  AxiosError<PagesResponse>,
  string
> => {
  return useMutation<PagesResponse, AxiosError<PagesResponse>, string>({
    mutationKey: ["delete.pages"],
    mutationFn: (id: string) => deletePages(id),
    onSuccess,
    onError,
  })
}

const deletePages = async (id: string): Promise<PagesResponse> => {
  const requestService = new RequestService({
    url: `/admin/pages/${id}`,
    method: "DELETE",
  })
  const response = await requestService.sendRequest()
  return response as PagesResponse
}

const FetchPagesResponseSchema = apiResponseSchema.extend({
  data: z.array(ResponsePageSchema),
})

export type FetchPagesResponse = z.infer<typeof FetchPagesResponseSchema>

export const useFetchPagesQuery = (): UseQueryOptions<
  FetchPagesResponse,
  AxiosError<FetchPagesResponse>
> => {
  return {
    queryKey: ["fetch.pages"],
    queryFn: () => fetchPages(),
  }
}

const fetchPages = async (): Promise<FetchPagesResponse> => {
  const requestService = new RequestService({
    url: "/admin/pages",
    method: "GET",
  })
  const response = await requestService.sendRequest()
  return response as FetchPagesResponse
}
