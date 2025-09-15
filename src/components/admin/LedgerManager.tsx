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

const ledgerSchema = z.object({
  id: z.string().optional(),
  lotNumber: z.string().min(1, 'Lot Number is required'),
  itemName: z.string().min(1, 'Item Name is required'),
  type: z.enum(['Plant', 'Seed']),
  quantity: z.coerce.number().int().min(0, 'Quantity must be a non-negative integer'),
  cost: z.coerce.number().min(0, 'Cost must be non-negative'),
  date: z.string().min(1, 'Date is required'),
});

type LedgerFormValues = z.infer<typeof ledgerSchema>;

type LedgerEntry = {
  id: string;
  lotNumber: string;
  itemName: string;
  type: 'Plant' | 'Seed';
  quantity: number;
  cost: number;
  date: string;
};

const initialLedgerEntries: LedgerEntry[] = [
  { id: '1', lotNumber: 'LT123', itemName: 'Monstera Deliciosa', type: 'Plant', quantity: 15, cost: 15, date: '2024-07-20' },
  { id: '2', lotNumber: 'LT124', itemName: 'Sunflower Seeds', type: 'Seed', quantity: 100, cost: 2, date: '2024-07-21' },
];

export default function LedgerManager() {
  const [ledgerEntries, setLedgerEntries] = useState<LedgerEntry[]>(initialLedgerEntries);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<LedgerEntry | null>(null);

  const form = useForm<LedgerFormValues>({
    resolver: zodResolver(ledgerSchema),
    defaultValues: {
      lotNumber: '',
      itemName: '',
      type: 'Plant',
      quantity: 0,
      cost: 0,
      date: new Date().toISOString().split('T')[0],
    },
  });

  const onSubmit: SubmitHandler<LedgerFormValues> = (data) => {
    if (editingEntry) {
      setLedgerEntries(ledgerEntries.map((e) => (e.id === editingEntry.id ? { ...editingEntry, ...data } : e)));
    } else {
      const newEntry: LedgerEntry = {
        ...data,
        id: (ledgerEntries.length + 1).toString(),
      };
      setLedgerEntries([...ledgerEntries, newEntry]);
    }
    setIsFormOpen(false);
    setEditingEntry(null);
    form.reset();
  };

  const handleEdit = (entry: LedgerEntry) => {
    setEditingEntry(entry);
    form.reset(entry);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    setLedgerEntries(ledgerEntries.filter(e => e.id !== id));
  };

  const openNewEntryForm = () => {
    setEditingEntry(null);
    form.reset({
      lotNumber: '',
      itemName: '',
      type: 'Plant',
      quantity: 0,
      cost: 0,
      date: new Date().toISOString().split('T')[0],
    });
    setIsFormOpen(true);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Ledger Management</h1>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNewEntryForm}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Entry
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingEntry ? 'Edit Ledger Entry' : 'Add New Ledger Entry'}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} name="lotNumber" render={({ field }) => (
                  <FormItem><FormLabel>Lot Number</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="itemName" render={({ field }) => (
                  <FormItem><FormLabel>Item Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="type" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                      <SelectContent>
                        <SelectItem value="Plant">Plant</SelectItem>
                        <SelectItem value="Seed">Seed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="quantity" render={({ field }) => (
                  <FormItem><FormLabel>Quantity</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="cost" render={({ field }) => (
                  <FormItem><FormLabel>Cost per Item</FormLabel><FormControl><Input type="number" step="0.01" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                 <FormField control={form.control} name="date" render={({ field }) => (
                  <FormItem><FormLabel>Date</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <Button type="submit">Save</Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Lot Number</TableHead>
              <TableHead>Item Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Cost/Item</TableHead>
              <TableHead>Total Cost</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ledgerEntries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell className="font-medium">{entry.lotNumber}</TableCell>
                <TableCell>{entry.itemName}</TableCell>
                <TableCell>{entry.type}</TableCell>
                <TableCell>{entry.quantity}</TableCell>
                <TableCell>${entry.cost.toFixed(2)}</TableCell>
                <TableCell>${(entry.quantity * entry.cost).toFixed(2)}</TableCell>
                <TableCell>{entry.date}</TableCell>
                <TableCell className="space-x-2">
                  <Button variant="outline" size="icon" onClick={() => handleEdit(entry)}><Edit className="h-4 w-4" /></Button>
                  <Button variant="destructive" size="icon" onClick={() => handleDelete(entry.id)}><Trash2 className="h-4 w-4" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
