'use client'

import { createContext, PropsWithChildren, use, useState } from 'react'

type ChatListContextProps = {
  username: string
  setUsername: (username: string) => void
}

export const ChatListContext = createContext<ChatListContextProps | undefined>(
  undefined,
)

export const ChatListProvider = ({ children }: PropsWithChildren) => {
  const [username, setUsername] = useState<string>('')

  return (
    <ChatListContext value={{ username, setUsername }}>
      {children}
    </ChatListContext>
  )
}

export const useChatList = () => {
  const context = use(ChatListContext)

  if (!context) {
    throw new Error('useChatList must be used within a ChatListProvider')
  }

  return context
}
