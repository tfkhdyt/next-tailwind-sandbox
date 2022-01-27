import { ChangeEvent } from 'react'

interface ICheckboxForm {
  id: string
  label: string
  option: string[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export enum CheckboxType {
  text = 'text',
  number = 'number',
}

const CheckboxForm = ({ id, label, option, ...rest }: ICheckboxForm) => {
  return (
    <div className='items-start grid grid-cols-2'>
      <label htmlFor={id} className='text-slate-800 font-semibold'>
        {label}
      </label>
      <div className='block space-y-2'>
        {option.map((value, i) => (
          <div key={i}>
            <label htmlFor={value} className='flex items-center space-x-1'>
              <input
                type='checkbox'
                name={id}
                id={value}
                value={value}
                {...rest}
              />
              <span>
                {value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckboxForm
