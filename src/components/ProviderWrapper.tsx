'use client'
import { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'

export function ProviderWrapper({ children }: { children: React.ReactNode }) {
  const { state, dispatch } = useContext(GlobalContext)
  return (
    <>
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    </>
  )
}
