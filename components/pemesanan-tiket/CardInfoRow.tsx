interface ICardInfoRow {
  label: string
  value: string | number | null
}

const CardInfoRow = ({ label, value }: ICardInfoRow) => {
  return (
    <div className='mb-2 flex items-start justify-between'>
      <p className='font-semibold'>{label}</p>
      <div className='flex w-3/6 flex-nowrap'>
        <span className='mr-2 font-semibold'>:</span>
        <p>{value}</p>
      </div>
    </div>
  )
}

export default CardInfoRow
