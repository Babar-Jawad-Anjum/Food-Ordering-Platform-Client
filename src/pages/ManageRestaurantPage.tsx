import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurat-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isPending } = useCreateMyRestaurant();

  return (
    <div>
      <ManageRestaurantForm onSave={createRestaurant} isLoading={isPending} />
    </div>
  );
};

export default ManageRestaurantPage;
