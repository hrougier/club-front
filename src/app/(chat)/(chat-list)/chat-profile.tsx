'use client'

import { useChats } from '@/api/chats'
import { MyAvatar } from '@/components/my-avatar'

export const ChatProfile = () => {
  const { data: chats } = useChats()

  return (
    <div className="flex items-center justify-between">
      <MyAvatar className="size-10" />
      <span className="text-sm">{chats.length} chats</span>
    </div>
  )
}
