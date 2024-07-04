import { useUser } from "@clerk/clerk-react";
import DashboardLayout from '../Dashboard/DashboardLayout';
import { FinancialRecordForm } from "./Financial-record-form";
import { FinancialRecordsProvider } from "../../../contexts/financial-record-context";

const DashboardExpenses: React.FC = () => {

  return (
    <DashboardLayout>
      
      <div className="">
        <h1 className="mb-6 text-3xl font-bold text-center">Demandes de Dépenses</h1>
        <FinancialRecordsProvider>
          <FinancialRecordForm />
        </FinancialRecordsProvider>
      </div>
    </DashboardLayout>
  );
};

export default DashboardExpenses;
