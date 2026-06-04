import { TechnologyCipSection } from "@/components/technology/TechnologyCipSection";
import { TechnologyCtaSection } from "@/components/technology/TechnologyCtaSection";
import { TechnologyEcosystemSection } from "@/components/technology/TechnologyEcosystemSection";
import { TechnologyHardwareSection } from "@/components/technology/TechnologyHardwareSection";
import { TechnologyHeroSection } from "@/components/technology/TechnologyHeroSection";
import { TechnologyOverviewSection } from "@/components/technology/TechnologyOverviewSection";

export function TechnologyPage() {
  return (
    <>
      <TechnologyHeroSection />
      <TechnologyOverviewSection />
      <TechnologyCipSection />
      <TechnologyHardwareSection />
      <TechnologyEcosystemSection />
      <TechnologyCtaSection />
    </>
  );
}
