import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "works",
  },
  {
    id: 3,
    name: "resume",
  },
  {
    id: 4,
    name: "contact",
  },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the navbar
  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const phoneNumber = "6283824723921"; // Ganti dengan nomor telepon Anda
  const message = "Hallo kak, saya ingin memesan sebuah aplikasi website"; // Pesan default

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  return (
    <div
      className={`w-full mx-auto  fixed top-0 py-5 sm:py-4 z-30 ${
        scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"
      } `}
    >
      <nav className="container m-auto flex items-center justify-between">
        <div data-aos="fade-down" className="logo">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl font-bold sm:text-3xl"
          >
            Idham
            <span class="text-red-500">.</span>
          </Link>
        </div>
        
        <div
          className="nav-items flex items-center space-x-11"
        >
          {/* hamburger */}
          <button
            data-aos="fade-down"
            onClick={toggleNav}
            className="cursor-pointer text-2xl hidden md:block"
          >
            {/* <HiMenu size={25} /> */}
            <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-black w-[0] lg:w-[25px] h-[0] lg:h-[25px] sm:w-[23px] sm:h-[23px] active:scale-95"><path d="m101.9 57.009c0 .551-.51765.991-1.09725.991h-3.15c-.57855 0-1.00275-.44-1.00275-.991v-3c0-.551.4242-1.009 1.00275-1.009h3.15c.5796 0 1.09725.458 1.09725 1.009zm-1.09725-6.009h-3.15c-1.73985 0-3.10275 1.352-3.10275 3.009v3c0 1.657 1.3629 2.991 3.10275 2.991h3.15c1.73985 0 3.19725-1.334 3.19725-2.991v-3c0-1.657-1.4574-3.009-3.19725-3.009zm-10.45275 6.009c0 .551-.51765.991-1.09725.991h-3.15c-.57855 0-1.00275-.44-1.00275-.991v-3c0-.551.4242-1.009 1.00275-1.009h3.15c.5796 0 1.09725.458 1.09725 1.009zm-1.09725-6.009h-3.15c-1.73985 0-3.10275 1.352-3.10275 3.009v3c0 1.657 1.3629 2.991 3.10275 2.991h3.15c1.73985 0 3.19725-1.334 3.19725-2.991v-3c0-1.657-1.4574-3.009-3.19725-3.009zm12.64725-4.991c0 .551-.51765.991-1.09725.991h-3.15c-.57855 0-1.00275-.44-1.00275-.991v-3c0-.551.4242-1.009 1.00275-1.009h3.15c.5796 0 1.09725.458 1.09725 1.009zm-1.09725-6.009h-3.15c-1.73985 0-3.10275 1.352-3.10275 3.009v3c0 1.657 1.3629 2.991 3.10275 2.991h3.15c1.73985 0 3.19725-1.334 3.19725-2.991v-3c0-1.657-1.4574-3.009-3.19725-3.009zm-10.45275 6.009c0 .551-.51765.991-1.09725.991h-3.15c-.57855 0-1.00275-.44-1.00275-.991v-3c0-.551.4242-1.009 1.00275-1.009h3.15c.5796 0 1.09725.458 1.09725 1.009zm-1.09725-6.009h-3.15c-1.73985 0-3.10275 1.352-3.10275 3.009v3c0 1.657 1.3629 2.991 3.10275 2.991h3.15c1.73985 0 3.19725-1.334 3.19725-2.991v-3c0-1.657-1.4574-3.009-3.19725-3.009z" fill-rule="evenodd" transform="translate(-83 -40)"></path></svg>
          </button>

          <ul
            className={`flex items-center space-x-11 ${
              !isOpen ? "md:flex" : "md:right-[0%]"
            } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-white `}
          >
          {/* Use a button tag for better accessibility */}
          <button
              onClick={toggleNav}
              className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}
            >
              <RxCross2 size={25} />
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
              >
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:text-yellow-600 font-bold ${
                    item.name === activeIndex ? "text-yellow-600" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-[1rem] text-white px-8 py-2 rounded-lg font-bold hover:text-yellow-400 md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
            >
              HIRE ME
            </a>  
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
