'use client'
import { useContext, useReducer } from 'react'
import { GlobalContext, initialContext } from '../context/GlobalContext'
import { Reducer } from '../context/Reducer'

export function ProviderWrapper({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(Reducer, initialContext)
  return (
    <>
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    </>
  )
}
