"use client";

import GithubIcon from "@/components/GithubIcon";
import InstagramIcon from "@/components/InstagramIcon";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    icon: <GithubIcon />,
    href: "https://github.com/M-ZAMIN",
  },
  {
    name: "LinkedIn",
    icon: "in",
    href: "https://www.linkedin.com/in/zamin-razzaq-9b2b473b4/",
  },
  {
    name: "X",
    icon: "𝕏",
    href: "https://x.com/",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/zamin_1761/",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050d18] text-white">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-glow absolute right-[8%] top-[8%] h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="animate-glow-delayed absolute bottom-[-150px] left-[35%] h-[400px] w-[400px] rounded-full bg-blue-700/10 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col items-center overflow-hidden border-b border-white/10 px-6 sm:px-10 md:flex-row md:items-center lg:px-[7.3%]">

        {/* =====================================
            MOBILE PROFILE IMAGE
            ABOVE TEXT
        ====================================== */}
        <div className="relative z-10 mb-6 mt-10 flex h-[300px] w-full items-center justify-center md:hidden">

          {/* Blue Shadow Circle */}
          <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0754bd]/40 shadow-[0_0_50px_20px_rgba(22,133,248,0.25)] blur-[1px]" />

          {/* Extra Blue Glow */}
          <div className="animate-glow absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[65px]" />

          {/* Profile Image */}
          <div className="animate-mobile-profile relative z-10 h-full w-full max-w-[320px]">
            <Image
              src="/image/profile.png"
              alt="Muhammad Zamin - Frontend Developer"
              fill
              priority
              sizes="100vw"
              className="object-contain object-bottom"
            />
          </div>

        </div>

        {/* =====================================
            LEFT CONTENT
        ====================================== */}
        <div className="animate-slide-left relative z-20 w-full max-w-[600px] py-12 md:max-w-[52%] md:py-24 lg:max-w-[600px] lg:py-0">

          {/* Intro */}
          <p className="animate-fade-up animation-delay-200 mb-2 text-[19px] font-semibold text-white sm:text-[21px]">
            Hello, I'm
          </p>

          {/* Main Heading */}
          <h1 className="animate-fade-up animation-delay-400 text-[42px] font-extrabold leading-[1.15] tracking-tight sm:text-[54px] lg:text-[62px]">
            ZAMIN{" "}
            <span className="text-[#1685f8]">RAZZAQ</span>
          </h1>

          {/* Developer Title */}
          <h2 className="animate-fade-up animation-delay-600 mt-3 text-[26px] font-semibold text-[#789acb] sm:text-[31px] lg:text-[34px]">
            Frontend Developer
          </h2>

          {/* Description */}
          <p className="animate-fade-up animation-delay-800 mt-4 max-w-[450px] text-[16px] leading-[1.8] text-[#c4d1e3] sm:text-[17px]">
            I'm a passionate Frontend Developer with a focus on
            building modern, responsive and user-friendly web
            applications. I love turning ideas into real products
            with clean code and beautiful design.
          </p>

          {/* Buttons */}
          <div className="animate-fade-up animation-delay-1000 mt-7 flex flex-wrap items-center gap-4">

            <Link
              href="/contact"
              className="inline-flex h-[48px] items-center gap-3 rounded-full bg-[#087df5] px-7 text-[15px] font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-600"
            >
              Hire Me
              <span className="text-[17px]">➤</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex h-[48px] items-center gap-3 rounded-full border border-[#36516f] px-7 text-[15px] font-semibold text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-400 hover:bg-blue-500/10"
            >
              View My Work
              <span className="text-[19px]">◎</span>
            </Link>

          </div>

          {/* Social Links */}
          <div className="animate-fade-up animation-delay-1200 mt-6 flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                style={{ animationDelay: `${1.3 + index * 0.12}s` }}
                className="animate-social flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#263b55] bg-[#101d2d] text-[16px] font-bold text-white transition duration-300 hover:-translate-y-1 hover:scale-110 hover:border-blue-400 hover:bg-blue-500"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="animate-fade-up animation-delay-1400 mt-14 flex items-center gap-4 text-[14px] text-[#8ba8d0] transition hover:text-white"
          >
            <span className="animate-scroll flex h-[32px] w-[19px] items-start justify-center rounded-full border border-[#9bb8e0] p-[5px]">
              <span className="h-[6px] w-[3px] rounded-full bg-white" />
            </span>
            Scroll Down
          </a>

        </div>

        {/* =====================================
            TABLET PROFILE IMAGE
            768px - 1023px
        ====================================== */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-[75%] w-[48%] items-start justify-end md:flex lg:hidden">

          {/* Blue Glow */}
          <div className="animate-glow absolute right-[5%] top-[10%] h-[280px] w-[280px] rounded-full bg-blue-600/15 blur-[80px]" />

          {/* Profile Image */}
          <div className="animate-profile relative mt-8 h-full w-full">
            <Image
              src="/image/profile2.png"
              alt="Muhammad Zamin - Frontend Developer"
              fill
              priority
              sizes="48vw"
              className="object-contain object-top"
            />
          </div>

        </div>

        {/* =====================================
            DESKTOP / LAPTOP / 4K PROFILE IMAGE
            1024px AND ABOVE
        ====================================== */}
        <div className="desktop-profile pointer-events-none absolute bottom-0 right-0 z-10 hidden h-full w-[58%] items-end justify-center lg:flex">

          {/* Blue Circular Background */}
          <div className="animate-circle absolute bottom-[-100px] left-[8%] h-[430px] w-[430px] rounded-full bg-[#0754bd]/40 blur-[1px] 2xl:h-[550px] 2xl:w-[550px]" />

          {/* Extra Blue Glow */}
          <div className="animate-glow absolute bottom-[20px] right-[15%] h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[80px] 2xl:h-[480px] 2xl:w-[480px]" />

          {/* Desktop Profile Image */}
          <div className="animate-profile relative z-10 h-[95%] w-full">

            {/* Normal Laptop / Desktop: profile2.png */}
            <Image
              src="/image/profile2.png"
              alt="Muhammad Zamin - Frontend Developer"
              fill
              priority
              sizes="58vw"
              className="profile-normal object-contain object-bottom"
            />

            {/* 4K: profile.png */}
            <Image
              src="/image/profile.png"
              alt="Muhammad Zamin - Frontend Developer"
              fill
              priority
              sizes="58vw"
              className="profile-4k object-contain object-bottom"
            />

          </div>

          {/* Handwritten Message */}
          <div className="animate-handwriting absolute right-[5%] top-[20%] z-20 rotate-[-8deg] font-serif text-[30px] italic leading-[1.2] text-[#168cff] lg:text-[34px] 2xl:right-[8%] 2xl:top-[18%] 2xl:text-[40px]">
            <p>Build</p>
            <p>Something</p>
            <p>Great</p>
            <div className="ml-5 mt-2 h-[2px] w-20 rotate-[-15deg] bg-[#168cff]" />
          </div>

        </div>

      </section>

      {/* =====================================
          PAGE ANIMATIONS & RESPONSIVE STYLES
      ====================================== */}
      <style jsx global>{`

        /* 4K IMAGE SWITCHING */
        .profile-4k {
          display: none;
        }

        @media (min-width: 2560px) {
          .profile-normal {
            display: none;
          }

          .profile-4k {
            display: block;
          }
        }

        /* Slide Left */
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-70px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Fade Up */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Slide Right */
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Floating Text */
        @keyframes floatText {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -15px;
          }
        }

        /* Glow Effect */
        @keyframes glowEffect {
          0%, 100% {
            opacity: 0.4;
            scale: 1;
          }
          50% {
            opacity: 0.9;
            scale: 1.12;
          }
        }

        /* Circle Effect */
        @keyframes circleEffect {
          from {
            opacity: 0;
            scale: 0.7;
          }
          to {
            opacity: 1;
            scale: 1;
          }
        }

        /* Scroll Effect */
        @keyframes scrollEffect {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        .animate-slide-left {
          animation: slideLeft 1s ease-out both;
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s ease-out both;
        }

        .animate-profile {
          animation: slideRight 1.3s ease-out both;
        }

        .animate-handwriting {
          animation: fadeUp 1s ease-out 1s both,
                     floatText 4s ease-in-out 2s infinite;
        }

        .animate-glow {
          animation: glowEffect 5s ease-in-out infinite;
        }

        .animate-glow-delayed {
          animation: glowEffect 6s ease-in-out 1s infinite;
        }

        .animate-circle {
          animation: circleEffect 1.5s ease-out both,
                     glowEffect 5s ease-in-out 1.5s infinite;
        }

        .animate-scroll {
          animation: scrollEffect 1.5s ease-in-out infinite;
        }

        .animate-mobile-profile {
          animation: fadeUp 1.5s ease-out both;
        }

        .animate-social {
          opacity: 0;
          animation: fadeUp 0.7s ease-out both;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1400 {
          animation-delay: 1.4s;
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-slide-left,
          .animate-fade-up,
          .animate-profile,
          .animate-handwriting,
          .animate-glow,
          .animate-glow-delayed,
          .animate-circle,
          .animate-scroll,
          .animate-mobile-profile,
          .animate-social {
            animation: none !important;
            opacity: 1;
          }
        }

      `}</style>

    </main>
  );
}
