import LocalePageContent from "./locale-page-content.js";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }, { locale: "fr" }];
}

export default async function LocalePage({ params }) {
  const { locale } = await params;
  return <LocalePageContent params={{ locale }} />;
}