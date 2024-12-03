import type { Metadata } from "next";

import ReduxProvider from "./components/storeProvider/ReduxProvider";
import "./globals.css";
import { HeaderComponent } from "./components/header/Header";

export const metadata: Metadata = {
  title: "Nebula quiz",
  description: "Nebula quiz app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <HeaderComponent />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
