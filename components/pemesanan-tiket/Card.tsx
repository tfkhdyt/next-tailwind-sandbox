import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{
        duration: 0.5,
      }}
      className='h-fit w-full space-y-4 rounded-md bg-gradient-to-br from-slate-50 to-slate-200 p-6 shadow-md'
    >
      {children}
    </motion.div>
  )
}

export default Card
