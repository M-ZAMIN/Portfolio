
"use client";

import Image from "next/image";

const features = [
  {
    title: "Clean Code",
    description: "Write maintainable and scalable code",
    icon: "code",
  },
  {
    title: "Creative Mindset",
    description: "Turning ideas into reality",
    icon: "idea",
  },
  {
    title: "Team Player",
    description: "Collaborate and grow together",
    icon: "team",
  },
];

const stats = [
  { number: "1+", label: "Years Experience" },
  { number: "5+", label: "Projects Completed" },
  { number: "3+", label: "Happy Clients" },
];

function FeatureIcon({ type }) {
  if (type === "code") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </svg>
    );
  }

  if (type === "idea") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14.5a7 7 0 1 1 7 0c-.8.6-1.2 1.4-1.3 2.5h-4.4c-.1-1.1-.5-1.9-1.3-2.5Z" />
        <path d="M12 2v2M4.9 4.9l1.4 1.4M19.1 4.9l-1.4 1.4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.4-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M16 5.5a3 3 0 0 1 0 5.8M18 14c2 .6 3 2.5 3 5" />
    </svg>
  );
}

export default function About() {
  return (
    <main className="about-page relative min-h-screen overflow-hidden bg-[#050d18] text-white">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="about-glow absolute left-[35%] top-[15%] h-[400px] w-[400px] rounded-full bg-blue-700/[0.05] blur-[120px]" />
        <div className="about-glow-two absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-700/[0.06] blur-[120px]" />
      </div>

      {/* ABOUT SECTION */}
      <section className="relative mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 items-center gap-8 px-6 pb-16 pt-8 sm:gap-10 sm:px-10 sm:pt-12 lg:grid-cols-[1.1fr_1.2fr] lg:gap-10 lg:px-[4.4%] lg:py-16">

        {/* LEFT CONTENT */}
        <div className="relative z-10 order-1 lg:order-1">

          {/* ABOUT LABEL */}
          <div className="about-label mb-5 flex items-center gap-3">
            <span className="text-[12px] font-medium tracking-[2px] text-[#a5bad5]">
              ABOUT ME
            </span>
            <span className="h-px w-[55px] bg-[#53759f]" />
          </div>

          {/* HEADING */}
          <h1 className="about-heading max-w-[600px] text-[29px] font-extrabold leading-[1.22] tracking-[-0.8px] min-[400px]:text-[32px] sm:text-[40px] lg:text-[44px] xl:text-[46px]">
            I'm a Full-Stack Developer
            <br className="hidden xl:block" />
            {" "}with a passion for creating
            <span className="block text-[#1685f8]">
              amazing web experiences.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="about-description mt-4 max-w-[560px] text-[14px] leading-[1.8] text-[#c1d0e2] sm:mt-5 sm:text-[16px]">
            I specialize in building modern, responsive and user-friendly
            web applications. With a strong focus on clean code and
            performance, I turn ideas into digital solutions.
          </p>

          {/* MOBILE PROFILE IMAGE */}
          <div className="about-mobile-image relative mt-7 h-[200px] w-full overflow-hidden rounded-[13px] border border-[#1685f8]/40 bg-[#0b1727] shadow-[0_0_25px_rgba(0,100,255,0.12)] sm:mt-8 sm:h-[210px] lg:hidden">

            <Image
              src="/image/profile4.jpeg"
              alt="Muhammad Zamin"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 0px"
              className="object-cover object-[center_35%]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050d18]/10 via-transparent to-[#050d18]/30" />

            {/* SIGNATURE */}
            <div className="about-mobile-signature absolute right-[5%] top-1/2 z-10 -translate-y-1/2 -rotate-[10deg]">
              <p className="whitespace-nowrap font-serif text-[20px] italic text-white min-[400px]:text-[23px] sm:text-[27px]">
                Muhammad
              </p>
              <p className="ml-8 whitespace-nowrap font-serif text-[20px] italic text-white min-[400px]:text-[23px] sm:text-[27px]">
                Zamin
              </p>
              <div className="ml-10 mt-1 h-[2px] w-[85px] -rotate-[10deg] bg-[#1685f8]" />
            </div>
          </div>

          {/* FEATURES */}
          <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                style={{ animationDelay: `${0.9 + index * 0.18}s` }}
                className="about-feature group flex items-center gap-4"
              >

                <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-[#082b62] text-[#9ed0ff] shadow-[0_0_15px_rgba(0,100,255,0.12)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#087df5]">
                  <FeatureIcon type={feature.icon} />
                </div>

                <div>
                  <h3 className="text-[15px] font-semibold text-white sm:text-[16px]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#a7bad3] sm:text-[13px]">
                    {feature.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* DOWNLOAD CV */}
          <a
            href="/Muhammad-Zamin-CV.pdf"
            download
            className="about-download mt-8 inline-flex h-[48px] w-full items-center justify-center gap-3 rounded-full bg-[#087df5] px-7 text-[14px] font-semibold text-white shadow-[0_5px_20px_rgba(0,110,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0069dc] hover:shadow-[0_8px_25px_rgba(0,110,255,0.35)] sm:w-auto"
          >
            Download CV
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M12 3v12m-5-5 5 5 5-5" />
              <path d="M5 17v3h14v-3" />
            </svg>
          </a>

        </div>

        {/* DESKTOP PROFILE AND STATISTICS */}
        <div className="relative order-2 mx-auto hidden w-full max-w-[680px] items-center justify-center lg:order-2 lg:flex">

          {/* DECORATIVE BLUE BORDERS */}
          <div className="about-border-top absolute right-[35%] top-[-5%] h-[200px] w-[135px] rounded-tr-[28px] border-t-8 border-r-[3px] border-[#087df5] shadow-[4px_-4px_12px_rgba(8,125,245,0.25)]" />

          <div className="about-border-bottom absolute left-[8%] top-[65%] h-[200px] w-[135px] rounded-bl-[28px] border-b-8 border-l-2 border-[#087df5]" />

          {/* DESKTOP IMAGE */}
          <div className="about-desktop-image relative z-10 h-[430px] w-[290px] overflow-hidden rounded-[13px] border border-[#8da9c9]/50 shadow-[0_10px_45px_rgba(0,80,180,0.12)] xl:h-[490px] xl:w-[330px]">
            <Image
              src="/image/profile4.jpeg"
              alt="Muhammad Zamin"
              fill
              priority
              sizes="(min-width: 1280px) 330px, 290px"
              className="object-cover object-top"
            />
          </div>

          {/* DESKTOP STATISTICS */}
          <div className="relative z-20 ml-4 flex w-[135px] shrink-0 flex-col gap-4 sm:ml-6 sm:w-[155px]">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                className="about-stat flex h-[105px] flex-col justify-center rounded-[12px] border border-[#253b55] bg-[#0b1727]/90 px-4 shadow-[0_5px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1685f8]/70 hover:bg-[#10213a] sm:px-5"
              >
                <h3 className="text-[28px] font-bold leading-none text-white sm:text-[32px]">
                  {stat.number}
                </h3>
                <p className="mt-3 text-[11px] leading-relaxed text-[#d0dced] sm:text-[13px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* DESKTOP SIGNATURE */}
          <div className="about-desktop-signature absolute -bottom-[75px] right-[5%] z-20 -rotate-[10deg]">
            <p className="whitespace-nowrap font-serif text-[23px] italic text-white sm:text-[27px]">
              Muhammad Zamin
            </p>
            <div className="ml-5 mt-2 h-[2px] w-[105px] -rotate-[10deg] bg-[#1685f8]" />
          </div>

        </div>

      </section>

      {/* ANIMATION STYLES */}
      <style jsx global>{`

        @keyframes aboutFadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aboutSlideLeft {
          from {
            opacity: 0;
            transform: translateX(-55px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes aboutSlideRight {
          from {
            opacity: 0;
            transform: translateX(65px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes aboutImageReveal {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.94);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes aboutFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        @keyframes aboutGlow {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.75;
            transform: scale(1.15);
          }
        }

        @keyframes aboutBorderReveal {
          from {
            opacity: 0;
            transform: scale(0.75);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .about-label {
          opacity: 0;
          animation: aboutFadeUp 0.7s ease-out 0.1s forwards;
        }

        .about-heading {
          opacity: 0;
          animation: aboutFadeUp 0.8s ease-out 0.25s forwards;
        }

        .about-description {
          opacity: 0;
          animation: aboutFadeUp 0.8s ease-out 0.45s forwards;
        }

        .about-mobile-image {
          opacity: 0;
          animation: aboutImageReveal 1s ease-out 0.65s forwards;
        }

        .about-feature {
          opacity: 0;
          animation: aboutSlideLeft 0.75s ease-out both;
        }

        .about-download {
          opacity: 0;
          animation: aboutFadeUp 0.8s ease-out 1.5s forwards;
        }

        .about-desktop-image {
          animation: aboutSlideRight 1.1s ease-out both;
        }

        .about-stat {
          opacity: 0;
          animation: aboutFadeUp 0.8s ease-out both;
        }

        .about-border-top {
          opacity: 0;
          transform-origin: top right;
          animation: aboutBorderReveal 1s ease-out 0.4s forwards;
        }

        .about-border-bottom {
          opacity: 0;
          transform-origin: bottom left;
          animation: aboutBorderReveal 1s ease-out 0.65s forwards;
        }

        .about-mobile-signature,
        .about-desktop-signature {
          animation: aboutFloat 4s ease-in-out 1.8s infinite;
        }

        .about-glow {
          animation: aboutGlow 6s ease-in-out infinite;
        }

        .about-glow-two {
          animation: aboutGlow 7s ease-in-out 1s infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-label,
          .about-heading,
          .about-description,
          .about-mobile-image,
          .about-feature,
          .about-download,
          .about-desktop-image,
          .about-stat,
          .about-border-top,
          .about-border-bottom,
          .about-mobile-signature,
          .about-desktop-signature,
          .about-glow,
          .about-glow-two {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }

      `}</style>

    </main>
  );
}
