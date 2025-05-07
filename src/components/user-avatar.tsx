import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import UserInterface from '@/types/users'
import { ComponentProps } from 'react'

export type UserAvatarProps = ComponentProps<typeof Avatar> & {
  user: UserInterface
  isActive?: boolean
}

export const UserAvatar = ({ user, isActive, ...props }: UserAvatarProps) => (
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
