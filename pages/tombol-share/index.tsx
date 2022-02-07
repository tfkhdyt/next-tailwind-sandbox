import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'

interface IButtonProps {
  bgColor?: string
  shadowColor?: string
  label: string
  icon: ReactNode
  onClick?: undefined | (() => void)
  disabled?: boolean
}

const Button = ({
  bgColor = 'bg-blue-400',
  shadowColor = 'shadow-blue-600/75',
  label,
  icon,
  onClick = undefined,
  disabled,
}: IButtonProps) => {
  return (
    <button
      className={`${bgColor} flex items-center justify-between gap-1 rounded-full px-4 py-2 font-bold text-white shadow-md ${shadowColor} transition duration-500 ease-in-out hover:brightness-90 active:scale-90 disabled:brightness-75`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <p>{label}</p>
    </button>
  )
}

const App = () => {
  const [isShared, setIsShared] = useState<boolean>(false)
  const router = useRouter()

  const handleShare = () => {
    setIsShared(true)
    router.push('whatsapp://send?text=Hello, world!')
  }

  const handleDownload = () => {
    router.push(
      'https://mega.nz/file/mx9miYZQ#ymqfuvyNenChuWKHQ5k0OJyfeD2fDuVkaZiobzRQuLY'
    )
  }

  return (
    <div className='grid min-h-screen place-items-center p-4'>
      <div className='flex gap-2 '>
        <Button
          bgColor='bg-green-500'
          shadowColor='shadow-green-500/50'
          label='Share'
          icon={icon.whatsApp}
          onClick={handleShare}
        />
        <Button
          bgColor='bg-blue-500'
          shadowColor='shadow-blue-500/50'
          label='Download'
          icon={icon.download}
          disabled={isShared ? false : true}
          onClick={handleDownload}
        />
      </div>
    </div>
  )
}

const icon = {
  whatsApp: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      className='fill-white'
    >
      <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
    </svg>
  ),
  download: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 24 24'
      className='fill-white'
    >
      <path d='M7 2v-2h10v2h-10zm0 4h10v-2h-10v2zm10 7v-5h-10v5h-6l11 11 11-11h-6z' />
    </svg>
  ),
}

export default App
