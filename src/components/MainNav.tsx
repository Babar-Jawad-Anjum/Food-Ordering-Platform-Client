import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "./ui/button";
import UserNameMenu from "./UserNameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-[#F88340]">
            Order Status
          </Link>
          <UserNameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-[#F88340] hover:bg-white"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
