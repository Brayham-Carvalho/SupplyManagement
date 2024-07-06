'use server'

import { revalidateTag } from 'next/cache'
import { fetchGraphQLServer } from '../fetch/server'
import {
  CreateManufacturerDocument,
  namedOperations,
} from '../queries/generated'

export async function createManufacturer({ uid }: { uid: string }) {
  const { data, error } = await fetchGraphQLServer({
    document: CreateManufacturerDocument,
    variables: {
      createManufacturerInput: { uid },
    },
  })

  // Verifica se a operação foi bem-sucedida
  if (data?.createManufacturer) {
    revalidateTag(namedOperations.Query.Manufacturer)
  } else if (error) {
    console.error('Erro ao criar fabricante:', error)
    // Aqui você pode adicionar mais lógica de tratamento de erro conforme necessário
  }
}
