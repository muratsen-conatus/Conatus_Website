import { AboutSection } from "@/components/corporate/AboutSection";
import { CorporateCtaSection } from "@/components/corporate/CorporateCtaSection";
import { MissionVisionSection } from "@/components/corporate/MissionVisionSection";
import { TeamSection } from "@/components/corporate/TeamSection";
import { ValuesSection } from "@/components/corporate/ValuesSection";

export function CorporatePage() {
  return (
    <>
      <AboutSection />
      <MissionVisionSection />
      <ValuesSection />
      <TeamSection />
      <CorporateCtaSection />
    </>
  );
}
