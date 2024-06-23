import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TuneIcon from '@mui/icons-material/Tune';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CommonButton from '../../form/CommonButton'
import './ProductReviews.scss'

const ProductReviews = () => {
   const [writeReviewButtonProps] = useState({
      variant: 'contained', bgColor: '#000000', btnText: 'Write a Review', color: '#FFFFFF'
   })
   const [productReviewSortButtonProps] = useState({
      variant: 'outlined', btnText: 'Latest', color: '#000000', borderColor: 'rgba(0,0,0,0)', bgColor: 'rgb(240, 240, 240)', endIcon: <KeyboardArrowDownIcon />
   })
   const [productReviewFilterButtonProps] = useState({
      variant: 'outlined', btnText: <TuneIcon />, color: '#000000', borderColor: 'rgba(0,0,0,0)', bgColor: 'rgb(240, 240, 240)'
   })
   const [loadMoreReviewsButtonProps] = useState({
      variant: 'outlined', bgColor: '#FFFFFF', btnText: 'Load More Reviews', color: '#000000', borderColor: 'rgba(0,0,0,.1)'
   })
   const [reviewsAndRatingsData, setReviewsAndRatingsData] = useState([])
   useEffect(() => {
      const reviewsData = [
         {
            id: 1,
            rating: 5,
            reviewerName: 'Alex K',
            reviewText: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
            reviewDate: 'August 18, 2024',
            isVerified: true,
         },
         {
            id: 2,
            rating: 4,
            reviewerName: 'Sarah K',
            reviewText: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
            reviewDate: 'August 18, 2024',
            isVerified: true,
         },
         {
            id: 3,
            rating: 3,
            reviewerName: 'Samuel K',
            reviewText: 'As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.',
            reviewDate: 'August 18, 2024',
            isVerified: true,
         },
         {
            id: 4,
            rating: 4.5,
            reviewerName: 'Scarlett',
            reviewText: 'I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations.',
            reviewDate: 'August 18, 2024',
            isVerified: true,
         },
         {
            id: 5,
            rating: 4,
            reviewerName: 'John K',
            reviewText: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
            reviewDate: 'August 18, 2024',
            isVerified: true,
         },
         {
            id: 6,
            rating: 5,
            reviewerName: 'Jacob Z',
            reviewText: 'As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.',
            reviewDate: 'August 18, 2024',
            isVerified: false,
         },
         {
            id: 7,
            rating: 1,
            reviewerName: 'Max O',
            reviewText: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
            reviewDate: 'August 18, 2024',
            isVerified: false,
         },
         {
            id: 8,
            rating: 2,
            reviewerName: 'Kenny I',
            reviewText: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
            reviewDate: 'August 18, 2024',
            isVerified: true,
         },
         {
            id: 9,
            rating: 3.5,
            reviewerName: 'Zorro M',
            reviewText: 'I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations.',
            reviewDate: 'August 18, 2024',
            isVerified: false,
         },
      ]
      setReviewsAndRatingsData(reviewsData);
   }, [])
   return (
      <>
         <div className='product-reviews-wrapper'>
            <div className='product-reviews-header'>
               <div><span className='reviews-title'>All Reviews </span><span className='reviews-count'>(451)</span></div>
               <div className='product-reviews-actions'>
                  <div className='review-filter-button'>
                     <CommonButton {...productReviewFilterButtonProps} />
                  </div>
                  <div className='review-sort-button'>
                     <CommonButton {...productReviewSortButtonProps} />
                  </div>
                  <div className='review-write-button'>
                     <CommonButton {...writeReviewButtonProps} />
                  </div>
               </div>
            </div>
            <div className='carousel'>
               {
                  reviewsAndRatingsData.map((slide, index) => {
                     return (
                        <div className='slide-item' key={index}>
                           <div className='rating-and-more'>
                              <Rating name="review-rating" value={slide.rating} precision={0.5} readOnly />
                              <MoreHorizIcon className='more-icon' />
                           </div>
                           <span className='review-name'>
                              {slide.reviewerName}{slide.isVerified && <CheckCircleIcon className='verified' />}
                           </span>
                           <span className='review-text'>"{slide.reviewText}"</span>
                           <span className='review-date'>Posted on {slide.reviewDate}</span>
                        </div>
                     )
                  })
               }
            </div>
            <div className='load-more-container'>
               <div className='button-load-more-reviews'>
                  <CommonButton {...loadMoreReviewsButtonProps} />
               </div>
            </div>
         </div>
      </>
   )
}

export default ProductReviews