// Plant Recommendation Tool
'use server';

/**
 * @fileOverview A plant and related product recommendation AI agent.
 *
 * - plantRecommendation - A function that handles the plant recommendation process.
 * - PlantRecommendationInput - The input type for the plantRecommendation function.
 * - PlantRecommendationOutput - The return type for the plantRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PlantRecommendationInputSchema = z.object({
  userPreferences: z
    .string()
    .describe(
      'The user preferences for plants, including desired plant type, climate, and experience level.'
    ),
  productDescriptions: z
    .string()
    .describe('Structured descriptions of available plants and products.'),
  feedback: z.string().optional().describe('Optional user feedback on previous recommendations.'),
});
export type PlantRecommendationInput = z.infer<typeof PlantRecommendationInputSchema>;

const PlantRecommendationOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A list of recommended plants and related products based on user preferences.'),
  reasoning: z.string().describe('Explanation of why the recommendations were made.'),
  alternativePlants: z
    .string()
    .optional()
    .describe('Alternative plant recommendations if the preferred plants are out of stock.'),
});
export type PlantRecommendationOutput = z.infer<typeof PlantRecommendationOutputSchema>;

export async function plantRecommendation(input: PlantRecommendationInput): Promise<PlantRecommendationOutput> {
  return plantRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'plantRecommendationPrompt',
  input: {schema: PlantRecommendationInputSchema},
  output: {schema: PlantRecommendationOutputSchema},
  prompt: `You are a nursery assistant bot that recommends plants and products based on user preferences, product descriptions, and feedback.

  User Preferences: {{{userPreferences}}}
  Product Descriptions: {{{productDescriptions}}}
  Feedback: {{#if feedback}}{{{feedback}}}{{else}}No feedback yet.{{/if}}

  Based on the above information, recommend plants and related products to the user. Explain your reasoning for the recommendations.
  If some plants are out of stock, recommend alternatives.

  Format your output as a JSON object with the following keys:
  - recommendations: A list of recommended plants and products based on user preferences.
  - reasoning: Explanation of why the recommendations were made.
  - alternativePlants: Alternative plant recommendations if the preferred plants are out of stock.
  `,
});

const plantRecommendationFlow = ai.defineFlow(
  {
    name: 'plantRecommendationFlow',
    inputSchema: PlantRecommendationInputSchema,
    outputSchema: PlantRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
