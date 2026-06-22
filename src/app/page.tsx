"use client";

import { useState } from "react";
import FeaturesSection from "@/components/layout/FeaturesSection";
import HowItWorksSection from "@/components/layout/HowItWorksSection";
import TargetAudienceSection from "@/components/layout/TargetAudienceSection";
import PeluditosSection from "@/components/sections/PeluditosSection";
import { IMAGENES_LANDING } from "@/contexts/assets";

export default function HomePage() {
  const [formData, setFormData] = useState({ nombre: "", correo: "" });
  const [formEnviado, setFormEnviado] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nombre && formData.correo) {
      setFormEnviado(true);
      setFormData({ nombre: "", correo: "" });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[var(--color-vecipets-background)] overflow-x-hidden">
      
      {/* ================= 1. HERO SECTION (IMAGEN INTERACTIVA DESPLAZADA Y DINÁMICA) ================= */}
      <section className="w-full px-6 pt-4 pb-12 md:pt-6 md:pb-16 lg:pt-8 lg:pb-20 max-w-7xl mx-auto bg-transparent overflow-hidden">
        <div className="grid gap-8 lg:gap-12 items-center grid-cols-1 lg:grid-cols-12">
          
          {/* Bloque Izquierdo: Copywriting */}
          <div className="lg:col-span-7 flex flex-col space-y-5 text-center lg:text-left items-center lg:items-start z-10">
            <div className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary-mint)] border-2 border-dashed border-[#5E7BC4]/40 px-4 py-2 text-xs font-black text-[var(--color-primary-cyan)] shadow-2xs select-none">
              📍 Red vecinal de apoyo animal en Medellín
            </div>
            
            <h1 className="text-4xl font-black text-slate-900 leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl max-w-xl">
              Reúne a las mascotas con sus familias.
            </h1>
            
            <p className="text-base font-semibold leading-relaxed text-slate-500 max-w-lg">
              VeciPets es una plataforma comunitaria diseñada para reportar de forma eficiente mascotas perdidas y encontradas, connecting de inmediato con vecinos de tu misma zona.
            </p>
            
            <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <a href="/alertas" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F3B26C] border-2 border-slate-900 hover:brightness-105 px-8 py-4 text-sm font-black text-white shadow-[3px_3px_0px_0px_rgba(23,50,58,1)] active:translate-y-0.5 active:shadow-none transition-all duration-200">
                🐾 Ver centro de alertas
              </a>
              <a href="#unirse" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary-cyan)] border-2 border-slate-900 hover:brightness-110 px-8 py-4 text-sm font-black text-white shadow-[3px_3px_0px_0px_rgba(23,50,58,1)] active:translate-y-0.5 active:shadow-none transition-all duration-200">
                🐾 Registrar mascota
              </a>
            </div>
          </div>

          {/* Bloque Derecho: Imagen Dinámica desplazada hacia la izquierda */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start lg:-ml-10 z-0">
            <div className="relative w-full max-w-md aspect-square bg-white p-3 rounded-[2.5rem] border-2 border-dashed border-[#5E7BC4] shadow-[8px_8px_0px_0px_rgba(94,123,196,1)] transform -rotate-2 hover:rotate-0 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(243,178,108,1)] transition-all duration-300 ease-out group cursor-pointer">
              
              <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-slate-50">
                <img 
                  src={IMAGENES_LANDING.hero.mascotaPrincipal} 
                  alt="Mascota feliz de la comunidad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute -top-3 -right-3 bg-slate-950 text-white border-2 border-slate-900 text-[10px] font-black px-3 py-1.5 rounded-xl rotate-12 shadow-md uppercase tracking-wider select-none group-hover:scale-110 transition-transform duration-200">
                Comunidad 🐕
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. PROPUESTA DE VALOR (DISEÑO ASIMÉTRICO Y FLOTANTE DINÁMICO) ================= */}
      <section className="w-full px-6 py-16 bg-transparent overflow-hidden">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Bloque Izquierdo: Título Fijo */}
            <div className="lg:col-span-5 flex flex-col space-y-4 text-center lg:text-left items-center lg:items-start">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#5E7BC4] bg-[#5E7BC4]/10 px-4 py-1.5 rounded-full inline-block select-none">
                ¿Qué hacemos?
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight max-w-sm">
                Centralizamos reportes geolocalizados para actuar rápido.
              </h2>
            </div>

            {/* Bloque Derecho: Tarjeta Flotante con Hover */}
            <div className="lg:col-span-7 w-full">
              <div className="bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(94,123,196,1)] rounded-[2.2rem] p-6 md:p-8 transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(94,123,196,1)] transition-all duration-300 group">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 text-2xl bg-slate-100 w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 group-hover:scale-110 transition-transform duration-300 select-none">
                    ⚡
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm md:text-base font-bold text-slate-700 leading-relaxed">
                      A diferencia de las redes sociales tradicionales, en <span className="text-[#5E7BC4] font-black">VeciPets</span> creamos alertas limpias organizadas por tu propio barrio.
                    </p>
                    <div className="w-8 h-0.5 bg-[#5E7BC4]/30 rounded-full transition-all group-hover:w-16 duration-300" />
                    <p className="text-xs md:text-sm font-semibold text-slate-500 leading-relaxed">
                      Usamos tu azul de confianza para conectar de forma directa a toda la comunidad, evitando algoritmos caóticos y asegurando que cada segundo cuente cuando una mascota se extravía.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. SECCIONES MODULARES ================= */}
      <FeaturesSection />
      <HowItWorksSection />
      <PeluditosSection />
      <TargetAudienceSection />

      {/* ================= 4. FORMULARIO DE CONVERSIÓN ================= */}
      <section id="unirse" className="w-full bg-[var(--color-vecipets-background)] py-20 border-b border-[var(--color-vecipets-card-border)]">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 grid gap-12 grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Lado Izquierdo: Imagen de Persona Amorosa */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <div className="w-full max-w-sm aspect-[4/3] relative rounded-[2rem] overflow-hidden bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(23,50,58,1)] p-2">
              <div className="w-full h-full rounded-[1.4rem] overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800" 
                  alt="Persona amorosa abrazando a su mascota"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Lado Derecho: Tarjeta de Formulario Brutalista */}
          <div className="lg:col-span-7 w-full flex flex-col space-y-6">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-3xl font-black tracking-tight text-slate-900">
                Únete a la red de guardianes
              </h2>
              <p className="text-sm font-bold leading-relaxed text-slate-600 max-w-md mx-auto lg:mx-0">
                Déjanos tus datos para recibir alertas inmediatas sobre mascotas perdidas o encontradas en tu zona y entérate de las jornadas de cuidado animal en Medellín.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(94,123,196,1)] w-full max-w-xl mx-auto lg:mx-0">
              {formEnviado ? (
                <div className="text-center py-8 space-y-3">
                  <span className="text-4xl block">🎉</span>
                  <h3 className="text-lg font-black text-slate-900">¡Registro exitoso!</h3>
                  <p className="text-xs font-semibold text-slate-600">
                    Gracias por sumarte a VeciPets. Pronto recibirás alertas prioritarias de tu zona.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-2">
                      Nombre Completo
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      placeholder="Ej. María Gómez" 
                      className="w-full bg-slate-50 border-2 border-slate-900 text-slate-900 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_0px_rgba(23,50,58,1)] transition-all placeholder-slate-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-2">
                      Correo Electrónico
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.correo}
                      onChange={(e) => setFormData({...formData, correo: e.target.value})}
                      placeholder="Ej. maria@correo.com" 
                      className="w-full bg-slate-50 border-2 border-slate-900 text-slate-900 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_0px_rgba(23,50,58,1)] transition-all placeholder-slate-400"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-[#F3B26C] hover:bg-[#e2a15b] text-white font-black text-xs uppercase tracking-wider rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(23,50,58,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                  >
                    Unirme ahora como guardián
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. PREGUNTAS FRECUENTES (BORDES DISCONTINUOS DE ALTO CONTRASTE) ================= */}
      <section className="w-full px-4 py-20 bg-transparent">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center space-y-2 flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#5E7BC4] bg-[#5E7BC4]/10 px-4 py-1.5 rounded-full inline-block border-2 border-dashed border-[#5E7BC4]/40 shadow-2xs select-none mb-2">
              FAQ
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Preguntas Frecuentes
            </h2>
            <p className="text-sm font-bold text-slate-500">
              Resolvemos tus dudas principales antes de comenzar
            </p>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "¿Tiene algún costo publicar un reporte de alerta?", 
                a: "No, VeciPets es una plataforma 100% gratuita y solidaria orientada a salvaguardar el bienestar animal en la comunidad de Medellín." 
              },
              { 
                q: "¿Cómo se verifica la validez de los reportes para evitar falsas alarmas?", 
                a: "Los vecinos de la misma zona pueden interactuar, comentar y validar las publicaciones aportando fotos o pistas reales. Además, nuestro equipo filtra reportes duplicados de manera constante." 
              },
              { 
                q: "¿Qué datos de contacto se muestran públicamente en el mapa?", 
                a: "Para proteger tu privacidad, nunca mostraremos tu dirección exacta ni datos sensibles. El mapa solo ubica un punto de referencia aproximado y los canales de comunicación directa que tú decidas activar para el reencuentro." 
              },
              { 
                q: "No vivo en Medellín, ¿puedo usar la plataforma en mi ciudad?", 
                a: "Actualmente estamos priorizando y optimizando la red vecinal en los barrios de Medellín. Sin embargo, estamos trabajando para expandir el sistema de alertas a otras ciudades de Colombia muy pronto." 
              },
              { 
                q: "¿Cómo me ayuda el unirme como 'Guardián' si no he perdido una mascota?", 
                a: "Como guardián, recibes notificaciones críticas exclusivamente si una mascota se pierde en tu propio barrio o zona cercana. Tu apoyo revisando el mapa o prestando atención en tus salidas diarias es vital para salvar vidas." 
              }
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`border-2 border-dashed rounded-2xl overflow-hidden bg-white transition-all duration-200 ${
                    isOpen 
                      ? "border-[#5E7BC4] shadow-[4px_4px_0px_0px_rgba(94,123,196,0.15)] bg-slate-50/20" 
                      : "border-slate-300 hover:border-[#5E7BC4] hover:shadow-[4px_4px_0px_0px_rgba(94,123,196,0.1)]"
                  }`}
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left font-black text-sm text-slate-950 flex justify-between items-center hover:bg-[#5E7BC4]/5 transition-colors duration-200 cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <span className={`text-xl font-black text-[#5E7BC4] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-200 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-40 border-t-2 border-dashed border-[#5E7BC4] bg-white" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 py-4 text-xs font-bold leading-relaxed text-slate-600">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}