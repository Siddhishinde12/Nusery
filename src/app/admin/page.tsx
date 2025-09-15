'use client';
import { useState } from 'react';
import AdminSidebar from '@/components/admin/Sidebar';
import Dashboard from '@/components/admin/Dashboard';
import PlantManager from '@/components/admin/PlantManager';
import OrderManager from '@/components/admin/OrderManager';
import UserManager from '@/components/admin/UserManager';
import ClientManager from '@/components/admin/ClientManager';
import BillingManager from '@/components/admin/BillingManager';
import DispatchManager from '@/components/admin/DispatchManager';
import SupplierManager from '@/components/admin/SupplierManager';
import StockTaking from '@/components/admin/StockTaking';
import HRManager from '@/components/admin/HRManager';
import AccountsManager from '@/components/admin/AccountsManager';
import Reports from '@/components/admin/Reports';
import LedgerManager from '@/components/admin/LedgerManager';
import BookingManager from '@/components/admin/BookingManager';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export type AdminView =
  | 'dashboard'
  | 'plants'
  | 'orders'
  | 'users'
  | 'clients'
  | 'billing'
  | 'dispatch'
  | 'suppliers'
  | 'stock_taking'
  | 'hr'
  | 'accounts'
  | 'reports'
  | 'ledger'
  | 'bookings';

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
      case 'users':
        return <UserManager />;
      case 'clients':
        return <ClientManager />;
      case 'billing':
        return <BillingManager />;
      case 'dispatch':
        return <DispatchManager />;
      case 'suppliers':
        return <SupplierManager />;
      case 'stock_taking':
        return <StockTaking />;
      case 'hr':
        return <HRManager />;
      case 'accounts':
        return <AccountsManager />;
      case 'reports':
        return <Reports />;
      case 'ledger':
        return <LedgerManager />;
      case 'bookings':
        return <BookingManager />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarProvider>
      <AdminSidebar setView={setView} />
      <SidebarInset>
        <main className="flex-1 p-4 md:p-8 overflow-auto">
            {renderView()}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
