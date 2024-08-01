import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { error, success } from "@/lib/toast"
import {
  LoginFormType,
  loginFormSchema,
} from "@/schemas/admin/login-form-schema"
import { useNavigate, useRouter } from "@tanstack/react-router"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/contexts"
import { useLoginQuery } from "@/features/admin/login-feature"
import { sleep } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

const fallback = "/admin" as const

export default function LoginAdminForm() {
  const navigate = useNavigate()
  const router = useRouter()
  const { login } = useAuth()

  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const { mutate: loginMutate, isPending } = useLoginQuery({
    onSuccess: async responses => {
      if (!responses.status) {
        return error(responses.message)
      }

      const { data } = responses

      if (data) {
        success("Login successful")

        await login(data.user)

        await router.invalidate()

        // This is just a hack being used to wait for the auth state to update
        // in a real app, you'd want to use a more robust solution
        await sleep(1)

        navigate({
          to: fallback,
        })
      }
    },
    onError: err => {
      error("Login failed", err.response?.data.message ?? err.message)
    },
  })

  const handleLogin = (data: LoginFormType) => {
    loginMutate(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)} className='grid gap-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='grid gap-2'>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Masukan Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='grid gap-2'>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder='Masukan Password'
                  type='password'
                  autoComplete='false'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          disabled={isPending}
          className='w-full gap-2 text-primary-foreground'
        >
          {isPending ? (
            <>
              <Loader2 className='animate-spin' />
              Loading...
            </>
          ) : (
            <>Login</>
          )}
        </Button>
      </form>
    </Form>
  )
}
