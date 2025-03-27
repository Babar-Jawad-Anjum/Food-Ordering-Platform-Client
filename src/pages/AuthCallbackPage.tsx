import { useCreateMyUser } from "@/api/MyUserApi";
import Spinner from "@/components/Spinner";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();

  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  //flag for useEffect so that it should run only once
  const hasCreatedUser = useRef(false);

  useEffect(() => {
    //User has been registered with Auth0, now save user data in our own db
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return <Spinner />;
};

export default AuthCallbackPage;
