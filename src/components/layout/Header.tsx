'use client';

import Link from 'next/link';
import { Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LogOut, LogIn } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/catalog', label: 'Plant Catalog' },
  { href: '/recommendations', label: 'Recommendation Tool' },
  { href: '/tracking', label: 'Order Tracking' },
  { href: '/contact', label: 'Contact' },
  { href: '/admin', label: 'Admin' },
];

export default function Header() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/');
  };


  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Sprout className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">BloomTrack</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
          {!loading && (
            user ? (
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            ) : (
              <Button variant="ghost" asChild>
                <Link href="/login">
                  <LogIn className="h-5 w-5 mr-2"/>
                  Login
                </Link>
              </Button>
            )
          )}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Sprout className="h-7 w-7 text-primary" />
                  <span className="font-headline text-2xl font-bold">BloomTrack</span>
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block px-2 py-1 text-lg font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
                    {link.label}
                  </Link>
                ))}
                 {!loading && (
                    user ? (
                      <Button variant="ghost" onClick={handleLogout}>
                        <LogOut className="h-5 w-5 mr-2" />
                        Logout
                      </Button>
                    ) : (
                      <Button variant="ghost" asChild>
                        <Link href="/login">
                           <LogIn className="h-5 w-5 mr-2"/>
                           Login
                        </Link>
                      </Button>
                    )
                  )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
