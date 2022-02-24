import {FormEvent, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import { AppDispatch, RootState } from "../../store"
import { decrement, increment, incrementByAmount } from '../../store/counterSlice'

interface CardProps {
  title: string
  count: number
  dispatch: AppDispatch
}

const Card = ({ title, count, dispatch }: CardProps) => {
  const [custom, setCustom] = useState<number>(0)
  return (
    <div className="card w-full md:w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className='flex flex-col justify-center mb-2'>
          <p className='font-semibold text-lg text-center'>Counter</p>
          <p className='text-[5rem] font-black text-center'>
            {count}
          </p>
        </div>
        <div className='flex space-x-2'>
          <input type="text" placeholder="Type here" className="input input-bordered w-8/12 max-w-xs" onChange={(e: FormEvent<HTMLInputElement>) => setCustom(Number(e.currentTarget.value))}/>
          <button className="btn btn-accent w-4/12" onClick={() => dispatch(incrementByAmount(custom))}>Set</button> 
        </div>
        <div className="justify-center card-actions flex">
          <button 
            className="btn btn-primary" 
            onClick={() => dispatch(increment())}
            disabled={(count <= 5) ? false : true}
          >Increment</button>
          <button 
            className="btn btn-secondary" 
            onClick={() => dispatch(decrement())}
            disabled={(count == 0) ? true : false}
          >Decrement</button>
        </div>
      </div>
    </div>
  )
}

const ReactToolkit = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='container mx-auto p-4'>
      <Card title='Redux Toolkit Counter' count={count} dispatch={dispatch}/>
    </div>
  )
}

export default ReactToolkit
