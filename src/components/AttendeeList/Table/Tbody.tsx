import { MoreHorizontal } from "lucide-react";
import { AttendeeListTableCheckbox } from "./Checkbox";
import { IconButton } from "../../IconButton";
import { attendees } from "../../../data/attendees";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface Props {
  attendees: typeof attendees;
}

export const AttendeeListTableTbody = ({ attendees }: Props) => (
  <tbody>
    {attendees.map((attendee) => (
      <tr
        className="border-b border-white/10 hover:bg-white/5 duration-150"
        key={attendee.id}
      >
        <Td>
          <AttendeeListTableCheckbox />
        </Td>
        <Td>{attendee.id}</Td>
        <Td>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-white">{attendee.name}</span>
            <span>{attendee.email}</span>
          </div>
        </Td>
        <Td>{dayjs().to(attendee.createdAt)}</Td>
        <Td>{dayjs().to(attendee.checkedInAt)}</Td>
        <Td>
          <IconButton Icon={MoreHorizontal} transparent />
        </Td>
      </tr>
    ))}
  </tbody>
);

const Td = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <td className="py-3 px-4 text-sm text-zinc-300" style={style}>
    {children}
  </td>
);
