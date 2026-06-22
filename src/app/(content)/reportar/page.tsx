"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCamera, FaCat, FaCheckCircle, FaDog } from "react-icons/fa";


// Contexto de mascotas
import { usePets } from "@/contexts/assets";

/* =====================================================
    TIPO DE DATOS DE UNA MASCOTA
===================================================== */
type Mascota = {
  id?: string;
  nombre: string;
  tipo: "Perro" | "Gato";
  raza: string;
  edad: string;
  estado: string;
  ubicacionTexto: string;
  coordenadas: [number, number];
  fecha: string;
  descripcion: string;
  foto: string;
};

/* =====================================================
    IMPORTAR MAPA SIN SSR (Next.js no puede renderizarlo
    del lado del servidor porque usa objetos del navegador)
===================================================== */
const DynamicSelector = dynamic(
  () => import("@/features/mapa/DynamicSelector"),
  { ssr: false }
);

export default function ReportarPage() {
  const router = useRouter();
  const { addPet } = usePets();

  /* =====================================================
      ESTADOS DEL FORMULARIO
  ====================================================== */
  const [tipo, setTipo] = useState<"Perro" | "Gato">("Perro");
  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [barrio, setBarrio] = useState("");
  const [ubicacion, setUbicacion] = useState<[number, number] | null>(null);
  const [foto, setFoto] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  /* =====================================================
      MANEJAR SUBIDA Y REDUCCIÓN AUTOMÁTICA DE IMAGEN
      Se reduce la foto a máximo 220px de ancho para evitar
      archivos muy pesados.
  ====================================================== */
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();

      img.onload = () => {
        // Crear canvas para redimensionar imagen
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const MAX_WIDTH = 220;
        const scale = MAX_WIDTH / img.width;

        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scale;

        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Convertir a base64 con compresión
        const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
        setFoto(dataUrl);
      };

      img.src = event.target?.result as string;
    };

    reader.readAsDataURL(file);
  };

  /* =====================================================
      MANEJAR ENVÍO DE FORMULARIO
  ====================================================== */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones básicas
    if (!ubicacion) return alert("⚠️ Selecciona ubicación en el mapa.");
    if (!nombre.trim()) return alert("⚠️ El nombre es obligatorio.");
    if (!raza.trim()) return alert("⚠️ La raza es obligatoria.");
    if (!edad.trim()) return alert("⚠️ La edad es obligatoria.");
    if (!barrio.trim()) return alert("⚠️ El barrio es obligatorio.");

    setGuardando(true);

    try {
      // Crear objeto mascota
      const nuevaMascota: Mascota = {
        nombre: nombre.trim(),
        tipo,
        raza: raza.trim(),
        edad: edad.trim(),
        estado: "perdido",
        ubicacionTexto: barrio.trim(),
        coordenadas: ubicacion,
        fecha: new Date().toLocaleDateString(),
        descripcion: descripcion.trim() || "Sin descripción.",
        foto: foto || "",
      };

      // Guardar en contexto + base de datos
          // Aquí llamas a la función addPet() que viene del contexto (usePets)
          // Esta función debe guardar la mascota en el estado global y también en la base de datos
          await addPet(nuevaMascota);

          // Muestra un mensaje indicando que todo salió bien
          alert("✅ ¡Alerta publicada correctamente!");

          // Redirige al usuario a la página de alertas
          router.push("/alertas");

          } catch (err) {
            // Si algo falla, muestra el error en la consola
            console.error(err);

            // Y advierte al usuario con una alerta visible
            alert("❌ Error al guardar. Más detalles en consola.");
          } finally {
            // Este bloque se ejecuta siempre: éxito o error
            // Aquí desactivas el estado de "guardando" para habilitar botones, etc.
            setGuardando(false);
          }
        };


  /* =====================================================
      RENDERIZADO DEL COMPONENTE
  ====================================================== */
  return (
    <div className="max-w-2xl mx-auto pb-10">
      <h1 className="text-3xl font-black text-[#17323a] text-center py-6">
        Reportar Mascota 📢
      </h1>

      {/* FORMULARIO */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-3xl shadow-lg shadow-[#0f8f88]/10 border border-[#bde3df] space-y-6"
      >
        {/* ====================== TIPO DE MASCOTA ====================== */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setTipo("Perro")}
            className={`flex-1 py-4 rounded-xl border-2 flex flex-col items-center transition ${
              tipo === "Perro" ? "border-[#0f8f88] bg-[#e8f7f5] text-[#0b6f6a]" : "border-[#bde3df] bg-white text-[#596b68]"
            }`}
          >
            <FaDog className="text-2xl" /> Perro
          </button>

          <button
            type="button"
            onClick={() => setTipo("Gato")}
            className={`flex-1 py-4 rounded-xl border-2 flex flex-col items-center transition ${
              tipo === "Gato" ? "border-[#0f8f88] bg-[#e8f7f5] text-[#0b6f6a]" : "border-[#bde3df] bg-white text-[#596b68]"
            }`}
          >
            <FaCat className="text-2xl" /> Gato
          </button>
        </div>

        {/* ====================== CAMPOS DE TEXTO ====================== */}
        <CampoTexto label="Nombre" value={nombre} setValue={setNombre} />
        <CampoTexto label="Raza" value={raza} setValue={setRaza} />
        <CampoTexto label="Edad" value={edad} setValue={setEdad} />

        {/* Descripción */}
        <div>
          <label className="font-bold text-[#17323a]">Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full p-3 mt-1"
            required
          />
        </div>

        {/* Barrio */}
        <CampoTexto label="Barrio" value={barrio} setValue={setBarrio} />

        {/* ====================== FOTO ====================== */}
        <div>
          <label className="font-bold text-[#17323a] block mb-2">Foto</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="subir-foto"
          />

          <label
            htmlFor="subir-foto"
            className="border-2 border-dashed border-[#bde3df] bg-[#fbfcf7] rounded-xl p-4 text-center cursor-pointer h-40 relative overflow-hidden transition hover:border-[#0f8f88]"
          >
            {foto ? (
              <img
                src={foto}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <>
                <FaCamera className="text-2xl mb-2 text-[#0f8f88]" />
                <p className="text-[#596b68] text-sm font-semibold">Clic para subir foto</p>
              </>
            )}
          </label>
        </div>

     {/* ====================== MAPA ====================== */}
        <div>
          <label className="font-bold text-[#17323a]">Ubicación</label>
          <p className="text-xs text-[#596b68] mb-2">Toca el mapa para marcar dónde la viste.</p>
          
          <div className="h-64 rounded-xl overflow-hidden border border-[#bde3df] relative z-0">
            {/* AQUÍ ESTÁ EL CAMBIO IMPORTANTE */}
            <DynamicSelector
              onLocationSelect={(coords: [number, number]) => setUbicacion(coords)}
              selectedLocation={ubicacion}
            />
          </div>

          {ubicacion && (
            <p className="text-[#0f8f88] mt-1 flex items-center gap-1 font-bold">
              <FaCheckCircle /> Coordenadas guardadas: {ubicacion[0].toFixed(4)}, {ubicacion[1].toFixed(4)}
            </p>
          )}
        </div>

        {/* ====================== BOTÓN ====================== */}
        <button
          type="submit"
          disabled={guardando}
          className={`w-full text-white font-black py-4 rounded-xl shadow-md transition ${
            guardando ? "bg-[#8aa09d]" : "bg-[#0f8f88] hover:bg-[#0b6f6a]"
          }`}
        >
          {guardando ? "Guardando..." : "Publicar alerta"}
        </button>
      </form>
    </div>
  );
}

/* =====================================================
    COMPONENTE REUTILIZABLE PARA CAMPOS DE TEXTO
===================================================== */
function CampoTexto({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (v: string) => void;
}) {
  return (
    <div>
      <label className="font-bold text-[#17323a]">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-3 mt-1"
        required
      />
    </div>
  );
  
}
