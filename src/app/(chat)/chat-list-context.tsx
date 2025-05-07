'use client'

import ChatInterface from '@/types/chats'
import UserInterface from '@/types/users'
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react'

type ChatListContextProps = {
  chats: ChatInterface[]
  users: UserInterface[]
  searchChats: (query: string) => void
}

export const ChatListContext = createContext<ChatListContextProps | undefined>(
  undefined,
)

export type ChatListProviderProps = PropsWithChildren<{
  initalChats: ChatInterface[]
  users: UserInterface[]
}>

export const ChatListProvider = ({
  initalChats,
  users,
  children,
}: ChatListProviderProps) => {
  const [chats, setChats] = useState<ChatInterface[]>(initalChats)

  const searchChats = useCallback(
    (query: string) => {
      setChats(
        initalChats.filter((chat) =>
          users
            .filter((user) => user.name.toLowerCase().includes(query))
            .map((user) => user.id)
            .includes(chat.withUser),
        ),
      )
    },
    [initalChats],
  )

  return (
    <ChatListContext.Provider value={{ chats, users, searchChats }}>
      {children}
    </ChatListContext.Provider>
  )
}

export const useChat = () => {
  const context = useContext(ChatListContext)
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}
