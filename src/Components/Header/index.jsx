import React, { useState, useEffect } from 'react';
import Logo from '/logo.png';

const PromotionIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
    <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"/>
    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"/>
  </svg>
);

const FavoritesIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
  </svg>
);

const CartIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
  </svg>
);

const AccountIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
  </svg>
);

export default function Header() {
  const menuItems = [
    { label: 'Promoção', icon: PromotionIcon, link: '/promocao' },
    { label: 'Favoritos', icon: FavoritesIcon, link: '/Favoritos' },
    { label: 'Carrinho', icon: CartIcon, link: '/Carrinho' },
    { label: 'Conta', icon: AccountIcon, link: 'Conta' },
  ];

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 125;
      const windowWidth = window.innerWidth;

      if (windowWidth <= 991 && scrollPosition > threshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="bg-primary-1 py-2">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none fs-2">
              <img src={Logo} alt="Logo" className="img-fluid" style={{ maxWidth: '100px', height: 'auto' }} />
              Decorarte
            </a>

            <ul className={`bg-primary-1 nav col-12 col-lg-auto my-0 justify-content-center my-md-0 text-small ${isFixed ? 'position-fixed top-0 start-50 translate-middle-x' : ''}`}>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="nav-link text-white d-flex flex-column align-items-center">
                    {item.icon}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}