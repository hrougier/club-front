'use client'

import { Input } from '@/components/ui/input'
import { ChangeEvent, useEffect, useState } from 'react'
import { useChat } from './chat-list-context'

export const ChatSearch = () => {
  const { searchChats } = useChat()
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    searchChats(value)
  }, [value])

  return (
    <Input
      className="h-8 rounded-2xl"
      placeholder="Search a person"
      value={value}
      onChange={handleChange}
    />
  )
}
