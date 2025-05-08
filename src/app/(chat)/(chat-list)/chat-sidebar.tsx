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
import { ChatList } from './chat-list'
import { ChatListProvider } from './chat-list-provider'
import { ChatProfile } from './chat-profile'
import { ChatSearch } from './chat-search'

export const ChatSidebar = () => (
  <Sidebar>
    <ChatListProvider>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex h-12 items-center justify-center">
            <ClubLogoSvg className="fill-foreground h-7" />
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="flex flex-col gap-2">
          <ChatProfile />
          <ChatSearch />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="gap-1">
          <ChatList />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </ChatListProvider>
  </Sidebar>
)
