'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simples: apenas loga. Aqui você pode integrar com Resend, Formspree etc.
    console.log('Email cadastrado:', email);
    alert('Valeu! Te avisaremos quando o COOP for ao ar.');
    setEmail('');
  };

  return (
    <form className="mt-6 flex max-w-xl gap-3" onSubmit={onSubmit}>
      <input
        type="email"
        required
        placeholder="seu@email.com"
        className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-zinc-400 focus:border-yellow-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="rounded-2xl bg-gradient-to-r from-yellow-400 to-blue-500 px-5 py-3 font-semibold text-black hover:opacity-95">
        Quero receber
      </button>
    </form>
  );
}
