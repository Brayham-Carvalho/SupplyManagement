import { MyWarehousesQuery } from '@foundation/network/src/queries/generated'

import { UpsertInventory } from '../organisms/UpsertInventory'
import { TransactionsTable } from '../organisms/TransactionsTable'
import { InventoryCard } from '../organisms/InventoryCard'
import { WarehouseDetails } from '../organisms/WarehouseDetails'
import { Title2 } from '../atoms/typography'

type WarehouseProps = {
  warehouse: MyWarehousesQuery['myWarehouses'][0]
  showUpsertInventory?: boolean
}

export const Warehouse = ({
  warehouse,
  showUpsertInventory = false,
}: WarehouseProps) => {
  return (
    <div className="space-y-8">
      <WarehouseDetails warehouse={warehouse} />

      <div>
        <div className="flex items-center gap-2 mt-4 mb-4 ">
          <div className="font-semibold">Catálogo</div>
          {showUpsertInventory ? (
            <UpsertInventory warehouse={warehouse} />
          ) : null}
        </div>
        {warehouse.inventories.length === 0 ? <div>Vazio.</div> : null}
        <div className="flex flex-wrap gap-4">
          {warehouse.inventories.map((inventory) => (
            <InventoryCard
              inventory={inventory}
              key={inventory.product.id}
              warehouseId={warehouse.id}
            />
          ))}
        </div>
      </div>
      {warehouse.ins.length ? (
        <div>
          <Title2>Entradas</Title2>
          <TransactionsTable transactions={warehouse.ins} />
        </div>
      ) : null}
      {warehouse.outs.length ? (
        <div>
          <Title2>Saídas</Title2>
          <TransactionsTable transactions={warehouse.outs} />
        </div>
      ) : null}
    </div>
  )
}
