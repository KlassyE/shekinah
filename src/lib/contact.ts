export const WHATSAPP_NUMBER = '256776824339';
export const PRINCIPAL_EMAIL = 'principal.shekinahcis@gmail.com';
export const WEB3FORMS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) ?? '';

export function buildWhatsAppLink(message: string) {
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function buildMailtoLink(subject: string, body: string) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${PRINCIPAL_EMAIL}?subject=${s}&body=${b}`;
}

export type SendResult = { ok: boolean; mode: 'web3forms' | 'mailto'; message: string };

export async function sendFormToEmail(payload: Record<string, string>, subject: string): Promise<SendResult> {
  const body = Object.entries(payload)
    .filter(([, v]) => v && v.trim().length > 0)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');

  if (WEB3FORMS_KEY) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: 'Shekinah Website',
          to: PRINCIPAL_EMAIL,
          ...payload
        })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.success !== false) {
        return { ok: true, mode: 'web3forms', message: 'Message sent to the school office.' };
      }
      return { ok: false, mode: 'web3forms', message: data?.message || 'Could not send email. Please try WhatsApp instead.' };
    } catch (e) {
      return { ok: false, mode: 'web3forms', message: 'Network error. Please try WhatsApp instead.' };
    }
  }

  // Fallback: open the visitor's mail client pre-filled to the principal's email.
  const href = buildMailtoLink(subject, body);
  window.location.href = href;
  return { ok: true, mode: 'mailto', message: 'Opening your email app — please press Send to deliver the message.' };
}
