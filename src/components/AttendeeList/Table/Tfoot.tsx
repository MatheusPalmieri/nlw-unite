import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { IconButton } from "../../IconButton";

interface Props {
  show: number;
  total: number;
  page: number;
  pages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const AttendeeListTableTfoot = ({
  show,
  total,
  page,
  pages,
  setPage,
}: Props) => {
  const setCurrentPage = (newPage: number) => {
    setPage(newPage);
    const url = new URL(window.location.toString());
    url.searchParams.set("page", newPage.toString());
    window.history.pushState({}, "", url.toString());
  };

  const goToFirstPage = () => setCurrentPage(1);
  const goToPreviousPage = () => setCurrentPage(page - 1);
  const goToNextPage = () => setCurrentPage(page + 1);
  const goToLastPage = () => setCurrentPage(pages);

  return (
    <tfoot>
      <tr>
        <Td>
          Mostrando {show} de {total} itens
        </Td>

        <Td>
          <div className="flex justify-end items-center gap-8">
            <span>
              Página {page} de {pages}
            </span>

            <div className="flex gap-1.5">
              <IconButton
                Icon={ChevronsLeft}
                onClick={goToFirstPage}
                disabled={page === 1}
              />
              <IconButton
                Icon={ChevronLeft}
                onClick={goToPreviousPage}
                disabled={page === 1}
              />
              <IconButton
                Icon={ChevronRight}
                onClick={goToNextPage}
                disabled={page === pages}
              />
              <IconButton
                Icon={ChevronsRight}
                onClick={goToLastPage}
                disabled={page === pages}
              />
            </div>
          </div>
        </Td>
      </tr>
    </tfoot>
  );
};

const Td = ({ children }: { children: React.ReactNode }) => (
  <td colSpan={3} className="py-3 px-4 text-sm text-zinc-300">
    {children}
  </td>
);
