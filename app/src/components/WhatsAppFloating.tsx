"use client";

const WHATSAPP_HREF =
  "https://wa.me/5562992218107?text=Gostaria%20de%20saber%20mais%20sobre%20as%20consultas!";

export function WhatsAppFloating() {
  return (
    <aside
      aria-label="Atendimento rápido pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center"
    >
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Everton Carlos no WhatsApp"
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] hover:shadow-[0_12px_28px_rgba(37,211,102,0.6)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Onda de pulso sutil em loop */}
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 opacity-75"
        />

        {/* Ícone oficial do WhatsApp em vetor nítido */}
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-7 w-7 shrink-0 drop-shadow-sm"
          aria-hidden="true"
        >
          <path d="M16.01 2.01C8.28 2.01 2 8.28 2 16.02c0 2.68.75 5.2 2.06 7.37L2.02 30l6.81-2c2.11 1.22 4.54 1.93 7.18 1.93 7.73 0 14.01-6.27 14.01-14.01S23.74 2.01 16.01 2.01zm0 25.59c-2.31 0-4.47-.64-6.32-1.76l-.45-.27-4.22 1.24 1.26-4.11-.3-.47a11.53 11.53 0 01-1.78-6.21c0-6.4 5.21-11.61 11.61-11.61s11.61 5.21 11.61 11.61-5.21 11.61-11.61 11.61zm6.36-8.68c-.35-.18-2.07-1.02-2.39-1.14-.32-.12-.56-.18-.79.18-.23.35-.91 1.14-1.11 1.38-.2.23-.41.26-.76.09-.35-.18-1.48-.54-2.81-1.73-1.04-.93-1.74-2.08-1.94-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.41.53-.61.18-.2.23-.35.35-.59.12-.23.06-.44-.03-.61-.09-.18-.79-1.91-1.09-2.61-.29-.69-.58-.6-.79-.61-.2-.01-.44-.01-.67-.01-.23 0-.61.09-.93.44-.32.35-1.22 1.2-1.22 2.92s1.25 3.39 1.43 3.62c.18.23 2.46 3.75 5.96 5.26.83.36 1.48.58 1.99.74.84.27 1.6.23 2.21.14.67-.1 2.07-.85 2.36-1.67.29-.82.29-1.52.2-1.67-.09-.15-.32-.23-.67-.41z" />
        </svg>

        {/* Texto descritivo (oculto em telas muito pequenas, visível a partir de sm) */}
        <span className="hidden pr-1 font-sans text-sm font-bold tracking-tight sm:inline-block">
          Agendar Avaliação
        </span>
      </a>
    </aside>
  );
}

