import RecommendationTool from '@/components/recommendations/RecommendationTool';

export default function RecommendationPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">AI Plant Recommendation Tool</h1>
        <p className="mt-3 text-muted-foreground">
          Not sure where to start? Describe your space, your experience level, and what you're looking for, and our AI assistant will suggest the perfect plants and products for you.
        </p>
      </div>
      <RecommendationTool />
    </div>
  );
}
