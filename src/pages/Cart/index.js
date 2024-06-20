import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Input from "@mui/material/Input";
import InputAdornment from '@mui/material/InputAdornment';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import EastIcon from '@mui/icons-material/East';
import CommonButton from '../../components/form/CommonButton'
import CounterButtonGroup from '../../components/form/CounterButtonGroup'
import jeans1 from "../../assets/svg/jeans1.svg"
import shirt1 from "../../assets/svg/shirt1.svg"
import tee2 from "../../assets/svg/tee2.svg"
import './Cart.scss'

const Cart = () => {
   const [cartDetails, setCartDetails] = useState({})
   const [currentCountValue, setCurrentCountValue] = useState(0)
   const [checkoutButtonProps] = useState({
      variant: 'contained', bgColor: '#000000', btnText: 'Go to Checkout', color: '#FFFFFF', endIcon: <EastIcon />
   })
   const [applyPromoCodeButtonProps] = useState({
      variant: 'contained', bgColor: '#000000', btnText: 'Apply', color: '#FFFFFF'
   })

   useEffect(() => {
      const cartDetailsObj = {
         cartItems: [
            {
               id: 1,
               name: 'Gradient Graphic T-shirt',
               size: 'Large',
               color: 'White',
               price: 145,
               quantity: 1,
               image: jeans1,
            },
            {
               id: 2,
               name: 'Checkered Shirt',
               size: 'Medium',
               color: 'Red',
               price: 180,
               quantity: 2,
               image: shirt1,
            },
            {
               id: 3,
               name: 'Skinny Fit Jeans',
               size: 'Small',
               color: 'Blue',
               price: 240,
               quantity: 2,
               image: tee2,
            },
         ],
         orderSummary: {
            subtotal: 565,
            discountPercent: 20,
            discountPrice: 113,
            deliveryFee: 15,
            total: 467,
            promoCode: '',
         }
      }
      setCartDetails(cartDetailsObj)
   }, []);

   return (
      <>
         <div className='cart-wrapper'>
            <Container maxWidth='xl'>
               <span className='cart-title'>Your Cart</span>
               <div className='cart-contents'>
                  <div className='cart-content cart-items-wrapper'>
                     {
                        cartDetails && cartDetails?.cartItems?.map((cartItem) => {
                           return (
                              <div className='cart-item-wrapper' key={cartItem.id}>
                                 <div className='cart-item'>
                                    <div className='cart-item-image'>
                                       <img src={cartItem.image} alt="" className='image' />
                                    </div>
                                    <div className='cart-item-content'>
                                       <div className='item-title-remove'>
                                          <span className='item-title'>{cartItem.name}</span>
                                          <DeleteIcon color='error' />
                                       </div>
                                       <div className=''>Size: <span>{cartItem.size}</span></div>
                                       <div className=''>Color: <span>{cartItem.color}</span></div>
                                       <div className='item-price-count'>
                                          <span className='item-price'>${cartItem.price}</span>
                                          <CounterButtonGroup setCurrentCountValue={setCurrentCountValue} />
                                       </div>
                                    </div>
                                 </div>
                                 <Divider />
                              </div>
                           )
                        })
                     }
                  </div>
                  <div className='cart-content cart-order-summary-wrapper'>
                     <div className='order-summary-title'>Order Summary</div>
                     <div className='summary-item order-summary-item'>
                        <span className='summary-key'>Subtotal</span>
                        <span className='summary-values'>${cartDetails?.orderSummary?.subtotal}</span>
                     </div>
                     <div className='summary-item order-summary-item'>
                        <span className='summary-key'>Discount (-{cartDetails?.orderSummary?.discountPercent}%)</span>
                        <span className='summary-values discount'>-${cartDetails?.orderSummary?.discountPrice}</span>
                     </div>
                     <div className='summary-item order-summary-item'>
                        <span className='summary-key'>Delivery Fee</span>
                        <span className='summary-values'>${cartDetails?.orderSummary?.deliveryFee}</span>
                     </div>
                     <Divider />
                     <div className='summary-item order-summary-item'>
                        <span className='summary-key total'>Total</span>
                        <span className='summary-values total-value'>${cartDetails?.orderSummary?.total}</span>
                     </div>
                     <div className='summary-item promo-code-wrapper'>
                        <Input
                           placeholder="Add promo code"
                           className='promo-code-text'
                           disableUnderline
                           startAdornment={
                              <InputAdornment position='start'>
                                 <LocalOfferOutlinedIcon />
                              </InputAdornment>
                           }
                        />
                        <div className='promo-button-wrapper'>
                           <CommonButton {...applyPromoCodeButtonProps} />
                        </div>
                     </div>
                     <div className='summary-item '>
                        <div className='checkout-button-wrapper'>
                           <CommonButton {...checkoutButtonProps} />
                        </div>
                     </div>
                  </div>
               </div>
            </Container>
         </div>
      </>
   )
}

export default Cart