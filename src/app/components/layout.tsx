import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/landingpage/Navbar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </main>
  );
}
