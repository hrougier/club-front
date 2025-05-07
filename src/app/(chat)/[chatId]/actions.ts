'use server'

import { findChat } from '@/api/chat'
import MessageInterface from '@/types/messages'

export const sendMessage = async (
  { messages }: { messages: MessageInterface[] },
  formData: FormData,
) => {
  const chatId = formData.get('chatId') as string

  const chat = findChat(chatId)

  if (!chat) {
    throw new Error('Chat not found')
  }

  const content = formData.get('content') as string
  const message: MessageInterface = {
    id: Math.random().toString(),
    chatId,
    content,
    date: new Date().toString(),
    writtenByMe: true,
  }

  return { messages: [...messages, message] }
}
