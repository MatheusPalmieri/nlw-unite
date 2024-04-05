import { AttendeeListTableTfoot } from "./Tfoot";
import { AttendeeListTableThead } from "./Thead";
import { AttendeeListTableTbody } from "./Tbody";
import { useState } from "react";
import { attendees } from "../../../data/attendees";

export const AttendeeListTable = () => {
  const [page, setPage] = useState<number>(1);

  return (
    <div className="border border-white/10 rounded-lg">
      <table className="w-full">
        <AttendeeListTableThead />
        <AttendeeListTableTbody
          attendees={attendees.slice((page - 1) * 10, page * 10)}
        />
        <AttendeeListTableTfoot
          total={attendees.length}
          page={page}
          pages={Math.ceil(attendees.length / 10)}
          setPage={setPage}
        />
      </table>
    </div>
  );
};
