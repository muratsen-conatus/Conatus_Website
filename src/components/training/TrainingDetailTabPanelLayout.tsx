import { TrainingDetailTabAside } from "@/components/training/TrainingDetailTabAside";
import type { TrainingDetailTabId } from "@/components/training/TrainingDetailTabPanels";
function DetailBulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item.slice(0, 56)}
          className="flex gap-3 text-sm leading-relaxed text-foreground-muted sm:text-base"
        >
          <span
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type TrainingDetailTabPanelLayoutProps = {
  tab: TrainingDetailTabId;
  title: string;
  items: string[];
  rightColumn?: React.ReactNode;
};

export function TrainingDetailTabPanelLayout({
  tab,
  title,
  items,
  rightColumn,
}: TrainingDetailTabPanelLayoutProps) {
  return (
    <div className="grid h-full grid-cols-1 lg:grid-cols-2">
      <div className="flex min-h-0 flex-col border-b border-border/60 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:py-6 lg:pr-5">
        <h2 className="shrink-0 text-lg font-bold text-foreground sm:text-xl">{title}</h2>
        <div className="mt-5 min-h-0 flex-1 overflow-y-auto pr-1">
          <DetailBulletList items={items} />
        </div>
      </div>

      {rightColumn ?? <TrainingDetailTabAside tab={tab} className="min-h-0" />}
    </div>
  );
}
