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
import './Cart.scss'

const Cart = () => {
   const [cartDetails, setCartDetails] = useState({})
   const [currentCounterValue, setCurrentCounterValue] = useState(1);
   const [checkoutButtonProps] = useState({
      variant: 'contained', bgColor: '#000000', btnText: 'Go to Checkout', color: '#FFFFFF', endIcon: <EastIcon />
   })
   const [applyPromoCodeButtonProps] = useState({
      variant: 'contained', bgColor: '#000000', btnText: 'Apply', color: '#FFFFFF'
   })

   useEffect(() => {
      const localCartDetails = JSON.parse(localStorage.getItem('cartDetails'))
      const cartItems = localCartDetails?.cartItems;
      const { subTotal, discountPercent, discountPrice, deliveryFee, total, currencyCode } = calculateTotalPrice(cartItems)
      console.log(subTotal)
      setCartDetails({
         cartItems,
         orderSummary: {
            subTotal,
            total,
            currencyCode,
            discountPercent,
            discountPrice,
            deliveryFee,
            promoCode: '',
         }
      })
   }, []);

   const setCurrentCountValue = (count) => {
      setCurrentCounterValue(count)
   }

   const calculateTotalPrice = (cartItemsData) => {
      let subTotal = 0
      let discountPercent = 20 // Setting Discount % static as 20
      let discountPrice = 0
      let deliveryFee = 15 // Setting Delivery Fee static as 15
      let total = 0
      let currencyCode = ''
      if (cartItemsData) {
         subTotal = cartItemsData.reduce((accumulator, current) => accumulator + (current.price * current.numberOfUnits), 0)
         discountPrice = Math.trunc(subTotal * (discountPercent / 100))
         total = subTotal - discountPrice + deliveryFee
         currencyCode = cartItemsData[0].currencyCode
      }
      return { subTotal, discountPercent, discountPrice, deliveryFee, total, currencyCode }
   }

   return (
      <>
         <div className='cart-wrapper'>
            {
               cartDetails && cartDetails.cartItems
                  ?
                  <Container maxWidth='xl'>
                     <span className='cart-title'>Your Cart</span>
                     <div className='cart-contents'>
                        <div className='cart-content cart-items-wrapper'>
                           {
                              cartDetails && cartDetails?.cartItems?.map((cartItem) => {
                                 return (
                                    <div className='cart-item-wrapper' key={cartItem.skuId}>
                                       <div className='cart-item'>
                                          <div className='cart-item-image'>
                                             <img src={cartItem.image} alt="" className='image' />
                                          </div>
                                          <div className='cart-item-content'>
                                             <div className='item-title-remove'>
                                                <span className='item-title'>{cartItem.name}</span>
                                                <DeleteIcon color='error' />
                                             </div>
                                             <div className=''>Size: <span>{cartItem.sizeName}</span></div>
                                             <div className=''>Color: <span>{cartItem.colorName}</span></div>
                                             <div className='item-price-count'>
                                                <span className='item-price'>{cartItem.currencyCode}{cartItem.price.toLocaleString()}</span>
                                                <CounterButtonGroup setCurrentCountValue={setCurrentCountValue} currentCounterValue={cartItem.numberOfUnits} />
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
                              <span className='summary-values'>{cartDetails?.orderSummary?.currencyCode}{cartDetails?.orderSummary?.subTotal.toLocaleString()}</span>
                           </div>
                           <div className='summary-item order-summary-item'>
                              <span className='summary-key'>Discount (-{cartDetails?.orderSummary?.discountPercent}%)</span>
                              <span className='summary-values discount'>-{cartDetails?.orderSummary?.currencyCode}{cartDetails?.orderSummary?.discountPrice.toLocaleString()}</span>
                           </div>
                           <div className='summary-item order-summary-item'>
                              <span className='summary-key'>Delivery Fee</span>
                              <span className='summary-values'>{cartDetails?.orderSummary?.currencyCode}{cartDetails?.orderSummary?.deliveryFee.toLocaleString()}</span>
                           </div>
                           <Divider />
                           <div className='summary-item order-summary-item'>
                              <span className='summary-key total'>Total</span>
                              <span className='summary-values total-value'>{cartDetails?.orderSummary?.currencyCode}{cartDetails?.orderSummary?.total.toLocaleString()}</span>
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
                  :
                  <Container maxWidth='xl'>
                     <div className='cart-empty-container'>
                        <span className='cart-message-header'>Your cart looks empty!</span>
                        <span className='cart-message-subtext'>Please add some items from the shop.</span>
                     </div>
                  </Container>
            }

         </div>
      </>
   )
}

export default Cart