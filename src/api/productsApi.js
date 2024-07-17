import httpService from '../services/httpService'
const endpoint = '/products'

export const getProductById = (productId) => {
   return httpService.get(`${endpoint}/${productId}`)
   .then(res => res?.data?.data)
   .catch(err => console.error('this error: ',err.message))
};

export const getSkuProduct = (productId, skuId) => {
   return httpService.get(`${endpoint}/${productId}/${skuId}`)
   .then(res => res?.data?.data)
   .catch(err => console.error('this error: ',err.message))
};

export const getNewArrivals = () => {
   const newArrivalsEndpoint = '/new-arrivals'
   return httpService.get(`${endpoint}${newArrivalsEndpoint}`)
   .then(res => res?.data?.data)
   .catch(err => console.error('this error: ',err.message))
};