import { getMessage } from '@/api/messages'
import { useSuspenseQuery } from '@tanstack/react-query'
import { cache } from 'react'

import mockup from './data/mockup'

// Chat Interface
export interface ChatInterface {
  id: string;
  // User Id related to this chat
  withUser: string;
  // Fake data in order to display the green dot
  isActive: boolean;
  // array of messages id
  messages: string[];
  // last message that should be displayed in the chat preview
  lastMessage: string;
}

export const getChats = cache(async (username?: string) => {
  const chats = username
    ? mockup.chats.filter((chat) =>
        mockup.users
          .filter((user) => user.name.toLowerCase().includes(username))
          .map((user) => user.id)
          .includes(chat.withUser),
      )
    : mockup.chats

  const chatsWithLastMessage = await Promise.all(
    chats.map(
      async (chat) => [chat, await getMessage(chat.lastMessage)] as const,
    ),
  )

  return chatsWithLastMessage
    .sort(
      ([, message1], [, message2]) =>
        new Date(message2.date).getTime() - new Date(message1.date).getTime(),
    )
    .map(([chat]) => chat)
})

export const useChats = (username?: string) =>
  useSuspenseQuery({
    queryKey: ['chats', { username }],
    queryFn: () => getChats(username),
  })

export const getChat = cache(async (chatId: string) => {
  const chat = mockup.chats.find((chat) => chat.id === chatId)

  if (!chat) {
    throw new Error('Chat not found')
  }

  return chat
})

export const useChat = (chatId: string) =>
  useSuspenseQuery({
    queryKey: ['chat', chatId],
    queryFn: () => getChat(chatId),
  })
