import { ChatHeader } from './chat-header'
import { ChatPanel } from './chat-panel'
import { MessageList } from './message-list'

type ChatPageProps = {
  params: Promise<{
    chatId: string
  }>
}

const ChatPage = async ({ params }: ChatPageProps) => {
  const { chatId } = await params

  return (
    <div className="flex h-screen">
      <div className="flex flex-1 flex-col">
        <ChatHeader chatId={chatId} />
        <MessageList chatId={chatId} />
      </div>
      <ChatPanel chatId={chatId} />
    </div>
  )
}

export default ChatPage
