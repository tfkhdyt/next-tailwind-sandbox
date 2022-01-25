const Header = ({ title }: { title: string }) => {
  return (
    <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text mb-2 text-center'>
      {title}
    </h1>
  )
}

export default Header
