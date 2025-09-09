import OrderTracker from "@/components/tracking/OrderTracker";

export default function TrackingPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Track Your Order</h1>
        <p className="mt-3 text-muted-foreground">
          Enter your order ID below to see the current status of your delivery.
        </p>
      </div>
      <OrderTracker />
    </div>
  );
}
