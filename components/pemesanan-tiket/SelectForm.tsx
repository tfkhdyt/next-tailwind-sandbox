import { ChangeEvent } from 'react'

interface ISelectForm {
  id: string
  label: string
  option: string[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export enum SelectType {
  text = 'text',
  number = 'number'
}

const SelectForm = ({ id, label, option, ...rest }: ISelectForm) => {
  return (
    <div className='items-center grid grid-cols-2'>
      <label htmlFor={id} className='text-slate-800'>
        {label}
      </label>
      <select 
        id={id} 
        name={id}
        {...rest}
        className='rounded-sm focus:ring-2 focus:ring-blue-600 outline-none px-2 py-1 h-8 transition duration-300 bg-white appearance-none'
        required
      >
        <option selected disabled>Pilih {id}</option>
        {option.map((value, i) => (
          <option key={i} value={value}>{value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectForm
