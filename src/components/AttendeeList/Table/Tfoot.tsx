import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  Type as IconType,
} from "lucide-react";

export const AttendeeListTableTfoot = () => (
  <tfoot>
    <tr>
      <Td>Mostrando 10 de 248 itens</Td>

      <Td>
        <div className="flex justify-end items-center gap-8">
          <span>Página 1 de 25</span>

          <div className="flex gap-1.5">
            <Button Icon={ChevronsLeft} />
            <Button Icon={ChevronLeft} />
            <Button Icon={ChevronRight} />
            <Button Icon={ChevronsRight} />
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

const Button = ({ Icon }: { Icon: typeof IconType }) => (
  <button className="bg-white/10 hover:bg-white/20 duration-150 border border-white/10 rounded-md p-1.5">
    <Icon className="size-4 text-white" />
  </button>
);
