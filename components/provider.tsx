'use client'

import React, { PropsWithChildren } from 'react'
import { Provider } from 'jotai'

function Providers({children}:PropsWithChildren) {
  return (
    <Provider>{children}</Provider>
  )
}

export default Providers