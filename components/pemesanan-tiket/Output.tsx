import { useContext } from 'react'

import Header from './Header'
import { Data } from '../../pages/pemesanan-tiket/index'
import Card from './Card'
import CardInfoRow from './CardInfoRow'
import { IAsuransi } from '../../pages/pemesanan-tiket/index'

const Form = () => {
  const { data, showOutput } = useContext(Data)
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
          konsumsi: 'Air Mineral',
        }
      case 'bisnis':
        return {
          harga: 2_000_000,
          konsumsi: 'Snack',
        }
      case 'eksekutif':
        return {
          harga: 3_000_000,
          konsumsi: 'Makan',
        }
    }
  }

  const getHargaBagasi = (bagasi: string) => {
    switch (bagasi) {
      case '5kg':
        return 100_000
      case '10kg':
        return 150_000
      case '15kg':
        return 200_000
    }
  }

  const formatMoney = (money: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(money)
  }

  const getDetailAsuransi = (asuransi: IAsuransi) => {
    const jenis = Object.entries(asuransi as IAsuransi)
      .filter((item) => item[1] == true)
      .map((item) => {
        if (item[1] == true) return toCapitalize(item[0])
      })
    return {
      jenis: jenis.join(', '),
      harga: jenis.length * 50_000,
    }
  }

  const countDiscount = (price: number, diskon: number) => {
    const hargaDiskon = price * diskon
    return price - hargaDiskon
  }

  let _kelas, _tujuan
  if (kelas) {
    _kelas = toCapitalize(kelas as string)
  }
  if (tujuan) {
    _tujuan = toCapitalize(tujuan as string)
  }

  const facility = getFacility(kelas as string) as IFacility
  const hargaBagasi = getHargaBagasi(bagasi as string)
  const { jenis: jenisAsuransi, harga: hargaAsuransi } = getDetailAsuransi(
    asuransi as IAsuransi
  )
  const diskon = (jumlah as number) > 3 ? 0.3 : 0
  const totalHarga =
    countDiscount(facility.harga * jumlah!, diskon) +
    hargaBagasi! +
    hargaAsuransi

  if (showOutput) {
    return (
      <Card>
        <Header title='Data Pemesanan Tiket' />
        <div className='grid'>
          <CardInfoRow label='Nama Pemesan' value={nama} />
          <CardInfoRow label='Jumlah' value={jumlah} />
          <CardInfoRow
            label='Kelas'
            value={`${_kelas as string} (${facility.konsumsi})`}
          />
          <CardInfoRow label='Tujuan' value={_tujuan as string} />
          <CardInfoRow
            label='Bagasi'
            value={`${bagasi as string} (${formatMoney(
              hargaBagasi as number
            )})`}
          />
          <CardInfoRow
            label='Asuransi'
            value={`${jenisAsuransi as string} (${formatMoney(
              hargaAsuransi as number
            )})`}
          />
          <CardInfoRow
            label='Total Harga'
            value={formatMoney(totalHarga as number)}
          />
        </div>
      </Card>
    )
  } else {
    return <></>
  }
}

export default Form
