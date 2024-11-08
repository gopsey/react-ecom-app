import httpService from '../services/httpService'
const loginEndpoint = '/login'
const signupEndpoint = '/signup'

export const postUserLogin = (data) => {
   return httpService.post(loginEndpoint, data)
   .then(res => res.data.data)
   .catch(err => console.error('this error: ',err.message))
};
