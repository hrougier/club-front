import mockup from '../../data/mockup'

import ClubLogoSvg from '@/icons/club-logo.svg'

const LandingPage = () => {
  const { users, chats, messages } = mockup
  console.log({ users, chats, messages })

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-black">
        <ClubLogoSvg className="w-[100px]" />
        <p className="mt-[8px] text-[23px] text-white">takehome</p>
      </div>
    </>
  )
}

export default LandingPage
