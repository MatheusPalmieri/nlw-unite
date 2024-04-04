import Logo from "../../assets/logo.svg";
import { HeaderLink } from "./Link";

export const Header = () => {
  return (
    <div className="flex items-center gap-5">
      <img src={Logo} alt="logo" />

      <nav className="flex items-center gap-5">
        <HeaderLink href="/eventos">Eventos</HeaderLink>
        <HeaderLink href="/participantes" active>
          Participantes
        </HeaderLink>
      </nav>
    </div>
  );
};
