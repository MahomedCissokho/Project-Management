import { useUser } from "@clerk/clerk-react";
import DashboardLayout from '../Dashboard/DashboardLayout';
import { FinancialRecordsProvider } from "../../../contexts/financial-record-context";
import { FinancialRecordList } from "./Financial-record-list";

const FinancialList: React.FC = () => {
  const { user } = useUser();
  return (
    <DashboardLayout>
      <div className="flex flex-col h-full overflow-auto items-center justify-center">
        <h1 className="mb-6 text-3xl font-bold text-center">{user?.username}'s Expenses</h1>
        <FinancialRecordsProvider>
          <FinancialRecordList />
        </FinancialRecordsProvider>
      </div>
    </DashboardLayout>
  );
};

export default FinancialList;
