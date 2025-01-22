import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { navItems } from '../utils/navItems';
import Sidebar from './Sidebar';

export default function Header() {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    // Animate header title
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Animate nav items
    gsap.fromTo(
      navRef.current?.children,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className="flex justify-between items-center p-7">
      {/* Header Title */}
      <div
        onClick={() => navigate('/')}
        className="cursor-pointer"
        ref={headerRef}
      >
        <h1 className="text-4xl italic font-mono lg:flex hidden">
          Challenges App
        </h1>
        <h1 className="text-4xl italic font-mono max-lg:flex hidden">
          Challenges
        </h1>
        <h1 className="text-4xl italic font-mono max-lg:flex hidden">App</h1>
      </div>

      {/* Navigation Items */}
      <nav className="text-black hidden lg:flex">
        <ul className="flex" ref={navRef}>
          {navItems.map((item) => (
            <li
              key={item.text}
              className="flex cursor-pointer px-3"
              onClick={() =>
                item.route ? navigate(item.route) : item.action?.()
              }
            >
              <img
                src={item.icon}
                alt={item.text}
                className="w-[25px] h-[25px] m-1"
              />
              <div className="p-1 font-serif text-lg">{item.text}</div>
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
}
