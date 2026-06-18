import { SCHOOL } from '../lib/content';

/** Persistent, quiet WhatsApp affordance — present, never shouting. */
export function WhatsAppButton() {
  return (
    <a
      href={SCHOOL.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous écrire sur WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-ink/10 bg-bone/90 py-2 pl-2 pr-4 shadow-[0_8px_30px_rgba(22,35,63,0.12)] backdrop-blur transition-all duration-300 ease-cour hover:pr-5"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.4 3.6C18.2 1.4 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.4-6.2-3.6-8.4zM12 22c-1.8 0-3.5-.5-5.1-1.4l-.4-.2-3.9 1 1-3.8-.2-.4C2.5 15.5 2 13.8 2 12 2 6.5 6.5 2 12 2c2.6 0 5.1 1 6.9 2.9C20.9 6.9 22 9.3 22 12c0 5.5-4.5 10-10 10zm5.5-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.2-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.9-2.8-1.6-4-3.6-.3-.5.3-.5.9-1.7.1-.2 0-.4-.1-.6-.1-.2-.7-1.6-1-2.2-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.2-.2-.3-.5-.4z" />
        </svg>
      </span>
      <span className="text-[13px] font-medium text-ink">WhatsApp</span>
    </a>
  );
}
