import './globals.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { generateMetadata, generateStructuredData } from '@/lib/seo';
import { generatePageSEO } from '../../data/seo';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { CookieConsent } from '@/components/CookieConsent';
import { AnalyticsProvider } from '@/components/AnalyticsProvider';

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
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
        <AnalyticsProvider>
          <div className="min-h-screen w-full bg-background flex flex-col">
            <div className="flex-1 flex flex-col items-center w-full max-w-5xl mx-auto px-6 md:px-12 ">
              <Header />
              <main className="flex-1 w-full flex flex-col pt-20">{children}</main>
              <Footer />
            </div>
          </div>
          <CookieConsent />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
