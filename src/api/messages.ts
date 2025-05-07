import { notFound } from 'next/navigation'
import { cache } from 'react'

import mockup from '../../data/mockup'

export const findMessage = cache((messageId: string) => {
  const message = mockup.messages.find((message) => message.id === messageId)
  if (!message) notFound()
  return message
})

export const findMessages = cache((messageIds: string[]) => {
  return messageIds.map(
    (messageId) => mockup.messages.find((message) => message.id === messageId)!,
  )
})
