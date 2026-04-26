import LocaleLayoutClient from "./locale-layout-client";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  return (
    <LocaleLayoutClient locale={locale}>
      {children}
    </LocaleLayoutClient>
  );
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }, { locale: "fr" }];
}