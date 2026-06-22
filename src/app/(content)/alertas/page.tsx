"use client";

import { useState } from "react";

export default function AlertasPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const mascotas = [
    {
      id: 1,
      nombre: "Pitter",
      raza: "Pitbull",
      estado: "PERDIDO",
      badgeColor: "bg-red-500 text-white",
      btnBg: "bg-red-50 hover:bg-red-100/70 text-red-600 border border-red-100",
      arrowColor: "text-red-500",
      ubicacion: "San Javier, Medellín",
      fecha: "02/12/2025",
      descripcion: "Es muy amigable, responde al nombre Pitter. Se perdió por San Javier.",
      imagen: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      nombre: "Max",
      raza: "Golden Retriever",
      estado: "ENCONTRADO",
      badgeColor: "bg-primary-cyan text-white font-black", 
      btnBg: "bg-primary-mint hover:bg-primary-cyan/10 text-primary-cyan border border-primary-cyan/20",
      arrowColor: "text-primary-cyan",
      ubicacion: "Laureles, Medellín",
      fecha: "03/12/2025",
      descripcion: "Es pequeño, tiene un collar rojo con su placa. Se encontró en Laureles.",
      imagen: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      nombre: "Merlina",
      raza: "Pastor Alemán",
      estado: "EN BÚSQUEDA",
      badgeColor: "bg-amber-500 text-white",
      btnBg: "bg-amber-50 hover:bg-amber-100/70 text-amber-700 border border-amber-100",
      arrowColor: "text-amber-600",
      ubicacion: "San Javier, Medellín",
      fecha: "03/12/2025",
      descripcion: "Pastor alemán, pequeño. Se busca a su familia.",
      imagen: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const estadisticas = [
    { label: "Perdidos este mes", value: "24", icon: "🚨", bgColor: "bg-red-50 text-red-500" },
    { label: "Encontrados este mes", value: "17", icon: "✓", bgColor: "bg-primary-mint text-primary-cyan" },
    { label: "En búsqueda activa", value: "8", icon: "🔍", bgColor: "bg-amber-50 text-amber-600" },
    { label: "Reportes totales", value: "49", icon: "👥", bgColor: "bg-white border border-vecipets-card-border text-slate-500" }
  ];

  return (
    <div className="w-full min-h-screen bg-vecipets-background grid grid-cols-1 lg:grid-cols-[260px_1fr]">
      
      {/* ================= BARRA LATERAL IZQUIERDA COMPLETA ================= */}
      <aside className="hidden lg:flex flex-col bg-white border-r border-vecipets-card-border p-6 justify-between sticky top-0 h-screen">
        <div className="space-y-7">
          <div className="flex items-center gap-2.5 px-2 select-none">
            <div className="w-8 h-8 bg-primary-cyan rounded-lg flex items-center justify-center text-white font-black text-sm shadow-sm shadow-blue-500/20">
              🐾
            </div>
            <span className="font-black text-lg text-slate-900 tracking-tight">VeciPet</span>
          </div>

          <div className="flex flex-col space-y-1.5">
            {[
              { label: "Inicio", icon: "🏠", active: false, path: "/" },
              { label: "Alertas", icon: "🚨", active: true, path: "/alertas" },
              { label: "Mapa", icon: "🗺️", active: false, path: "/mapa" },
              { label: "Salud y Cuidado", icon: "💖", active: false, path: "/cuidado" },
              { label: "Mis Mascotas", icon: "🐾", active: false, path: "/mis-mascotas" },
              { label: "Mensajes", icon: "💬", active: false, path: "/mensajes" },
              { label: "Configuración", icon: "⚙️", active: false, path: "/configuracion" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all select-none ${
                  item.active
                    ? "bg-primary-cyan text-white shadow-sm font-black"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-primary-mint/50 border border-vecipets-card-border p-5 text-primary-cyan flex flex-col space-y-4">
          <h4 className="font-black text-sm leading-snug text-vecipets-text-main">¿Viste una mascota en situación de riesgo?</h4>
          <a
            href="/reportar"
            className="w-full py-2.5 bg-accent-gold hover:brightness-105 text-center text-xs font-black text-white rounded-xl shadow-sm tracking-wide block transition"
          >
            Reportar ahora
          </a>
        </div>
      </aside>

      {/* ================= CONTENIDO CENTRAL DEL DASHBOARD ================= */}
      <main className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl w-full mx-auto">
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white border border-vecipets-card-border flex items-center justify-center text-xl shadow-sm">
              🐾
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Centro de Alertas VeciPet</h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">Ayudemos a reunir mascotas con sus familias</p>
            </div>
          </div>
          
          <a href="/reportar" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-cyan px-5 py-3 text-xs font-black text-white shadow-md hover:brightness-105 transition shrink-0">
            <span>🐾</span>
            <span>Registrar Mascota</span>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center bg-white p-4 rounded-2xl border border-vecipets-card-border shadow-sm">
          <div className="flex flex-wrap gap-2">
            {["Todos", "Perdidos", "Encontrados", "En búsqueda"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-primary-cyan text-white font-black shadow-sm"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-grow lg:max-w-md">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-3.5 flex items-center text-slate-400 text-xs">🔍</span>
              <input
                type="text"
                placeholder="Buscar por nombre, raza o barrio..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-primary-cyan focus:bg-white transition"
              />
            </div>
            <button className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-slate-500 transition cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>
          </div>
        </div>

        {/* FEED DE TARJETAS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mascotas.map((pet) => (
            <div key={pet.id} className="bg-white rounded-3xl border border-vecipets-card-border shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-slate-50">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-102"
                  style={{ backgroundImage: `url(${pet.imagen})` }}
                />
                <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-xl text-[10px] font-black tracking-wider uppercase shadow-sm ${pet.badgeColor}`}>
                  {pet.estado}
                </span>
                <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center text-slate-600 shadow-sm transition cursor-pointer">
                  🤍
                </button>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 leading-tight">{pet.nombre}</h3>
                    <p className="text-xs font-bold text-slate-400 mt-0.5">{pet.raza}</p>
                  </div>

                  <div className="space-y-1.5 pt-1 text-xs font-bold text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="text-primary-cyan">📍</span>
                      <span>{pet.ubicacion}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary-cyan">📅</span>
                      <span>{pet.fecha}</span>
                    </div>
                  </div>

                  <p className="text-xs font-semibold leading-relaxed text-slate-500 pt-1">
                    {pet.descripcion}
                  </p>
                </div>

                <a
                  href={`/alertas/${pet.id}`}
                  className={`w-full py-3 px-4 rounded-xl font-black text-xs tracking-wide flex items-center justify-between transition ${pet.btnBg}`}
                >
                  <span>Ver detalles</span>
                  <span className={`text-sm ${pet.arrowColor}`}>➔</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* METRICAS INFERIORES */}
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 bg-white p-6 rounded-3xl border border-vecipets-card-border shadow-sm">
          {estadisticas.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 p-2">
              <div className={`w-11 h-11 shrink-0 rounded-2xl flex items-center justify-center text-base font-black ${stat.bgColor}`}>
                {stat.icon}
              </div>
              <div>
                <span className="block text-2xl font-black text-slate-900 leading-none">{stat.value}</span>
                <span className="block text-[11px] font-bold text-slate-400 mt-1 leading-tight">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}