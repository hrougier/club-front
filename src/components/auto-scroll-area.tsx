'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { ComponentProps, useEffect, useRef, useState } from 'react'

export type AutoScrollAreaProps = ComponentProps<typeof ScrollArea>

export const AutoScrollArea = (props: AutoScrollAreaProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)

    const element = ref.current
    if (!element) return

    const scrollToBottom = () => {
      element.scrollTop = element.scrollHeight
    }

    // initial scroll
    scrollToBottom()

    // listen to changes
    const observer = new MutationObserver(scrollToBottom)

    observer.observe(element, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    return () => observer.disconnect()
  }, [ref.current?.scrollHeight])

  return (
    <ScrollArea
      ref={ref}
      style={{ visibility: hydrated ? 'visible' : 'hidden', ...props.style }}
      {...props}
    />
  )
}
