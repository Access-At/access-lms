import { UseMutationResult, useMutation } from "@tanstack/react-query"

import { RequestService } from "@/lib/request-service"
import { LoginFormType } from "@/schemas/admin/login-form-schema"
import { apiResponseSchema } from "@/schemas/api-response-schema"
import { AxiosError } from "axios"
import { z } from "zod"

const loginResponseSchema = apiResponseSchema.extend({
  data: z.object({
    user: z.object({
      id: z.string(),
      username: z.string(),
      email: z.string(),
      imageUrl: z.null(),
      created_at: z.string(),
      updated_at: z.string(),
    }),
    token: z.string(),
  }),
})

export type LoginResponse = z.infer<typeof loginResponseSchema>

interface Props {
  onSuccess: (responses: LoginResponse) => void
  onError: (error: AxiosError<LoginResponse>) => void
}

export const useLoginQuery = ({
  onSuccess,
  onError,
}: Props): UseMutationResult<
  LoginResponse,
  AxiosError<LoginResponse>,
  LoginFormType
> => {
  return useMutation<LoginResponse, AxiosError<LoginResponse>, LoginFormType>({
    mutationKey: ["login"],
    mutationFn: (data: LoginFormType) => fetchLogin(data),
    onSuccess,
    onError,
  })
}

const fetchLogin = async (data: LoginFormType): Promise<LoginResponse> => {
  const requestService = new RequestService({
    url: "/admin/login",
    data,
    method: "POST",
    schema: loginResponseSchema,
  })
  const response = await requestService.sendRequest()
  return response as LoginResponse
}
