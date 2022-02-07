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
    <div className='container mx-auto w-screen p-4'>
      <div className='grid grid-cols-2 gap-4'>
        {nama.map((value, index) => (
          <div
            className={`grid h-24 place-items-center border-2 ${
              pattern.includes(index + 1) && 'col-span-2'
            }`}
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
