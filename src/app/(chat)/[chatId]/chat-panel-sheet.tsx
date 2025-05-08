'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useIsMobile } from '@/hooks/use-mobile'
import { PanelRightIcon } from 'lucide-react'
import { ComponentProps, useEffect, useState } from 'react'
import { ChatPanel } from './chat-panel'

export type ChatPanelSheetProps = ComponentProps<typeof SheetTrigger>

export const ChatPanelSheet = (props: ChatPanelSheetProps) => {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile(1024)

  useEffect(() => {
    if (!isMobile) setOpen(false)
  }, [isMobile])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild {...props}>
        <Button className="size-7" variant="ghost" size="icon">
          <PanelRightIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="sr-only">
          <SheetTitle>Chat panel</SheetTitle>
          <SheetDescription>Chat panel</SheetDescription>
        </SheetHeader>
        <ChatPanel className="w-full" />
      </SheetContent>
    </Sheet>
  )
}
