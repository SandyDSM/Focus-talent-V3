import { cn } from "../../lib/cn";

export function Card({ className, children, hoverable = false }) {
  return (
    <div
      className={cn(
        "bg-surface rounded-card shadow-card border border-border-subtle overflow-hidden",
        hoverable && "transition-shadow duration-180 hover:shadow-card-hover cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }) {
  return (
    <div className={cn("px-5 py-4 border-b border-border-subtle", className)}>
      {children}
    </div>
  );
}

export function CardBody({ className, children }) {
  return (
    <div className={cn("px-5 py-4", className)}>
      {children}
    </div>
  );
}
