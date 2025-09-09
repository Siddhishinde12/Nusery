import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { plants } from '@/lib/data';
import PlantCard from '@/components/catalog/PlantCard';
import { Leaf, Bot, Truck } from 'lucide-react';

export default function Home() {
  const featuredPlants = plants.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Lush green nursery"
          data-ai-hint="nursery plants"
          fill
          className="object-cover -z-10 brightness-50"
          priority
        />
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Find Your Green Companion
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
            From vibrant indoor plants to flourishing outdoor beauties, we have everything you need to grow your personal oasis.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/catalog">Explore Plants</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/recommendations">Get a Recommendation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Plants Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Featured Plants</h2>
          <p className="mt-3 max-w-xl mx-auto text-center text-muted-foreground">
            Discover our hand-picked selection of this season's favorites.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/catalog">View Full Catalog</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-bold">Vast Selection</h3>
              <p className="text-muted-foreground mt-2">Explore hundreds of plant varieties for any space and skill level.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-bold">AI Plant Helper</h3>
              <p className="text-muted-foreground mt-2">Get smart recommendations tailored to your unique preferences and environment.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-bold">Fast Delivery</h3>
              <p className="text-muted-foreground mt-2">We deliver healthy, happy plants right to your doorstep, with care.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
