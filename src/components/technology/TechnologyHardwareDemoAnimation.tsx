import Image from "next/image";
import { hardwareRobotArmGif } from "@/data/technology/hardware-product-images";
import { TechnologyVisualFrame } from "@/components/technology/TechnologyVisualFrame";
import {
  technologyDemoFrameInnerClass,
  technologyDemoFrameInnerCompactClass,
  technologyDemoMediaClass,
  technologyDemoMediaCompactClass,
} from "@/components/technology/technology-demo-frame";
import { cn } from "@/lib/utils";

type TechnologyHardwareDemoAnimationProps = {
  label: string;
  className?: string;
  compact?: boolean;
};

export function TechnologyHardwareDemoAnimation({
  label,
  className,
  compact = false,
}: TechnologyHardwareDemoAnimationProps) {
  return (
    <TechnologyVisualFrame
      compact={compact}
      className={cn("w-full p-0", className)}
    >
      <div
        className={
          compact
            ? technologyDemoFrameInnerCompactClass
            : technologyDemoFrameInnerClass
        }
        role="img"
        aria-label={label}
      >
        <Image
          src={hardwareRobotArmGif}
          alt={label}
          width={320}
          height={200}
          unoptimized
          className={
            compact ? technologyDemoMediaCompactClass : technologyDemoMediaClass
          }
        />
      </div>
    </TechnologyVisualFrame>
  );
}
