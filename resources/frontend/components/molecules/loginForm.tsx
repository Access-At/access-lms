import { Card, CardContent } from "../ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  LoginFormType,
  loginFormSchema,
} from "@/schemas/admin/login-form-schema"
import { error, success } from "@/lib/toast"
import { useNavigate, useRouter } from "@tanstack/react-router"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { sleep } from "@/lib/utils"
import { useAuth } from "@/contexts"
import { useForm } from "react-hook-form"
import { useLoginQuery } from "@/features/admin/login-feature"
import { zodResolver } from "@hookform/resolvers/zod"

const fallback = "/dashboard" as const

export default function LoginForm() {
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
    role: "admin",
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
    <Card className='flex h-72 items-center justify-center'>
      <CardContent className='flex w-full flex-col gap-4'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleLogin)}
            className='flex flex-col gap-4'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='flex flex-col gap-2'>
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
                <FormItem className='flex flex-col gap-2'>
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
      </CardContent>
    </Card>
  )
}
