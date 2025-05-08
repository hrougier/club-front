import { ApiProvider } from '@/api/api-provider'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { PropsWithChildren } from 'react'
import { ChatSidebar } from './(chat-list)/chat-sidebar'

const ChatLayout = ({ children }: PropsWithChildren) => (
  <ApiProvider>
    <SidebarProvider>
      <ChatSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  </ApiProvider>
)

export default ChatLayout
