/** Eğitim kataloğu — filtre tanımları ve yardımcılar */

import {
  trainingCourses,
  trainingCourseIds,
  type TrainingCourse,
  type TrainingCourseId,
} from "@/data/training/courses";

export {
  trainingCourses,
  trainingCourseIds,
  type TrainingCourse,
  type TrainingCourseId,
  type TrainingIllustrationId,
} from "@/data/training/courses";

import {
  developmentPrograms,
  developmentProgramIds,
  type DevelopmentProgram,
  type DevelopmentProgramId,
  type DevelopmentProgramAudience,
} from "@/data/training/development-programs";

export {
  developmentPrograms,
  developmentProgramIds,
  developmentProgramAudiences,
  developmentProgramCategories,
  type DevelopmentProgram,
  type DevelopmentProgramId,
  type DevelopmentProgramAudience,
  type DevelopmentProgramCategory,
} from "@/data/training/development-programs";

export function getDevelopmentProgram(
  id: string,
): DevelopmentProgram | undefined {
  return developmentPrograms.find((p) => p.id === id);
}

export function isDevelopmentProgramId(
  id: string,
): id is DevelopmentProgramId {
  return developmentProgramIds.includes(id as DevelopmentProgramId);
}

export function getProgramsByAudience(audience: DevelopmentProgramAudience) {
  return developmentPrograms.filter((p) => p.audience === audience);
}

export const DEVELOPMENT_PROGRAM_PAGE_SIZE = 9;

export const developmentProgramFilterGroups = [
  { id: "audience" as const },
  { id: "category" as const },
] as const;

export type DevelopmentProgramFilterGroupId =
  (typeof developmentProgramFilterGroups)[number]["id"];

export const developmentProgramFilterOptionKeys: Record<
  DevelopmentProgramFilterGroupId,
  readonly string[]
> = {
  audience: ["ofis", "operasyon"],
  category: [
    "yalin-101",
    "sistem",
    "teknik",
    "liderlik",
    "kisisel-gelisim",
  ],
};

export type DevelopmentProgramFilters = Partial<
  Record<DevelopmentProgramFilterGroupId, string[]>
>;

export function programMatchesFilters(
  program: DevelopmentProgram,
  filters: DevelopmentProgramFilters,
): boolean {
  for (const group of developmentProgramFilterGroups) {
    const selected = filters[group.id];
    if (!selected?.length) continue;
    const value = program[group.id];
    if (!selected.includes(value)) return false;
  }
  return true;
}

export const TRAINING_PAGE_SIZE = 9;

export const trainingFilterGroups = [
  { id: "kategori", labelKey: "kategori" },
  { id: "sistem", labelKey: "sistem" },
  { id: "katilimci", labelKey: "katilimci" },
  { id: "ortam", labelKey: "ortam" },
  { id: "yontem", labelKey: "yontem" },
] as const;

export type TrainingFilterGroupId = (typeof trainingFilterGroups)[number]["id"];

export const trainingFilterOptionKeys: Record<
  TrainingFilterGroupId,
  readonly string[]
> = {
  kategori: [
    "kisisel-gelisim",
    "liderlik",
    "sistem",
    "teknik",
    "yalin-101",
  ],
  sistem: [
    "gelistirme-sistemleri",
    "satis-sistemleri",
    "uretim-sistemleri",
    "yonetim-sistemleri",
  ],
  katilimci: ["ofis", "operasyon"],
  ortam: ["hibrit", "offline", "online-canli", "yuz-yuze"],
  yontem: ["calistay", "kocluk", "oyun-simulasyon", "seminer"],
};

export function getTrainingCourse(id: string): TrainingCourse | undefined {
  return trainingCourses.find((c) => c.id === id);
}

export function isTrainingCourseId(id: string): id is TrainingCourseId {
  return trainingCourseIds.includes(id as TrainingCourseId);
}

export function getRelatedTrainingCourses(
  courseId: string,
  limit = 4,
): TrainingCourse[] {
  const current = getTrainingCourse(courseId);
  if (!current) return trainingCourses.slice(0, limit);

  const sameCategory = trainingCourses.filter(
    (c) =>
      c.id !== courseId &&
      c.kategori.some((k) => current.kategori.includes(k)),
  );
  const pool = sameCategory.length >= limit ? sameCategory : trainingCourses;
  return pool.filter((c) => c.id !== courseId).slice(0, limit);
}

/** Birleşik katalog — tekil eğitim + gelişim programı */

export type CatalogItemKind = "course" | "program";

export type CatalogItem = {
  kind: CatalogItemKind;
  id: string;
};

export const catalogItems: CatalogItem[] = [
  ...trainingCourses.map((c) => ({ kind: "course" as const, id: c.id })),
  ...developmentPrograms.map((p) => ({ kind: "program" as const, id: p.id })),
];

export const unifiedFilterGroups = [
  { id: "tur" as const },
  { id: "kategori" as const },
  { id: "sistem" as const },
  { id: "katilimci" as const },
  { id: "ortam" as const },
] as const;

export type UnifiedFilterGroupId =
  (typeof unifiedFilterGroups)[number]["id"];

export const unifiedFilterOptionKeys: Record<
  UnifiedFilterGroupId,
  readonly string[]
> = {
  tur: ["tekil-egitim", "gelisim-programi"],
  kategori: trainingFilterOptionKeys.kategori,
  sistem: trainingFilterOptionKeys.sistem,
  katilimci: trainingFilterOptionKeys.katilimci,
  ortam: trainingFilterOptionKeys.ortam,
};

export type UnifiedFilters = Partial<
  Record<UnifiedFilterGroupId, string[]>
>;

function courseMatchesUnifiedFilters(
  course: TrainingCourse,
  filters: UnifiedFilters,
): boolean {
  if (filters.tur?.length && !filters.tur.includes("tekil-egitim")) {
    return false;
  }
  if (
    filters.kategori?.length &&
    !filters.kategori.some((k) => course.kategori.includes(k))
  ) {
    return false;
  }
  if (
    filters.sistem?.length &&
    !filters.sistem.some((s) => course.sistem.includes(s))
  ) {
    return false;
  }
  if (
    filters.katilimci?.length &&
    !filters.katilimci.some((k) => course.katilimci.includes(k))
  ) {
    return false;
  }
  if (
    filters.ortam?.length &&
    !filters.ortam.some((o) => course.ortam.includes(o))
  ) {
    return false;
  }
  return true;
}

function programMatchesUnifiedFilters(
  program: DevelopmentProgram,
  filters: UnifiedFilters,
): boolean {
  if (filters.tur?.length && !filters.tur.includes("gelisim-programi")) {
    return false;
  }
  if (
    filters.kategori?.length &&
    !filters.kategori.includes(program.category)
  ) {
    return false;
  }
  if (filters.sistem?.length) return false;
  if (
    filters.katilimci?.length &&
    !filters.katilimci.includes(program.audience)
  ) {
    return false;
  }
  if (filters.ortam?.length) return false;
  return true;
}

export function catalogItemMatchesFilters(
  item: CatalogItem,
  filters: UnifiedFilters,
): boolean {
  if (item.kind === "course") {
    const course = getTrainingCourse(item.id);
    return course ? courseMatchesUnifiedFilters(course, filters) : false;
  }
  const program = getDevelopmentProgram(item.id);
  return program ? programMatchesUnifiedFilters(program, filters) : false;
}
