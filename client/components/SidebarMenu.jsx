"use client"
import { MdOutlineDashboard, MdCancelPresentation } from 'react-icons/md';
import { CiEdit, CiCircleCheck } from 'react-icons/ci';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { GrInProgress } from 'react-icons/gr';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const nav = [
  {
    name: 'Dashboard',
    link: '/',
    icon: <MdOutlineDashboard />,
  },
  {
    name: 'Create New',
    link: '/create',
    icon: <CiEdit />,
  },
  {
    name: 'New Task',
    link: '/new',
    icon: <HiOutlineQueueList />,
  },
  {
    name: 'In Progress',
    link: '/progress',
    icon: <GrInProgress />,
  },
  {
    name: 'Completed',
    link: '/completed',
    icon: <CiCircleCheck />,
  },
  {
    name: 'Canceled',
    link: '/cancel',
    icon: <MdCancelPresentation />,
  },
];
export default function SidebarMenu() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      {nav.map((item, index) => (
        <Link
          className={`flex text-md items-center gap-4 py-4 hover:bg-accent-hover border-l-8   transition-all duration-300 hover:border-accent ${
            pathname === item.link ? 'bg-accent-hover border-accent' : "border-transparent"
          }`}
          href={item.link}
          key={index}
        >
          <span className="text-2xl"></span>
          {item.icon} {item.name}
        </Link>
      ))}
    </div>
  );
}
