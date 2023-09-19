"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ActionTooltipsProps {
  label: string;
  children: React.ReactNode;
  size?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

export const ActionTooltip = ({
  children,
  label,
  align,
  size,
}: ActionTooltipsProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>

        <TooltipContent side={size} align={align}>
          <p
            className="font-semibold
           text-sm capitalize"
          >
            {label.toLocaleLowerCase()}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
