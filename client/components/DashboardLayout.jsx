import Header from '@/components/Header';
import SidebarMenu from '@/components/SidebarMenu';

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <div className="  flex gap-10  ">
        <div className="w-72 h-screen shadow-custom bg-white  pt-28">
          <SidebarMenu />
        </div>
        <div className="pt-32 w-full pr-10">{children}</div>
      </div>
    </>
  );
}
