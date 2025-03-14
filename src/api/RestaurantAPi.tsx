import { SearchState } from "@/pages/SearchPage";
import { RestaurantSearchResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants = (
  searchState: SearchState,
  city?: string
) => {
  const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
    //Query Parameters
    const params = new URLSearchParams();
    params.set("searchQuery", searchState?.searchQuery);
    params.set("page", searchState?.page.toString());
    params.set("selectedCuisines", searchState?.selectedCuisines.join(","));

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );

    if (!response.ok) throw new Error("Failed to get restaurant!");

    return response.json();
  };

  const {
    data: results,
    isPending, // ✅ FIXED: use `isPending` instead of `isLoading`
    error,
  } = useQuery({
    queryKey: ["searchRestaurant", searchState],
    queryFn: createSearchRequest,
    enabled: !!city,
  });

  if (error) toast.error(error.toString());

  return { results, isPending };
};
