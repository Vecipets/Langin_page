"use client";

// 1. Importas tu diccionario centralizado:
import { IMAGENES_LANDING } from "@/contexts/assets";

export default function FeaturesSection() {
  const features = [
    {
      title: "Alertas 24/7",
      description: "Reporta pérdidas, avistamientos o emergencias en tiempo real para activar la búsqueda comunitaria instantánea.",
      // 2. Vinculas la clave correspondiente:
      image: IMAGENES_LANDING.features.alertas247, 
      bgColor: "bg-[#FBC02D]", // Amarillo alegre
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
        </svg>
      )
    },
    {
      title: "Geolocalización",
      description: "Ubica los reportes exactamente en el mapa de tu barrio o cuadrante para vigilar las zonas clave de Medellín.",
      image: IMAGENES_LANDING.features.geolocalizacion,
      bgColor: "bg-[#5E7BC4]", // Tu azul oficial
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
        </svg>
      )
    },
    {
      title: "Comunidad Unida",
      description: "Conecta con vecinos voluntarios y rescatistas locales organizados sin algoritmos caóticos de por medio.",
      image: IMAGENES_LANDING.features.comunidadUnida,
      bgColor: "bg-[#4CAF50]", // Verde rescatista
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.25 0h8.25" />
        </svg>
      )
    },
    {
      title: "Filtros Avanzados",
      description: "Filtra búsquedas por especie, color, tamaño, fecha o estado del reporte para hallar coincidencias velozmente.",
      image: IMAGENES_LANDING.features.filtrosAvanzados,
      bgColor: "bg-[#E91E63]", // Rosa acento
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 18H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 12h7.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[var(--color-vecipets-background)] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        {/* Título de la sección */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center justify-center text-[var(--color-primary-cyan)]">
            🐾
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--color-vecipets-text-main)] tracking-tight">
            ¿Qué puedes hacer en <span className="text-[#5E7BC4]">VeciPets</span>?
          </h2>
          <p className="text-sm font-semibold text-[var(--color-vecipets-text-muted)] max-w-2xl mx-auto leading-relaxed">
            Nuestra plataforma te brinda herramientas centralizadas y eficientes diseñadas exclusivamente para proteger y reencontrar a los animales de tu barrio.
          </p>
        </div>

        {/* Rejilla de Tarjetas Premium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl border border-[var(--color-vecipets-card-border)] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col relative group"
            >
              {/* Contenedor de la Imagen Superior con color de fondo temático */}
              <div className={`w-full h-44 relative overflow-hidden ${feature.bgColor}/90`}>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Icono Flotante Divisor */}
              <div className="absolute top-[152px] left-1/2 -translate-x-1/2 z-10">
                <div className={`w-11 h-11 rounded-full ${feature.bgColor} flex items-center justify-center shadow-md border-4 border-white transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
              </div>

              {/* Textos Informativos inferiores */}
              <div className="p-6 pt-10 flex-col flex text-center flex-grow bg-white">
                <h3 className="font-black text-lg text-[var(--color-vecipets-text-main)] tracking-tight mb-2">
                  {feature.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#5E7BC4]/30 mx-auto mb-3 rounded-full" />
                <p className="text-xs font-semibold leading-relaxed text-[var(--color-vecipets-text-muted)] flex-grow">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}