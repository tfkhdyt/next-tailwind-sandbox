import { ChangeEvent } from 'react'

interface IInputForm {
  id: string
  label: string
  type?: InputType
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export enum InputType {
  text = 'text',
  number = 'number'
}

const InputForm = ({ id, label, type = InputType.text, ...rest }: IInputForm) => {
  return (
    <div className='items-center grid grid-cols-2'>
      <label htmlFor={id} className='text-slate-800'>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        {...rest}
        className='rounded-sm focus:ring-2 focus:ring-blue-600 outline-none px-2 py-1 h-8 transition duration-300'
        required
      />
    </div>
  )
}

export default InputForm
