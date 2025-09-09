import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { plants } from '@/lib/data';
import PlantCard from '@/components/catalog/PlantCard';
import { Leaf, Bot, Truck, Sparkles } from 'lucide-react';

export default function Home() {
  const featuredPlants = plants.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Lush green nursery"
          data-ai-hint="nursery plants"
          fill
          className="object-cover -z-10 brightness-[.6]"
          priority
        />
        <div className="container px-4 md:px-6 z-10">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Grow Your Sanctuary
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-neutral-200">
            From vibrant indoor plants to flourishing outdoor beauties, we have everything you need to cultivate your personal oasis.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <Link href="/catalog">Explore Plants</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link href="/recommendations">AI Plant Assistant</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Plants Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured This Week</h2>
            <p className="mt-3 max-w-xl mx-auto text-center text-muted-foreground">
              Discover our hand-picked selection of this season's most stunning plants.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/catalog">View Full Catalog</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center p-6 rounded-lg">
              <div className="bg-primary/10 p-4 rounded-full mb-4 ring-8 ring-primary/5">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-bold">Vast Selection</h3>
              <p className="text-muted-foreground mt-2 max-w-xs">Explore hundreds of plant varieties for any space, style, and skill level.</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg">
              <div className="bg-primary/10 p-4 rounded-full mb-4 ring-8 ring-primary/5">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-bold">AI Plant Helper</h3>
              <p className="text-muted-foreground mt-2 max-w-xs">Get smart recommendations tailored to your unique preferences and environment.</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg">
              <div className="bg-primary/10 p-4 rounded-full mb-4 ring-8 ring-primary/5">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-bold">Fast Delivery</h3>
              <p className="text-muted-foreground mt-2 max-w-xs">We deliver healthy, happy plants right to your doorstep, with the utmost care.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
