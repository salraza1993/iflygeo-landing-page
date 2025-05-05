import type { Metadata } from "next";
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


export const metadata: Metadata = {
  title: "iFlyGeo | Grow Smarter, Sell Faster",
  description: "Book flights, hotels, and travel packages with iFlyGeo. Affordable prices, global destinations, and 24/7 support for your next adventure.",
};

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
      </body>
    </html>
  );
}
