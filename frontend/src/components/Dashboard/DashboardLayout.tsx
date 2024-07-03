import  { ReactNode } from 'react';
import Sidebar from '../SideBar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children } : DashboardLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 h-screen p-8 ml-64 overflow-y-auto bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
