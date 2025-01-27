'use server'

import { formSchemaUpsertInventory } from '@foundation/forms/src/schemas'

import { revalidateTag } from 'next/cache'

// Removida a importação não utilizada 'redirect'

import { fetchGraphQLServer } from '../fetch/server'
import { getAuth } from '../auth/authOptions'
import { FormTypeUpsertInventory } from '@foundation/forms/src/upsertInventory'
import { CreateInventoryDocument, namedOperations } from '../queries/generated'

export async function upsertInventory(formData: FormTypeUpsertInventory) {
  const result = formSchemaUpsertInventory.safeParse(formData)
  const user = await getAuth()
  if (!user?.user?.uid) {
    throw new Error('Você não está logado.')
  }
  if (result.success) {
    const { productId, quantity, warehouseId } = result.data

    const { data, error } = await fetchGraphQLServer({
      document: CreateInventoryDocument,
      variables: {
        createInventoryInput: {
          productId,
          quantity,
          warehouseId,
        },
      },
    })

    if (data?.createInventory) {
      revalidateTag(namedOperations.Query.myWarehouses)
    }
    if (error) {
      throw new Error('Algo deu errado.')
    }
  } else {
    console.log(
      'result.error.flatten().fieldErrors',
      result.error.flatten().fieldErrors,
    )
    return { error: JSON.stringify(result.error.flatten().fieldErrors) }
  }
}
