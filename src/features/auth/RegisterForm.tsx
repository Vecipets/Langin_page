'use client'

import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col gap-4">
      <input className="px-4 py-3 font-semibold" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
      <input className="px-4 py-3 font-semibold" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electronico" />
      <input className="px-4 py-3 font-semibold" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contrasena" />
      <button className="rounded-xl bg-[#0f8f88] px-4 py-3 font-black text-white shadow-md transition hover:bg-[#0b6f6a]" type="submit">Crear cuenta</button>
    </form>
  );
}
