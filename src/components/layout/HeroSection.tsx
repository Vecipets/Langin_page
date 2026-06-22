"use client";

import { useState } from "react";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function CTASection() {
  const [formData, setFormData] = useState({ nombre: "", correo: "" });
  const [formEnviado, setFormEnviado] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nombre && formData.correo) {
      setFormEnviado(true);
      setFormData({ nombre: "", correo: "" });
    }
  };

  return (
    <section id="unirse" className="w-full px-6 py-24 sm:px-10 lg:px-16 bg-[var(--color-primary-mint)]/30 border-t border-b border-[var(--color-vecipets-card-border)]">
      <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-2 items-center">
        
        {/* Columna Izquierda: Mensaje de Cierre y Conversión */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-xl bg-white border border-[var(--color-vecipets-card-border)] px-3 py-1.5 text-xs font-black text-[var(--color-primary-cyan)] shadow-sm">
            🛡️ Red Segura y Verificada
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[var(--color-vecipets-text-main)] sm:text-4xl leading-tight">
            Únete a la red de guardianes de mascotas
          </h2>
          <p className="text-xs sm:text-sm font-semibold leading-relaxed text-[var(--color-vecipets-text-muted)]">
            Déjanos tus datos para recibir alertas inmediatas sobre animales perdidos o encontrados en tu zona, ayudando de forma directa a mitigar el riesgo de extravíos en Medellín.
          </p>
        </div>

        {/* Columna Derecha: Formulario Estilizado o Estado del Registro */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[var(--color-vecipets-card-border)] shadow-sm">
          {formEnviado ? (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="w-12 h-12 bg-[var(--color-primary-mint)] text-[var(--color-primary-cyan)] rounded-full flex items-center justify-center text-2xl mx-auto font-black shadow-sm">
                ✓
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-[var(--color-vecipets-text-main)]">
                  ¡Registro completado!
                </h3>
                <p className="text-xs font-semibold text-[var(--color-vecipets-text-muted)]">
                  Gracias por sumarte como guardián. Ya formas parte activa de VeciPet.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-black text-[var(--color-vecipets-text-main)] uppercase tracking-wider mb-1.5">
                  Nombre Completo
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Ej. María Gómez" 
                  className="w-full bg-[var(--color-vecipets-background)] border border-[var(--color-vecipets-card-border)] rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-[var(--color-primary-cyan)] focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black text-[var(--color-vecipets-text-main)] uppercase tracking-wider mb-1.5">
                  Correo Electrónico
                </label>
                <input 
                  type="email" 
                  required
                  value={formData.correo}
                  onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                  placeholder="Ej. maria@correo.com" 
                  className="w-full bg-[var(--color-vecipets-background)] border border-[var(--color-vecipets-card-border)] rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-[var(--color-primary-cyan)] focus:bg-white transition"
                />
              </div>

              <div className="pt-2">
                <SignedOut>
                  <SignUpButton mode="modal">
                    <button type="button" className="w-full py-3.5 bg-[#F3B26C] hover:brightness-105 text-center font-black text-xs text-white uppercase tracking-wider rounded-xl shadow-md shadow-orange-400/10 transition cursor-pointer">
                      Registrarme e ingresar ahora
                    </button>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <button type="submit" className="w-full py-3.5 bg-[var(--color-primary-cyan)] hover:brightness-105 text-center font-black text-xs text-white uppercase tracking-wider rounded-xl shadow-md transition cursor-pointer">
                    Confirmar mi suscripción local
                  </button>
                </SignedIn>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}