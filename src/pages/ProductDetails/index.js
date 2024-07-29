import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Rating from '@mui/material/Rating'
import Chip from '@mui/material/Chip'
import './ProductDetails.scss'
import tee1 from "../../assets/svg/tee1.svg"
import jeans1 from "../../assets/svg/jeans1.svg"
import shirt1 from "../../assets/svg/shirt1.svg"
import tee2 from "../../assets/svg/tee2.svg"
import CommonColorsGroup from '../../components/form/CommonColorsGroup'
import CommonChipGroup from '../../components/form/CommonChipGroup'
import CommonButton from '../../components/form/CommonButton'
import CounterButtonGroup from '../../components/form/CounterButtonGroup'
import ProductsGrid from '../../components/ui/ProductsGrid'
import TabNavigation from '../../components/ui/TabNavigation'
import { useProductById } from '../../hooks/useProducts'

const ProductDetails = () => {
   const urlParams = useParams()
   const navigate = useNavigate()
   const { data: productDataById } = useProductById(urlParams.productId)
   const [currentVariantId, setCurrentVariantId] = useState(urlParams.variantId)
   const [availableColorsList, setAvailableColorsList] = useState(null)
   const [availableSizesList, setAvailableSizesList] = useState(null)
   const [selectedVariantData, setSelectedVariantData] = useState(null)
   const [priceData, setPriceData] = useState(null)

   const [enlargedImage, setEnlargedImage] = useState('')
   const [itemStockLimit, setItemStockLimit] = useState(1)
   const [addToCartButtonProps] = useState({
      variant: 'contained', bgColor: '#000000', btnText: 'Add to Cart', color: '#FFFFFF'
   })
   const [newArrivals, setNewArrivals] = useState([]);
   const [gridProperties] = useState({
      flexWrap: 'nowrap'
   })
   const [currentSkuId, setCurrentSkuId] = useState(null);
   const [currentCounterValue, setCurrentCounterValue] = useState(1);

   // Will be triggered once URL changes (or) API response is got for productDataById from products/:productId
   useEffect(() => {
      const newArrivals = [
         {
            productId: 99871,
            defaultImage: tee1,
            productImages: [jeans1, shirt1, tee2],
            title: 'T-Shirt with tape details',
            rating: 4.5,
            currentPrice: '$120',
            previousPrice: null,
            discount: null,
            category: 'casual',
         }, {
            productId: 99872,
            defaultImage: jeans1,
            productImages: [shirt1, tee1, tee2],
            title: 'Skinny fit jeans',
            rating: 3.5,
            currentPrice: '$240',
            previousPrice: null,
            discount: null,
            category: 'casual',
         }, {
            productId: 99873,
            defaultImage: shirt1,
            productImages: [tee1, tee2, jeans1],
            title: 'Checked Shirt',
            rating: 2.5,
            currentPrice: '$180',
            previousPrice: '$260',
            discount: '20%',
            category: 'casual',
         }, {
            productId: 99874,
            defaultImage: tee2,
            productImages: [tee1, jeans1, shirt1],
            title: 'Sleeved strioped T-Shirt',
            rating: 5,
            currentPrice: '$130',
            previousPrice: null,
            discount: null,
            category: 'casual',
         },
      ]
      setNewArrivals(newArrivals)

      if (productDataById) {
         const selectedVariant = productDataById?.variants.find(variant => variant._id === currentVariantId);
         const availableColors = productDataById?.variants.map((variantItem) => {
            return { 'code': variantItem.colorHexCode, 'name': variantItem.colorName, 'isSelected': variantItem._id === urlParams.variantId ? true : false, 'variantId': variantItem._id }
         })
         const availableSizes = selectedVariant?.sizes.map((skuItem) => {
            return { 'id': skuItem.sizeCode, 'description': skuItem.sizeName, 'isSelected': currentSkuId === skuItem._id ? true : false, 'sizeUniqueId': skuItem._id }
         })
         const mrp = selectedVariant?.maximumRetailPrice;
         const currencyCode = selectedVariant?.currencyCode;
         const discountPercentage = selectedVariant?.discountPercent;
         const currentPrice = discountPercentage ? Math.trunc(mrp - (mrp * (discountPercentage / 100))) : Math.trunc(mrp);
         const priceData = {
            mrp,
            currencyCode,
            discountPercentage,
            currentPrice,
         }
         setEnlargedImage(productDataById.productImages[0]) // Setting first child as default image on product load
         setSelectedVariantData(selectedVariant)
         setAvailableColorsList(availableColors)
         setAvailableSizesList(availableSizes)
         setPriceData(priceData)
      }
   }, [urlParams, productDataById])

   const setSelectedColorItem = (selectedColor) => {
      setCurrentVariantId(selectedColor.variantId)
      setItemStockLimit(1)
      setCurrentCounterValue(1)
      setSelectedVariantData(productDataById?.variants.find(variant => variant.skuId === selectedColor.variantId))
      navigate(`/${urlParams?.productId}/${selectedColor?.variantId}`)
   }

   const setSelectedSizeItem = (selectedSize) => {
      setCurrentSkuId(selectedSize.sizeUniqueId)
      const stockLimitCount = selectedVariantData?.sizes.find(ele => ele._id === selectedSize?.sizeUniqueId).unitsCountInStock;
      setItemStockLimit(stockLimitCount)
      setCurrentCounterValue(1)
   }

   const setCurrentCountValue = (count) => {
      setCurrentCounterValue(count)
   }

   const onAddToCartClicked = () => {
      const cartDetails = {
         variantId: currentVariantId,
         skuId: currentSkuId,
         productId: productDataById?._id,
         name: productDataById?.name,
         image: productDataById?.productImages[0],
         colorName: selectedVariantData?.colorName,
         sizeName: selectedVariantData?.sizes?.find(sizeVariant => currentSkuId === sizeVariant._id).sizeName,
         numberOfUnits: currentCounterValue,
         price: priceData?.currentPrice,
         currencyCode: priceData?.currencyCode,
      }
      const localCartDetails = JSON.parse(localStorage.getItem('cartDetails'))
      if (localCartDetails && localCartDetails.cartItems) {
         let alreadyAddedSkuItemIndex = 0;
         const alreadyAddedSkuItemInCart = localCartDetails?.cartItems.find((localCartDetail, index) => {
            alreadyAddedSkuItemIndex = index;
            return localCartDetail.variantId === currentVariantId && localCartDetail.skuId === currentSkuId;
         })
         if (alreadyAddedSkuItemInCart) {
            cartDetails.numberOfUnits = cartDetails.numberOfUnits += alreadyAddedSkuItemInCart.numberOfUnits;
            localCartDetails.cartItems[alreadyAddedSkuItemIndex] = cartDetails;
         } else {
            localCartDetails.cartItems.push(cartDetails)
         }
         localStorage.setItem('cartDetails', JSON.stringify(localCartDetails))
      } else {
         const cartItemsList = { cartItems: [cartDetails] }
         localStorage.setItem('cartDetails', JSON.stringify(cartItemsList))
      }
   }

   return (
      <>
         <Container maxWidth='xl'>
            <Divider variant='fullWidth' />
            {
               productDataById ?
                  <Grid container className='product-details' spacing={2}>
                     <Grid item xs={12} sm={12} md={6}>
                        <Grid container className='product-images-wrapper' spacing={2}>
                           <Grid item xs={12} sm={12} md={3}>
                              <Stack direction={{ xs: 'row', md: 'column' }}
                                 spacing={1}>
                                 {
                                    productDataById.productImages.map((image) => {
                                       return (
                                          <div className='product-images' key={`${image}`}>
                                             <img src={image} alt="" className='pdt-img' onMouseEnter={() => setEnlargedImage(image)} />
                                          </div>
                                       )
                                    })
                                 }
                              </Stack>
                           </Grid>
                           <Grid item xs={12} sm={12} md={9} className='enlarged-image-wrapper'>
                              <img src={enlargedImage} alt="" className='pdt-img' />
                           </Grid>
                        </Grid>
                     </Grid>
                     <Grid item xs={12} sm={12} md={6}>
                        <div className='product-details-info'>
                           <div className='product-title'>{productDataById.name}</div>
                           <div className='product-ratings'>
                              <Rating value={productDataById.rating} precision={0.5} readOnly></Rating> <span>{productDataById.rating}/5</span>
                           </div>
                           <div className='product-price'>
                              <div className='current-price'>{priceData?.currencyCode}{priceData?.currentPrice.toLocaleString()}</div>
                              {priceData?.mrp && <div className='previous-price'><del>{priceData?.currencyCode}{priceData?.mrp.toLocaleString()}</del></div>}
                              {priceData?.discountPercentage &&
                                 <Chip
                                    variant='outlined'
                                    color='error'
                                    label={`-${priceData?.discountPercentage}%`}
                                    className='discount-price' />}
                           </div>
                           <div className="product-description">{productDataById.productInformationData.productDescription}</div>
                           <Divider variant='fullWidth' className='product-divider' />
                           <div className='available-colors'>
                              <span>Select colors</span>
                              <CommonColorsGroup buttonsList={availableColorsList} selectedItem={setSelectedColorItem} />
                           </div>
                           <Divider variant='fullWidth' className='product-divider' />
                           <div className='available-sizes'>
                              <span>Choose Size</span>
                              <CommonChipGroup chipsList={availableSizesList} selectedItem={setSelectedSizeItem} />
                           </div>
                           <Divider variant='fullWidth' className='product-divider' />
                           <div className='product-actions'>
                              <div className='counter-button-wrapper'>
                                 <CounterButtonGroup setCurrentCountValue={setCurrentCountValue} maxLimit={itemStockLimit} currentCounterValue={currentCounterValue} />
                              </div>
                              <div className='cart-button-wrapper'>
                                 <CommonButton {...addToCartButtonProps} onButtonClick={onAddToCartClicked} />
                              </div>
                           </div>
                        </div>
                     </Grid>
                  </Grid>
                  :
                  <span>No data Available</span>
            }
            <section className='tabs-section'>
               <TabNavigation productDataInput={productDataById?.productInformationData} />
            </section>
            <section className='suggestion-section'>
               <div className='section-title'>You might also like</div>
               {/* <ProductsGrid products={newArrivals} gridProperties={gridProperties}></ProductsGrid> */}
            </section>
         </Container>
      </>
   )
}

export default ProductDetails