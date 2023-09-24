'use client'
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

type ProviderProps = {
  children: ReactNode
}

const SessionProviderContext = (props: ProviderProps) => {
  return (
    <SessionProvider>
      {props.children}
    </SessionProvider>
  )
}

export default SessionProviderContext