"use client";

import { TrainingCertificateCarousel } from "@/components/training/certificates/TrainingCertificateCarousel";
import { TrainingDetailTabPanelLayout } from "@/components/training/TrainingDetailTabPanelLayout";

const asidePatternStyle = {
  backgroundImage:
    "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 12px)",
};

type TrainingCertificationPanelProps = {
  items: string[];
  listTitle: string;
};

export function TrainingCertificationPanel({
  items,
  listTitle,
}: TrainingCertificationPanelProps) {
  return (
    <TrainingDetailTabPanelLayout
      tab="certification"
      title={listTitle}
      items={items}
      rightColumn={
        <div className="relative hidden min-h-0 overflow-hidden lg:flex lg:flex-col">
          <div className="relative flex h-full min-h-0 flex-col bg-gradient-to-br from-brand-700/90 via-brand-600 to-brand-500 px-4 py-5 sm:px-5 sm:py-6">
            <div
              className="absolute inset-0 opacity-20"
              style={asidePatternStyle}
              aria-hidden
            />
            <div className="relative flex min-h-0 flex-1 flex-col">
              <TrainingCertificateCarousel className="h-full" />
            </div>
          </div>
        </div>
      }
    />
  );
}
