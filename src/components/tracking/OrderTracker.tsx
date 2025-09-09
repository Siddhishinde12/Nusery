'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { orders, type Order, type OrderStatus } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { PackageSearch, CheckCircle2, Truck, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  orderId: z.string().min(1, { message: "Order ID is required." }),
});

type FormValues = z.infer<typeof formSchema>;

const statusSteps: OrderStatus[] = ['Pending', 'Billed', 'Dispatched', 'Delivered'];
const statusIcons: Record<OrderStatus, React.ReactNode> = {
  'Pending': <PackageSearch className="h-6 w-6" />,
  'Billed': <CheckCircle2 className="h-6 w-6" />,
  'Dispatched': <Truck className="h-6 w-6" />,
  'Delivered': <Home className="h-6 w-6" />,
};

export default function OrderTracker() {
  const [order, setOrder] = useState<Order | null>(null);
  const [notFound, setNotFound] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderId: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const foundOrder = orders.find(o => o.id.toLowerCase() === data.orderId.toLowerCase());
    setOrder(foundOrder || null);
    setNotFound(!foundOrder);
  };

  const currentStatusIndex = order ? statusSteps.indexOf(order.status) : -1;

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4">
              <FormField
                control={form.control}
                name="orderId"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input placeholder="Enter Order ID (e.g., BT12345)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Track</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {notFound && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Order Not Found</CardTitle>
            <CardDescription>
              We couldn't find an order with that ID. Please check the ID and try again.
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      {order && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Order Status for #{order.id}</CardTitle>
            <CardDescription>Order placed on {order.date}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="relative">
              <div className="absolute left-0 top-1/2 w-full h-0.5 bg-muted-foreground/30" />
              <div 
                className="absolute left-0 top-1/2 h-0.5 bg-primary transition-all duration-500" 
                style={{ width: `${(currentStatusIndex / (statusSteps.length - 1)) * 100}%` }}
              />
              <div className="relative flex justify-between items-center">
                {statusSteps.map((status, index) => (
                  <div key={status} className="flex flex-col items-center z-10">
                    <div className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-full border-2 bg-background transition-colors duration-500",
                      index <= currentStatusIndex ? "border-primary text-primary" : "border-muted-foreground/30 text-muted-foreground"
                    )}>
                      {statusIcons[status]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-start mt-2">
              {statusSteps.map((status, index) => (
                <div key={status} className="text-center w-1/4">
                    <p className={cn(
                      "text-sm font-medium transition-colors duration-500",
                      index <= currentStatusIndex ? "text-primary" : "text-muted-foreground"
                    )}>{status}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
