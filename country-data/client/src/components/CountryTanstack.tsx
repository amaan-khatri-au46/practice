import type { ColumnDef } from "@tanstack/react-table";
import Pagination from 'react-bootstrap/Pagination';
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import "./country.css";
import { useState } from "react";

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  showNavigation?: boolean;
}

export const CountryTanstack = <T extends object>({
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

  const [pageCount,setPageCount] = useState(0)

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

            </table>
          </div>
        </div>
      </div>
    </div>
  );
};



// import React, { useState, useEffect } from 'react';
// import { useTable, usePagination } from 'react-table';
// import Pagination from 'react-bootstrap/Pagination';

// function TableComponent() {
//   const [data, setData] = useState([]);
//   const [pageCount, setPageCount] = useState(0);


//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     state: { pageIndex },
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//       manualPagination: true,
//       pageCount,
//     },
//     usePagination
//   );

//   return (
//     <div>
//       <table {...getTableProps()} className="table">
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map(row => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => (
//                   <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//        <div className="pagination">
//         <Pagination>
//           <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
//           <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
//           {pageOptions.map((page, index) => (
//             <Pagination.Item
//               key={index}
//               active={pageIndex === index}
//               onClick={() => gotoPage(index)}
//             >
//               {index + 1}
//             </Pagination.Item>
//           ))}
//           <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
//           <Pagination.Last
//             onClick={() => gotoPage(pageCount - 1)}
//             disabled={!canNextPage}
//           />
//         </Pagination>
//       </div>
//     </div>
//   );
// }

// export default TableComponent;
