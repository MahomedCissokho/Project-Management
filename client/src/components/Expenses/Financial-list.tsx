import { useUser } from "@clerk/clerk-react";
import DashboardLayout from '../Dashboard/DashboardLayout';
import { FinancialRecordsProvider } from "../../../contexts/financial-record-context";
import { FinancialRecordList } from "./Financial-record-list";
import { Link } from "react-router-dom";

const FinancialList: React.FC = () => {
  const { user } = useUser();
  return (
    <DashboardLayout>
      <div className="">
        <h1 className="mb-6 text-3xl font-bold text-center">{user?.username}'s Expenses</h1>
        <FinancialRecordsProvider>
          <div className="flex justify-between w-full max-w-3xl mb-4">
            <Link to="/dashboadExpenses">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
                Faire une demande de dépense
              </button>
            </Link>
          </div>
          <FinancialRecordList />
        </FinancialRecordsProvider>
      </div>
    </DashboardLayout>
  );
};

export default FinancialList;
