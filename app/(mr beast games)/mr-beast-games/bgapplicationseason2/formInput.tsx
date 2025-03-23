import { Input } from '@/components/ui/input'

export default function FormInput(props:any) {
  return (
    <Input {...props} required className='focus:ring-black focus:ring-4'/>
  )
}
