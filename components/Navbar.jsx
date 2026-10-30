"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className="
        sticky top-0 z-[1000]
        h-[86px]
        w-full
        border-b border-white/[0.07]
        bg-[rgba(9,16,26,0.92)]
        backdrop-blur-[15px]
        transition-all duration-300

        dark:bg-[rgba(9,16,26,0.92)]
        dark:border-white/[0.07]

        max-md:h-[75px]
      "
    >
      <div
        className="
          mx-auto
          flex h-full
          max-w-[1400px]
          items-center
          justify-between
          px-[35px]

          max-lg:px-[25px]
          max-md:px-[20px]
          max-[480px]:px-[15px]
        "
      >
        {/* ================= LOGO ================= */}

        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="
            flex
            items-center
            gap-[13px]
            no-underline

            text-[30px]
            font-bold
            tracking-[-0.5px]
            text-white

            transition-colors duration-300

            dark:text-white

            max-md:text-[24px]
            max-[480px]:text-[21px]
          "
        >
          <span
            className="
              flex
              h-[51px]
              w-[51px]
              items-center
              justify-center
              rounded-[8px]

              bg-gradient-to-br
              from-[#1688ff]
              to-[#0066d6]

              text-[38px]
              font-extrabold
              italic
              text-white

              shadow-[0_0_18px_rgba(0,132,255,0.35)]

              max-md:h-[43px]
              max-md:w-[43px]
              max-md:text-[31px]

              max-[480px]:h-[39px]
              max-[480px]:w-[39px]
              max-[480px]:text-[28px]
            "
          >
            Z
          </span>

          <span>Zamin</span>
        </Link>

        {/* ================= DESKTOP / MOBILE NAV ================= */}

        <nav
          className={`
            flex
            h-full
            items-center
            gap-[60px]

            max-lg:gap-[30px]

            max-md:absolute
            max-md:left-0
            max-md:top-[75px]
            max-md:h-auto
            max-md:w-full
            max-md:flex-col
            max-md:items-stretch
            max-md:gap-0
            max-md:border-t
            max-md:border-white/[0.06]
            max-md:bg-[#0b121d]
            max-md:p-[20px]

            max-md:transform
            max-md:transition-all
            max-md:duration-300

            ${
              menuOpen
                ? "max-md:visible max-md:translate-y-0 max-md:opacity-100"
                : "max-md:invisible max-md:-translate-y-[20px] max-md:opacity-0"
            }
          `}
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  group
                  relative
                  flex
                  h-full
                  items-center
                  text-[17px]
                  font-semibold
                  no-underline

                  transition-colors
                  duration-300

                  max-md:h-auto
                  max-md:border-b
                  max-md:border-white/[0.06]
                  max-md:px-[10px]
                  max-md:py-[17px]
                  max-md:text-[16px]

                  ${
                    isActive
                      ? "text-[#2494ff]"
                      : "text-[#d7dce4] hover:text-[#2494ff]"
                  }

                  max-md:after:hidden
                `}
              >
                {link.name}

                {/* Active underline */}
                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-[4px]
                    rounded-t-[5px]
                    bg-[#1688ff]
                    transition-transform
                    duration-300

                    max-md:hidden

                    ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />

                {/* Mobile active background */}
                {isActive && (
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -z-10
                      hidden
                      rounded-[6px]
                      bg-[#2494ff]/[0.08]

                      max-md:block
                    "
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ================= RIGHT SIDE ================= */}

        <div
          className="
            flex
            items-center
            gap-[20px]

            max-[480px]:gap-[10px]
          "
        >
          {/* ================= THEME TOGGLE ================= */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="
              relative
              flex
              h-[30px]
              w-[60px]
              cursor-pointer
              items-center
              justify-between
              rounded-full
              border-2
              border-[#258de5]
              bg-transparent
              px-[3px]

              transition-all
              duration-300

              hover:shadow-[0_0_15px_rgba(37,141,229,0.35)]

              max-lg:w-[95px]

              max-md:h-[42px]
              max-md:w-[75px]

              max-[480px]:w-[68px]
            "
          >
            {/* Sun / Moon */}
            <span
              className="
                relative
                z-10
                text-[25px]
                leading-none

                max-md:text-[28px]
              "
            >
              {darkMode ? "☀" : "☾"}
            </span>

            {/* Toggle Circle */}
            <span
              className={`
                absolute
                top-[3px]
                h-[22px]
                w-[22px]
                rounded-full
                bg-[#53aaff]

                shadow-[0_0_12px_rgba(83,170,255,0.4)]

                transition-all
                duration-300

                max-md:top-[5px]
                max-md:h-[28px]
                max-md:w-[28px]

               
                ${darkMode ? "right-[3px]" : "left-[3px]"}

                max-md:${darkMode ? "right-[5px]" : "left-[5px]"}
              `}
            />
          </button>

          {/* ================= MOBILE MENU ================= */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="
              hidden
              h-[45px]
              w-[45px]
              cursor-pointer
              rounded-[8px]
              border
              border-white/20
              bg-transparent
              p-[8px]

              max-md:block
            "
          >
            <span
              className={`
                block
                h-[3px]
                w-full
                rounded-[10px]
                bg-[#2494ff]
                transition-all
                duration-300

                ${menuOpen ? "translate-y-[8px] rotate-45" : ""}
              `}
            />

            <span
              className={`
                my-[5px]
                block
                h-[3px]
                w-full
                rounded-[10px]
                bg-[#2494ff]
                transition-all
                duration-300

                ${menuOpen ? "opacity-0" : "opacity-100"}
              `}
            />

            <span
              className={`
                block
                h-[3px]
                w-full
                rounded-[10px]
                bg-[#2494ff]
                transition-all
                duration-300

                ${menuOpen ? "-translate-y-[8px] -rotate-45" : ""}
              `}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
