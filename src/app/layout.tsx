import type { Metadata } from "next";
import { inter } from "./fonts";
import Widget from "@/components/Widget/Widget";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: {
    template: "%s | Triple E Technology Solutions",
    default: "Triple E Technology Solutions",
  },
  description:
    "Located in the Annapolis Valley, Triple E Technology Solutions Incorporated (Triple E) is locally owned and operated, providing business IT solutions to professional corporations spanning the Atlantic provinces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable}`}>
        {children}
        <Widget />
      </body>
    </html>
  );
}
