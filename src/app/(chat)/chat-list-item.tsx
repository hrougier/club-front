import { findMessage } from '@/api/messages'
import { findUser } from '@/api/users'
import { UserAvatar } from '@/components/user-avatar'
import { formatRelativeShortDate } from '@/lib/utils'
import Link from 'next/link'

export type ChatListItemProps = {
  id: string
  withUser: string
  isActive: boolean
  lastMessage: string
}

export const ChatListItem = ({
  id,
  withUser,
  isActive,
  lastMessage,
}: ChatListItemProps) => {
  const user = findUser(withUser)
  const message = findMessage(lastMessage)

  return (
    <Link
      key={id}
      className={`flex w-full items-center gap-4 rounded-lg p-2 text-left`}
      href={`/${id}`}
    >
      <UserAvatar className="size-10" user={user} isActive={isActive} />
      <div className="flex flex-1 gap-6">
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col">
            <p className="line-clamp-1 font-medium">{user.name}</p>
            <p className="text-muted-foreground line-clamp-1 text-sm">
              {message.content}
            </p>
          </div>
        </div>
        <span className="text-muted-foreground self-end truncate text-xs">
          {formatRelativeShortDate(message.date)}
        </span>
      </div>
    </Link>
  )
}
