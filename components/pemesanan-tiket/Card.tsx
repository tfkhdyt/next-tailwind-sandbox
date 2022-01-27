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
      className='bg-gradient-to-br from-slate-50 to-slate-200 rounded-md p-6 shadow-md w-full space-y-4 h-fit'
    >
      {children}
    </motion.div>
  )
}

export default Card
