import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Creative Consulting",
  description: "Next.js i18n app root layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
