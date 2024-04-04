import { ComponentProps } from "react";

interface Props extends ComponentProps<"a"> {
  children: React.ReactNode;
  active?: boolean;
}

export const HeaderLink = ({ children, active = false, ...props }: Props) => (
  <a
    className={`font-medium text-sm hover:text-white duration-300 ${
      !active && "text-zinc-400"
    }`}
    {...props}
  >
    {children}
  </a>
);
