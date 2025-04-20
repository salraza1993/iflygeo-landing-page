import localFont from 'next/font/local';
import { Inter, Ubuntu, Courier_Prime, Roboto as RobotoFont } from 'next/font/google';
import { Bebas_Neue } from 'next/font/google';

// =========== [ Gilroy ] =========== //
const gilroyThin = localFont({
  src: './fonts/Gilroy-Thin.woff2',
  variable: '--gilroy--thin',
});
const gilroyUltraLight = localFont({
  src: './fonts/Gilroy-UltraLight.woff2',
  variable: '--gilroy--ultraLight',
});
const gilroyLight = localFont({
  src: './fonts/Gilroy-Light.woff2',
  variable: '--gilroy--light',
});
const gilroyRegular = localFont({
  src: './fonts/Gilroy-Regular.woff2',
  variable: '--gilroy--regular',
});
const gilroy = localFont({
  src: './fonts/Gilroy-Regular.woff2',
  variable: '--gilroy',
});
const gilroyMedium = localFont({
  src: './fonts/Gilroy-Medium.woff2',
  variable: '--gilroy--medium',
});
const gilroySemiBold = localFont({
  src: './fonts/Gilroy-SemiBold.woff2',
  variable: '--gilroy--semiBold',
});
const gilroyBold = localFont({
  src: './fonts/Gilroy-Bold.woff2',
  variable: '--gilroy--bold',
});

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--courier-prime',
})
const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--ubuntu',
})
const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--inter',
})
const Roboto = RobotoFont({
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--roboto',
});
const bebasNeue = Bebas_Neue({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--bebas-neue',
})

export {
  inter,
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
  Roboto,
};
