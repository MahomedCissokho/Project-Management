import  { ReactNode } from 'react';
import Sidebar from '../SideBar';
import { SignedIn } from '@clerk/clerk-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children } : DashboardLayoutProps) => {
  return (
    <SignedIn>
      <div className="flex">
        <Sidebar/>
        <div className="flex-1 h-screen p-8 ml-64 overflow-y-auto bg-gray-100">
          {children}
        </div>
      </div>
    </SignedIn>
    
  );
};

export default DashboardLayout;
