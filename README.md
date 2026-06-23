# 🐾 VeciPets

**Unidos por cada huella.**

VeciPets es una plataforma web colaborativa diseñada para la comunidad vecinal, facilitando la difusión, reporte y búsqueda de mascotas perdidas o encontradas en tiempo real.

## 🚀 Características principales
* **Gestión de Alertas:** Publicación de mascotas perdidas y encontradas.
* **Mapa Interactivo:** Visualización de reportes cercanos mediante integración de mapas.
* **Autenticación Segura:** Sistema de usuarios integrado para gestionar reportes personales.
* **Botón de Contacto:** Acceso directo vía WhatsApp para facilitar el reencuentro.
* **Diseño Responsivo:** Adaptado para dispositivos móviles y escritorio.

## 🛠 Tecnologías utilizadas
* **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
* **Autenticación:** [Clerk](https://clerk.com/)
* **Iconografía:** [Lucide React](https://lucide.dev/)
* **Mapas:** [React Leaflet](https://react-leaflet.js.org/)
* **Despliegue:** [Vercel](https://vercel.com/)

## 📂 Estructura del Proyecto
```text
src/
├── app/            # Rutas y layouts principales
├── components/     # Componentes reutilizables (UI, Layout, Sections)
├── contexts/       # Gestión de estados globales
├── features/       # Lógica específica (auth, reportes)
└── middleware.ts   # Protección de rutas mediante Clerk
