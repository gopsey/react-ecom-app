import { useQuery } from "@tanstack/react-query";
import { getTestimonials } from "../api/testimonialsApi";

export const useTestimonials = () => {
   const query = useQuery({queryKey: ['testimonials'], queryFn: getTestimonials, retry: false, refetchOnWindowFocus: false})
   return { ...query }
}