import type { Metadata } from "next";
import { Providers } from "./providers";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Krisna Satriadi",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
