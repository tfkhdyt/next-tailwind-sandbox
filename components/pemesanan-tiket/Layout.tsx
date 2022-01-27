import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className='mx-auto p-6 md:max-w-4xl'>{children}</div>
}

export default Layout
