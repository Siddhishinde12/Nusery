import Link from 'next/link';
import { Sprout, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <Sprout className="h-7 w-7 text-primary" />
              <span className="font-headline text-2xl font-bold text-foreground">BloomTrack</span>
            </Link>
            <p className="text-muted-foreground text-sm">Your one-stop shop for a greener life.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-2">
            <div className="grid gap-1">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <Link href="/catalog" className="text-sm text-muted-foreground hover:text-primary">Catalog</Link>
              <Link href="/recommendations" className="text-sm text-muted-foreground hover:text-primary">AI Helper</Link>
              <Link href="/tracking" className="text-sm text-muted-foreground hover:text-primary">Order Tracking</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link>
            </div>
            <div className="grid gap-1">
              <h4 className="font-semibold mb-2">Legal</h4>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
            </div>
            <div className="grid gap-1">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
                <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BloomTrack. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
