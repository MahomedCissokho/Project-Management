import React from "react";
import { FinancialRecord, useFinancialRecords } from "../../../contexts/financial-record-context";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import {
  ClipboardDocumentCheckIcon,
  ClockIcon,
  XCircleIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/16/solid";

export const FinancialRecordList = () => {
  const { records, updateRecord, deleteRecord } = useFinancialRecords();

  // Définition des statuts à afficher avec leurs icônes (à titre d'exemple)
  const statuses = [
    { name: "Valide", icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-green-500 mr-2" /> },
    { name: "EnAttenteDeValidation", icon: <ClockIcon className="h-6 w-6 text-yellow-500 mr-2" /> },
    { name: "Rejete", icon: <XCircleIcon className="h-6 w-6 text-red-500 mr-2" /> },
    { name: "EnCoursDeTraitement", icon: <DocumentDuplicateIcon className="h-6 w-6 text-blue-500 mr-2" /> },
    { name: "Annule", icon: <XCircleIcon className="h-6 w-6 text-gray-500 mr-2" /> },
  ];

  // Regroupement des dépenses par statut
  const groupedByStatus: { [key: string]: FinancialRecord[] } = records.reduce((acc, record) => {
    if (!acc[record.statutDepense as string]) {
      acc[record.statutDepense as string] = [];
    }
    acc[record.statutDepense as string].push(record);
    return acc;
  }, {} as { [key: string]: FinancialRecord[] });

  // Données pour le graphique (total par catégorie)
  const categories = ["Food", "Rent", "Salary", "Utilities", "Entertainment", "Others"];
  const dataForChart = categories.map((category) => ({
    categorie: category,
    total: records.filter((record) => record.categorie === category).reduce((acc, record) => acc + record.montant, 0),
  }));

  const updateCellRecord = (rowIndex: number, columnId: string, value: any) => {
    const id = records[rowIndex]?._id;
    updateRecord(id ?? "", { ...records[rowIndex], [columnId]: value });
  };

  return (
    <div className="max-w-3xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {statuses.map((status) => (
        <div key={status.name} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <div className="p-4">
            <div className="flex items-center mb-2">
              {status.icon}
              <p className="text-lg font-medium">{status.name}</p>
            </div>
            <p className="text-gray-500">Total Montant: {groupedByStatus[status.name]?.reduce((total, record) => total + record.montant, 0) ?? 0} €</p>
            <ul className="divide-y divide-gray-200">
              {groupedByStatus[status.name]?.map((record) => (
                <li key={record._id} className="py-2">
                  <p className="text-sm font-medium">{record.description}</p>
                  <p className="text-sm text-gray-500">{record.montant} €</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 col-span-full">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dataForChart}>
            <XAxis dataKey="categorie" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#3182CE" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="col-span-full">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tâche</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {records.map((record, rowIndex) => (
              <tr key={record._id} className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-6 py-4 whitespace-nowrap">{record.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.montant} €</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.categorie}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.tache}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(record.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.statutDepense}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => deleteRecord(record._id ?? "")}
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-200 mr-2"
                  >
                    Supprimer
                  </button>
                  <button
                    onClick={() => updateCellRecord(rowIndex, "statutDepense", "EnAttenteDeValidation")}
                    className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 transition duration-200 mr-2"
                  >
                    En attente
                  </button>
                  <button
                    onClick={() => updateCellRecord(rowIndex, "statutDepense", "Rejete")}
                    className="bg-gray-500 text-white py-1 px-3 rounded-md hover:bg-gray-600 transition duration-200"
                  >
                    Rejeter
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
