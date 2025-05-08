'use client'

import { useChat } from '@/api/chats'
import { useMessages } from '@/api/messages'
import { AutoScrollArea } from '@/components/auto-scroll-area'
import { useEffect } from 'react'
import { useChatContext } from './chat-provider'
import { MessageForm } from './message-form'
import { MessageItem } from './message-item'
import { useChatParams } from './use-chat-params'

export const MessageList = () => {
  const { chatId } = useChatParams()
  const { data: chat } = useChat(chatId)
  const { data: messages } = useMessages(chatId)

  const { selectedMessageId, setSelectedMessageId } = useChatContext()

  useEffect(() => {
    const element = document.getElementById(selectedMessageId)

    if (element) {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }
  }, [selectedMessageId])

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <AutoScrollArea
        className="min-h-0 flex-1"
        onScroll={() => {
          // setSelectedMessageId('')
        }}
      >
        <div className="space-y-2 p-2">
          {messages.map((message) => (
            <MessageItem
              key={message.id}
              withUser={chat.withUser}
              message={message}
            />
          ))}
        </div>
      </AutoScrollArea>
      <MessageForm />
    </div>
  )
}
