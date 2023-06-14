import React, { useMemo } from "react";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useColumnOrder, useTable } from "react-table";
import "./basicTable.css";

const ColumnOrder = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const TableInstance = useTable(
    {
      columns,
      data,
    },
    useColumnOrder
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    setColumnOrder,
  } = TableInstance;

  const changeOrder = () => {
    setColumnOrder([
      "id",
      "first_name",
      "last_name",
      "phone",
      "country",
      "date_of_birth",
    ]);
  };

  return (
    <>
    <br />
      <button onClick={changeOrder} style={{width:"500px",height:"35px"}}>Change Column Order</button>
      <br /><br />
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
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroups) => (
            <tr {...footerGroups.getFooterGroupProps()}>
              {footerGroups.headers.map((column) => (
                <td {...column.getFooterProps}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};

export default ColumnOrder;
