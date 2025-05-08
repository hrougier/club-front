'use client'

import { SidebarMenuButton, useSidebar } from '@/components/ui/sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

export type SidebarMenuLinkProps = ComponentProps<typeof Link> & {
  exact?: boolean
}

export const SidebarMenuLink = ({ exact, ...props }: SidebarMenuLinkProps) => {
  // active link
  const pathname = usePathname()
  const href = typeof props.href === 'string' ? props.href : props.href.href
  const isActive = Boolean(
    href &&
      (href === '/' || exact ? href === pathname : pathname.startsWith(href)),
  )

  // close on click
  const { setOpenMobile } = useSidebar()

  return (
    <SidebarMenuButton isActive={isActive} asChild>
      <Link
        {...props}
        onClick={(...args) => {
          setOpenMobile(false)
          props.onClick?.(...args)
        }}
      />
    </SidebarMenuButton>
  )
}
