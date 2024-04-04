import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { IconButton } from "../../IconButton";

export const AttendeeListTableTfoot = () => (
  <tfoot>
    <tr>
      <Td>Mostrando 10 de 248 itens</Td>

      <Td>
        <div className="flex justify-end items-center gap-8">
          <span>Página 1 de 25</span>

          <div className="flex gap-1.5">
            <IconButton Icon={ChevronsLeft} />
            <IconButton Icon={ChevronLeft} />
            <IconButton Icon={ChevronRight} />
            <IconButton Icon={ChevronsRight} />
          </div>
        </div>
      </Td>
    </tr>
  </tfoot>
);

const Td = ({ children }: { children: React.ReactNode }) => (
  <td colSpan={3} className="py-3 px-4 text-sm text-zinc-300">
    {children}
  </td>
);
