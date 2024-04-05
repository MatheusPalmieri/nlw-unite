import { useState } from "react";
import { AttendeeListHeader } from "./Header";
import { AttendeeListTable } from "./Table";

export const AttendeeList = () => {
  const [search, setSearch] = useState<string>(() => {
    const url = new URL(window.location.toString());
    return url.searchParams.get("search") || "";
  });

  return (
    <div className="flex flex-col gap-4">
      <AttendeeListHeader search={search} setSearch={setSearch} />
      <AttendeeListTable search={search} />
    </div>
  );
};
