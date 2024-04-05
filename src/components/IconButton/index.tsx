import { Type } from "lucide-react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"button"> {
  Icon: typeof Type;
  transparent?: boolean;
}

export const IconButton = ({ Icon, transparent = false, ...props }: Props) => (
  <button
    {...props}
    className={twMerge(
      "border border-white/10 rounded-md p-1.5 duration-300",
      transparent
        ? "bg-black/20 hover:bg-black/40"
        : "bg-white/10 hover:bg-white/20",
      props.disabled ? "opacity-50" : null
    )}
  >
    <Icon className="size-4 text-white" />
  </button>
);
