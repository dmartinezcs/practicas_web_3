"use client";

interface Props {
  setSearchQuery: (value: string) => void;
}

const SearchBar=({ setSearchQuery }: Props) =>{
  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      className="SearchBar"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
export default SearchBar;