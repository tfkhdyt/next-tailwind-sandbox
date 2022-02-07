import { useState } from 'react'

const GridLayout = () => {
  const createPattern = (length: number) => {
    const pattern: number[] = []
    let x = true
    for (let y = 1; y <= length; y++) {
      if (x) pattern.push(y)
      if (y % 2 == 0) x = !x
    }
    return pattern
  }
  const nama: string[] = [
    'Taufik',
    'Doni',
    'Akmal',
    'Ridwan',
    'Rafli',
    'Fajri',
    'Finu',
    'Dava',
  ]
  const [pattern] = useState<number[]>(createPattern(nama.length))
  return (
    <div className='container mx-auto w-screen md:py-6 md:px-24 p-4'>
      <div className='grid grid-cols-2 gap-4'>
        {nama.map((value, index) => (
          <div
            className={`grid place-items-center border-2 ${
              pattern.includes(index + 1) ? 'col-span-2 h-36' : 'h-52'
            } font-bold text-xl`}
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridLayout
