import { AttendeeListTableCheckbox } from "./Checkbox";

export const AttendeeListTableThead = () => (
  <thead>
    <tr className="border-b border-white/10">
      <Th style={{ width: 64 }}>
        <AttendeeListTableCheckbox />
      </Th>
      <Th>Código</Th>
      <Th>Participante</Th>
      <Th>Data de Inscrição</Th>
      <Th>Data do Check-In</Th>
      <Th style={{ width: 64 }}> </Th>
    </tr>
  </thead>
);

const Th = ({
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
