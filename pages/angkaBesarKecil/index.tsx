import { ChangeEventHandler, FormEvent, useState } from 'react'
import Header from '../../components/angkaBesarKecil/Header'

const AngkaBesarKecil = () => {
  const [angkaPertama, setAngkaPertama] = useState<number>()
  const [angkaKedua, setAngkaKedua] = useState<number>()
  const [hasil, setHasil] = useState<string>()

  const handleSubmit = () => {}

  return (
    <div className='container mx-auto p-4'>
      <div className='card-body'>
        <h2 className='card-title'>Angka Lebih Besar dan Lebih Kecil</h2>
        <div className='mb-4 flex gap-2'>
          <input
            type='number'
            placeholder='Angka Pertama'
            className='input-bordered input flex w-full w-3/6 max-w-xs'
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setAngkaPertama(Number(e.currentTarget.value))
            }
          />
          <input
            type='number'
            placeholder='Angka Kedua'
            className='input-bordered input flex w-full w-3/6 max-w-xs'
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setAngkaKedua(Number(e.currentTarget.value))
            }
          />
        </div>
        <button className='btn btn-primary' type='submit'>
          Hitung
        </button>
        <button className='btn btn-secondary' type='reset'>
          Hapus
        </button>
      </div>
    </div>
  )
}

export default AngkaBesarKecil
