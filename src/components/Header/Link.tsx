interface Props {
  children: React.ReactNode;
  active?: boolean;
}

export const HeaderLink = ({ children, active = false }: Props) => (
  <a href="" className={`font-medium text-sm ${!active && "text-zinc-300"}`}>
    {children}
  </a>
);
