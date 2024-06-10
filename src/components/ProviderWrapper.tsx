'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { UserContext } from '../reducers/userContext'
import { useContext } from 'react'

export function ProviderWrapper({ children }: { children: React.ReactNode }) {
  const { user, setUser } = useContext(UserContext)
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  )
}
