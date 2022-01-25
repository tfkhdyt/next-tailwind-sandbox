import { useContext, ChangeEvent } from 'react'

import Header from './Header'
import { Data } from '../../pages/pemesanan-tiket/index'
import InputForm, { InputType } from './InputForm'
import SelectForm from './SelectForm'
import RadioForm from './RadioForm'
import CheckboxForm from './CheckboxForm'
import Button from './Button'

const Form = () => {
  const {
    nama,
    setNama,
    jumlah,
    setJumlah,
    kelas,
    setKelas,
    tujuan,
    setTujuan,
    bagasi,
    setBagasi,
    asuransi,
    setAsuransi,
    handleSubmit,
  } = useContext(Data)
  return (
    <div className='bg-gradient-to-br from-slate-50 to-slate-200 rounded-md p-6 shadow-md w-full md:w-5/6 space-y-4'>
      <Header title='Pemesanan Tiket Maskapai' />
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div className='space-y-4'>
          <InputForm
            id='nama'
            label='Nama Pemesan'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNama(e.target.value)
            }
          />
          <InputForm
            id='jumlah'
            label='Jumlah Tiket'
            type={InputType.number}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setJumlah(parseInt(e.target.value))
            }
          />
          <SelectForm
            id='kelas'
            label='Kelas'
            option={['ekonomi', 'bisnis', 'eksekutif']}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setKelas(e.target.value)
            }
          />
          <SelectForm
            id='tujuan'
            label='Tujuan'
            option={['bali', 'bandung', 'jakarta', 'yogyakarta']}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setTujuan(e.target.value)
            }
          />
          <RadioForm
            id='bagasi'
            label='Bagasi'
            option={['5kg', '10kg', '15kg']}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setBagasi(e.target.value)
            }
          />
          <CheckboxForm
            id='asuransi'
            label='Asuransi'
            option={['jiwa', 'kecelakaan', 'keterlambatan']}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setAsuransi({
                ...asuransi,
                [e.target.id]: e.target.checked,
              })
            }}
          />
        </div>
        <div className='flex space-x-2'>
          <Button color='sky-400' type='submit'>
            Simpan
          </Button>
          <Button color='red-400' type='reset'>
            Batal
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
