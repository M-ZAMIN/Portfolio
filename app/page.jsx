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
  { name: "X", icon: "𝕏", href: "https://x.com/" },
  {
  name: "Instagram",
  icon: <InstagramIcon />,
  href: "https://www.instagram.com/zamin_1761/",
},
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050d18] text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-glow absolute right-[8%] top-[8%] h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="animate-glow-delayed absolute bottom-[-150px] left-[35%] h-[400px] w-[400px] rounded-full bg-blue-700/10 blur-[120px]" />
      </div>

      {/* Hero section */}
      <section className="relative mx-auto flex min-h-screen max-w-[1440px] items-center overflow-hidden border-b border-white/10 px-6 sm:px-10 lg:px-[7.3%]">

        {/* Left content */}
        <div className="animate-slide-left relative z-20 w-full max-w-[600px] py-24 lg:py-0">

          {/* Intro */}
          <p className="animate-fade-up animation-delay-200 mb-2 text-[19px] font-semibold text-white sm:text-[21px]">
            Hello, I'm
          </p>

          {/* Main heading */}
          <h1 className="animate-fade-up animation-delay-400 text-[42px] font-extrabold leading-[1.15] tracking-tight sm:text-[54px] lg:text-[62px]">
            ZAMIN{" "}
            <span className="text-[#1685f8]">RAZZAQ</span>
          </h1>

          {/* Developer title */}
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

          {/* Social links */}
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

          {/* Scroll indicator */}
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

        {/* Profile image */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-10 hidden h-full w-[58%] items-end justify-center lg:flex">

          {/* Blue circular background */}
          <div className="animate-circle absolute bottom-[-100px] left-[8%] h-[430px] w-[430px] rounded-full bg-[#0754bd]/40 blur-[1px]" />

          <div className="animate-glow absolute bottom-[20px] right-[15%] h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[80px]" />

          <div className="animate-profile relative z-10 h-[95%] w-full">
            <Image
              src="/image/profile2.png"
              alt="Muhammad Zamin - Frontend Developer"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain object-bottom"
            />
          </div>

          {/* Handwritten message */}
          <div className="animate-handwriting absolute right-[5%] top-[20%] z-20 rotate-[-8deg] font-serif text-[30px] italic leading-[1.2] text-[#168cff] lg:text-[34px]">
            <p>Build</p>
            <p>Something</p>
            <p>Great</p>
            <div className="ml-5 mt-2 h-[2px] w-20 rotate-[-15deg] bg-[#168cff]" />
          </div>

        </div>

        {/* Mobile profile image */}
        <div className="pointer-events-none absolute bottom-0 right-[-15%] z-0 h-[55%] w-[75%] animate-mobile-profile opacity-20 lg:hidden">
          <Image
            src="/image/profile.png"
            alt="Muhammad Zamin"
            fill
            priority
            sizes="75vw"
            className="object-contain object-bottom"
          />
        </div>

      </section>

      {/* Page animations */}
      <style jsx global>{`
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

        @keyframes floatText {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -15px;
          }
        }

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

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-1400 { animation-delay: 1.4s; }

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