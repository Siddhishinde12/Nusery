'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { plantRecommendation } from '@/ai/flows/plant-recommendation-tool';
import { productDescriptions } from '@/lib/data';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, Lightbulb, Recycle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  userPreferences: z.string().min(10, { message: "Please describe your preferences in at least 10 characters." }),
  feedback: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

type RecommendationOutput = {
  recommendations: string;
  reasoning: string;
  alternativePlants?: string;
};

export default function RecommendationTool() {
  const [recommendation, setRecommendation] = useState<RecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userPreferences: '',
      feedback: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setRecommendation(null);
    try {
      const result = await plantRecommendation({
        userPreferences: data.userPreferences,
        productDescriptions: productDescriptions,
        feedback: data.feedback,
      });
      setRecommendation(result);
    } catch (error) {
      console.error('Error getting recommendation:', error);
      toast({
        title: "An error occurred",
        description: "Failed to get recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-12 gap-8">
      <div className="md:col-span-5 lg:col-span-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Tell Us What You Need</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="userPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Preferences</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'I'm a beginner looking for a low-maintenance indoor plant for a low-light apartment. I have a cat.'"
                          rows={6}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="feedback"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Feedback on Previous Suggestions (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'The last plant was great, but I'd like something that flowers.'"
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  {isLoading ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...</>
                  ) : (
                    <><Sparkles className="mr-2 h-4 w-4" /> Get Recommendations</>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-7 lg:col-span-8">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-full min-h-[400px] rounded-lg border border-dashed">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <p className="font-headline text-xl">Cultivating Recommendations...</p>
            <p className="text-muted-foreground">Our AI is digging through our catalog for you.</p>
          </div>
        )}
        {recommendation && (
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Here's What We Found For You</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="flex items-center font-semibold mb-2"><Sparkles className="h-5 w-5 mr-2 text-primary" />Recommendations</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">{recommendation.recommendations}</p>
              </div>
              <div>
                <h3 className="flex items-center font-semibold mb-2"><Lightbulb className="h-5 w-5 mr-2 text-primary" />Reasoning</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">{recommendation.reasoning}</p>
              </div>
              {recommendation.alternativePlants && (
                <div>
                  <h3 className="flex items-center font-semibold mb-2"><Recycle className="h-5 w-5 mr-2 text-primary" />Alternative Plants</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{recommendation.alternativePlants}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
        {!isLoading && !recommendation && (
           <div className="flex flex-col items-center justify-center h-full min-h-[400px] rounded-lg border border-dashed">
            <Sparkles className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="font-headline text-xl text-muted-foreground">Your recommendations will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}
