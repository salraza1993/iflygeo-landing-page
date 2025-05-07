'use client';

import { usePathname } from 'next/navigation';
import LayoutWithoutHeaderFooter from './LayoutWithoutHeaderFooter';
import LayoutWithHeaderFooter from './LayoutWithHeaderFooter';
import MobileContactButtons from '../MobileContactButtons';

export default function LayoutManager({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const layoutWithoutHeader = ['/register', '/login', '/forgot-password'];

  return layoutWithoutHeader.includes(pathname)
    ? <LayoutWithoutHeaderFooter>{children}</LayoutWithoutHeaderFooter>
    : <LayoutWithHeaderFooter>
      {children}
      <MobileContactButtons />
    </LayoutWithHeaderFooter>;
}