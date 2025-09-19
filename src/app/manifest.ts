import { MetadataRoute } from 'next';
import { defaultSEO } from '../../data/seo';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultSEO.siteName,
    short_name: 'Alison Bessa',
    description: defaultSEO.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/profile1x1.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/profile1x1.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/profile1x1.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/profile1x1.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/profile1x1.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
