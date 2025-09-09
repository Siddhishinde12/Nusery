import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BillingManager() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing & Payment</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Generate invoices and track payments here.</p>
      </CardContent>
    </Card>
  );
}
