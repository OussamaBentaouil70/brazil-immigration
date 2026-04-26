import "../globals.css";

import LocaleLayoutClient from "./locale-layout-client";

export const metadata = {
  title: "Immigration Lawyer Brazil - Visas, Residency & Citizenship",
  description: "Professional legal assistance for Brazilian visas, residency, and citizenship"
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body suppressHydrationWarning>
        <LocaleLayoutClient locale={locale}>
          {children}
        </LocaleLayoutClient>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }, { locale: "fr" }];
}