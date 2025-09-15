import { SidebarProvider } from '@/components/ui/sidebar';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background min-h-screen">
        <SidebarProvider>
            {children}
        </SidebarProvider>
        <Toaster />
    </div>
  );
}
