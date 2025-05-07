import { notFound } from 'next/navigation'
import { cache } from 'react'

import mockup from '../../data/mockup'

export const findUser = cache((userId: string) => {
  const user = mockup.users.find((user) => user.id === userId)
  if (!user) notFound()
  return user
})

export const findUsers = cache(() => mockup.users)
