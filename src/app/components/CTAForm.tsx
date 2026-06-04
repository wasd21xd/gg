"use client";
import { useState } from "react";

export default function CTAForm() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    // Здесь подключить реальный API/CRM (например, AmoCRM, Bitrix24)
    console.log("Lead:", phone);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-8">
        <p className="text-white text-xl font-serif">Спасибо! Перезвоним в течение 15 минут.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8" aria-label="Форма обратного звонка">
      <label htmlFor="phone-input" className="sr-only">Ваш номер телефона</label>
      <input
        id="phone-input"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+7 (___) ___-__-__"
        required
        autoComplete="tel"
        className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-4 text-[15px] focus:outline-none focus:border-white/60 transition-colors"
        aria-label="Номер телефона"
      />
      <button
        type="submit"
        className="bg-white text-[#0a0a0a] px-8 py-4 text-[13px] tracking-[0.08em] uppercase font-semibold hover:bg-[#e8e6e0] transition-colors"
      >
        Перезвоните мне
      </button>
    </form>
  );
}
