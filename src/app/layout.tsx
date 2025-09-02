import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Creative Consulting",
  description: "Market Research and Consulting Company",
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
