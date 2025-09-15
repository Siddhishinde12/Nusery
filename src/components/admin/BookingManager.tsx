'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

const bookingSchema = z.object({
  id: z.string().optional(),
  customerName: z.string().min(1, 'Customer Name is required'),
  bookingDate: z.string().min(1, 'Booking Date is required'),
  deliveryDate: z.string().min(1, 'Delivery Date is required'),
  items: z.string().min(1, 'Items are required'),
  status: z.enum(['Booked', 'Confirmed', 'Ready for Billing', 'Billed', 'Cancelled']),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

type BookingStatus = 'Booked' | 'Confirmed' | 'Ready for Billing' | 'Billed' | 'Cancelled';

type Booking = {
  id: string;
  customerName: string;
  bookingDate: string;
  deliveryDate: string;
  items: string; // Simple string for now, can be expanded to a structured object
  status: BookingStatus;
};

const initialBookings: Booking[] = [
  { id: 'BK001', customerName: 'Alice Johnson', bookingDate: '2024-06-25', deliveryDate: '2024-07-25', items: 'Monstera Deliciosa x2', status: 'Confirmed' },
  { id: 'BK002', customerName: 'Bob Williams', bookingDate: '2024-07-01', deliveryDate: '2024-08-01', items: 'Fiddle Leaf Fig x1, Snake Plant x3', status: 'Booked' },
  { id: 'BK003', customerName: 'Charlie Brown', bookingDate: '2024-07-15', deliveryDate: '2024-07-20', items: 'Lavender x10', status: 'Ready for Billing' },
];

export default function BookingManager() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      customerName: '',
      bookingDate: new Date().toISOString().split('T')[0],
      deliveryDate: '',
      items: '',
      status: 'Booked',
    },
  });

  const onSubmit: SubmitHandler<BookingFormValues> = (data) => {
    if (editingBooking) {
      setBookings(bookings.map((b) => (b.id === editingBooking.id ? { ...editingBooking, ...data } : b)));
    } else {
      const newBooking: Booking = {
        ...data,
        id: `BK${(bookings.length + 1).toString().padStart(3, '0')}`,
      };
      setBookings([...bookings, newBooking]);
    }
    setIsFormOpen(false);
    setEditingBooking(null);
    form.reset();
  };

  const handleEdit = (booking: Booking) => {
    setEditingBooking(booking);
    form.reset(booking);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    setBookings(bookings.filter(b => b.id !== id));
  };

  const openNewBookingForm = () => {
    setEditingBooking(null);
    form.reset({
      customerName: '',
      bookingDate: new Date().toISOString().split('T')[0],
      deliveryDate: '',
      items: '',
      status: 'Booked',
    });
    setIsFormOpen(true);
  }

  const getStatusVariant = (status: BookingStatus) => {
    switch (status) {
      case 'Billed': return 'default';
      case 'Ready for Billing': return 'secondary';
      case 'Confirmed': return 'outline';
      case 'Booked': return 'destructive';
      case 'Cancelled': return 'destructive';
      default: return 'default';
    }
  };


  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Booking Management</h1>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNewBookingForm}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Booking
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingBooking ? 'Edit Booking' : 'Add New Booking'}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} name="customerName" render={({ field }) => (
                  <FormItem><FormLabel>Customer Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="bookingDate" render={({ field }) => (
                  <FormItem><FormLabel>Booking Date</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="deliveryDate" render={({ field }) => (
                  <FormItem><FormLabel>Expected Delivery Date</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="items" render={({ field }) => (
                  <FormItem><FormLabel>Items</FormLabel><FormControl><Textarea placeholder="e.g., Monstera x2, Sunflower Seeds x5" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="status" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                      <SelectContent>
                        <SelectItem value="Booked">Booked</SelectItem>
                        <SelectItem value="Confirmed">Confirmed</SelectItem>
                        <SelectItem value="Ready for Billing">Ready for Billing</SelectItem>
                        <SelectItem value="Billed">Billed</SelectItem>
                        <SelectItem value="Cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit">Save Booking</Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Booking Date</TableHead>
              <TableHead>Delivery Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.id}</TableCell>
                <TableCell>{booking.customerName}</TableCell>
                <TableCell>{booking.bookingDate}</TableCell>
                <TableCell>{booking.deliveryDate}</TableCell>
                <TableCell>{booking.items}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(booking.status)}>{booking.status}</Badge>
                </TableCell>
                <TableCell className="space-x-2">
                  <Button variant="outline" size="icon" onClick={() => handleEdit(booking)}><Edit className="h-4 w-4" /></Button>
                  <Button variant="destructive" size="icon" onClick={() => handleDelete(booking.id)}><Trash2 className="h-4 w-4" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
