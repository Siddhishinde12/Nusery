import { SidebarProvider } from '@/components/ui/sidebar';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider, ProtectedRoute } from '@/hooks/use-auth';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ProtectedRoute>
        <div className="bg-background min-h-screen">
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </div>
        <Toaster />
      </ProtectedRoute>
  );
}
