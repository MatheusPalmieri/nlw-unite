import { Search } from "lucide-react";

interface Props {
  search: string;
  setSearch: (search: string) => void;
}

export const AttendeeListHeader = ({ search, setSearch }: Props) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <div className="flex gap-3 items-center">
      <h1 className="text-2xl font-bold">Attendee List</h1>

      <div className="w-72 px-3 py-1.5 border border-white/10 bg-transparent rounded-lg flex items-center gap-3">
        <Search className="size-4 text-emerald-300" />
        <input
          className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0"
          placeholder="Buscar participantes..."
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
