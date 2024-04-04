import { AttendeeListHeader } from "./Header";
import { AttendeeListTable } from "./Table";

export const AttendeeList = () => {
  return (
    <div className="flex flex-col gap-4">
      <AttendeeListHeader />
      <AttendeeListTable />
    </div>
  );
};
