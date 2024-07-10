import {
  ManufacturerDocument,
  namedOperations,
} from '@foundation/network/src/queries/generated'
import { fetchGraphQLServer } from '@foundation/network/src/fetch/server'
import { ManufacturerDashboard } from '@foundation/ui/src/components/organisms/ManufacturerDashboard'
import { getAuth } from '@foundation/network/src/auth/authOptions'
import Link from 'next/link'

export default async function EmployerPage() {
  const user = await getAuth()

  if (!user?.user?.uid) {
    return <Link href="/api/auth/signin">Login</Link>
  }
  // Passar dados entre um layout pai e seus filhos não é possível. No entanto, você pode buscar os mesmos dados em uma rota mais de uma vez, e o React irá automaticamente eliminar as duplicatas das requisições sem afetar o desempenho.
  const { data, error } = await fetchGraphQLServer({
    document: ManufacturerDocument,
    variables: { where: { uid: user.user.uid } },
    config: {
      next: {
        tags: [namedOperations.Query.Manufacturer],
      },
    },
  })

  console.log(data, error)

  if (!data?.manufacturer) {
    // Esta condição tecnicamente não deveria acontecer, pois verificamos isso no arquivo de layout. Mas, no momento, não há como passar os dados buscados no layout para a página.
    return <div>Conta do fabricante não encontrada.</div>
  }

  return <ManufacturerDashboard manufacturer={data.manufacturer} />
}
