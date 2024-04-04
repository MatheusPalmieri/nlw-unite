import { Type } from "lucide-react";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  Icon: typeof Type;
  transparent?: boolean;
}

export const IconButton = ({ Icon, transparent = false, ...props }: Props) => (
  <button
    className={`bg-white/${transparent ? 20 : 10} hover:bg-white/${
      transparent ? 40 : 20
    } duration-150 border border-white/10 rounded-md p-1.5`}
    {...props}
  >
    <Icon className="size-4 text-white" />
  </button>
);
