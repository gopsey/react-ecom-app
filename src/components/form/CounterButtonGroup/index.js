import React, { useEffect, useState } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import './CounterButtonGroup.scss'

const CounterButtonGroup = ({ setCurrentCountValue, maxLimit, currentCounterValue }) => {
   const [counterValue, setCounterValue] = useState(currentCounterValue)
   const [maxLimitValue, setMaxLimitValue] = useState(0)

   useEffect(() => {
      setCounterValue(currentCounterValue ?? 1)
   }, [currentCounterValue])

   useEffect(() => {
      setMaxLimitValue(maxLimit)
   }, [maxLimit])

   const incrementCounterValue = () => {
      const newValue = counterValue + 1
      setCounterValue(newValue)
      setCurrentCountValue(newValue)
   }

   const decrementCounterValue = () => {
      const newValue = counterValue === 1 ? 1 : counterValue - 1
      setCounterValue(newValue)
      setCurrentCountValue(newValue)
   }

   return (
      <>
         <ButtonGroup>
            <Button
               variant='contained'
               disableElevation
               className='counter-button'
               sx={{
                  backgroundColor: 'rgb(240, 240, 240)',
                  '&:hover': {
                     backgroundColor: 'rgb(240, 240, 240)'
                  },
                  color: '#000000',
                  borderTopLeftRadius: '62px',
                  borderBottomLeftRadius: '62px',
                  height: '44px'
               }}
               onClick={decrementCounterValue}>
               <RemoveIcon />
            </Button>
            <div className='counter-value-wrapper'><span className='counter-value'>{counterValue}</span></div>
            <Button
               variant='contained'
               disableElevation
               className='counter-button'
               disabled={counterValue === maxLimitValue}
               sx={{
                  backgroundColor: 'rgb(240, 240, 240)',
                  '&:hover': {
                     backgroundColor: 'rgb(240, 240, 240)'
                  },
                  color: '#000000',
                  borderTopRightRadius: '62px',
                  borderBottomRightRadius: '62px',
                  height: '44px'
               }}
               onClick={incrementCounterValue}>
               <AddIcon />
            </Button>
         </ButtonGroup>
      </>
   )
}

export default CounterButtonGroup