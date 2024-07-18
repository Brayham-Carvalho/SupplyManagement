'use client'
import { useState } from 'react'

import { useFormSellInventory } from '@foundation/forms/src/sellInventory'
import { Label } from '../atoms/label'
import { Input } from '../atoms/input'
import {
  MyWarehousesQuery,
  ReduceInventoryDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { Button } from '../atoms/button'
import { SimpleDialog } from '../molecules/SimpleDialog'
import { fetchGraphQLClient } from '@foundation/network/src/fetch/client'
import { revalidate } from '@foundation/network/src/actions/revalidate'
import { Title2 } from '../atoms/typography'

export const SellGoods = ({
  warehouseId,
  inventory,
}: {
  warehouseId: number
  inventory: MyWarehousesQuery['myWarehouses'][0]['inventories'][0]
}) => {
  const { register, handleSubmit, reset } = useFormSellInventory()
  const [close, setClose] = useState(false)

  return (
    <SimpleDialog
      close={close}
      buttonText={
        <div className=" hover:underline underline-offset-4">Vender</div>
      }
    >
      <Title2>{inventory.product.name}</Title2>
      <Title2>{inventory.quantity}</Title2>
      <form
        onSubmit={handleSubmit(async ({ productId, quantity, warehouseId }) => {
          const { data, error } = await fetchGraphQLClient({
            document: ReduceInventoryDocument,
            variables: {
              warehouseId,
              productId,
              quantity,
            },
          })

          if (data) {
            revalidate(namedOperations.Query.myWarehouses)
          }
          if (error) {
            alert('A venda de produtos falhou.')
          }

          setClose(true)
          reset()
        })}
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
            {...register('warehouseId', { valueAsNumber: true })}
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
        <Button type="submit">Salvar</Button>
      </form>
    </SimpleDialog>
  )
}
