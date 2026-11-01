"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
        h-[86px] w-full
        border-b border-[#e5e7eb]
        bg-white/90
        backdrop-blur-[15px]
        transition-colors duration-300
        dark:border-white/[0.07]
        dark:bg-[rgba(9,16,26,0.92)]
        max-md:h-[75px]
      "
    >
      <div
        className="
          relative mx-auto flex h-full max-w-[1400px]
          items-center justify-between px-[35px]
          max-lg:px-[25px]
          max-md:px-[20px]
          max-[480px]:px-[15px]
        "
      >
        {/* LEFT SIDE - WEBSITE LOGO */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="
            z-20 flex items-center
            transition-transform duration-300
            hover:scale-105
          "
        >
          <Image
            src="/image/zamin-logo1.png"
            alt="ZAMIN Website Logo"
            width={180}
            height={65}
            priority
            className="
              h-[58px] w-[180px]
              object-contain object-left
              max-md:h-[48px] max-md:w-[145px]
              max-[480px]:h-[42px] max-[480px]:w-[125px]
            "
          />
        </Link>

        {/* CENTER - PROFILE IMAGE */}
        <Link
          href="/about"
          aria-label="Visit About page"
          className="
            absolute left-1/2 top-1/2 z-10
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            shadow-[0_0_18px_rgba(22,136,255,0.30)]
            transition-all duration-300 ease-out
            hover:scale-110
            hover:shadow-[0_0_30px_rgba(22,136,255,0.65)]
            max-md:shadow-[0_0_14px_rgba(22,136,255,0.30)]
          "
        >
          <div
            className="
              relative h-[60px] w-[60px]
              overflow-hidden rounded-full
              shadow-[0_0_15px_3px_rgba(22,136,255,0.35),0_0_25px_5px_rgba(22,136,255,0.15)]
              transition-all duration-300 ease-out
              max-md:h-[46px] max-md:w-[46px]
              max-[480px]:h-[40px] max-[480px]:w-[40px]
            "
          >
            <Image
              src="/image/Profile3.jpeg"
              alt="Muhammad Zamin"
              fill
              sizes="55px"
              className="object-cover"
              priority
            />
          </div>
        </Link>

        {/* RIGHT SIDE - NAVIGATION */}
        <nav
          className={`
            ml-auto flex h-full items-center gap-[45px]
            max-lg:gap-[25px]

            max-md:absolute
            max-md:left-0
            max-md:top-[75px]
            max-md:h-auto
            max-md:w-full
            max-md:flex-col
            max-md:items-stretch
            max-md:gap-0
            max-md:border-t
            max-md:border-[#e5e7eb]
            max-md:bg-white
            max-md:p-[20px]
            max-md:shadow-lg
            max-md:transition-all
            max-md:duration-300
            dark:max-md:border-white/[0.06]
            dark:max-md:bg-[#0b121d]

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
                  group relative flex h-full items-center
                  text-[16px] font-semibold no-underline
                  transition-colors duration-300

                  max-md:h-auto
                  max-md:border-b
                  max-md:border-[#e5e7eb]
                  max-md:px-[10px]
                  max-md:py-[16px]
                  dark:max-md:border-white/[0.06]

                  ${
                    isActive
                      ? "text-[#1688ff]"
                      : "text-[#4b5563] hover:text-[#1688ff] dark:text-[#d7dce4] dark:hover:text-[#2494ff]"
                  }
                `}
              >
                {link.name}

                {/* ACTIVE UNDERLINE */}
                <span
                  className={`
                    absolute bottom-0 left-0 right-0 h-[4px]
                    rounded-t-[5px] bg-[#1688ff]
                    transition-transform duration-300
                    max-md:hidden
                    ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />

                {/* MOBILE ACTIVE BACKGROUND */}
                {isActive && (
                  <span
                    className="
                      pointer-events-none absolute inset-0 -z-10
                      hidden rounded-[6px] bg-[#1688ff]/[0.08]
                      max-md:block
                    "
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="
            z-20 hidden h-[42px] w-[42px]
            cursor-pointer flex-col items-center
            justify-center rounded-[8px]
            border border-[#d1d5db]
            bg-transparent p-[8px]
            max-md:flex
            dark:border-white/20
          "
        >
          <span
            className={`
              block h-[3px] w-full rounded-[10px]
              bg-[#1688ff] transition-all duration-300
              ${menuOpen ? "translate-y-[8px] rotate-45" : ""}
            `}
          />

          <span
            className={`
              my-[5px] block h-[3px] w-full rounded-[10px]
              bg-[#1688ff] transition-all duration-300
              ${menuOpen ? "opacity-0" : "opacity-100"}
            `}
          />

          <span
            className={`
              block h-[3px] w-full rounded-[10px]
              bg-[#1688ff] transition-all duration-300
              ${menuOpen ? "-translate-y-[8px] -rotate-45" : ""}
            `}
          />
        </button>
      </div>
    </header>
  );
}
