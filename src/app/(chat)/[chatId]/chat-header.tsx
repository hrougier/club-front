import { findChat } from '@/api/chat'
import { findUser } from '@/api/users'
import { UserAvatar } from '@/components/user-avatar'

export type ChatHeaderProps = {
  chatId: string
}

export const ChatHeader = ({ chatId }: ChatHeaderProps) => {
  const chat = findChat(chatId)
  const user = findUser(chat.withUser)

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <UserAvatar className="size-10" user={user} isActive={chat.isActive} />
      <h2 className="text-lg">{user.name}</h2>
    </header>
  )
}
