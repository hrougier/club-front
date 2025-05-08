'use client'

import { createContext, PropsWithChildren, use, useState } from 'react'

type ChatContextProps = {
  selectedMessageId: string
  setSelectedMessageId: (messageId: string) => void
}

export const ChatContext = createContext<ChatContextProps | undefined>(
  undefined,
)

export const ChatProvider = ({ children }: PropsWithChildren) => {
  const [selectedMessageId, setSelectedMessageId] = useState<string>('')

  return (
    <ChatContext value={{ selectedMessageId, setSelectedMessageId }}>
      {children}
    </ChatContext>
  )
}

export const useChatContext = () => {
  const context = use(ChatContext)

  if (!context) {
    throw new Error('useChat must be used within a ChatProvider')
  }

  return context
}
