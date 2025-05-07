'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserAvatar } from '@/components/user-avatar'
import { cn } from '@/lib/utils'
import MessageInterface from '@/types/messages'
import UserInterface from '@/types/users'
import { SendIcon } from 'lucide-react'
import { useActionState } from 'react'
import { sendMessage } from './actions'

export type MessageFormProps = {
  chatId: string
  user: UserInterface
  messages: MessageInterface[]
}

const me: UserInterface = {
  id: 'me',
  name: 'Me',
  profilePicture: 'https://media.graphcms.com/CM4PT4FQKudqg2ehLnRE',
}

export const MessageForm = ({ chatId, messages, user }: MessageFormProps) => {
  const [state, formAction, pending] = useActionState(sendMessage, { messages })

  return (
    <form
      className="relative flex min-h-0 flex-1 flex-col overflow-hidden"
      action={formAction}
    >
      <div className="flex-1 space-y-2 overflow-y-auto px-6 py-4">
        {state.messages.map(({ id, content, writtenByMe }) => (
          <div key={id} className="flex items-center gap-2">
            {!writtenByMe && <UserAvatar user={user} />}
            <div
              className={cn('max-w-xs rounded-lg p-2', {
                'bg-secondary': !writtenByMe,
                'bg-primary text-background ml-auto': writtenByMe,
              })}
            >
              {content}
            </div>
            {writtenByMe && <UserAvatar user={me} />}
          </div>
        ))}
      </div>
      <div className="flex flex-none gap-2 p-2">
        <Input name="content" placeholder="Type your message..." />
        <Button size="icon" disabled={pending}>
          <SendIcon />
        </Button>
      </div>
      <input type="hidden" name="chatId" value={chatId} />
    </form>
  )
}
