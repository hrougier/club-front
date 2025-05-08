import { useMe } from '@/api/users'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ComponentProps } from 'react'

export type MyAvatarProps = ComponentProps<typeof Avatar>

export const MyAvatar = (props: MyAvatarProps) => {
  const { data: me } = useMe()

  return (
    <Avatar {...props}>
      <AvatarImage src={me.profilePicture} alt={me.name} />
      <AvatarFallback>{me.name.substring(0, 1)}</AvatarFallback>
    </Avatar>
  )
}
