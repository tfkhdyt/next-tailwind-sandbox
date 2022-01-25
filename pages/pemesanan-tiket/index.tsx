import Head from 'next/head'
import {
  FormEvent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'

import Header from '../../components/pemesanan-tiket/Header'
import InputForm from '../../components/pemesanan-tiket/InputForm'
import Layout from '../../components/pemesanan-tiket/Layout'
import { InputType } from '../../components/pemesanan-tiket/InputForm'
import SelectForm from '../../components/pemesanan-tiket/SelectForm'
import RadioForm from '../../components/pemesanan-tiket/RadioForm'
import CheckboxForm from '../../components/pemesanan-tiket/CheckboxForm'
import Button from '../../components/pemesanan-tiket/Button'
import { createContext } from 'react'

interface IAsuransi {
  jiwa?: boolean
  kecelakaan?: boolean
  keterlambatan?: boolean
}

interface IContext {
  nama: string | null
  setNama: Dispatch<SetStateAction<string | null>>
  jumlah: number | null
  setJumlah: Dispatch<SetStateAction<number | null>>
  kelas: string | null
  setKelas: Dispatch<SetStateAction<string | null>>
  tujuan: string | null
  setTujuan: Dispatch<SetStateAction<string | null>>
  bagasi: string | null
  setBagasi: Dispatch<SetStateAction<string | null>>
  asuransi: IAsuransi | null
  setAsuransi: Dispatch<SetStateAction<IAsuransi | null>>
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const Data = createContext({} as IContext)

const PemesananTiket = () => {
  const [nama, setNama] = useState<string | null>(null)
  const [jumlah, setJumlah] = useState<number | null>(null)
  const [kelas, setKelas] = useState<string | null>(null)
  const [tujuan, setTujuan] = useState<string | null>(null)
  const [bagasi, setBagasi] = useState<string | null>(null)
  const [asuransi, setAsuransi] = useState<IAsuransi | null>(null)

  /* useEffect(() => {
    console.log(
      `Nama: ${nama}
Jumlah: ${jumlah}
Kelas: ${kelas}
Tujuan: ${tujuan}
Bagasi: ${bagasi}
Asuransi:`,
      asuransi
    )
    }, [nama, jumlah, kelas, tujuan, bagasi, asuransi]) */

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <Head>
        <title>Pemesanan Tiket</title>
      </Head>
      <Layout>
        <Data.Provider
          value={{
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
          }}
        >
          <div className='grid md:grid-cols-2 gap-2 justify-items-center md:w-screen'>
            {/* Output */}
            <div>
              <Header title='Data Pemesanan Tiket' />
            </div>
            {/* ------ */}
          </div>
        </Data.Provider>
      </Layout>
    </>
  )
}

export default PemesananTiket
