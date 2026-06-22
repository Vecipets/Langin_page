"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Bloquea el scroll de la pantalla cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  // 💡 SOLUCIÓN DE ORO: Si la ruta actual es diferente del inicio ("/"), no renderiza nada.
  // Esto elimina por completo el choque visual en /alertas, /mapa, etc.
  if (pathname !== "/") {
    return null;
  }

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Función para evaluar y estilizar los enlaces activos e interacciones
  const getLinkClass = (path: string, isMobile = false) => {
    const isActive = pathname === path;
    const base = "flex items-center gap-2 font-extrabold transition-all duration-200 text-sm";
    
    if (isMobile) {
      return `${base} w-full rounded-2xl p-4 text-lg ${
        isActive 
          ? "bg-[#5E7BC4] text-white shadow-md" 
          : "text-[#17323a] hover:bg-slate-100 hover:text-[#5E7BC4]"
      }`;
    }
    
    return `${base} relative py-2 ${
      isActive 
        ? "text-[#5E7BC4] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#5E7BC4] after:rounded-full" 
        : "text-[#17323a] hover:text-[#5E7BC4]"
    }`;
  };

  return (
    <nav className="w-full bg-white border-b border-[var(--color-vecipets-card-border)] px-4 py-4 sm:px-10 sm:lg:px-16 sticky top-0 left-0 right-0 z-50 shadow-xs">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        
        {/* ================= LADO IZQUIERDO: BRANDING + NUEVO ES LOGAN AGRANDADO ================= */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3 select-none group">
          {/* Contenedor del Logo Agrandado */}
          <div className="w-12 h-12 flex items-center justify-center transition duration-200 group-hover:scale-105 shrink-0">
            <img 
              src="/logo.svg" 
              alt="VeciPets" 
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Bloque apilado de Texto: Nombre de marca + Eslogan */}
          <div className="flex flex-col justify-center">
            <span className="font-black text-2xl text-[#17323a] tracking-tight leading-none transition-colors group-hover:text-[#5E7BC4]">
              VeciPets
            </span>
            {/* ✨ Eslogan Oficial integrado en alta definición */}
            <span className="text-[10px] font-black text-[#5E7BC4] tracking-wider uppercase mt-1 leading-none select-none">
              Unidos por cada huella
            </span>
          </div>
        </Link>

        {/* ================= CENTRO: ENLACES ESCRITORIO ================= */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={getLinkClass("/")}>Inicio</Link>
          <Link href="/alertas" className={getLinkClass("/alertas")}>Alertas</Link>
          <Link href="/mapa" className={getLinkClass("/mapa")}>Mapa interactivo</Link>
        </div>

        {/* ================= LADO DERECHO: AUTENTICACIÓN / ACCIONES ================= */}
        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-5 py-2.5 rounded-xl text-xs font-black text-[#17323a] bg-slate-100 hover:bg-slate-200/80 transition cursor-pointer">
                Iniciar sesión
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-5 py-2.5 rounded-xl text-xs font-black text-white bg-[#5E7BC4] hover:brightness-105 shadow-sm transition cursor-pointer">
                Registrarse
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <Link 
              href="/reportar" 
              className="inline-flex items-center justify-center bg-[#F3B26C] hover:brightness-105 text-white text-xs font-black px-5 py-2.5 rounded-xl shadow-sm transition-all"
            >
              🐾 Registrar Mascota
            </Link>
            <div className="border-l border-[var(--color-vecipets-card-border)] pl-4 h-6 flex items-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>

        {/* ================= BOTÓN MENÚ MÓVIL (HAMBURGUESA) ================= */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-xl bg-slate-50 border border-[var(--color-vecipets-card-border)] md:hidden text-[#17323a] focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* ================= DESPLEGABLE MENÚ MÓVIL RESPONSIVO ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-white z-40 flex flex-col p-6 animate-in fade-in slide-in-from-top duration-200 md:hidden border-t border-[var(--color-vecipets-card-border)]">
          
          <div className="flex flex-col gap-3 flex-grow">
            <Link href="/" className={getLinkClass("/", true)} onClick={closeMenu}>
              Inicio
            </Link>
            <Link href="/alertas" className={getLinkClass("/alertas", true)} onClick={closeMenu}>
              Alertas
            </Link>
            <Link href="/mapa" className={getLinkClass("/mapa", true)} onClick={closeMenu}>
              Mapa interactivo
            </Link>
          </div>

          <div className="border-t border-[var(--color-vecipets-card-border)] pt-6 flex flex-col gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button onClick={closeMenu} className="w-full py-3.5 bg-slate-100 rounded-2xl text-sm font-black text-[#17323a] hover:bg-slate-200 transition cursor-pointer">
                  Iniciar sesión
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button onClick={closeMenu} className="w-full py-3.5 bg-[#5E7BC4] rounded-2xl text-sm font-black text-white text-center shadow-md transition cursor-pointer">
                  Registrarse
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center justify-between bg-slate-50 border border-[var(--color-vecipets-card-border)] p-4 rounded-2xl">
                <span className="font-bold text-sm text-[#17323a]">Mi Perfil:</span>
                <UserButton afterSignOutUrl="/" />
              </div>
              <Link 
                href="/reportar" 
                onClick={closeMenu}
                className="w-full py-4 bg-[#F3B26C] text-white text-center font-black rounded-2xl shadow-md transition"
              >
                🐾 Registrar Mascota
              </Link>
            </SignedIn>
          </div>

        </div>
      )}
    </nav>
  );
}