import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../../contexts/financial-record-context";
import { CurrencyEuroIcon, TagIcon, ClipboardDocumentCheckIcon, XCircleIcon } from "@heroicons/react/16/solid";

export const FinancialRecordForm = () => {
  const [description, setDescription] = useState("");
  const [montant, setMontant] = useState("");
  const [categorie, setCategorie] = useState("");
  const [tache, setTache] = useState("");
  const [statutDepense, setStatutDepense] = useState("Valide");
  const { addRecord } = useFinancialRecords();
  const { user } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newRecord = {
      userId: user?.id ?? "",
      date: new Date(),
      description: description,
      montant: parseFloat(montant),
      categorie: categorie,
      tache: tache,
      statutDepense: statutDepense,
    };

    addRecord(newRecord);
    setDescription("");
    setMontant("");
    setCategorie("");
    setTache("");
    setStatutDepense("Valide");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <ClipboardDocumentCheckIcon className="h-5 w-5 text-blue-400" />
            </div>
            <input
              type="text"
              id="description"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Description de la dépense"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="montant" className="block text-sm font-medium text-gray-700">
            Montant
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CurrencyEuroIcon className="h-5 w-5 text-blue-400" />
            </div>
            <input
              type="number"
              id="montant"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Montant de la dépense"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="categorie" className="block text-sm font-medium text-gray-700">
            Catégorie
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <TagIcon className="h-5 w-5 text-blue-400" />
            </div>
            <select
              id="categorie"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
            >
              <option value="">Sélectionner une catégorie</option>
              <option value="Food">Alimentation</option>
              <option value="Rent">Loyer</option>
              <option value="Salary">Salaire</option>
              <option value="Utilities">Matériel</option>
              <option value="Entertainment">Divertissement</option>
              <option value="Other">Autre</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="tache" className="block text-sm font-medium text-gray-700">
            Tâche
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <TagIcon className="h-5 w-5 text-blue-400" />
            </div>
            <select
              id="tache"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={tache}
              onChange={(e) => setTache(e.target.value)}
            >
              <option value="">Sélectionner une tâche</option>
              <option value="Development">Développement</option>
              <option value="Unit Testing">Test unitaire</option>
              <option value="Integration Testing">Intégration</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="statutDepense" className="block text-sm font-medium text-gray-700">
            Statut de la dépense
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <XCircleIcon className="h-5 w-5 text-blue-400" />
            </div>
            <select
              id="statutDepense"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={statutDepense}
              onChange={(e) => setStatutDepense(e.target.value)}
            >
              <option value="Valide">Validé</option>
              <option value="EnAttenteDeValidation">En attente de validation</option>
              <option value="Rejeté">Rejeté</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Demander
          </button>
        </div>
      </form>
    </div>
  );
};
