import React, { useState, useEffect } from 'react';
import Logo from '/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const navItems = [
  { href: '/favoritos', label: (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
    </svg>
  ) },
  { href: '/carrinho', label: (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
    </svg>
  ) }
];

const drop = [
  {
    href: '/minhascompras', label: 'Minhas Compras'
  },
  {
    href: '/perfil', label: 'Perfil'
  },
  {
    href: '/login', label: 'Login'
  }
]

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 740);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <ul className="bg-primary-1 text-white nav justify-content-center align-items-center text-small">
        <li className="d-xs-none d-md-block px-2 px-lg-5 py-2 border-end border-right">25% off em móveis</li>
        <li className="d-xs-none d-md-block px-2 px-lg-5 py-2 border-end border-right">30% off em tapetes</li>
        <li className="d-xs-none d-md-block px-2 px-lg-5 py-2 border-end border-right">30% off em iluminação</li>
        <li className="d-xs-none d-md-block px-2 px-lg-5 py-2">Frete gratuito</li>
      </ul>

      <div className="container-fluid d-grid gap-3 align-items-center border-bottom" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <a href="/" className="d-flex text-black fs-2 align-items-center text-decoration-none">
          <img
            src={Logo}
            alt="Logo"
            className="img-fluid my-2"
            style={{ maxWidth: '5em', height: 'auto' }}
          />
        </a>
        <div className="d-flex align-items-center mt-2">
          <form className="w-100 me-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
          {isMobile ? (
            <MobileMenu />
          ) : (
            <DesktopMenu />
          )}
          {!isMobile && (
            <ul className="nav col-3 justify-content-center text-small">
              {navItems.map((item, index) => (
                <NavItem key={index} href={item.href}>
                  {item.label}
                </NavItem>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

const MobileMenu = () => (
  <div className="flex-shrink-0">
    <button className="btn outline-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
    </button>
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasLabel">Menu</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const DesktopMenu = () => (
  <div className="flex-shrink-0 dropdown">
    <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg>
    </a>
    <ul className="dropdown-menu text-small shadow">
      {drop.map((item, index) => (
        <li key={index}>
          <a className="dropdown-item" href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

function NavItem({ href, children }) {
  return (
    <li>
      <a href={href} className="nav-link text-black">
        {children}
      </a>
    </li>
  );
}
