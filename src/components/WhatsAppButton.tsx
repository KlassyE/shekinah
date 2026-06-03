import { buildWhatsAppLink } from '../lib/contact';

export function WhatsAppButton() {
  const href = buildWhatsAppLink(
    "Hello Shekinah CIS, I'd like to know more about admissions."
  );
  return (
    <a
      className="wa-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shekinah on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden focusable="false">
        <path
          fill="currentColor"
          d="M16.03 3C9.4 3 4 8.39 4 15.02c0 2.65.86 5.1 2.32 7.1L4 29l7.06-2.27a12.02 12.02 0 0 0 4.97 1.07h.01c6.63 0 12.02-5.39 12.02-12.02C28.06 8.4 22.66 3 16.03 3Zm0 21.6c-1.51 0-2.99-.4-4.28-1.16l-.3-.18-4.18 1.35 1.34-4.07-.2-.32a9.66 9.66 0 0 1-1.49-5.2c0-5.34 4.34-9.68 9.7-9.68 2.59 0 5.02 1.01 6.85 2.84a9.6 9.6 0 0 1 2.84 6.84c0 5.35-4.34 9.69-9.68 9.69Zm5.31-7.25c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.94 1.14-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.34-1.45a8.7 8.7 0 0 1-1.61-2c-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.19-.24-.57-.49-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.15.2 2.07 3.16 5 4.43.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.97-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.2-.56-.34Z"
        />
      </svg>
      <span className="wa-label">Chat with us</span>
    </a>
  );
}
