"use client";

import { IMAGENES_LANDING } from "@/contexts/assets";
import { useEffect, useState } from "react";

export default function HowItWorksSection() {
  const [currentStep, setCurrentStep] = useState(2); // Por defecto en el paso 03 para validar tu vista

  const steps = [
    {
      num: "01",
      title: "Publicar reporte",
      description: "Agrega una foto real, los datos clave de la mascota y la última ubicación exacta donde fue vista en tu barrio.",
      // Contraste ultra-marcado con bordes oscuros en la pestaña activa
      activeClass: "bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,143,136,1)]", 
      icon: "📝",
      image: IMAGENES_LANDING.howItWorks.paso1_publicar
    },
    {
      num: "02",
      title: "La comunidad revisa",
      description: "El caso se publica de inmediato en el centro de alertas y se dibuja en el mapa interactivo para alertar a los vecinos.",
      activeClass: "bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(243,178,108,1)]", 
      icon: "👀",
      image: IMAGENES_LANDING.howItWorks.paso2_revisar
    },
    {
      num: "03",
      title: "Ubicar y contactar",
      description: "A través del sistema unificado, los vecinos aportan pistas validadas en tiempo real para rastrear los avistamientos.",
      activeClass: "bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(94,123,196,1)]", 
      icon: "📍",
      image: IMAGENES_LANDING.howItWorks.paso3_ubicar
    },
    {
      num: "04",
      title: "Reencuentro feliz",
      description: "Una vez que la mascota regresa a salvo con su familia, el reporte se cierra para celebrar el éxito de la red.",
      activeClass: "bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(244,63,94,1)]", 
      icon: "🏠",
      image: IMAGENES_LANDING.howItWorks.paso4_reencuentro
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="w-full bg-[var(--color-vecipets-background)] py-12 md:py-16 overflow-hidden border-t border-b border-[var(--color-vecipets-card-border)]">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-8">
        
        {/* Encabezado Restringido */}
        <div className="space-y-2 text-center lg:text-left">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#5E7BC4] bg-[#5E7BC4]/10 px-3 py-1 rounded-full inline-block">
            ¿Cómo funciona?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--color-vecipets-text-main)] tracking-tight">
            Cuatro pasos simples para salvar una vida
          </h2>
        </div>

        {/* CONTENEDOR GRID EQUILIBRADO 50/50 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* 📋 COLUMNA IZQUIERDA: Bloques con Alto Contraste */}
          <div className="flex flex-col gap-3 justify-center w-full">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setCurrentStep(idx)}
                onClick={() => setCurrentStep(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-4 cursor-pointer ${
                  idx === currentStep 
                    ? step.activeClass
                    : "bg-white/40 border-slate-200/60 opacity-60 hover:opacity-100 hover:bg-white/80"
                }`}
              >
                <span className="text-base font-black font-mono text-slate-400 pt-0.5 select-none">
                  {step.num}
                </span>
                <div className="shrink-0 text-xl pt-0.5">{step.icon}</div>
                <div className="flex-grow">
                  <h3 className="font-black text-sm md:text-base text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  {idx === currentStep && (
                    <p className="text-xs md:text-sm font-bold text-slate-700 mt-1 leading-relaxed animate-fade-in">
                      {step.description}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* 🖼️ COLUMNA DERECHA: Imagen Pequeña y Proporcional (Se eliminó lo gigante) */}
          <div className="w-full flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm aspect-[4/3] relative rounded-[2rem] overflow-hidden bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(23,50,58,1)] p-2 group">
              <div className="w-full h-full rounded-[1.4rem] overflow-hidden bg-slate-50">
                <img 
                  key={currentStep}
                  src={steps[currentStep].image} 
                  alt={steps[currentStep].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>
              
              {/* Sello Flotante Sólido */}
              <div className="absolute bottom-4 right-4 z-20 bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg shadow-xs font-black text-[9px] text-white uppercase tracking-wider select-none">
                🐾 RED VECIPETS ACTIVA
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}