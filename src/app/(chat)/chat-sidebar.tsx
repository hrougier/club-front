import { findChats } from '@/api/chat'
import { findUsers } from '@/api/users'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ChatList } from './chat-list'
import { ChatListProvider } from './chat-list-context'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import ClubLogoSvg from '@/icons/club-logo.svg'
import { ChatSearch } from './chat-search'

export const ChatSidebar = async () => {
  const chats = findChats()
  const users = findUsers()

  return (
    <ChatListProvider initalChats={chats} users={users}>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem className="flex h-10 justify-center">
              <ClubLogoSvg className="fill-foreground w-28" />
            </SidebarMenuItem>
          </SidebarMenu>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Avatar className="size-10">
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <span className="text-sm">7 chats</span>
            </div>
            <ChatSearch />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <ChatList />
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </ChatListProvider>
  )
}
