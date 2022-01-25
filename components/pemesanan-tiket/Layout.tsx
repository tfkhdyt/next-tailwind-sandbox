import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='m-4 md:max-w-md'>
      {children}
    </div>
  )
}

export default Layout
