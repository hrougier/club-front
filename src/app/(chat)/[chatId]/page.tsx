import { ChatHeader } from './chat-header'
import { ChatPanel } from './chat-panel'
import { ChatProvider } from './chat-provider'
import { MessageList } from './message-list'

const ChatPage = () => (
  <div className="flex h-screen">
    <ChatProvider>
      <div className="flex flex-1 flex-col">
        <ChatHeader className="sticky top-0 z-10" />
        <MessageList />
      </div>
      <ChatPanel className="lg:flex hidden" />
    </ChatProvider>
  </div>
)

export default ChatPage
