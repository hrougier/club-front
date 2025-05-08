'use client'

import type { ChatInterface } from '@/api/chats'
import { useMessage } from '@/api/messages'
import { useUser } from '@/api/users'
import { SidebarMenuLink } from '@/components/sidebar-menu-link'
import { UserAvatar } from '@/components/user-avatar'
import { cn, formatRelativeShortDate } from '@/lib/utils'
import { ComponentProps } from 'react'

export type ChatListItemProps = Omit<
  ComponentProps<typeof SidebarMenuLink>,
  'href'
> & {
  chat: ChatInterface
}

export const ChatListItem = ({
  chat,
  className,
  ...props
}: ChatListItemProps) => {
  const { data: user } = useUser(chat.withUser)
  const { data: message } = useMessage(chat.lastMessage)

  return (
    <SidebarMenuLink
      className={cn(
        'flex h-16 w-full items-center gap-4 rounded-lg p-2 text-left',
        className,
      )}
      href={`/${chat.id}`}
      {...props}
    >
      <UserAvatar
        className="size-10"
        userId={chat.withUser}
        isActive={chat.isActive}
      />
      <div className="flex flex-1 gap-6">
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col">
            <p className="line-clamp-1 font-medium">{user.name}</p>
            <p className="text-muted-foreground line-clamp-1 text-sm">
              {message.content}
            </p>
          </div>
        </div>
        <span className="text-muted-foreground self-end truncate text-xs">
          {formatRelativeShortDate(message.date)}
        </span>
      </div>
    </SidebarMenuLink>
  )
}
