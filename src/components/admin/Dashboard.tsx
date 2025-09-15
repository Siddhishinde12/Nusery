'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DollarSign, ShoppingCart, Package, CreditCard, BookCopy } from 'lucide-react';
import PlantTypeDistributionChart from '@/components/admin/charts/PlantTypeDistributionChart';
import MonthlyRevenueChart from '@/components/admin/charts/MonthlyRevenueChart';

export default function Dashboard() {

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                        <DollarSign className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Total Revenue</span>
                            <span className="text-base font-semibold font-mono text-foreground">₹6,144,678.00</span>
                        </div>
                         <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Yearly Revenue</span>
                            <span className="text-sm font-medium font-mono text-foreground">₹6,144,678.00</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Monthly Revenue</span>
                            <span className="text-sm font-medium font-mono text-foreground">₹222,965.00</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Daily Revenue</span>
                            <span className="text-sm font-medium font-mono text-foreground">₹0.00</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Sales</CardTitle>
                        <ShoppingCart className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Total Sales</span>
                            <span className="text-base font-semibold font-mono text-foreground">₹6,144,678.00</span>
                        </div>
                         <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Yearly Sales</span>
                            <span className="text-sm font-medium font-mono text-foreground">₹6,144,678.00</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Monthly Sales</span>
                            <span className="text-sm font-medium font-mono text-foreground">₹222,965.00</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Daily Sales</span>
                             <span className="text-sm font-medium font-mono text-foreground">₹0.00</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Purchases</CardTitle>
                        <Package className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Total Purchase</span>
                            <span className="text-base font-semibold font-mono text-foreground">₹8,540,552.00</span>
                        </div>
                         <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Yearly Purchase</span>
                            <span className="text-sm font-medium font-mono text-foreground">₹8,540,552.00</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Monthly Purchase</span>
                            <span className="text-sm font-medium font-mono text-foreground">₹89,935.00</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Daily Purchase</span>
                             <span className="text-sm font-medium font-mono text-foreground">₹0.00</span>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Total Expenses</span>
                            <span className="text-base font-semibold font-mono text-foreground">₹3,906,843.00</span>
                        </div>
                         <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Yearly Expenses</span>
                            <span className="text-sm font-medium font-mono text-foreground">₹3,906,843.00</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Monthly Expenses</span>
                            <span className="text-sm font-medium font-mono text-foreground">₹48,474.00</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <span className="text-xs text-muted-foreground">Daily Expenses</span>
                             <span className="text-sm font-medium font-mono text-foreground">₹0.00</span>
                        </div>
                    </CardContent>
                </Card>
                 <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Bookings</CardTitle>
                        <BookCopy className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="space-y-2">
                       <div className="grid grid-cols-2 gap-x-4">
                         <div className="space-y-2">
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-muted-foreground">Total Bookings</span>
                                <span className="text-base font-semibold font-mono text-foreground">650</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-muted-foreground">Yearly Bookings</span>
                                <span className="text-sm font-medium font-mono text-foreground">650</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-muted-foreground">Monthly Bookings</span>
                                <span className="text-sm font-medium font-mono text-foreground">8</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-muted-foreground">Daily Bookings</span>
                                <span className="text-sm font-medium font-mono text-foreground">2</span>
                            </div>
                         </div>
                         <div className="space-y-2 border-l pl-4">
                             <div className="flex justify-between items-baseline">
                                <span className="text-xs text-muted-foreground">Total Plants</span>
                                <span className="text-base font-semibold font-mono text-foreground">6,902,410</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-muted-foreground">Yearly Plants</span>
                                <span className="text-sm font-medium font-mono text-foreground">6,902,410</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-muted-foreground">Monthly Plants</span>
                                <span className="text-sm font-medium font-mono text-foreground">114,850</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-muted-foreground">Daily Plants</span>
                                <span className="text-sm font-medium font-mono text-foreground">27,000</span>
                            </div>
                         </div>
                       </div>
                    </CardContent>
                </Card>
            </div>
             <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-5">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Plant Type Distribution</CardTitle>
                        <CardDescription>A breakdown of plants by their type.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <PlantTypeDistributionChart />
                    </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                     <CardHeader>
                        <CardTitle>Monthly Revenue</CardTitle>
                        <CardDescription>Revenue from the last 6 months.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <MonthlyRevenueChart />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
