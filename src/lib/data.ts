export type Plant = {
  id: string;
  name: string;
  type: 'Indoor' | 'Outdoor' | 'Seeds' | 'Raw Material';
  price: number;
  quantity: number;
  image: string;
  description: string;
  dataAiHint: string;
};

export const plants: Plant[] = [
  { id: '1', name: 'Monstera Deliciosa', type: 'Indoor', price: 25, quantity: 15, image: 'https://picsum.photos/600/401', dataAiHint: 'monstera plant', description: 'A popular and easy-to-care-for houseplant with iconic split leaves.' },
  { id: '2', name: 'Fiddle Leaf Fig', type: 'Indoor', price: 45, quantity: 8, image: 'https://picsum.photos/600/402', dataAiHint: 'fiddle leaf', description: 'A trendy indoor tree with large, violin-shaped leaves.' },
  { id: '3', name: 'Snake Plant', type: 'Indoor', price: 20, quantity: 30, image: 'https://picsum.photos/600/403', dataAiHint: 'snake plant', description: 'Extremely hardy and requires very little maintenance.' },
  { id: '4', name: 'Lavender', type: 'Outdoor', price: 15, quantity: 50, image: 'https://picsum.photos/600/404', dataAiHint: 'lavender field', description: 'A fragrant herb known for its beautiful purple flowers and calming scent.' },
  { id: '5', name: 'Rose Bush', type: 'Outdoor', price: 35, quantity: 20, image: 'https://picsum.photos/600/405', dataAiHint: 'rose bush', description: 'A classic garden plant that produces beautiful, fragrant roses.' },
  { id: '6', name: 'Sunflower Seeds', type: 'Seeds', price: 5, quantity: 100, image: 'https://picsum.photos/600/406', dataAiHint: 'sunflower seeds', description: 'Easy to grow seeds that produce large, bright yellow sunflowers.' },
  { id: '7', name: 'Organic Cocopeat', type: 'Raw Material', price: 10, quantity: 80, image: 'https://picsum.photos/600/407', dataAiHint: 'soil peat', description: 'A natural fiber made from coconut husks, great for potting mixes.' },
  { id: '8', name: 'All-Purpose Fertilizer', type: 'Raw Material', price: 12, quantity: 60, image: 'https://picsum.photos/600/408', dataAiHint: 'gardening fertilizer', description: 'A balanced fertilizer to promote healthy growth in a wide variety of plants.' },
];

export const productDescriptions = JSON.stringify(plants.map(p => ({
  name: p.name,
  type: p.type,
  price: p.price,
  description: p.description,
  stock: p.quantity,
})), null, 2);

export type OrderStatus = 'Pending' | 'Billed' | 'Dispatched' | 'Delivered';

export type Order = {
  id: string;
  status: OrderStatus;
  items: { plantId: string; quantity: number }[];
  date: string;
};

export const orders: Order[] = [
  { id: 'BT12345', status: 'Dispatched', items: [{ plantId: '1', quantity: 1 }, { plantId: '7', quantity: 1 }], date: '2024-07-20' },
  { id: 'BT67890', status: 'Delivered', items: [{ plantId: '4', quantity: 2 }], date: '2024-07-18' },
  { id: 'BT54321', status: 'Pending', items: [{ plantId: '2', quantity: 1 }], date: '2024-07-21' },
];
