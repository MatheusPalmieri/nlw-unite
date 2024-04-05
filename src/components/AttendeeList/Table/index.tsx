import { AttendeeListTableTfoot } from "./Tfoot";
import { AttendeeListTableThead } from "./Thead";
import { AttendeeListTableTbody } from "./Tbody";
import { useEffect, useLayoutEffect, useState } from "react";
import { Attendees } from "../../../interfaces/attendees";
import { getAttendees } from "../../../services/attendees";

interface Props {
  search: string;
}

export const AttendeeListTable = ({ search }: Props) => {
  const [limit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  const [pages, setPages] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [attendees, setAttendees] = useState<Attendees[]>([]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  useLayoutEffect(() => {
    const fetchAttendees = () => {
      try {
        const { data, pages, total } = getAttendees(page, limit, search);
        setAttendees(data);
        setPages(pages);
        setTotal(total);
      } catch (error) {
        console.error("Error fetching attendees:", error);
      }
    };

    fetchAttendees();
  }, [page, limit, search]);

  return (
    <div className="border border-white/10 rounded-lg">
      <table className="w-full">
        <AttendeeListTableThead />
        <AttendeeListTableTbody attendees={attendees} />
        <AttendeeListTableTfoot
          show={attendees.length}
          total={total}
          page={page}
          pages={pages}
          setPage={setPage}
        />
      </table>
    </div>
  );
};
