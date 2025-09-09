import PlantGrid from '@/components/catalog/PlantGrid';

export default function CatalogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Plant Catalog</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
          Browse our extensive collection of plants, seeds, and gardening supplies.
        </p>
      </div>
      <PlantGrid />
    </div>
  );
}
