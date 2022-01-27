import { ReactNode } from 'react'

interface IButton {
  color: string
  children: ReactNode
  type: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}

const Button = ({ color, children, type, ...rest }: IButton) => {
  let shadeColor: (string | number)[] | string = color.split('-')
  shadeColor[1] = Number(shadeColor[1]) + 200
  shadeColor = shadeColor.join('-')
  return (
    <button
      {...rest}
      type={type}
      className={`px-3 py-2 bg-${color} rounded font-semibold text-white hover:bg-${shadeColor} shadow-md shadow-${shadeColor}/50 transition duration-300`}
    >
      {children}
    </button>
  )
}

export default Button
