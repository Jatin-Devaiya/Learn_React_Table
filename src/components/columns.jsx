import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "dateofbirth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
  // {
  //     Header : "age",
  //     accessor : "age"
  // },
];
// export const GROUPED_COLUMNS = [
//   {
//     Header: "Id",
//     Footer: "Id",
//     accessor: "id",
//   },
//   {
//     Header: "Name",
//     Footer: "Name",
//     columns: [
//       {
//         Header: "First Name",
//         Footer: "First Name",
//         accessor: "first_name",
//       },
//       {
//         Header: "Last Name",
//         Footer: "Last Name",
//         accessor: "last_name",
//       },
//     ],
//   },
//   {
//     Header: "Info",
//     Footer: "Info",
//     columns: [
//       {
//         Header: "Date of Birth",
//         Footer: "Date of Birth",
//         accessor: "dateofbirth",
//       },
//       {
//         Header: "Country",
//         Footer: "Country",
//         accessor: "country",
//       },
//       {
//         Header: "Phone",
//         Footer: "Phone",
//         accessor: "phone",
//       },
//     ],
//   },
// ];
