"use client";

import { useState, useEffect } from "react";

const KEY = "imv-ci-auth";
const PWD  = "Metab26@IMV";

export function IMVPasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [ready,    setReady]    = useState(false);
  const [value,    setValue]    = useState("");
  const [error,    setError]    = useState(false);
  const [shake,    setShake]    = useState(false);

  useEffect(() => {
    if (localStorage.getItem(KEY) === "1") setUnlocked(true);
    setReady(true);
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (value === PWD) {
      localStorage.setItem(KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
      setShake(true);
      setValue("");
      setTimeout(() => setShake(false), 500);
    }
  }

  if (!ready)    return null;
  if (unlocked)  return <>{children}</>;

  return (
    <div className="min-h-screen bg-[#1C1C1A] flex items-center justify-center px-6">
      <div
        className="w-full max-w-[360px]"
        style={{ animation: shake ? "shake 0.4s ease" : undefined }}
      >
        {/* Logo mark */}
        <div className="flex flex-col items-center mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/LOGO - ASSINATURA - PRINCIPAL@4x.png"
            alt="IMV"
            className="h-9 mb-8 opacity-80"
          />
          <p className="text-[9px] font-semibold tracking-[0.28em] uppercase text-[#C4956A]">
            Documento restrito
          </p>
          <h1 className="font-serif text-[22px] font-bold text-white mt-2 text-center leading-[1.2]">
            Inteligência Competitiva<br />de Mercado
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input
            type="password"
            value={value}
            onChange={e => { setValue(e.target.value); setError(false); }}
            placeholder="Senha de acesso"
            autoFocus
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
                       text-white text-[13px] placeholder-white/25
                       focus:outline-none focus:border-[#B5894A]/60 focus:bg-white/8
                       transition-all duration-150"
          />

          {error && (
            <p className="text-[11px] text-red-400/80 text-center">
              Senha incorreta. Tente novamente.
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#B5894A] hover:bg-[#C4956A] text-white font-semibold
                       text-[12px] tracking-[0.06em] uppercase py-3 rounded-lg
                       transition-colors duration-150 cursor-pointer"
          >
            Acessar
          </button>
        </form>

        <p className="text-center text-[10px] text-white/20 mt-8">
          IMV Academy · Uso restrito à equipe interna
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%      { transform: translateX(-8px); }
          40%      { transform: translateX(8px); }
          60%      { transform: translateX(-6px); }
          80%      { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
}
