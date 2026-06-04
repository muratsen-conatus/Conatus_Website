import { ConsultingCasesSection } from "@/components/consulting/ConsultingCasesSection";
import { ConsultingCtaSection } from "@/components/consulting/ConsultingCtaSection";
import { ConsultingHeroSection } from "@/components/consulting/ConsultingHeroSection";

export function ConsultingPage() {
  return (
    <>
      <ConsultingHeroSection />
      <ConsultingCasesSection />
      <ConsultingCtaSection />
    </>
  );
}
