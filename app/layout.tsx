import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./config/material-tailwind-theme-provider";
import ReactQueryClientProvider from "./config/ReactQueryClientProvider";
import RecoilProvider from "./config/RecoilProvider";
import GNB from "components/GNB";
import SideMenu from "components/SideMenu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "n o t e i t",
  description: "a simple image markup site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilProvider>
      <ReactQueryClientProvider>
        <ThemeProvider>
          <html lang="ko">
            <head>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />
            </head>
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
              <GNB />
              <div className="flex">
                <SideMenu />
                {children}
              </div>
            </body>
          </html>
        </ThemeProvider>
      </ReactQueryClientProvider>
    </RecoilProvider>
  );
}
