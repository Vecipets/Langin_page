"use client";

import { useState } from "react";
import { IMAGENES_LANDING } from "@/contexts/assets"; 

export default function PeluditosSection() {
  const [filter, setFilter] = useState<"Todos" | "Gaticos" | "Perritos">("Todos");

  const peluditos = [
    {
      name: "Toby",
      type: "Perritos",
      description: "Se extravió en Laureles tras asustarse con el ruido de una obra. Gracias al mapa dinámico de VeciPets, un comerciante de la zona lo reconoció y dio aviso inmediato a su familia.",
      status: "Reencontrado 🎉",
      statusClass: "bg-emerald-50 text-emerald-600 border-emerald-200",
      image: IMAGENES_LANDING.peluditosExito.toby
    },
    {
      name: "Milo",
      type: "Perritos",
      description: "Salió corriendo de su casa en Envigado. Tras activarse la alerta prioritaria en el cuadrante, los vecinos voluntarios se coordinaron rápidamente para asegurar su regreso a salvo.",
      status: "A salvo en casa 🏠",
      statusClass: "bg-blue-50 text-blue-600 border-blue-200",
      image: IMAGENES_LANDING.peluditosExito.milo
    },
    {
      name: "Rocco",
      type: "Perritos",
      description: "Fue visto deambulando cerca de la Unidad Deportiva Belén. La foto compartida en la red comunitaria permitió que sus dueños confirmaran su identidad y fueran por él.",
      status: "Con su familia ❤️",
      statusClass: "bg-purple-50 text-purple-600 border-purple-200",
      image: IMAGENES_LANDING.peluditosExito.rocco
    },
    {
      name: "Oliver",
      type: "Gaticos",
      description: "Se escapó por un balcón en El Poblado. Un residente del edificio contiguo vio la alerta en la plataforma y notificó el avistamiento exacto en el jardín interior.",
      status: "Con su familia ❤️",
      statusClass: "bg-purple-50 text-purple-600 border-purple-200",
      image: IMAGENES_LANDING.peluditosExito.oliver
    },
    {
      name: "Luna",
      type: "Gaticos",
      description: "Gatita curiosa que se perdió en Aranjuez. Localizada sanamente gracias a que los rescatistas de la red filtraron y cruzaron las señas particulares descritas por sus tutores.",
      status: "Reencontrada 🎉",
      statusClass: "bg-emerald-50 text-emerald-600 border-emerald-200",
      image: IMAGENES_LANDING.peluditosExito.luna
    },
    {
      name: "Coco",
      type: "Gaticos",
      description: "Se metió en el motor de un vehículo estacionado en Sabaneta. Los reportes georreferenciados en la aplicación ayudaron a rastrear su ubicación y avisar a los dueños a tiempo.",
      status: "A salvo en casa 🏠",
      statusClass: "bg-blue-50 text-blue-600 border-blue-200",
      image: IMAGENES_LANDING.peluditosExito.coco
    }
  ];

  const filteredPeluditos = filter === "Todos" 
    ? peluditos 
    : peluditos.filter(p => p.type === filter);

  return (
    <section className="w-full bg-[var(--color-vecipets-background)] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        
        {/* Encabezado */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center justify-center text-emerald-500 text-lg animate-pulse">
            💚
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--color-vecipets-text-main)] tracking-tight">
            Finales felices en <span className="text-[#5E7BC4]">Medellín</span>
          </h2>
          <p className="text-sm font-semibold text-[var(--color-vecipets-text-muted)] max-w-xl mx-auto leading-relaxed">
            Ellos son algunos de los peluditos de nuestra comunidad que lograron regresar a salvo gracias a los reportes limpios y la geolocalización vecinal.
          </p>
        </div>

        {/* Botones de Filtro */}
        <div className="flex justify-center items-center gap-3 mb-16">
          {(["Todos", "Gaticos", "Perritos"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-7 py-2.5 rounded-full font-black text-xs tracking-wide border transition-all duration-200 cursor-pointer ${
                filter === tab
                  ? "bg-[#5E7BC4] border-[#5E7BC4] text-white shadow-md shadow-blue-500/20"
                  : "bg-white border-[var(--color-vecipets-card-border)] text-[var(--color-vecipets-text-muted)] hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Rejilla de Tarjetas Altamente Simétrica y Proporcionada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPeluditos.map((pet, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[var(--color-vecipets-card-border)] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col h-full group relative p-3"
            >
              {/* Etiqueta del estado del reencuentro */}
              <span className={`absolute top-6 left-6彻 z-10 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl border backdrop-blur-md ${pet.statusClass}`}>
                {pet.status}
              </span>

              {/* Contenedor de la foto fijo */}
              <div className="w-full h-64 md:h-72 rounded-[1.8rem] overflow-hidden bg-slate-100 shrink-0">
                <img 
                  src={pet.image} 
                  alt={pet.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenedor Flex Dinámico de Textos */}
              <div className="p-5 pt-6 flex flex-col flex-grow text-center">
                <h3 className="font-black text-lg text-[var(--color-vecipets-text-main)] tracking-tight uppercase mb-2">
                  {pet.name}
                </h3>
                {/* flex-grow obliga a que este bloque empuje el decorador final alineando las alturas */}
                <p className="text-xs font-semibold leading-relaxed text-[var(--color-vecipets-text-muted)] flex-grow">
                  {pet.description}
                </p>
                <div className="w-8 h-0.5 bg-slate-200 mx-auto mt-6 rounded-full shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}