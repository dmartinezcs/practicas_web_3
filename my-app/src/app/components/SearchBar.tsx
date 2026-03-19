"use client";

interface Props {
  setSearchQuery: (value: string) => void;
}

export default function SearchBar({ setSearchQuery }: Props) {
  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      className="w-full border p-2 rounded-md"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}