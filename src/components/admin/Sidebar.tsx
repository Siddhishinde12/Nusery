'use client';
import { Sidebar, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarHeader, SidebarTrigger, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { LayoutDashboard, Package, ShoppingCart, Sprout, Users, Briefcase, DollarSign, Truck, Factory, ClipboardCheck, Users2, BookUser, BarChart2 } from 'lucide-react';
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
                        <span className="font-headline text-2xl font-bold text-sidebar-foreground">BloomTrack</span>
                    </Link>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('dashboard')} tooltip="Dashboard">
                            <LayoutDashboard />
                            <span>Dashboard</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('users')} tooltip="User Management">
                            <Users />
                            <span>Users</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('clients')} tooltip="Client Management">
                            <Briefcase />
                            <span>Clients</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('plants')} tooltip="Inventory Management">
                            <Package />
                            <span>Inventory</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('orders')} tooltip="Order Management">
                            <ShoppingCart />
                            <span>Orders</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('billing')} tooltip="Billing & Payment">
                            <DollarSign />
                            <span>Billing</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('dispatch')} tooltip="Dispatch & Transport">
                            <Truck />
                            <span>Dispatch</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('suppliers')} tooltip="Supplier Management">
                            <Factory />
                            <span>Suppliers</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('stock_taking')} tooltip="Stock-Taking">
                            <ClipboardCheck />
                            <span>Stock-Taking</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('hr')} tooltip="HR Management">
                            <Users2 />
                            <span>HR</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('accounts')} tooltip="Accounts & Expenses">
                            <BookUser />
                            <span>Accounts</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={() => setView('reports')} tooltip="Reports">
                            <BarChart2 />
                            <span>Reports</span>
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
