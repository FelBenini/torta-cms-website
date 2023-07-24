'use client'
import React from 'react'
import Xarrow from "react-xarrows";

const Connector = ({start, end}: {start: string, end: string}) => {
  return (
    <Xarrow start={start} end={end} endAnchor='top' startAnchor='bottom' path='grid' headSize={0} animateDrawing={true} color='#706C72' />
  )
}

export default Connector