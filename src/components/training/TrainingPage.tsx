import { TrainingApproachSection } from "@/components/training/TrainingApproachSection";
import { TrainingCtaSection } from "@/components/training/TrainingCtaSection";
import { TrainingCatalogSection } from "@/components/training/TrainingCatalogSection";
import { TrainingHeroSection } from "@/components/training/TrainingHeroSection";

export function TrainingPage() {
  return (
    <>
      <TrainingHeroSection />
      <TrainingApproachSection />
      <TrainingCatalogSection />
      <TrainingCtaSection />
    </>
  );
}
