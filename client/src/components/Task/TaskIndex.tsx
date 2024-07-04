//import React from 'react';
import DashboardLayout from '../Dashboard/DashboardLayout';
//import moment from 'moment';
import { summary } from '../../data/data';
import clsx from 'clsx';
import { Chart } from './Chart';
//import { BGS, PRIOTITYSTYELS, TASK_TYPE, getInitials } from './Utils';

import {
  CogIcon as MdAdminPanelSettings,
  ChevronDownIcon as MdKeyboardArrowDown,
  ChevronUpIcon as MdKeyboardArrowUp,
  ArrowUpIcon as MdKeyboardDoubleArrowUp,
  ChevronDoubleUpIcon as FaArrowsToDot,
  ClipboardDocumentCheckIcon as LuClipboardEdit,
  NewspaperIcon as FaNewspaper,
} from '@heroicons/react/16/solid';

{/** 
const TaskTable = ({ tasks }: { tasks: Array<any> }) => {
    console.log("Tasks received:", tasks); // Vérifiez que tasks est reçu correctement
  
    const ICONS: { [key: string]: JSX.Element } = {
      high: <MdKeyboardDoubleArrowUp />,
      medium: <MdKeyboardArrowUp />,
      low: <MdKeyboardArrowDown />,
    };
  
    const TableHeader = () => (
      <thead className='border-b border-gray-300 '>
        <tr className='text-black text-left'>
          <th className='py-2'>Task Title</th>
          <th className='py-2'>Priority</th>
          <th className='py-2'>Team</th>
          <th className='py-2 hidden md:block'>Created At</th>
        </tr>
      </thead>
    );
  
    const TableRow = ({ task }: { task: any }) => (
      <tr className='border-b border-gray-300 text-gray-600 hover:bg-gray-300/10'>
        <td className='py-2'>
          <div className='flex items-center gap-2'>
            <div
              className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage as keyof typeof TASK_TYPE])}
            />
            <p className='text-base text-black'>{task.title}</p>
          </div>
        </td>
  
        <td className='py-2'>
          <div className='flex gap-1 items-center'>
            <span className={clsx("text-lg", PRIOTITYSTYELS[task.priority as keyof typeof PRIOTITYSTYELS])}>
              {ICONS[task.priority]}
            </span>
            <span className='capitalize'>{task.priority}</span>
          </div>
        </td>
  
        <td className='py-2'>
          <div className='flex'>
            {task.team.map((m: string, index: React.Key | null | undefined) => (
              <div
                key={index}
                className={clsx(
                  "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",
                  BGS[(index as number) % BGS.length]
                )}
              >
                <span className='text-center'>{getInitials(m)}</span>
              </div>
            ))}
          </div>
        </td>
        <td className='py-2 hidden md:block'>
          <span className='text-base text-gray-600'>
            {moment(task?.date).fromNow()}
          </span>
        </td>
      </tr>
    );
  
    // Vérifiez que tasks n'est pas vide avant de rendre la table
    if (!tasks || tasks.length === 0) {
      return <div>No tasks to display</div>;
    }
  
    return (
      <div className='w-full md:w-2/3 bg-white px-2 md:px-4 pt-4 pb-4 shadow-md rounded'>
        <table className='w-full'>
          <TableHeader />
          <tbody>
            {tasks.map((task, id) => (
              <TableRow key={id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
*/}
const TaskIndex = () => {
  const totals = summary.tasks;

  const stats = [
    {
      _id: '1',
      label: 'TOTAL TASK',
      total: summary?.totalTasks || 0,
      icon: <FaNewspaper />,
      bg: 'bg-[#1d4ed8]',
    },
    {
      _id: '2',
      label: 'COMPLETED TASK',
      total: totals['completed'] || 0,
      icon: <MdAdminPanelSettings />,
      bg: 'bg-[#0f766e]',
    },
    {
      _id: '3',
      label: 'TASK IN PROGRESS',
      total: totals['in progress'] || 0,
      icon: <LuClipboardEdit />,
      bg: 'bg-[#f59e0b]',
    },
    {
      _id: '4',
      label: 'TODOS',
      total: totals['todo'] || 0,
      icon: <FaArrowsToDot />,
      bg: 'bg-[#be185d]',
    },
  ];

  const Card = ({ label, count, bg, icon }: { label: string; count: number; bg: string; icon: JSX.Element }) => (
    <div className='w-full h-32 bg-white p-5 shadow-md rounded-md flex items-center justify-between'>
      <div className='flex flex-1 flex-col justify-between'>
        <p className='text-base text-gray-600'>{label}</p>
        <span className='text-2xl font-semibold'>{count}</span>
        <span className='text-sm text-gray-400'>{'110 last month'}</span>
      </div>

      <div className={clsx('w-10 h-10 rounded-full flex items-center justify-center text-white', bg)}>{icon}</div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className='h-full py-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
          {stats.map(({ icon, bg, label, total }, index) => (
            <Card key={index} icon={icon} bg={bg} label={label} count={total} />
          ))}
        </div>

        <div className='w-full bg-white my-16 p-4 rounded shadow-sm'>
          <h4 className='text-xl text-gray-600 font-semibold'>Chart by Priority</h4>
          <Chart />
        </div>

        <div className='w-full md:w-2/3'>
        {/**  <TaskTable tasks={summary.last10Task || []} />*/} 
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TaskIndex;
