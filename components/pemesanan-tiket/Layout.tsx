import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='p-6 md:max-w-4xl mx-auto'>
      {children}
    </div>
  )
}

export default Layout
