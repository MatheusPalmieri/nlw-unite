import { MoreHorizontal } from "lucide-react";
import { AttendeeListTableCheckbox } from "./Checkbox";
import { IconButton } from "../../IconButton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
import { Attendees } from "../../../interfaces/attendees";
import { ComponentProps } from "react";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface Props {
  attendees: Attendees[];
}

export const AttendeeListTableTbody = ({ attendees }: Props) => (
  <tbody>
    {attendees &&
      attendees.map((attendee: Attendees) => (
        <Tr key={attendee.id}>
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
        </Tr>
      ))}

    {attendees.length === 0 && (
      <Tr>
        <Td colSpan={6} className="text-center">
          Nenhum participante <b>encontrado</b>.
        </Td>
      </Tr>
    )}
  </tbody>
);

const Tr = ({ children }: { children: React.ReactNode }) => (
  <tr className="h-[69px] border-b border-white/10 hover:bg-white/5 duration-150">
    {children}
  </tr>
);

interface TdProps extends ComponentProps<"td"> {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Td = ({ children, style, ...props }: TdProps) => (
  <td className="py-3 px-4 text-sm text-zinc-300" style={style} {...props}>
    {children}
  </td>
);
