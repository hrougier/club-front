'use client'

import { useChat } from '@/api/chats'
import { useSearchMessages } from '@/api/messages'
import { useUser } from '@/api/users'
import { MyAvatar } from '@/components/my-avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { UserAvatar } from '@/components/user-avatar'
import { cn } from '@/lib/utils'
import { ComponentProps, useState } from 'react'
import { useChatContext } from './chat-provider'
import { useChatParams } from './use-chat-params'

export type ChatPanelProps = ComponentProps<'aside'>

export const ChatPanel = ({ className, ...props }: ChatPanelProps) => {
  const { chatId } = useChatParams()
  const { data: chat } = useChat(chatId)
  const { data: user } = useUser(chat.withUser)

  const [search, setSearch] = useState<string>('')
  const { data: messages } = useSearchMessages(chatId, search)

  const { selectedMessageId, setSelectedMessageId } = useChatContext()

  return (
    <aside
      className={cn(
        'bg-background flex h-[100dvh] w-[300px] flex-col gap-2 border-l',
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 p-4">
        <UserAvatar
          className="size-16"
          userId={chat.withUser}
          isActive={chat.isActive}
        />
        <h3 className="line-clamp-1 font-semibold">{user.name}</h3>
      </div>
      <div className="px-4">
        <Input
          className="h-8 w-full rounded-3xl border"
          type="search"
          placeholder="Search a message"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            if (!e.target.value) setSelectedMessageId('')
          }}
        />
      </div>
      <ScrollArea className="min-h-0 flex-1">
        <div className="space-y-2 p-2">
          {messages.map((message) => (
            <Button
              key={message.id}
              className={cn(
                'hover:bg-accent hover:text-accent-foreground h-12 w-full whitespace-normal rounded-3xl px-2 disabled:opacity-100',
                {
                  'bg-accent text-accent-foreground':
                    selectedMessageId === message.id,
                },
              )}
              variant="ghost"
              onClick={() => setSelectedMessageId(message.id)}
              disabled={selectedMessageId === message.id}
            >
              {message.writtenByMe ? (
                <MyAvatar />
              ) : (
                <UserAvatar userId={chat.withUser} />
              )}
              <div className="flex flex-1 flex-col items-start">
                <div className="text-sm">
                  {message.writtenByMe ? 'Me' : user.name}
                </div>
                <div className="line-clamp-1 text-xs">{message.content}</div>
              </div>
            </Button>
          ))}
          {search && messages.length === 0 && (
            <div className="w-full text-center">No messages found.</div>
          )}
        </div>
      </ScrollArea>
    </aside>
  )
}
