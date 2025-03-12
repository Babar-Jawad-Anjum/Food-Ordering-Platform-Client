import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurat-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { restaurant } = useGetMyRestaurant();
  const { createRestaurant, isPending } = useCreateMyRestaurant();

  return (
    <div>
      <ManageRestaurantForm
        restaurant={restaurant}
        onSave={createRestaurant}
        isLoading={isPending}
      />
    </div>
  );
};

export default ManageRestaurantPage;
