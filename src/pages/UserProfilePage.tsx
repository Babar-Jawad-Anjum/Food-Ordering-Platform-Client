import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import Spinner from "@/components/Spinner";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isPending: isGetLoading } = useGetMyUser();
  const { updateUser, isPending: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) return <Spinner />;

  if (!currentUser) return <span>Unable to load user profile!</span>;

  return (
    <div>
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isUpdateLoading}
      />
    </div>
  );
};

export default UserProfilePage;
