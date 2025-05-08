import { useSuspenseQuery } from '@tanstack/react-query'
import { cache } from 'react'

import mockup from './data/mockup'

// User Interface
export interface UserInterface {
  id: string
  // Name of the user
  name: string
  // url of the profilePicture
  profilePicture: string
}

export const getUsers = cache(async () => mockup.users)

export const useUsers = () =>
  useSuspenseQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

export const getUser = cache(async (userId: string) => {
  const user = mockup.users.find((user) => user.id === userId)

  if (!user) {
    throw new Error('User not found')
  }

  return user
})

export const useUser = (userId: string) =>
  useSuspenseQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
  })

export const getMe = cache(
  async () =>
    ({
      id: 'me',
      name: 'Me',
      profilePicture: 'https://media.graphcms.com/CM4PT4FQKudqg2ehLnRE',
    }) as UserInterface,
)

export const useMe = () =>
  useSuspenseQuery({
    queryKey: ['user', 'me'],
    queryFn: getMe,
  })
