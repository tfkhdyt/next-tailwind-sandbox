interface ICardInfoRow {
  label: string
  value: string | number | null
}

const CardInfoRow = ({ label, value }: ICardInfoRow) => {
  return (
    <div className='flex justify-between items-start'>
      <p className='font-semibold'>{label}</p>
      <div className='w-3/6 flex flex-nowrap'>
        <span className='font-semibold mr-2'>:</span>
        <p>{value}</p>
      </div>
    </div>
  )
}

export default CardInfoRow
