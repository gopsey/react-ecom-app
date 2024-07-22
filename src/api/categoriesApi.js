import httpService from '../services/httpService'
const endpoint = '/categories'

export const getCategories = () => {
   return httpService.get(endpoint)
   .then(res => res.data.data)
   .catch(err => console.error('this error: ',err.message))
};

export const getProductsByCategory = (categoryId) => {
   const productsByCategory = `/productsBy/${categoryId}`
   return httpService.get(`${endpoint}${productsByCategory}`)
   .then(res => res?.data?.data)
   .catch(err => console.error('this error: ',err.message))
};