import { steps } from '@/app/store/atoms'
import { useSetAtom } from 'jotai'
import React from 'react'

export default function FormButton({children, normalBtn}: any) {
    const setNextStep = useSetAtom(steps)
    const clickHandler = () => setNextStep(pre=>pre+1) 
    if(normalBtn===true)
      return <button type='submit' className='text-white font-semibold px-4 py-2 bg-black rounded-lg' >{children}</button>
    else return (
    <button type='submit' onClick={clickHandler} className='text-white font-semibold px-4 py-2 bg-black rounded-lg' >{children}</button>
  )
}
