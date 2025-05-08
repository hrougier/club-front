'use client'

import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from '@tanstack/react-query'

const apiProvider = new QueryClient()

export type ApiProviderProps = Omit<QueryClientProviderProps, 'client'>

export const ApiProvider = (props: ApiProviderProps) => (
  <QueryClientProvider client={apiProvider} {...props} />
)
