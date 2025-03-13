import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};
const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-lg font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span className="">
        {total} Restaurants found in {city}
        <Link
          to="/"
          className="text-sm font-semibold underline cursor-pointer text-blue-500 ml-1"
        >
          Change Location
        </Link>
      </span>
      @TODO: Insert sort dropdown here
    </div>
  );
};

export default SearchResultInfo;
