import { MoreHorizontal } from "lucide-react";
import { AttendeeListTableCheckbox } from "./Checkbox";
import { IconButton } from "../../IconButton";

export const AttendeeListTableTbody = () => (
  <tbody>
    {Array.from({ length: 10 }).map((_, index) => (
      <tr
        className="border-b border-white/10 hover:bg-white/5 duration-150"
        key={index}
      >
        <Td>
          <AttendeeListTableCheckbox />
        </Td>
        <Td>12874</Td>
        <Td>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-white">Matheus Palmieri</span>
            <span>matheuspalmieridev@gmail.com</span>
          </div>
        </Td>
        <Td>7 dias atrás</Td>
        <Td>3 dias atrás</Td>
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
