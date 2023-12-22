import { useEffect, useState } from "react";
import Link from "next/link";
import { routes } from "@/data/global";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <>
      <div className="w-full justify-between flex items-center bg-bg p-5" style={{ zIndex: 101 }}>
        <li className="list-none font-bold text-lg">
          <Link href="/">
            <img className="mr-3" src="https://res.cloudinary.com/dsqosc2ig/image/upload/v1703257312/portfolio/L__1_-removebg-preview_etlsre.png" width="160" />
          </Link>
        </li>
        <button className="burger visible md:hidden" aria-label="Toggle menu" type="button" onClick={toggleMenu}>
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
      </div>
      {isMenuOpen && (
        <ul className="p-5 absolute top-20 left-0 w-full h-full bg-bg z-50" style={{ display: isMenuOpen ? 'block' : 'none' }}>
          {routes.map((item, index) => (
            <li
              key={index}
              className="border-b border-gray-900 text-gray-100 text-sm font-semibold transition duration-300 ease-in-out"
              style={{ transitionDelay: `${150 + index * 25}ms` }}
            >
              <Link href={item.path}>
                <a className="flex w-auto pb-4">{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function MenuIcon(props) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
