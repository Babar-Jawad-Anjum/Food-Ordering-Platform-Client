import { Order, Restaurant, UpdateOrderStatusRequest } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response.ok) throw new Error("Failed to create restaurant!");

    return response.json();
  };

  const {
    mutateAsync: createRestaurant,
    isPending, // ✅ FIXED: use `isPending` instead of `isLoading`
    error,
    isSuccess,
  } = useMutation({
    mutationFn: createMyRestaurantRequest,
  });

  if (isSuccess) toast.success("Restaurant created!");
  if (error) {
    toast.error(error.toString());
  }

  return { createRestaurant, isPending };
};

export const useGetMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantRequest = async (): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) throw new Error("Failed to get restaurant!");

    return response.json();
  };

  const {
    data: restaurant,
    isPending, // ✅ FIXED: use `isPending` instead of `isLoading`
    // error,
  } = useQuery({
    queryKey: ["fetchMyRestaurant"],
    queryFn: getMyRestaurantRequest,
  });

  // if (error) toast.error(error.toString());

  return { restaurant, isPending };
};

export const useUpdateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response.ok) throw new Error("Failed to update restaurant!");

    return response.json();
  };

  const {
    mutateAsync: updateRestaurant,
    isPending, // ✅ FIXED: use `isPending` instead of `isLoading`
    error,
    isSuccess,
  } = useMutation({
    mutationFn: updateMyRestaurantRequest,
  });

  if (isSuccess) toast.success("Restaurant Updated!");
  if (error) {
    toast.error(error.toString());
  }

  return { updateRestaurant, isPending };
};

export const useGetMyRestaurantOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantOrdersRequest = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant/order`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }

    return response.json();
  };

  const { data: orders, isPending } = useQuery({
    queryKey: ["fetchMyRestaurantOrders"],
    queryFn: getMyRestaurantOrdersRequest,
  });

  return { orders, isPending };
};

export const useUpdateMyRestaurantOrder = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyRestaurantOrder = async (
    updateStatusOrderRequest: UpdateOrderStatusRequest
  ) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/my/restaurant/order/${updateStatusOrderRequest.orderId}/status`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: updateStatusOrderRequest.status }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update status");
    }

    return response.json();
  };

  const {
    mutateAsync: updateRestaurantStatus,
    isPending,
    isError,
    isSuccess,
    reset,
  } = useMutation({ mutationFn: updateMyRestaurantOrder });

  if (isSuccess) {
    toast.success("Order Updated");
  }

  if (isError) {
    toast.error("Unable to update order");
    reset();
  }

  return { updateRestaurantStatus, isPending };
};
