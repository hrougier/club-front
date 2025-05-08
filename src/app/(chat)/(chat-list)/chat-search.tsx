'use client'

import { Input } from '@/components/ui/input'
import { ChangeEventHandler, useCallback } from 'react'
import { useChatList } from './chat-list-provider'

export const ChatSearch = () => {
  const { username, setUsername } = useChatList()

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => setUsername(e.target.value),
    [],
  )

  return (
    <Input
      type="search"
      className="h-8 rounded-2xl"
      placeholder="Search a person"
      value={username}
      onChange={handleChange}
    />
  )
}
