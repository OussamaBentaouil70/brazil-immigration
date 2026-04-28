import "./globals.css";
import Script from "next/script";
import GTMInit from "@/components/gtm-init";

export const metadata = {
  title: "Immigration Lawyer Brazil - Visas, Residency & Citizenship",
  description: "Professional legal assistance for Brazilian visas, residency, and citizenship",
  icons: {
    icon: "https://i.postimg.cc/Kz6Xt8wY/logo.webp",
    apple: "https://i.postimg.cc/Kz6Xt8wY/logo.webp",
  },
};

const GTM_ID = "GTM-W64FXNPP";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          strategy="afterInteractive"
        />
      </head>
      <body suppressHydrationWarning>
        <GTMInit />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}