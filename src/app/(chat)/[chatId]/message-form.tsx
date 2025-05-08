'use client'

import { useCreateMessage } from '@/api/messages'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { SendIcon } from 'lucide-react'
import { ComponentProps, FormEventHandler, useCallback } from 'react'
import { useChatParams } from './use-chat-params'

export type MessageFormProps = Omit<
  ComponentProps<'form'>,
  'children' | 'onSubmit'
>

export const MessageForm = ({ className, ...props }: MessageFormProps) => {
  const { chatId } = useChatParams()
  const { mutateAsync: sendMessage, isPending } = useCreateMessage(chatId)

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (e) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      await sendMessage(formData.get('content') as string)
      ;(e.target as HTMLFormElement).reset()
    },
    [sendMessage],
  )

  return (
    <form
      className={cn('flex flex-none gap-2 p-2', className)}
      onSubmit={onSubmit}
      {...props}
    >
      <Input
        className="rounded-2xl"
        name="content"
        placeholder="Aa"
        required
        maxLength={2000}
      />
      <Button className="rounded-3xl" disabled={isPending}>
        <SendIcon />
        Send
      </Button>
    </form>
  )
}
