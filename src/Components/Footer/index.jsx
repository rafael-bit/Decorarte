import React from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/promocao', label: 'Promoção' },
  { href: '/favoritos', label: 'Favoritos' },
  { href: '/carrinho', label: 'Carrinho' },
  { href: '/conta', label: 'Conta' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-1 py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        {navItems.map((item, index) => (
          <NavItem key={index} href={item.href}>
            {item.label}
          </NavItem>
        ))}
      </ul>
      <p className="text-center text-white">&copy; 2023 Decorarte</p>
    </footer>
  );
}

function NavItem({ href, children }) {
  return (
    <li className="nav-item">
      <a href={href} className="nav-link px-2 text-white">
        {children}
      </a>
    </li>
  );
}
