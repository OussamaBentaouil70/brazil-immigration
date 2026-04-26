import "./globals.css";
import "react-phone-input-2/lib/style.css";

export const metadata = {
  title: "Immigration Lawyer to Brazil",
  description:
    "Landing page for Brazilian immigration legal services, visas, residency, citizenship, and document regularization."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
