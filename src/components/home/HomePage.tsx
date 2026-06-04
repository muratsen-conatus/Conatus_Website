import { HeroSection } from "@/components/home/HeroSection";
import { DegerSection } from "@/components/home/DegerSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ReferencesSection } from "@/components/home/ReferencesSection";
import { CtaSection } from "@/components/home/CtaSection";

export async function HomePage() {
  return (
    <>
      <HeroSection />
      <DegerSection />
      <ServicesSection />
      <WhyUsSection />
      <ReferencesSection />
      <CtaSection />
    </>
  );
}
