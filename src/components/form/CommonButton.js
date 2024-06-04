import React from 'react'
import Button from '@mui/material/Button';

const CommonButton = (props) => {
   const { variant, bgColor, btnText, color, borderColor } = { ...props };
   return (
      <Button
         variant={variant}
         style={{
            background: bgColor,
            borderRadius: 62,
            color,
            borderColor,
            textTransform: 'none',
            minWidth: '210px',
            height: '50px',
         }}
      >{btnText}</Button>
   )
}

export default CommonButton