import { UseMutationResult, useMutation } from "@tanstack/react-query"

import { AxiosError } from "axios"
import { PageFormType } from "@/schemas/admin/pageFormSchema"
import { RequestService } from "@/lib/request-service"
import { apiResponseSchema } from "@/schemas/api-response-schema"
import { z } from "zod"

const PagesResponseShema = apiResponseSchema.extend({
    data: z.object({
        "id": z.string(),
        "title": z.string(),
        "slug": z.string(),
        "content": z.string(),
        "created_at": z.string(),
        "updated_at": z.string(),
    })
})

export type PagesResponse = z.infer<typeof PagesResponseShema>

interface Props {
    onSuccess: (responses: PagesResponse) => void
    onError: (error: AxiosError<PagesResponse>) => void
}

export const useAddPagesQuery = ({
    onSuccess,
    onError,
}: Props): UseMutationResult<PagesResponse, AxiosError<PagesResponse>, PageFormType> => {
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

// export const useLoginQuery = ({
//     onSuccess,
//     onError
//   }: Props): UseMutationResult<
//     LoginResponse,
//     AxiosError<LoginResponse>,
//     LoginFormType
//   > => {
//     return useMutation<LoginResponse, AxiosError<LoginResponse>, LoginFormType>({
//       mutationKey: ["login"],
//       mutationFn: (data: LoginFormType) => fetchLogin(data),
//       onSuccess,
//       onError,
//     })
//   }

//   const fetchLogin = async (data: LoginFormType): Promise<LoginResponse> => {
//     const requestService = new RequestService({
//       url: `/login`,
//       data,
//       method: "POST",
//       schema: loginResponseSchema,
//     })
//     const response = await requestService.sendRequest()
//     return response as LoginResponse
//   }


// export const useLoginQuery = ({
//   onSuccess,
//   onError
// }: Props): UseMutationResult<
//   PagesResponse,
//   AxiosError<PagesResponse>,
//   PageAddSchemaType
// > => {
//   return useMutation<PagesResponse, AxiosError<PagesResponse>, LoginFormType>({
    // mutationKey: ["add.pages"],
    // mutationFn: (data: PageAddSchemaType) => addPages(data),
    // onSuccess,
    // onError,
//   })
// }

// const addPages = async (data: PageAddSchemaType): Promise<PagesResponse> => {
//   const requestService = new RequestService({
//     url: `/admin/pages`,
//     data,
//     method: "POST",
//     schema: PagesResponseShema,
//   })
//   const response = await requestService.sendRequest()
//   return response as PagesResponse
// }
