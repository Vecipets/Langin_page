import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { esES } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { Nunito } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

// Configuración de la tipografía oficial unificada
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "VeciPets",
  description: "Red vecinal de apoyo animal para reportar mascotas perdidas y encontradas.",
  icons: {
    icon: "/logo.svg", // Vincula directamente el logo de la carpeta public/
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="es" className={`${nunito.variable}`}>
        {/* Usamos font-sans para heredar Nunito globalmente y min-h-screen con flex-col */}
        <body className="antialiased min-h-screen flex flex-col bg-white text-[var(--color-vecipets-text-main)] font-sans">
          
          {/* Componente de Navegación superior fijo global */}
          <Navbar />
          
          {/* Contenedor principal dinámico que empuja el footer hacia abajo */}
          <main className="flex-grow w-full flex flex-col">
            {children}
          </main>
          
          {/* Componente unificado de Pie de Página (Inmune a duplicaciones) */}
          <Footer />

          {/* 🐾 BOTÓN FLOTANTE GLOBAL DE WHATSAPP INYECTADO:
              Ubicado profesionalmente al final del body para que flote de manera independiente.
          */}
          <WhatsAppButton />

        </body>
      </html>
    </ClerkProvider>
  );
}