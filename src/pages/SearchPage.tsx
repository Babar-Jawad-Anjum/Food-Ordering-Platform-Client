import { useSearchRestaurants } from "@/api/RestaurantAPi";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
};

const SearchPage = () => {
  const { city } = useParams();

  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
  });

  const { results, isPending: isLoading } = useSearchRestaurants(
    searchState,
    city
  );

  const setPage = (page: number) => {
    setSearchState((prev) => ({
      ...prev,
      page: page,
    }));
  };

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prev) => ({
      ...prev,
      searchQuery: searchFormData.searchQuery,
    }));
  };

  const resetSearch = () => {
    setSearchState((prev) => ({
      ...prev,
      searchQuery: "",
    }));
  };

  if (isLoading) return <span>Loading...</span>;

  if (!results?.data || !city) return <span>No results found.</span>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-4">
      <div id="cuisines-list" className="">
        @TODO: Inset cuisines here.
      </div>
      <div id="main-content" className="flex flex-col gap-4">
        <SearchBar
          placeholder="Search by Cuisines or Restaurant Name"
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          onReset={resetSearch}
        />
        <SearchResultInfo total={results.pagination.total} city={city} />
        {results.data.map((restaurant) => (
          <SearchResultCard restaurant={restaurant} />
        ))}
        <PaginationSelector
          page={results.pagination.page}
          pages={results.pagination.pages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default SearchPage;
