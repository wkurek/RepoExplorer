import React from "react";

interface IProps {
  searchQuery: string;
}

const SearchQueryInfo: React.FC<IProps> = ({ searchQuery }) => {
  return <p>Showing users for "{searchQuery}"</p>;
};

export default SearchQueryInfo;
