import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const space_Grotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-space_Grotesk',
});

export const metadata: Metadata = {
  title: 'jaypavendano',
  description: 'My personal website portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${space_Grotesk.variable} bg-bg text-neutral_white`}
      >
        {children}
      </body>
    </html>
  );
}
