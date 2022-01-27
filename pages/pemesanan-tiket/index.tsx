import Head from 'next/head'
import { FormEvent, useState, useEffect, Dispatch, SetStateAction } from 'react'

import Layout from '../../components/pemesanan-tiket/Layout'
import { createContext } from 'react'
import Form from '../../components/pemesanan-tiket/Form'
import Output from '../../components/pemesanan-tiket/Output'

export interface IAsuransi {
  jiwa?: boolean
  kecelakaan?: boolean
  keterlambatan?: boolean
}

interface IContext {
  setNama: Dispatch<SetStateAction<string | null>>
  setJumlah: Dispatch<SetStateAction<number>>
  setKelas: Dispatch<SetStateAction<string | null>>
  setTujuan: Dispatch<SetStateAction<string | null>>
  setBagasi: Dispatch<SetStateAction<string | null>>
  setAsuransi: Dispatch<SetStateAction<IAsuransi | null>>
  setShowOutput: Dispatch<SetStateAction<boolean>>
  asuransi: IAsuransi | null
  showOutput: boolean
  data: IData
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

interface IData {
  nama: string | null
  jumlah: number | null
  kelas: string | null
  tujuan: string | null
  bagasi: string | null
  asuransi: IAsuransi | null
}

export const Data = createContext({} as IContext)

const PemesananTiket = () => {
  const [nama, setNama] = useState<string | null>(null)
  const [jumlah, setJumlah] = useState<number>(0)
  const [kelas, setKelas] = useState<string | null>(null)
  const [tujuan, setTujuan] = useState<string | null>(null)
  const [bagasi, setBagasi] = useState<string | null>(null)
  const [asuransi, setAsuransi] = useState<IAsuransi | null>({
    jiwa: false,
    kecelakaan: false,
    keterlambatan: false,
  })
  const [showOutput, setShowOutput] = useState<boolean>(false)
  const [data, setData] = useState({} as IData)

  useEffect(() => {
    console.log(
      `Nama: ${nama}
Jumlah: ${jumlah}
Kelas: ${kelas}
Tujuan: ${tujuan}
Bagasi: ${bagasi}
Asuransi:`,
      asuransi
    )
  }, [nama, jumlah, kelas, tujuan, bagasi, asuransi])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setData({
      nama,
      jumlah,
      kelas,
      tujuan,
      bagasi,
      asuransi,
    })
    setShowOutput(true)
  }

  return (
    <>
      <Head>
        <title>Pemesanan Tiket</title>
      </Head>
      <Layout>
        <Data.Provider
          value={{
            setNama,
            setJumlah,
            setKelas,
            setTujuan,
            setBagasi,
            setAsuransi,
            showOutput,
            setShowOutput,
            asuransi,
            data,
            handleSubmit,
          }}
        >
          <div className='grid md:grid-cols-2 gap-4 md:gap-10'>
            <Form />
            {/* Output */}
            {showOutput && <Output />}
            {/* ------ */}
          </div>
        </Data.Provider>
      </Layout>
    </>
  )
}

export default PemesananTiket
