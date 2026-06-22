"use client";

export default function TargetAudienceSection() {
  const profiles = [
    {
      title: "Dueños de mascotas",
      tag: "Cuidado familiar",
      desc: "Tienen un espacio centralizado para publicar reportes de manera clara, subir fotos y actualizar los datos de sus peludos sin que la información se pierda en el ruido de las redes sociales tradicionales.",
      // Alto Contraste: Bordes oscuros y sombras de bloque rígidas
      cardBg: "bg-white border-2 border-slate-900 shadow-[5px_5px_0px_0px_rgba(243,178,108,1)]",
      badgeStyle: "bg-amber-500/10 text-amber-700 border-amber-300",
      iconBg: "bg-amber-50 border-2 border-slate-900",
      iconColor: "#D97706",
      svgPath: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm-3.5-9a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 8.5 11Zm7 0a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 15.5 11Zm-7 3s1.5 2 3.5 2 3.5-2 3.5-2"
    },
    {
      title: "Vecinos voluntarios",
      tag: "Apoyo ciudadano",
      desc: "Pueden monitorear de forma activa mapas de calor en su propio cuadrante o barrio, validar avistamientos con comentarios y aportar pistas responsables para acelerar los reencuentros.",
      // Sombra sólida usando el azul insignia
      cardBg: "bg-white border-2 border-slate-900 shadow-[5px_5px_0px_0px_rgba(94,123,196,1)]",
      badgeStyle: "bg-blue-500/10 text-blue-700 border-blue-300",
      iconBg: "bg-blue-50 border-2 border-slate-900",
      iconColor: "#2563EB",
      svgPath: "M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm9 14.75a1 1 0 0 0-.79-1C17.47 17.2 14.86 16.5 12 16.5s-5.47.7-8.21 1.28a1 1 0 0 0-.79 1V21a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1ZM5.13 19.33C7.21 18.73 9.61 18.5 12 18.5s4.79.23 6.87.83Z"
    },
    {
      title: "Rescatistas y refugios",
      tag: "Red institucional",
      desc: "Encuentran un canal formal para gestionar y mitigar casos críticos de abandono o pérdidas masivas, coordinando esfuerzos de difusión con veterinarias aliadas de Medellín.",
      // Sombra sólida esmeralda
      cardBg: "bg-white border-2 border-slate-900 shadow-[5px_5px_0px_0px_rgba(5,150,105,1)]",
      badgeStyle: "bg-emerald-500/10 text-emerald-700 border-emerald-300",
      iconBg: "bg-emerald-50 border-2 border-slate-900",
      iconColor: "#059669",
      svgPath: "M12 21a1 1 0 0 1-.71-.29l-7.77-7.71a5.35 5.35 0 0 1 0-7.53 5.25 5.25 0 0 1 7.48 0L12 6.53l1-1a5.25 5.25 0 0 1 7.48 0 5.35 5.35 0 0 1 0 7.53l-7.77 7.71A1 1 0 0 1 12 21Zm-4.23-16a3.24 3.24 0 0 0-2.31 1.34 3.33 3.33 0 0 0 0 4.69l6.54 6.48 6.54-6.48a3.33 3.33 0 0 0 0-4.69 3.25 3.25 0 0 0-4.61 0L13 7.24a1 1 0 0 1-1.41 0l-.93-.93A3.22 3.22 0 0 0 7.77 5Z"
    }
  ];

  return (
    <section className="w-full px-6 py-16 max-w-7xl mx-auto bg-transparent">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ================= LADO IZQUIERDO: TEXTO DE ENTRADA ================= */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#5E7BC4] bg-[#5E7BC4]/10 px-4 py-1.5 rounded-full inline-block border border-[var(--color-vecipets-card-border)] shadow-2xs select-none">
            ¿Para quién es?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight max-w-sm">
            Una herramienta pensada para cada miembro de la comunidad
          </h2>
          <p className="text-sm font-bold leading-relaxed text-slate-500 max-w-md">
            Ya seas un cuidador buscando respuestas o un vecino con ganas de vigilar las calles de tu zona, VeciPets unifica las acciones en una sola red solidaria.
          </p>
        </div>

        {/* ================= LADO DERECHO: TARJETAS EN CAJAS FLOTANTES DE ALTO CONTRASTE ================= */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {profiles.map((profile, index) => (
            <div 
              key={index}
              className={`p-5 rounded-3xl transform hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-5 group ${profile.cardBg}`}
            >
              {/* Círculo/Cuadro contenedor del Icono */}
              <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 ${profile.iconBg}`}>
                <svg 
                  className="w-7 h-7" 
                  fill={profile.iconColor} 
                  viewBox="0 0 24 24"
                >
                  <path d={profile.svgPath} />
                </svg>
              </div>

              {/* Textos y Etiquetas */}
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center sm:justify-start">
                  <h3 className="font-black text-base text-slate-900 tracking-tight">
                    {profile.title}
                  </h3>
                  <span className={`inline-block self-center sm:self-auto text-[9px] uppercase tracking-widest font-black px-2.5 py-1 rounded-md border-2 border-slate-900 shadow-[1.5px_1.5px_0px_0px_rgba(23,50,58,1)] ${profile.badgeStyle}`}>
                    {profile.tag}
                  </span>
                </div>
                
                {/* Texto descriptivo de alta legibilidad */}
                <p className="text-xs font-semibold leading-relaxed text-slate-600">
                  {profile.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}