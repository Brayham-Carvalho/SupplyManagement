import { RetailerQuery } from '@foundation/network/src/queries/generated'
import { StatCard } from '../molecules/StatCard'

export const RetailerDashboard = ({ retailer }: RetailerQuery) => {
  return (
    <div>
      Dashboard
      <div>{retailer?.uid}</div>
      <div className="flex gap-2 mt-4">
        <StatCard
          title={'Armazéns'}
          href={'/retailer/warehouses'}
          count={retailer?.warehouses.length}
        />
      </div>
    </div>
  )
}
