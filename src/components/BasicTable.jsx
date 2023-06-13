import React, { useMemo } from "react";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useTable } from "react-table";
import "./basicTable.css";

const BasicTable = () => {
  const columns = useMemo(() =>COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const TableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups,footerGroups, rows, prepareRow } =
    TableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroups) => (
          <tr {...headerGroups.getHeaderGroupProps()}>
            {headerGroups.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map(footerGroups=>(
            <tr {...footerGroups.getFooterGroupProps()}>
                {footerGroups.headers.map(column=>(
                    <td {...column.getFooterProps}>
                            {column.render("Footer")}
                    </td>
                ))}
            </tr>
        ))}
      </tfoot>
    </table>
  );
};

export default BasicTable;
