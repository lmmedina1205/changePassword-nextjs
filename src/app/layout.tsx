"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";




const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Cambiar contraseña",
//   description: "Recibe datos de un api por 15 minutos para cambio de clave",
// };

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(()=>{
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  },[]);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <title>Cambio de contraseña</title>
    </html>
  );
}
