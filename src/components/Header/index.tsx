import {HeaderStyle, Link, LinksContainer} from "./header.styled.ts";
import {TypeLinks} from "../../@types/Header";
import Logo from "./components/Logo.tsx";

const Header = () => {
  const links : TypeLinks[] = [
    { name: 'Início', href: '#', selected: true },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <HeaderStyle>
      <Logo name='drexdev' />

      <LinksContainer>
        {
          links.map((e: TypeLinks, key : number) => (
            <Link key={key} className={e.selected ? 'selected' : ''}>
              <a href={e.href}>
                <span className='list_Number'>0{(key + 1)}.</span> {e.name}
              </a>
            </Link>
          ))
        }
      </LinksContainer>
    </HeaderStyle>
  )
}

export default Header;