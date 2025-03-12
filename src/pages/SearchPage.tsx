import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();

  return (
    <div>
      <h1>Search Result : {city}</h1>
    </div>
  );
};

export default SearchPage;
