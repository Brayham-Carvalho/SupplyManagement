import { fetchGraphQLClient } from '@foundation/network/src/fetch/client'
import {
  MyProductsDocument,
  SortOrder,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { useState, useEffect } from 'react'

type ProductOption = {
  id: number
  name: string
}

type ManufacturerProductsProps = {
  onSelect: (productId: number) => void
  manufacturerId: number
}

export const SelectProducts = ({
  onSelect,
  manufacturerId,
}: ManufacturerProductsProps) => {
  const [products, setProducts] = useState<ProductOption[] | undefined>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch products related to the manufacturer
    const fetchProducts = async () => {
      const { data } = await fetchGraphQLClient({
        document: MyProductsDocument,
        variables: { orderBy: { createdAt: SortOrder.Desc } },
        config: {
          next: {
            tags: [namedOperations.Query.myWarehouses],
          },
        },
      })

      setProducts(data?.myProducts)
      setIsLoading(false)
    }

    fetchProducts()
  }, [manufacturerId])

  if (isLoading) {
    return <p>Carregando Produtos...</p>
  }

  return (
    <select
      onChange={(event) => onSelect(Number(event.target.value))}
      className="w-full mb-3 px-3 py-2 border rounded border-input"
    >
      <option value="">Selecione um produto...</option>
      {products?.map((product) => (
        <option key={product.id} value={product.id}>
          {product.name}
        </option>
      ))}
    </select>
  )
}
