import { getChat } from '@/api/chats'
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query'
import { cache } from 'react'

import mockup from './data/mockup'

// Message Interface
export interface MessageInterface {
  id: string
  // User Id related to this chat
  chatId: string
  // Boolean that say if the message was from me or the other user
  writtenByMe: boolean
  // content of the message
  content: string
  // Date of the message
  date: string
}

export const getMessages = cache(async (chatId: string) => {
  const chat = await getChat(chatId)

  return mockup.messages.filter((message) => chat.messages.includes(message.id))
})

export const useMessages = (chatId: string) =>
  useSuspenseQuery({
    queryKey: ['messages', { chatId }],
    queryFn: () => getMessages(chatId),
  })

export const searchMessages = cache(
  async (chatId: string, content?: string) => {
    if (!content) return []

    const messages = await getMessages(chatId)

    return messages.filter((message) =>
      message.content.toLowerCase().includes(content),
    )
  },
)

export const useSearchMessages = (chatId: string, content?: string) =>
  useSuspenseQuery({
    queryKey: ['messages', { chatId, content }],
    queryFn: () => searchMessages(chatId, content),
  })

export const getMessage = cache(async (messageId: string) => {
  const message = mockup.messages.find((message) => message.id === messageId)

  if (!message) {
    throw new Error(`Message not found with id "${messageId}"`)
  }

  return message
})

export const useMessage = (messageId: string) =>
  useSuspenseQuery({
    queryKey: ['message', messageId],
    queryFn: () => getMessage(messageId),
  })

export const createMessage = async (chatId: string, content: string) => {
  const chat = await getChat(chatId)

  const message: MessageInterface = {
    id: Math.random().toString(),
    chatId,
    content,
    writtenByMe: true,
    date: new Date().toString(),
  }

  // this should be an API call with server side validation of inputs
  mockup.messages.push(message)
  chat.messages.push(message.id)
  chat.lastMessage = message.id

  return message
}

export const useCreateMessage = (chatId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (content: string) => createMessage(chatId, content),
    onSuccess: async () => {
      // update message list
      await queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey[0] === 'messages',
      })

      // update chat list
      await queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey[0] === 'chats',
      })
    },
  })
}
