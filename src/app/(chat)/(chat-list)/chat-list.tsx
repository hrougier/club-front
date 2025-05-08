'use client'

import { useChats } from '@/api/chats'
import { ChatListItem } from './chat-list-item'
import { useChatList } from './chat-list-provider'

export const ChatList = () => {
  const { username } = useChatList()
  const { data: chats } = useChats(username)

  return chats.map((chat) => <ChatListItem key={chat.id} chat={chat} />)
}
