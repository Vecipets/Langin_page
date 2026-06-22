"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 border-slate-900 px-6 py-12 sm:px-10 lg:px-16 mt-auto relative">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
        
        {/* ================= 1. IDENTIDAD CORPORATIVA UNIFICADA ================= */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center gap-3 select-none group">
            {/* Contenedor del Logo con borde y sombra Neo-brutalista */}
            <div className="w-12 h-12 flex items-center justify-center shrink-0 bg-white border-2 border-slate-900 rounded-xl shadow-[3px_3px_0px_0px_rgba(23,50,58,1)] overflow-hidden">
              <img 
                src="/logo.svg" 
                alt="VeciPets" 
                width={48}
                height={48}
                className="w-full h-full object-contain p-1"
              />
            </div>
            {/* Bloque apilado vertical del texto de marca */}
            <div className="flex flex-col justify-center text-left">
              <span className="font-black text-2xl text-slate-900 tracking-tight leading-none">
                VeciPets
              </span>
              <span className="text-[10px] font-black text-[#5E7BC4] tracking-wider uppercase mt-1.5 leading-none select-none">
                Unidos por cada huella
              </span>
            </div>
          </div>
          <p className="text-xs font-bold leading-relaxed text-slate-600 max-w-xs pt-2">
            Centralizando reportes geolocalizados para garantizar el bienestar y el pronto reencuentro de nuestras mascotas en la comunidad.
          </p>
        </div>

        {/* ================= 2. EXPLORAR ================= */}
        <div className="space-y-4 md:pl-4">
          <h4 className="text-xs uppercase tracking-widest font-black text-slate-900">Explorar</h4>
          <ul className="space-y-3 text-xs font-bold text-slate-600">
            <li><Link href="/" className="hover:text-[#5E7BC4] hover:translate-x-1 inline-block transition-transform duration-200">Inicio</Link></li>
            <li><Link href="/alertas" className="hover:text-[#5E7BC4] hover:translate-x-1 inline-block transition-transform duration-200">Alertas</Link></li>
            <li><Link href="/mapa" className="hover:text-[#5E7BC4] hover:translate-x-1 inline-block transition-transform duration-200">Mapa interactivo</Link></li>
          </ul>
        </div>

        {/* ================= 3. LEGAL ================= */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-black text-slate-900">Legal</h4>
          <ul className="space-y-3 text-xs font-bold text-slate-600">
            <li><Link href="/privacidad" className="hover:text-[#5E7BC4] hover:translate-x-1 inline-block transition-transform duration-200">Privacidad</Link></li>
            <li><Link href="/terminos" className="hover:text-[#5E7BC4] hover:translate-x-1 inline-block transition-transform duration-200">Términos de servicio</Link></li>
          </ul>
        </div>

        {/* ================= 4. CONTACTO Y REDES (ESTILO BOTONES) ================= */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-black text-slate-900">Contacto</h4>
          <ul className="space-y-3 flex flex-col items-center md:items-start">
            
            {/* Correo */}
            <li className="w-full">
              <a href="mailto:comunidadvecipets@gmail.com" className="flex items-center gap-3 group justify-center md:justify-start">
                <div className="w-8 h-8 rounded-lg border-2 border-slate-900 flex items-center justify-center bg-slate-50 group-hover:bg-[#5E7BC4] group-hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(23,50,58,1)] shrink-0 text-slate-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-600 group-hover:text-[#5E7BC4] transition-colors break-all">
                  comunidadvecipets@gmail.com
                </span>
              </a>
            </li>

            {/* Facebook */}
            <li className="w-full">
              <a href="https://www.facebook.com/share/1EbcQLNiVH/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group justify-center md:justify-start">
                <div className="w-8 h-8 rounded-lg border-2 border-slate-900 flex items-center justify-center bg-slate-50 group-hover:bg-[#5E7BC4] group-hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(23,50,58,1)] shrink-0 text-slate-900">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-600 group-hover:text-[#5E7BC4] transition-colors">
                  Facebook
                </span>
              </a>
            </li>

            {/* Instagram */}
            <li className="w-full">
              <a href="https://www.instagram.com/vecipets_community" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group justify-center md:justify-start">
                <div className="w-8 h-8 rounded-lg border-2 border-slate-900 flex items-center justify-center bg-slate-50 group-hover:bg-[#5E7BC4] group-hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(23,50,58,1)] shrink-0 text-slate-900">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-600 group-hover:text-[#5E7BC4] transition-colors">
                  Instagram
                </span>
              </a>
            </li>

            {/* WhatsApp */}
            <li className="w-full">
              <a href="https://wa.me/573217803723" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group justify-center md:justify-start">
                <div className="w-8 h-8 rounded-lg border-2 border-slate-900 flex items-center justify-center bg-slate-50 group-hover:bg-[#5E7BC4] group-hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(23,50,58,1)] shrink-0 text-slate-900">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.66.986 3.288 1.486 4.88 1.487 5.4 0 9.794-4.414 9.797-9.843.002-2.628-1.022-5.1-2.885-6.968C16.566 1.96 14.1 .936 11.473.935c-5.435 0-9.8 4.414-9.803 9.844-.001 1.738.464 3.43 1.346 4.931l-.993 3.624 3.702-.972-.11.066zM17.486 14.4c-.3-.15-1.774-.874-2.048-.974-.274-.1-.474-.15-.674.15-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-1.02-.515-1.693-.767-2.363-1.343-.7-.601-1.21-1.336-1.347-1.574-.175-.238-.015-.367.105-.487.108-.108.238-.275.357-.412.12-.138.16-.238.24-.388.08-.15.04-.275-.02-.4-.06-.125-.474-1.15-.65-1.575-.17-.412-.35-.356-.475-.362-.12-.006-.26-.006-.4-.006s-.365.05-.555.26c-.19.21-.725.71-.725 1.73 0 1.02.74 2 1.01 2.363.27.363 1.455 2.24 3.525 3.134.49.21.874.337 1.173.43.494.157.943.134 1.298.08.395-.06 1.774-.725 2.023-1.39.25-.664.25-1.235.175-1.353-.075-.118-.275-.188-.575-.338z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-600 group-hover:text-[#5E7BC4] transition-colors">
                  WhatsApp
                </span>
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* ================= 5. BARRA DE CIERRE GEOLOCALIZADA ================= */}
      <div className="mx-auto max-w-7xl border-t-2 border-dashed border-slate-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Derechos de Autor */}
        <p className="text-[11px] font-black text-slate-500 order-2 md:order-1 select-none uppercase tracking-wider">
          © {new Date().getFullYear()} VeciPets. Todos los derechos reservados.
        </p>
        
        {/* Ubicación Geográfica */}
        <div className="flex items-center gap-2 text-[11px] font-black text-slate-500 order-1 md:order-2 select-none uppercase tracking-wider bg-slate-100 px-3 py-1.5 rounded-full border border-slate-300">
          <svg className="w-3.5 h-3.5 text-[#5E7BC4] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
          </svg>
          <span>Medellín, Col.</span>
        </div>
      </div>
    </footer>
  );
}