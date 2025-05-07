import mockup from '../../../data/mockup'

import ClubLogoSvg from '@/icons/club-logo.svg'

const LandingPage = () => {
  const { users, chats, messages } = mockup
  console.log({ users, chats, messages })

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <ClubLogoSvg className="fill-foreground w-[100px]" />
      </div>
    </>
  )
}

export default LandingPage
