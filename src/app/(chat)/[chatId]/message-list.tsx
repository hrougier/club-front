import { findChat } from '@/api/chat'
import { findMessages } from '@/api/messages'
import { findUser } from '@/api/users'
import { MessageForm } from './message-form'

export type MessageListProps = {
  chatId: string
}

export const MessageList = ({ chatId }: MessageListProps) => {
  const chat = findChat(chatId)
  const user = findUser(chat.withUser)
  const messages = findMessages(chat.messages)

  return <MessageForm chatId={chatId} user={user} messages={messages} />
}
