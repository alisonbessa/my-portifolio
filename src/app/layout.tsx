import './globals.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A boilerplate for building a portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen w-full bg-background flex flex-col">
          <div className="flex-1 flex flex-col items-center w-full max-w-5xl mx-auto px-4">
            <Header />
            <main className="flex-1 w-full flex flex-col pt-20">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
