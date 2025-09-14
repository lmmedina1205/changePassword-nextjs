// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClientLoader from "../components/BootstrapClientLoader"; // usa la ruta correcta

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cambio de contraseña",
  description: "Recibe datos de un api por 15 minutos para cambio de clave",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        {children}
        <BootstrapClientLoader />
      </body>
    </html>
  );
}