import { Label } from '@/components/ui/label'
import React, { PropsWithChildren } from 'react'

export default function FormLabel({children}:PropsWithChildren) {
  return (
    <Label className="font-semibold tracking-tight text-lg block">{children}</Label>
  )
}
