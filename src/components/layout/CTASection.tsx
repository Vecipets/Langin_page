"use client";

import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function CTASection() {
  return (
    <section className="w-full px-6 pb-20 sm:px-10 lg:px-16 bg-transparent">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-[2.5rem] bg-primary-green p-8 md:p-12 text-center text-primary-white shadow-2xl shadow-primary-green/10 md:flex-row md:text-left border border-primary-green/20">
        
        {/* Textos Informativos del Banner */}
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Empieza ayudando desde un reporte claro.
          </h2>
          <p className="text-sm sm:text-base font-semibold leading-relaxed text-primary-white/85">
            Publica una mascota perdida, revisa el mapa o crea tu cuenta para 
            participar en una red comunitaria responsable.
          </p>
        </div>

        {/* Bloque de Acciones Condicionales (Clerk + Navegación) */}
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row shrink-0">
          
          {/* Botón: Publicar Reporte */}
          <a
            href="/reportar"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-gold px-8 py-4 text-base font-black text-accent-foreground shadow-lg shadow-accent-gold/10 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 active:scale-98"
          >
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span>Publicar reporte</span>
          </a>
          
          {/* Botón Condicional: Registrarse (Si no ha iniciado sesión) */}
          <SignedOut>
            <SignUpButton mode="modal">
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-vecipets-card-border bg-primary-white px-8 py-4 text-base font-black text-primary-green shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-mint active:scale-98 cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <span>Registrarse</span>
              </button>
            </SignUpButton>
          </SignedOut>

          {/* Botón de Respaldo: Ver el Mapa (Si ya inició sesión) */}
          <SignedIn>
            <a
              href="/mapa"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-white/30 bg-primary-white/10 px-8 py-4 text-base font-black text-primary-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-white/20 active:scale-98"
            >
              <span>Ir al mapa interactivo</span>
            </a>
          </SignedIn>

        </div>
      </div>
    </section>
  );
}