import { ChangeEvent } from 'react'

interface IRadioForm {
  id: string
  label: string
  option: string[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export enum RadioType {
  text = 'text',
  number = 'number',
}

const RadioForm = ({ id, label, option, ...rest }: IRadioForm) => {
  return (
    <div className='items-center grid grid-cols-2'>
      <label htmlFor={id} className='text-slate-800'>
        {label}
      </label>
      <div className='block space-y-2'>
        {option.map((value, i) => (
          <div key={i}>
            <label htmlFor={value} className='flex items-center space-x-1'>
              <input type='radio' name={id} id={value} value={value} required {...rest}/>
              <span>{value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RadioForm
