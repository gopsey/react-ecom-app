import httpService from '../services/httpService'
const endpoint = '/testimonials'

export const getTestimonials = () => {
   return httpService.get(endpoint)
   .then(res => res.data.data)
   .catch(err => console.error('this error: ',err.message))
};