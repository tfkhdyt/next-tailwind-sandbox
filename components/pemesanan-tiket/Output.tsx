import { useContext, ChangeEvent, ReactNode } from 'react'

import Header from './Header'
import { Data } from '../../pages/pemesanan-tiket/index'
import InputForm, { InputType } from './InputForm'
import SelectForm from './SelectForm'
import RadioForm from './RadioForm'
import CheckboxForm from './CheckboxForm'
import Button from './Button'
import Card from './Card'
import CardInfoRow from './CardInfoRow'

const Form = () => {
  const {
    data,
    showOutput,
    handleSubmit,
  } = useContext(Data)
  const { nama, jumlah, kelas, tujuan, bagasi, asuransi } = data

  const toCapitalize = (str: string) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
  }

  interface IFacility {
    harga: number
    konsumsi: string
  }

  const getFacility = (kelas: string) => {
    switch (kelas) {
      case 'ekonomi':
        return {
          harga: 1_000_000,
          konsumsi: 'Air Mineral'    
        }
      case 'bisnis':
        return {
          harga: 2_000_000,
          konsumsi: 'Snack'    
        }
      case 'eksekutif':
        return {
          harga: 3_000_000,
          konsumsi: 'Makan'    
        }
    }
  }

  let _kelas, _tujuan
  if (kelas) {
    _kelas = toCapitalize(kelas as string)
  }
  if (tujuan) {
    _tujuan = toCapitalize(tujuan as string)
  }

  const facility = getFacility(kelas as string) as IFacility

  if (showOutput) {
    return (
      <Card>
        <Header title='Data Pemesanan Tiket' />
        <div className='grid'>
          <CardInfoRow label='Nama Pemesan' value={nama} />
          <CardInfoRow label='Jumlah' value={jumlah} />
          <CardInfoRow label='Kelas' value={`${_kelas as string} (${facility.konsumsi})`} />
          <CardInfoRow label='Tujuan' value={_tujuan as string} />
        </div>
      </Card>
    )
  } else {
    return <></>
  }
}

export default Form
