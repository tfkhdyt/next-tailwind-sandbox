import { ChangeEvent } from 'react'

interface ISelectForm {
  id: string
  label: string
  option: string[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export enum SelectType {
  text = 'text',
  number = 'number',
}

const SelectForm = ({ id, label, option, ...rest }: ISelectForm) => {
  return (
    <div className='grid grid-cols-2 items-center'>
      <label htmlFor={id} className='font-semibold text-slate-800'>
        {label}
      </label>
      <select
        id={id}
        name={id}
        {...rest}
        className='h-8 appearance-none rounded-sm bg-white px-2 py-1 outline-none transition duration-300 focus:ring-2 focus:ring-blue-600'
        required
        defaultValue=''
      >
        <option disabled value=''>
          Pilih {id}
        </option>
        {option.map((value, i) => (
          <option key={i} value={value}>
            {value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectForm
