import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-[#F88340] py-4">
      <div className="mx-5 md:mx-14 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-[#F88340]"
        >
          MernEats.com
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
