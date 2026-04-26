import "./globals.css";

export const metadata = {
  title: "Immigration Lawyer Brazil - Visas, Residency & Citizenship",
  description: "Professional legal assistance for Brazilian visas, residency, and citizenship",
  icons: {
    icon: "https://i.postimg.cc/Kz6Xt8wY/logo.webp",
    apple: "https://i.postimg.cc/Kz6Xt8wY/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}