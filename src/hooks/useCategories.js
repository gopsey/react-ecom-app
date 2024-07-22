import { useQuery } from "@tanstack/react-query";
import { getCategories, getProductsByCategory } from "../api/categoriesApi";

export const useCategories = () => {
   const query = useQuery({queryKey: ['categories'], queryFn: getCategories, retry: false, refetchOnWindowFocus: false})
   return { ...query }
}

export const useProductsByCategory = (categoryId) => {
   const query = useQuery({
      queryKey: ['productsByCategory', categoryId], // Unique key for this query
      queryFn: () => getProductsByCategory(categoryId),
      enabled: !!categoryId, // This ensures the query is only run if categoryId is truthy
      retry: false,
      refetchOnWindowFocus: false,
   })
   return { ...query }
}