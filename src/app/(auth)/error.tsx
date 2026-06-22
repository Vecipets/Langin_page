"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="rounded-2xl border border-[#bde3df] bg-white p-6 shadow-lg shadow-[#0f8f88]/10">
      <p className="mb-4 font-bold text-[#17323a]">Algo salio mal</p>
      <button
        className="rounded-xl bg-[#0f8f88] px-4 py-3 font-black text-white transition hover:bg-[#0b6f6a]"
        onClick={() => reset()}
      >
        Reintentar
      </button>
    </div>
  );
}
