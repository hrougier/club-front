'use client'

import { useChat } from './chat-list-context'
import { ChatListItem } from './chat-list-item'

export const ChatList = () => {
  const { chats } = useChat()

  return chats.map((chat) => <ChatListItem key={chat.id} {...chat} />)
}
