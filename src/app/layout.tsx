import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Creative Research & Consulting",
  description: "Market and Social Research Company in Dhaka, Bangladesh",
  icons: {
    icon: "/creative.png",
  },
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
