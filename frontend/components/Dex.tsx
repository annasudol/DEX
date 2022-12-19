import React, { useRef, useEffect } from 'react'
import Curve from './Curve'
import Swap from './Swap'

const Dex: React.FC<{}> = () => {
  return (
    <div>
      <Swap />
      <Curve />
    </div>
  )
}

export default Dex
