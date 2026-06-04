const LOCAL_RE = /^[a-zA-Z0-9._%+-]+$/;
const DOMAIN_RE = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

export function buildEmail(local: string, domain: string) {
  const l = local.trim();
  const d = domain.trim().toLowerCase();
  if (!l || !d) return "";
  return `${l}@${d}`;
}

export function parseEmailPaste(value: string): { local: string; domain: string } | null {
  const trimmed = value.trim();
  const at = trimmed.indexOf("@");
  if (at <= 0 || at === trimmed.length - 1) return null;
  return {
    local: trimmed.slice(0, at),
    domain: trimmed.slice(at + 1),
  };
}

export function isValidEmailParts(local: string, domain: string) {
  const l = local.trim();
  const d = domain.trim();
  if (!l || !d) return false;
  return LOCAL_RE.test(l) && DOMAIN_RE.test(d);
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
