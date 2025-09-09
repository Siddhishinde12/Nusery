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
    <Card className="flex flex-col overflow-hidden h-full transition-shadow duration-300 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={plant.image}
            alt={plant.name}
            data-ai-hint={plant.dataAiHint}
            width={600}
            height={400}
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <div className="flex justify-between items-start gap-2">
            <CardTitle className="font-headline text-xl mb-1">{plant.name}</CardTitle>
            <Badge variant={plant.type === 'Indoor' ? 'secondary' : 'outline'} className="whitespace-nowrap">{plant.type}</Badge>
        </div>
        <CardDescription className="text-muted-foreground text-sm line-clamp-2 h-[2.5em]">{plant.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-lg font-bold text-primary">${plant.price.toFixed(2)}</p>
        <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
