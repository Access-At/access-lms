import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { createElement, useState } from "react"

import { Box } from "@/components/ui/box"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useFormContext } from "react-hook-form"

type PasswordFieldProps = {
  name?: string
  placeholder?: string
  description?: string | JSX.Element
  label?: string
  isRequired?: boolean
}

export function PasswordField({
  name = "password",
  placeholder = "Enter password",
  description,
  label,
  isRequired = false,
}: PasswordFieldProps) {
  const { control, getFieldState } = useFormContext()
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel
              className={cn(
                isRequired
                  ? "after:text-destructive after:content-['\\00a0*']"
                  : "",
              )}
            >
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Box className='relative'>
              <Input
                {...field}
                type={passwordVisibility ? "text" : "password"}
                autoComplete='on'
                placeholder={placeholder}
                className={`pr-12 ${getFieldState(name).error && "text-destructive"}`}
              />
              <Box
                className='absolute inset-y-0 right-0 flex cursor-pointer items-center p-3 text-muted-foreground'
                onClick={() => setPasswordVisibility(!passwordVisibility)}
              >
                {createElement(passwordVisibility ? EyeOffIcon : EyeIcon, {
                  className: "h-6 w-6",
                })}
              </Box>
            </Box>
          </FormControl>
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  )
}