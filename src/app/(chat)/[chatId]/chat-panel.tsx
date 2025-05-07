import { findChat } from '@/api/chat'
import { findUser } from '@/api/users'
import { Input } from '@/components/ui/input'
import { UserAvatar } from '@/components/user-avatar'

export type ChatPanelProps = {
  chatId: string
}

export const ChatPanel = ({ chatId }: ChatPanelProps) => {
  const chat = findChat(chatId)
  const user = findUser(chat.withUser)

  return (
    <aside className="md:flex bg-background hidden h-screen w-[300px] flex-col items-center border-l p-4">
      <UserAvatar className="size-16" user={user} isActive={chat.isActive} />
      <h3 className="mt-2 line-clamp-1 font-semibold">{user.name}</h3>
      <Input
        type="text"
        placeholder="Search a message"
        className="mt-4 w-full rounded-2xl border p-2"
        disabled
      />
    </aside>
  )
}
