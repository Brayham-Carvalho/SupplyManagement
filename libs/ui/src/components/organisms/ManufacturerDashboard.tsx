import { ManufacturerQuery } from '@foundation/network/src/queries/generated'
import { StatCard } from '../molecules/StatCard'

export const ManufacturerDashboard = ({ manufacturer }: ManufacturerQuery) => {
  return (
    <div>
      Dashboard
      <div>{manufacturer?.uid}</div>
      <div className="flex gap-2 mt-4">
        <StatCard
          title={'Produtos'}
          count={manufacturer?.products.length}
          href={'/manufacturer/products'}
        />
        <StatCard
          title={'Armazéns'}
          href={'/manufacturer/warehouses'}
          count={manufacturer?.warehouses.length}
        />
      </div>
    </div>
  )
}
