// src/components/ui/WhatsAppButton.tsx
"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573024453377" // 👈 Tu número oficial de VeciPets
      target="_blank"
      rel="noopener noreferrer"
      // Posicionamiento flotante: Esquiva el widget de Next.js con bottom-24 en desarrollo, se acomoda en escritorio con md:bottom-8
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-semibold shadow-xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-300 group border-2 border-slate-900"
      aria-label="Contactar por WhatsApp"
    >
      {/* 🟢 SVG Oficial con tamaño controlado estrictamente para que no se desfase */}
      <svg 
        className="w-5 h-5 relative z-10 inline-block" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.516 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.66.986 3.288 1.479 4.882 1.481 5.429.002 9.85-4.413 9.853-9.84.002-2.63-1.023-5.101-2.887-6.967C16.58 1.962 14.113.938 11.49.938c-5.435 0-9.855 4.414-9.858 9.841-.001 1.706.46 3.376 1.334 4.849l-.99 3.613 3.673-.963z"/>
      </svg>

      {/* Texto del botón con la tipografía Nunito del proyecto */}
      <span className="text-sm tracking-wide font-sans relative z-10 select-none">
        Escríbenos
      </span>
    </a>
  );
}