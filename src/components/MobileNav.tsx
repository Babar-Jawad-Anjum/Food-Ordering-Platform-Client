import { CircleUserRound, Menu } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <Sheet>
      {/* Sheet Triggerer */}
      <SheetTrigger>
        <Menu className="text-[#F88340]" />
      </SheetTrigger>
      {/* Sheet Content */}
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-[#F88340]" />
              {user?.email}
            </span>
          ) : (
            <span className="">Welcome to MernEats.com!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={async () => await loginWithRedirect()}
              className="flex-1 font-bold bg-[#F88340]"
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
