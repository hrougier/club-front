import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { PropsWithChildren } from 'react'

import { ChatSidebar } from './chat-sidebar'

const ChatLayout = ({ children }: PropsWithChildren) => (
  <SidebarProvider>
    <ChatSidebar />
    <SidebarInset>{children}</SidebarInset>
  </SidebarProvider>
)

export default ChatLayout
