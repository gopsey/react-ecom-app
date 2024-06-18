import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './TestimonialCarousel.scss'

const TestimonialCarousel = ({ slidesData, prevSlide, nextSlide }) => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const slidesLength = slidesData.length;
   const [updatedSlidesData, setUpdatedSlidesData] = useState([])

   useEffect(() => {
      setUpdatedSlidesData(slidesData.slice(0, 5))
   }, [])
   useEffect(() => {
      goToPrevSlide();
   }, [prevSlide])
   useEffect(() => {
      goToNextSlide();
   }, [nextSlide])

   const goToPrevSlide = () => {
      const currIndex = currentIndex - 3 < 0 ? (slidesLength - (3 - currentIndex)) : currentIndex - 3;
      setCurrentIndex(currIndex)
      let abc = [];
      for (let index = 0; index < 5; index++) {
         const val = currIndex + index >= slidesLength ? slidesData[(currIndex + index) - slidesLength] : slidesData[currIndex + index]
         abc.push(val)
      }
      setUpdatedSlidesData(abc);
   }

   const goToNextSlide = () => {
      const currIndex = currentIndex + 3 >= slidesLength ? ((currentIndex + 3) - slidesLength) : currentIndex + 3;
      setCurrentIndex(currIndex)
      let abc = [];
      for (let index = 0; index < 5; index++) {
         const val = currIndex + index >= slidesLength ? slidesData[(currIndex + index) - slidesLength] : slidesData[currIndex + index]
         abc.push(val)
      }
      setUpdatedSlidesData(abc);
   }

   if (!Array.isArray(slidesData) || slidesLength <= 0) {
      return;
   }

   return (
      <>
         <div className='carousel-wrapper'>
            <div className='carousel'>
               {
                  updatedSlidesData.map((slide, index) => {
                     return (
                        <div className='slide-item' key={index}>
                           <Rating name="testimonial-rating" value={slide.rating} precision={0.5} readOnly />
                           <span className='testimonial-name'>
                              {slide.reviewerName}{slide.isVerified && <CheckCircleIcon className='verified' />}
                           </span>
                           <span className='testimonial-text'>"{slide.testimonyText}"</span>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </>
   )
}

export default TestimonialCarousel