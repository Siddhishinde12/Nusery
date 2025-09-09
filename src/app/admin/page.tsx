'use client';
import { useState } from 'react';
import AdminSidebar from '@/components/admin/Sidebar';
import Dashboard from '@/components/admin/Dashboard';
import PlantManager from '@/components/admin/PlantManager';
import OrderManager from '@/components/admin/OrderManager';
import { SidebarProvider } from '@/components/ui/sidebar';

type AdminView = 'dashboard' | 'plants' | 'orders';

export default function AdminPage() {
  const [view, setView] = useState<AdminView>('dashboard');

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard />;
      case 'plants':
        return <PlantManager />;
      case 'orders':
        return <OrderManager />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarProvider>
        <div className="flex min-h-screen bg-background">
            <AdminSidebar setView={setView} />
            <main className="flex-1 p-4 md:p-8 overflow-auto">
                {renderView()}
            </main>
        </div>
    </SidebarProvider>
  );
}
