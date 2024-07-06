import { Heart } from 'lucide-react'
import Link from 'next/link'
import { cn } from '../../util'
import { BaseComponent } from '@foundation/util/types'

export interface IDeveloperInfoProps extends BaseComponent {}

export const DeveloperInfo = ({ className }: IDeveloperInfoProps) => {
  return (
    <Link
      href="https://github.com/Brayham-Carvalho"
      target="_blank"
      className={cn('text-xs group ', className)}
    >
      <div className="flex items-center gap-1 group-hover:underline underline-offset-4">
        Desenvolvido por
        <Heart
          className={`inline w-3 h-3 group-hover:fill-red-600 group-hover:w-4 group-hover:h-4 transition-none`}
        />
        Brayham Carvalho
      </div>
    </Link>
  )
}
