import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../../contexts/financial-record-context";

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
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <input
            type="text"
            id="description"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="montant" className="block text-sm font-medium text-gray-700">
            Montant:
          </label>
          <input
            type="number"
            id="montant"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="categorie" className="block text-sm font-medium text-gray-700">
            Catégorie:
          </label>
          <select
            id="categorie"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
        <div className="mb-4">
          <label htmlFor="tache" className="block text-sm font-medium text-gray-700">
            Tâche:
          </label>
          <select
            id="tache"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={tache}
            onChange={(e) => setTache(e.target.value)}
          >
            <option value="">Sélectionner une tâche</option>
            <option value="Developpment">Développement</option>
            <option value="Test unitaire">Test unitaire</option>
            <option value="Test integration">Intégration</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="statutDepense" className="block text-sm font-medium text-gray-700">
            Statut de la dépense:
          </label>
          <select
            id="statutDepense"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={statutDepense}
            onChange={(e) => setStatutDepense(e.target.value)}
          >
            <option value="Valide">Validé</option>
            <option value="EnAttentedevalidation">En attente de validation</option>
            <option value="Rejeté">Rejeté</option>
          </select>
        </div>
        <button type="submit" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
          Demander
        </button>
      </form>
    </div>
  );
};
