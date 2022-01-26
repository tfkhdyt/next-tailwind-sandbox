import { ReactNode } from 'react'

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className='bg-gradient-to-br from-slate-50 to-slate-200 rounded-md p-6 shadow-md w-full space-y-4'>
      {children}
    </div>
  )
}

export default Card
