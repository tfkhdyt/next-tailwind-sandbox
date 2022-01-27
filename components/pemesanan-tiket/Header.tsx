const Header = ({ title }: { title: string }) => {
  return (
    <h1 className='mb-2 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-center text-xl font-bold text-transparent md:text-2xl'>
      {title}
    </h1>
  )
}

export default Header
