export type ConsultingCaseKey =
  | "deger"
  | "capacity"
  | "cph"
  | "eph"
  | "culture";

export type ConsultingSolutionBlock = { title: string; items: string[] };
export type ConsultingOutcomeBlock = { title: string; items: string[] };

export type ConsultingCaseData = {
  nav: string;
  title: string;
  lead: string;
  problems: string[];
  solution: {
    intro: string;
    blocks?: ConsultingSolutionBlock[];
    quote?: string;
  };
  outcomes: {
    intro?: string;
    items?: string[];
    blocks?: ConsultingOutcomeBlock[];
    quote?: string;
    footer?: string;
  };
};

export const consultingCaseKeys: ConsultingCaseKey[] = [
  "capacity",
  "cph",
  "eph",
  "culture",
];

export function parseConsultingCase(
  raw: unknown,
  caseKey: ConsultingCaseKey,
): ConsultingCaseData {
  if (!raw || typeof raw !== "object") {
    throw new Error(`Invalid consulting case data for "${caseKey}"`);
  }

  const data = raw as ConsultingCaseData;

  if (!Array.isArray(data.problems)) {
    throw new Error(`Missing problems array for consulting case "${caseKey}"`);
  }

  return data;
}
