import { useQuery } from "@tanstack/react-query";
import { getProductById, getNewArrivals } from "../api/productsApi";

export const useProductById = (productId) => {
   const query = useQuery({
      queryKey: ['product', productId], // Unique key for this query
      queryFn: () => getProductById(productId),
      enabled: !!productId, // This ensures the query is only run if productId is truthy
      retry: false,
      refetchOnWindowFocus: false,
   })
   return { ...query }
}

export const useNewArrivals = () => {
   const query = useQuery({ queryKey: ['newArrivals'], queryFn: getNewArrivals, retry: false, refetchOnWindowFocus: false })
   return { ...query }
}