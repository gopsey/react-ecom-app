import { useMutation } from "@tanstack/react-query";
import { postUserLogin } from "../api/loginSignupApi";

export const useLoginSignup = (data) => {
   const mutation = useMutation({
      mutationKey: ['loginSignup', data], // Unique key for this mutation
      mutationFn: () => postUserLogin(data),
      retry: false,
   })
   return { ...mutation }
}