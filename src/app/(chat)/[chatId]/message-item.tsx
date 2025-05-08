'use client'

import type { MessageInterface } from '@/api/messages'
import { MyAvatar } from '@/components/my-avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { UserAvatar } from '@/components/user-avatar'
import { cn, formatDate } from '@/lib/utils'
import { ComponentProps } from 'react'
import { useChatContext } from './chat-provider'

export type MessageItemProps = ComponentProps<'div'> & {
  withUser: string
  message: MessageInterface
}

export const MessageItem = ({
  withUser,
  message,
  className,
  ...props
}: MessageItemProps) => {
  const { selectedMessageId } = useChatContext()

  return (
    <div
      id={message.id}
      className={cn('flex scroll-my-2 items-center gap-2', className)}
      {...props}
    >
      {!message.writtenByMe && <UserAvatar userId={withUser} />}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={cn(
                'max-w-xs rounded-3xl px-4 py-2 text-left',
                {
                  'bg-secondary': !message.writtenByMe,
                  'bg-primary text-background ml-auto': message.writtenByMe,
                  'bg-accent': selectedMessageId === message.id,
                },
                className,
              )}
            >
              {message.content}
            </div>
          </TooltipTrigger>
          <TooltipContent side={message.writtenByMe ? 'left' : 'right'}>
            {formatDate(message.date)}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {message.writtenByMe && <MyAvatar />}
    </div>
  )
}
