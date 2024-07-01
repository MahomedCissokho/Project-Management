import { useMemo } from "react";
import { FinancialRecord, useFinancialRecords } from "../../../contexts/financial-record-context";
import { useTable, Column } from "react-table";

export const FinancialRecordList = () => {
  const { records, updateRecord, deleteRecord } = useFinancialRecords();

  const updateCellRecord = (rowIndex: number, columnId: string, value: any) => {
    const id = records[rowIndex]?._id;
    updateRecord(id ?? "", { ...records[rowIndex], [columnId]: value });
  };

  const columns: Array<Column<FinancialRecord>> = useMemo(
    () => [
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Montant",
        accessor: "montant",
      },
      {
        Header: "Catégorie",
        accessor: "categorie",
      },
      {
        Header: "Tâche",
        accessor: "tache",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Statut",
        accessor: "statutDepense" as const,
      },
      {
        Header: "Actions",
        accessor: "_id",
        Cell: ({ value: id }) => (
          <button
            onClick={() => deleteRecord(id??"")}
            className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-200"
          >
            Supprimer
          </button>
        ),
      },
    ],
    [records]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: records,
    });

  return (
    <div className="mt-6 max-w-3xl mx-auto">
      <table {...getTableProps()} className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="border border-gray-300 px-4 py-2">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="border border-gray-300 px-4 py-2">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
