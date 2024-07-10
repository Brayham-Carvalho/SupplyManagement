'use client'
import { useEffect, useState } from 'react'
import { createRetailer } from '@foundation/network/src/actions/createRetailer'

export const CreateRetailerAccount = ({ uid }: { uid: string }) => {
  const [isCreating, setIsCreating] = useState(true)

  useEffect(() => {
    const createAccount = async () => {
      try {
        await createRetailer({ uid })
      } finally {
        setIsCreating(false)
      }
    }

    if (uid) {
      createAccount()
    }
  }, [uid])

  if (isCreating) {
    return <div>Criando Cadastro de Varejista...</div>
  }

  return null
}
