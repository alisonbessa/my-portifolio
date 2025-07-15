import './globals.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { generateMetadata, generateStructuredData } from '@/lib/seo';
import { generatePageSEO } from '../../data/seo';

const seoConfig = generatePageSEO('home');
export const metadata = generateMetadata(seoConfig);

const structuredData = generateStructuredData(seoConfig);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <div className="min-h-screen w-full bg-background flex flex-col">
          <div className="flex-1 flex flex-col items-center w-full max-w-5xl mx-auto px-6 md:px-12 ">
            <Header />
            <main className="flex-1 w-full flex flex-col pt-20">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
