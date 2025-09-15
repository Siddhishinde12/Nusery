'use client';
import { Sidebar, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarHeader, SidebarTrigger, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { LayoutDashboard, Package, ShoppingCart, Sprout, Users, Briefcase, DollarSign, Truck, Factory, ClipboardCheck, Users2, BookUser, BarChart2, BookCopy, BookMarked } from 'lucide-react';
import Link from 'next/link';
import type { AdminView } from '@/app/admin/page';

type AdminSidebarProps = {
    setView: (view: AdminView) => void;
};

export default function AdminSidebar({ setView }: AdminSidebarProps) {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                        <Sprout className="h-7 w-7 text-sidebar-primary" />
                        <span className="font-headline text-2xl font-bold text-sidebar-foreground group-data-[collapsible=icon]:hidden">BloomTrack</span>
                    </Link>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('dashboard')} tooltip="Dashboard">
                            <LayoutDashboard />
                            <span className="group-data-[collapsible=icon]:hidden">Dashboard</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('users')} tooltip="User Management">
                            <Users />
                            <span className="group-data-[collapsible=icon]:hidden">Users</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('clients')} tooltip="Client Management">
                            <Briefcase />
                            <span className="group-data-[collapsible=icon]:hidden">Clients</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('bookings')} tooltip="Booking Management">
                            <BookMarked />
                            <span className="group-data-[collapsible=icon]:hidden">Bookings</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('plants')} tooltip="Inventory Management">
                            <Package />
                            <span className="group-data-[collapsible=icon]:hidden">Inventory</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('orders')} tooltip="Order Management">
                            <ShoppingCart />
                            <span className="group-data-[collapsible=icon]:hidden">Orders</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('billing')} tooltip="Billing & Payment">
                            <DollarSign />
                            <span className="group-data-[collapsible=icon]:hidden">Billing</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('ledger')} tooltip="Ledger Management">
                            <BookCopy />
                            <span className="group-data-[collapsible=icon]:hidden">Ledger</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('dispatch')} tooltip="Dispatch & Transport">
                            <Truck />
                            <span className="group-data-[collapsible=icon]:hidden">Dispatch</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('suppliers')} tooltip="Supplier Management">
                            <Factory />
                            <span className="group-data-[collapsible=icon]:hidden">Suppliers</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('stock_taking')} tooltip="Stock-Taking">
                            <ClipboardCheck />
                            <span className="group-data-[collapsible=icon]:hidden">Stock-Taking</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('hr')} tooltip="HR Management">
                            <Users2 />
                            <span className="group-data-[collapsible=icon]:hidden">HR</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('accounts')} tooltip="Accounts & Expenses">
                            <BookUser />
                            <span className="group-data-[collapsible=icon]:hidden">Accounts</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('reports')} tooltip="Reports">
                            <BarChart2 />
                            <span className="group-data-[collapsible=icon]:hidden">Reports</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
             <SidebarFooter>
                <SidebarTrigger className="w-full" />
            </SidebarFooter>
        </Sidebar>
    );
}
