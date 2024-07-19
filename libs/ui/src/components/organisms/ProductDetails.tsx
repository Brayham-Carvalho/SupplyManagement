import { ProductQuery } from '@foundation/network/src/queries/generated'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Description, Title } from '../atoms/typography'

export const ProductDetails = ({
  product,
}: {
  product: ProductQuery['product']
}) => {
  return (
    <div>
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      <Description>
        {format(new Date(product.createdAt), 'PPp', {
          locale: ptBR,
        })}
      </Description>
    </div>
  )
}
