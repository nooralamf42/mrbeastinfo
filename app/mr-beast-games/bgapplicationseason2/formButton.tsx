import { steps } from '@/app/store/atoms'
import { useSetAtom } from 'jotai'
import React from 'react'

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  notSubmit?: boolean
}

export default function FormButton({children, notSubmit}: FormButtonProps) {
    const setNextStep = useSetAtom(steps)
    const clickHandler = ()=> notSubmit ? setNextStep(pre=>pre+1) : ''
  return (
    <button type='submit' onClick={clickHandler} className='text-white font-semibold px-4 py-2 bg-black rounded-lg' >{children}</button>
  )
}
