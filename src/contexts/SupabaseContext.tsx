import React, { createContext, useContext, ReactNode } from 'react'

interface SupabaseContextType {
  supabase: any // In real app, this would be the Supabase client
  isConnected: boolean
}

const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined)

export const useSupabase = () => {
  const context = useContext(SupabaseContext)
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }
  return context
}

interface SupabaseProviderProps {
  children: ReactNode
}

export const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  // Mock Supabase connection for now
  const value = {
    supabase: null,
    isConnected: false
  }

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  )
}