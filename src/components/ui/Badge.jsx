import { cn } from "../../lib/cn";

const variants = {
  default:  "bg-bmb-blue-light text-bmb-blue border-bmb-blue/20",
  clas1:    "bg-blue-50    text-clas1-blue  border-clas1-blue/30",
  clas2:    "bg-cyan-50    text-cyan-700     border-clas2-blue/30",
  clas3:    "bg-green-50   text-green-700    border-clas3-green/30",
  clas4:    "bg-purple-50  text-clas4-purple border-clas4-purple/30",
  clas5:    "bg-orange-50  text-clas5-orange border-clas5-orange/30",
  muted:    "bg-gray-100   text-text-muted   border-gray-200",
};

export function Badge({ variant = "default", className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
