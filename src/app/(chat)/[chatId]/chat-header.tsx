'use client'

import { useChat } from '@/api/chats'
import { useUser } from '@/api/users'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserAvatar } from '@/components/user-avatar'
import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { ChatPanelSheet } from './chat-panel-sheet'
import { useChatParams } from './use-chat-params'

export type ChatHeaderProps = ComponentProps<'header'>

export const ChatHeader = ({ className, ...props }: ChatHeaderProps) => {
  const { chatId } = useChatParams()
  const { data: chat } = useChat(chatId)
  const { data: user } = useUser(chat.withUser)

  return (
    <header
      className={cn(
        'flex h-16 shrink-0 items-center gap-2 border-b px-4',
        className,
      )}
      {...props}
    >
      <div className="md:hidden flex items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 !h-4" />
      </div>
      <UserAvatar
        className="size-10"
        userId={chat.withUser}
        isActive={chat.isActive}
      />
      <h2 className="text-lg">{user.name}</h2>
      <ChatPanelSheet className="lg:hidden ml-auto" />
    </header>
  )
}
