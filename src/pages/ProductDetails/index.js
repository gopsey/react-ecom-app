import React, { useState, useEffect } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
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
import { useProductById, useSkuProduct } from '../../hooks/useProducts'

const ProductDetails = () => {
   const urlParam = useLocation()
   const urlParams = useParams()
   const navigate = useNavigate()
   const [productData, setProductData] = useState(null)
   const [enlargedImage, setEnlargedImage] = useState('')
   const [selectedVariantData, setSelectedVariantData] = useState(null)
   // const [selectedSizeItem, setSelectedSizeItem] = useState('')
   const [availableSizesList, setAvailableSizesList] = useState(null)
   const [currentCountValue, setCurrentCountValue] = useState(0)
   const [addToCartButtonProps] = useState({
      variant: 'contained', bgColor: '#000000', btnText: 'Add to Cart', color: '#FFFFFF'
   })
   const [newArrivals, setNewArrivals] = useState([]);
   const [gridProperties] = useState({
      flexWrap: 'nowrap'
   })

   const [currentSkuId, setCurrentSkuId] = useState(urlParams.skuId);
   const { data: productDataById } = useProductById(urlParams.product);
   const { data: skuProduct } = useSkuProduct(urlParams.product, currentSkuId);
   const availableColors = productDataById?.variants.map((skuItem) => {
      return { 'code': skuItem.colorHexCode, 'name': skuItem.colorName, 'isSelected': skuItem.skuId === urlParams.skuId ? true : false, 'skuId': skuItem.skuId }
   })
   const selectedColor = availableColors?.find(ele => ele?.isSelected)
   const availableSizes = productDataById?.variants.filter((ele) => ele.colorHexCode === selectedColor.code).map((skuItem) => {
      return { 'id': skuItem.sizeCode, 'description': skuItem.sizeName, 'isSelected': skuItem.skuId === urlParams.skuId ? true : false, 'skuId': skuItem.skuId }
   })

   // On init
   useEffect(() => {
      const productDataInput = {
         productId: 99871,
         productDescription: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
         defaultImage: tee1,
         productImages: [jeans1, shirt1, tee2],
         availableSizes: [
            { id: 'small', description: 'Small', isSelected: false },
            { id: 'medium', description: 'Medium', isSelected: true },
            { id: 'large', description: 'Large', isSelected: false },
            { id: 'extraLarge', description: 'X-Large', isSelected: false }
         ],
         availableColors: [
            { id: '314F4A', code: '#314F4A', isSelected: true },
            { id: '4F4631', code: '#4F4631', isSelected: false },
            { id: '31344F', code: '#31344F', isSelected: false },
         ],
         title: 'T-Shirt with tape details',
         rating: 4.5,
         currentPrice: '$120',
         previousPrice: '$260',
         discount: '20%',
         category: 'new-arrivals',
         productInformationData: {
            productDescription: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
            productFaqs: [
               {
                  question: 'Is this a reliable product?',
                  answer: 'Yes, this is a reliable product',
               },
               {
                  question: 'Is return policy available',
                  answer: 'Yes, you can return in 7 days',
               },
               {
                  question: 'Is refund available?',
                  answer: 'No refund, you can return and get different size',
               },
            ]
         }
      }
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
      // Make API call here with pathname as req and update response accordingly
      if (urlParam?.pathname) {
         setProductData(productDataInput)
         setEnlargedImage(productDataInput.defaultImage)
         setNewArrivals(newArrivals)
      }
      
      setSelectedVariantData(productDataById?.variants[0]) // Setting first child as default variant on product load
   }, [urlParam])

   const setSelectedColorItem = (selectedColor) => {
      console.log('selectedColor', selectedColor)
      setCurrentSkuId(selectedColor.skuId)
      navigate(`/${productDataById?.category}/${urlParams?.product}/${selectedColor?.skuId}`)
   }

   const setSelectedSizeItem = (selectedSize) => {
      console.log('selectedSize', selectedSize)
      setCurrentSkuId(selectedSize.skuId)
      navigate(`/${productDataById?.category}/${urlParams?.product}/${selectedSize?.skuId}`)
   }

   return (
      <>
         <Container maxWidth='xl'>
            <Divider variant='fullWidth' />
            {
               productData && productDataById &&
               <Grid container className='product-details' spacing={2}>
                  <Grid item xs={12} sm={12} md={6}>
                     <Grid container className='product-images-wrapper' spacing={2}>
                        <Grid item xs={12} sm={12} md={3}>
                           <Stack direction={{ xs: 'row', md: 'column' }}
                              spacing={1}>
                              {
                                 productData ? productData.productImages.map((image) => {
                                    return (
                                       <div className='product-images' key={`${image}`}>
                                          <img src={image} alt="" className='pdt-img' onMouseEnter={() => setEnlargedImage(image)} />
                                       </div>
                                    )
                                 }) : <span>No data Available</span>
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
                           <div className='current-price'>{productData.currentPrice}</div>
                           {productData.previousPrice && <div className='previous-price'><del>{productData.previousPrice}</del></div>}
                           {productData.discount &&
                              <Chip
                                 variant='outlined'
                                 color='error'
                                 label={`-${productData.discount}`}
                                 className='discount-price' />}
                        </div>
                        <div className="product-description">{productDataById.productInformationData.productDescription}</div>
                        <Divider variant='fullWidth' className='product-divider' />
                        <div className='available-colors'>
                           <span>Select colors</span>
                           <CommonColorsGroup buttonsList={availableColors} selectedItem={setSelectedColorItem} />
                        </div>
                        <Divider variant='fullWidth' className='product-divider' />
                        <div className='available-sizes'>
                           <span>Choose Size</span>
                           <CommonChipGroup chipsList={availableSizes} selectedItem={setSelectedSizeItem} />
                        </div>
                        <Divider variant='fullWidth' className='product-divider' />
                        <div className='product-actions'>
                           <div className='counter-button-wrapper'>
                              <CounterButtonGroup setCurrentCountValue={setCurrentCountValue} />
                           </div>
                           <div className='cart-button-wrapper'>
                              <CommonButton {...addToCartButtonProps} />
                           </div>
                        </div>
                     </div>
                  </Grid>
               </Grid>
            }
            <section className='tabs-section'>
               <TabNavigation productDataInput={productData} />
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