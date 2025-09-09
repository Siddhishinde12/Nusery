import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Plant } from '@/lib/data';
import { ShoppingCart } from 'lucide-react';

type PlantCardProps = {
  plant: Plant;
};

export default function PlantCard({ plant }: PlantCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transition-shadow duration-300 hover:shadow-xl group">
      <CardHeader className="p-0 border-b">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={plant.image}
            alt={plant.name}
            data-ai-hint={plant.dataAiHint}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 flex flex-col">
        <div className="flex justify-between items-start gap-2 mb-2">
            <CardTitle className="font-headline text-xl">{plant.name}</CardTitle>
            <Badge variant={plant.type === 'Indoor' ? 'secondary' : 'outline'} className="whitespace-nowrap shrink-0">{plant.type}</Badge>
        </div>
        <CardDescription className="text-muted-foreground text-sm line-clamp-3 flex-grow">{plant.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-2 flex justify-between items-center">
        <p className="text-2xl font-bold text-primary">${plant.price.toFixed(2)}</p>
        <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
