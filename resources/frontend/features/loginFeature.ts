import { UseMutationResult, useMutation } from "@tanstack/react-query"

import { AxiosError } from "axios"
import { LoginFormType } from "@/schemas/loginFormSchema"
import { RequestService } from "@/lib/requestService"
import { apiResponseSchema } from "@/schemas/apiResponseSchema"
import { z } from "zod"

const loginResponseSchema = apiResponseSchema.extend({
  data: z.object({
    user: z.object({
      id: z.string(),
      username: z.string(),
      email: z.string(),
      role: z.string(),
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
  onError
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
    url: `/login`,
    data,
    method: "POST",
    schema: loginResponseSchema,
  })
  const response = await requestService.sendRequest()
  return response as LoginResponse
}
