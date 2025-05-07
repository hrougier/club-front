import { notFound } from 'next/navigation'
import { cache } from 'react'

import mockup from '../../data/mockup'

export const findChat = cache((chatId: string) => {
  const chat = mockup.chats.find((chat) => chat.id === chatId)
  if (!chat) notFound()
  return chat
})

export const findChats = cache(() => mockup.chats)
