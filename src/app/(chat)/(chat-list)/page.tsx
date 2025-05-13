import { getChats } from '@/api/chats'
import ClubLogoSvg from '@/icons/club-logo.svg'
import { redirect } from 'next/navigation'

const ChatListPage = async () => {
  const chats = await getChats()

  if (chats.length) {
    redirect(`/${chats[0].id}`)
  }

  return (
    <div className="flex h-[100dvh] w-full flex-col items-center justify-center">
      <ClubLogoSvg className="fill-foreground w-[100px]" />
    </div>
  )
}

export default ChatListPage
