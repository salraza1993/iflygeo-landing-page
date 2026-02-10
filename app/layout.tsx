import type { Metadata, Viewport } from "next";
import {
  inter,
  Roboto,
  bebasNeue,
  courierPrime,
  gilroy,
  gilroyThin,
  gilroyUltraLight,
  gilroyLight,
  gilroyRegular,
  gilroyMedium,
  gilroySemiBold,
  gilroyBold,
} from "./../public/Fonts";
import "@/app/assets/css/globals.css";
import {  } from "next/navigation";
import LayoutManager from "./components/layout/LayoutManager";
import { GoogleTagManager } from "@next/third-parties/google";

const BASE_URL = 'https://iflygeo.com/';
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | iFlyGeo",
    default: "iFlyGeo | Grow Smarter, Sell Faster"
  },
  description: "Book flights, hotels, and travel packages with iFlyGeo. Affordable prices, global destinations, and 24/7 support for your next adventure.",
  generator: 'Next.js',
  applicationName: 'iFlyGeo',
  referrer: 'origin-when-cross-origin',
  keywords: ['Travel', 'Travel Technology', 'Travel Aggregator', 'Travel Marketplace'],
  creator: 'iFlyGeo',
  alternates: {
    canonical: '/',
    languages: {'en-US': '/en-US',},
  },
  openGraph: {
    images: '/opengraph-image.jpg',
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark',
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1511B1" },
    { media: "(prefers-color-scheme: light)", color: "#FF6700" }
  ],
  
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  
  const bodyFonts = [
    inter.variable, 
    Roboto.variable, 
    courierPrime.variable,
    bebasNeue.variable, 
    gilroy.variable, 
    gilroyThin.variable, 
    gilroyUltraLight.variable, 
    gilroyLight.variable, 
    gilroyRegular.variable, 
    gilroyMedium.variable, 
    gilroySemiBold.variable, 
    gilroyBold.variable].join(' ');
  return (
    <html lang="en" className={bodyFonts}>
      <body>
        <LayoutManager>{children}</LayoutManager>
        <GoogleTagManager gtmId="GTM-W6VCBRHW" />
      </body>
    </html>
  );
}
