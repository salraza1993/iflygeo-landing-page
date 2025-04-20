import type { Metadata } from "next";
import Header from "./components/header/Header";
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


export const metadata: Metadata = {
  title: "IFlyGeo | Welcome : Home Page",
  description: "A modern website with dark mode theme",
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
        <Header />
        {children}
        <footer>
          {/* Add footer content here */}
        </footer>
      </body>
    </html>
  );
}
