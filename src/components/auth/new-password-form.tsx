'use client'

import { useForm } from "react-hook-form"
import { Button, Input, Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, } from "@/components/ui"
import { CardWrapper, FormError, FormSuccess } from "@/components/common"
import { NewPasswordSchema, newPasswordSchema } from "@/schemas"
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from "react"
import { useSearchParams } from "next/navigation"
import { newPassword } from "@/actions/new-password"

export function NewPasswordForm() {
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [pending, startTransition] = useTransition()

  const token = searchParams.get('token')

  const form = useForm<NewPasswordSchema>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: '',
    }
  })

  function onNewPasswordSubmit(values: NewPasswordSchema) {
    if (!token) {
      setError('Missing token!')
      return
    }

    startTransition(() => {
      newPassword(values, token)
      .then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }

  return (
    <CardWrapper 
      headerLabel="Enter a new password"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNewPasswordSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField 
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="*******"
                      disabled={pending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" disabled={pending} className="w-full">
            Reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}