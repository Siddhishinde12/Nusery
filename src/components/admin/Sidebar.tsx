'use client';
import { Sidebar, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarHeader, SidebarTrigger } from '@/components/ui/sidebar';
import { LayoutDashboard, Package, ShoppingCart, Sprout } from 'lucide-react';
import Link from 'next/link';

type AdminSidebarProps = {
    setView: (view: 'dashboard' | 'plants' | 'orders') => void;
};

export default function AdminSidebar({ setView }: AdminSidebarProps) {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Sprout className="h-7 w-7 text-primary" />
                        <span className="font-headline text-2xl font-bold text-foreground">BloomTrack</span>
                    </Link>
                    <SidebarTrigger />
                </div>
            </SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => setView('dashboard')} tooltip="Dashboard">
                        <LayoutDashboard />
                        <span>Dashboard</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => setView('plants')} tooltip="Manage Plants">
                        <Package />
                        <span>Plants</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => setView('orders')} tooltip="Manage Orders">
                        <ShoppingCart />
                        <span>Orders</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </Sidebar>
    );
}
