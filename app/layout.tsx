"use client"

import { Inter } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { useRouter, usePathname } from 'next/navigation';
import { NavBar } from './components/navbar';


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

