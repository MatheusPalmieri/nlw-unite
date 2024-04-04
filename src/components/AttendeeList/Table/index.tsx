import { AttendeeListTableTfoot } from "./Tfoot";
import { AttendeeListTableThead } from "./Thead";
import { AttendeeListTableTbody } from "./Tbody";

export const AttendeeListTable = () => (
  <div className="border border-white/10 rounded-lg">
    <table className="w-full">
      <AttendeeListTableThead />
      <AttendeeListTableTbody />
      <AttendeeListTableTfoot />
    </table>
  </div>
);
