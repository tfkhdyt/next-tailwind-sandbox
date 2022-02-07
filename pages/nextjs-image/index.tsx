import Image from 'next/image'

interface IImageInfo {
  src: string
  label: string
}

const ImageInfo = ({ src, label }: IImageInfo) => (
  <div className='fade group relative grid aspect-video w-72 place-items-center rounded-xl hover:shadow-md hover:shadow-gray-800/50'>
    <Image src={src} layout='fill' objectFit='cover' className='rounded-xl' />
    <div className='absolute grid h-full w-full place-items-center rounded-xl bg-white/75 opacity-0 transition duration-500 group-hover:opacity-100'>
      <div className='flex flex-col items-center gap-1'>
        <p className='text-lg font-bold transition duration-500'>{label}</p>
        <button className='w-fit rounded bg-gradient-to-br from-blue-400 to-blue-600 px-2 py-1 text-sm font-semibold text-white transition duration-500'>
          Buka
        </button>
      </div>
    </div>
  </div>
)

const NextjsImage = () => (
  <div className='flex w-screen justify-center p-4'>
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      <ImageInfo
        label='Full Stack Roadmap'
        src='https://raw.githubusercontent.com/tfkhdyt/full-stack-roadmap/main/images/main-page.png'
      />
      <ImageInfo
        label='Popowi'
        src='https://raw.githubusercontent.com/tfkhdyt/full-stack-roadmap/main/images/main-page.png'
      />
    </div>
  </div>
)

export default NextjsImage
