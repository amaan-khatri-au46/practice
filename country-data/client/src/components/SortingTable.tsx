import type { ColumnDef } from "@tanstack/react-table";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import "./country.css";

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  showNavigation?: boolean;
}

export const SortingTable = <T extends object>({
  data,
  columns,
  showNavigation = true,
}: ReactTableProps<T>) => {
  // React Table For using the table... 
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <div>
        <div>
          <div>
            <table>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              {/* <tfoot>
                {table.getFooterGroups().map((footerGroup) => (
                  <tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.footer,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </tfoot> */}
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
                  <div className="overflow-hidden p-2">
                    {/* ... */}
                    {showNavigation ? (
                      <>
                        <div className="h-2 mt-5" />
                        <div className="flex items-center gap-2">
                          <button
                            className="cursor-pointer rounded border p-1"
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}
                          >
                            {"<<"}
                          </button>
                          <button
                            className="cursor-pointer rounded border p-1"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                          >
                            {"<"}
                          </button>
                          <button
                            className="cursor-pointer rounded border p-1"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                          >
                            {">"}
                          </button>
                          <button
                            className="cursor-pointer rounded border p-1"
                            onClick={() =>
                              table.setPageIndex(table.getPageCount() - 1)
                            }
                            disabled={!table.getCanNextPage()}
                          >
                            {">>"}
                          </button>
                          <span className="flex cursor-pointer items-center gap-1">
                            <div>Page</div>
                            <strong>
                              {table.getState().pagination.pageIndex + 1} of{" "}
                              {table.getPageCount()}
                            </strong>
                          </span>
                          <span className="flex items-center gap-1">
                            | Go to page:
                            <input
                              type="number"
                              defaultValue={
                                table.getState().pagination.pageIndex + 1
                              }
                              onChange={(e) => {
                                const page = e.target.value
                                  ? Number(e.target.value) - 1
                                  : 0;
                                table.setPageIndex(page);
                              }}
                              className="w-16 rounded border p-1"
                            />
                          </span>
                          <select
                            value={table.getState().pagination.pageSize}
                            onChange={(e) => {
                              table.setPageSize(Number(e.target.value));
                            }}
                          >
                            {[10, 15].map((pageSize) => (
                              <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                              </option>
                            ))}
                          </select>
                          <div className="h-4" />
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};



