import { Factory, Store, Warehouse } from 'lucide-react'
import { HeroLink } from '../molecules/HeroLink'
import Link from 'next/link'
import { buttonVariants } from '../../util/variants'

export const HeroBanner = () => {
  return (
    <div className="flex h-screen mt-32 ">
      <div>
        <h1 className="max-w-xl mb-4 text-5xl">
          Agilizando sua <span className="">Cadeia de Suprimentos</span>
        </h1>
        <p className="max-w-md mb-8 text-xl">
          Conecte, colabore e otimize sua cadeia de suprimentos
        </p>
        <div className="flex gap-4 my-4">
          <HeroLink Icon={Factory} url={'/manufacturer'}>
            Fabricante
          </HeroLink>
          <HeroLink Icon={Warehouse} url={'/distributor'}>
            Distribuidora
          </HeroLink>
          <HeroLink Icon={Store} url={'/retailer'}>
            Varejista
          </HeroLink>
        </div>
        <Link
          href="/register"
          className={buttonVariants({ variant: 'outline' })}
        >
          Registre-se
        </Link>
      </div>
    </div>
  )
}
