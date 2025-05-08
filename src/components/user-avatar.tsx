'use client'

import { useUser } from '@/api/users'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ComponentProps } from 'react'

export type UserAvatarProps = ComponentProps<typeof Avatar> & {
  userId: string
  isActive?: boolean
}

export const UserAvatar = ({ userId, isActive, ...props }: UserAvatarProps) => {
  const { data: user } = useUser(userId)

  return (
    <div className="relative">
      <Avatar {...props}>
        <AvatarImage src={user.profilePicture} alt={user.name} />
        <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
      </Avatar>
      {isActive && (
        <span className="bg-accent absolute bottom-0 right-0 size-2 rounded-full ring-2 ring-white" />
      )}
    </div>
  )
}
