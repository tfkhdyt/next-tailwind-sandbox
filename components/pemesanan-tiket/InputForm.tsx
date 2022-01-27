import { ChangeEvent } from 'react'

interface IInputForm {
  id: string
  label: string
  type?: InputType
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export enum InputType {
  text = 'text',
  number = 'number',
}

const InputForm = ({
  id,
  label,
  type = InputType.text,
  ...rest
}: IInputForm) => {
  return (
    <div className='grid grid-cols-2 items-center'>
      <label htmlFor={id} className='font-semibold text-slate-800'>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        {...rest}
        className='h-8 rounded-sm px-2 py-1 outline-none transition duration-300 focus:ring-2 focus:ring-blue-600'
        required
      />
    </div>
  )
}

export default InputForm
