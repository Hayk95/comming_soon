import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";

const GA_MEASUREMENT_ID = "G-MRSCWTHWR8";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <div
        className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
