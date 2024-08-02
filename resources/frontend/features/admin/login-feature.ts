import { UseMutationResult, useMutation } from "@tanstack/react-query"

import { AxiosError } from "axios"
import { LoginFormType } from "@/schemas/admin/login-form-schema"
import { RequestService } from "@/lib/request-service"
import { apiResponseSchema } from "@/schemas/api-response-schema"
import { z } from "zod"

const loginResponseSchema = apiResponseSchema.extend({
  data: z.object({
    user: z.object({
      id: z.string(),
      username: z.string(),
      email: z.string(),
      imageUrl: z.null(),
      role: z.string(),
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
  role: string
}

export const useLoginQuery = ({
  onSuccess,
  onError,
  role
}: Props): UseMutationResult<
  LoginResponse,
  AxiosError<LoginResponse>,
  LoginFormType
> => {
  return useMutation<LoginResponse, AxiosError<LoginResponse>, LoginFormType>({
    mutationKey: ["login"],
    mutationFn: (data: LoginFormType) => fetchLogin(data, role),
    onSuccess,
    onError,
  })
}

const fetchLogin = async (data: LoginFormType, role: string): Promise<LoginResponse> => {
  const requestService = new RequestService({
    url: `/${role}/login`,
    data,
    method: "POST",
    schema: loginResponseSchema,
  })
  const response = await requestService.sendRequest()
  return response as LoginResponse
}
