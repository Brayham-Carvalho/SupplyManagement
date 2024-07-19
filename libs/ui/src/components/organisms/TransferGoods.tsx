'use client'
import { useState } from 'react'

import { useFormTransferInventory } from '@foundation/forms/src/transferInventory'
import { Label } from '../atoms/label'
import { Input } from '../atoms/input'

import {
  TransferInventoryDocument,
  WarehouseDetailsFragment,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { Button } from '../atoms/button'
import { fetchGraphQLClient } from '@foundation/network/src/fetch/client'
import { SimpleDialog } from '../molecules/SimpleDialog'
import { revalidate } from '@foundation/network/src/actions/revalidate'
import { Title2 } from '../atoms/typography'

export const TransferGoods = ({
  warehouseId,
  inventory,
}: {
  warehouseId: number
  inventory: WarehouseDetailsFragment['inventories'][0]
}) => {
  const { register, handleSubmit, reset } = useFormTransferInventory()
  const [close, setClose] = useState(false)

  return (
    <SimpleDialog
      close={close}
      buttonText={
        <div className=" hover:underline underline-offset-4">Transferir</div>
      }
    >
      <Title2>Produto: {inventory.product.name}</Title2>
      <Title2>Quantidade: {inventory.quantity}</Title2>
      <form
        onSubmit={handleSubmit(
          async ({ productId, quantity, fromWarehouseId, toWarehouseId }) => {
            const { data, error } = await fetchGraphQLClient({
              document: TransferInventoryDocument,
              variables: {
                fromWarehouseId,
                productId,
                quantity,
                toWarehouseId,
              },
            })

            if (data?.transferInventory) {
              revalidate(namedOperations.Query.myWarehouses)
            }
            if (error) {
              alert('Transferência falhou.')
            }

            setClose(true)
            reset()
          },
        )}
      >
        <Label title="Quantidade">
          <Input
            className="mb-3"
            {...register('quantity', { valueAsNumber: true })}
          />
        </Label>
        <Label title="ID do armazém (somente visuallização)">
          <Input
            className="mb-3"
            {...register('fromWarehouseId', { valueAsNumber: true })}
            readOnly
            value={warehouseId}
          />
        </Label>
        <Label title="ID do produto (somente visuallização)">
          <Input
            className="mb-3"
            {...register('productId', { valueAsNumber: true })}
            readOnly
            value={inventory.product.id}
          />
        </Label>
        <Label title="ID do Armazém de destino">
          <Input
            className="mb-3"
            {...register('toWarehouseId', { valueAsNumber: true })}
          />
        </Label>
        <Button type="submit">Salvar</Button>
      </form>
    </SimpleDialog>
  )
}
