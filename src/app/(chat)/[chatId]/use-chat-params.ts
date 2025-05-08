import { useParams } from 'next/navigation'

export const useChatParams = () => useParams<{ chatId: string }>()
