import React from 'react';
import { drawHeart } from '../lib/heart';

import heartStyles from '../styles/Heart.module.css';

const Heart = () => {
    
  React.useEffect(() => {
    drawHeart()
  }, [])
  
  //rest of the component
return (
  <canvas className={heartStyles.container} id='heart' />
  )
}

export default Heart;
