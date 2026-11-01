"use client";

import Image from "next/image";

const features = [
  {
    icon: "code",
    title: "Clean Code",
    description: "Write maintainable and scalable code",
  },
  {
    icon: "idea",
    title: "Creative Mindset",
    description: "Turning ideas into reality",
  },
  {
    icon: "team",
    title: "Team Player",
    description: "Collaborate and grow together",
  },
];

const stats = [
  { number: "1+", label: "Years Experience" },
  { number: "5+", label: "Projects Completed" },
  { number: "3+", label: "Happy Clients" },
];

function FeatureIcon({ type }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      {type === "code" && (
        <>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 5-4 14" />
        </>
      )}

      {type === "idea" && (
        <>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M8.5 14.5a7 7 0 1 1 7 0c-.8.6-1.2 1.4-1.3 2.5h-4.4c-.1-1.1-.5-1.9-1.3-2.5Z" />
          <path d="M12 2v2M4.9 4.9l1.4 1.4M19.1 4.9l-1.4 1.4" />
        </>
      )}

      {type === "team" && (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.4-5.5 6-5.5s6 2.2 6 5.5" />
          <path d="M16 5.5a3 3 0 0 1 0 5.8M18 14c2 .6 3 2.5 3 5" />
        </>
      )}
    </svg>
  );
}

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050d18] text-white">

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="about-glow absolute left-[35%] top-[15%] h-[400px] w-[400px] rounded-full bg-blue-700/[0.04] blur-[120px]" />
        <div className="about-glow-delayed absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-700/[0.06] blur-[120px]" />
      </div>

      {/* About Section */}
      <section className="relative mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 items-center gap-16 px-6 pt-0 pb-20 sm:px-10 lg:grid-cols-[1.1fr_1.2fr] lg:gap-10 lg:px-[4.4%] lg:py-0">

        {/* LEFT CONTENT */}
        <div className="about-slide-left relative z-10">

          {/* About label */}
          <div className="about-fade about-delay-200 mb-5 flex items-center gap-3">
            <span className="text-[12px] font-medium tracking-[2px] text-[#a5bad5]">
              ABOUT ME
            </span>
            <span className="h-px w-[55px] bg-[#53759f]" />
          </div>

          {/* Heading */}
          <h1 className="about-fade about-delay-400 max-w-[600px] text-[34px] font-extrabold leading-[1.22] tracking-[-0.8px] sm:text-[40px] lg:text-[44px] xl:text-[46px]">
            I'm a Frontend Developer
            <br className="hidden xl:block" />
            {" "}with a passion for creating
            <span className="block text-[#1685f8]">
              amazing web experiences.
            </span>
          </h1>

          {/* Description */}
          <p className="about-fade about-delay-600 mt-5 max-w-[560px] text-[15px] leading-[1.85] text-[#c1d0e2] sm:text-[16px]">
            I specialize in building modern, responsive and user-friendly
            web applications. With a strong focus on clean code and
            performance, I turn ideas into digital solutions.
          </p>

          {/* Feature list */}
          <div className="mt-8 space-y-5">

            {features.map((feature, index) => (
              <div
                key={feature.title}
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                className="about-feature flex items-center gap-4"
              >
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-[#082b62] text-[#9ed0ff] shadow-[0_0_15px_rgba(0,100,255,0.12)] transition-all duration-300 hover:scale-110 hover:bg-[#087df5]">
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

          {/* Download CV */}
          <a
            href="/Muhammad-Zamin-CV.pdf"
            download
            className="about-fade about-delay-1400 mt-8 inline-flex h-[46px] items-center gap-3 rounded-full bg-[#087df5] px-7 text-[14px] font-semibold text-white shadow-[0_5px_20px_rgba(0,110,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0069dc] hover:shadow-[0_8px_25px_rgba(0,110,255,0.35)]"
          >
            Download CV

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M12 3v12m-5-5 5 5 5-5" />
              <path d="M5 17v3h14v-3" />
            </svg>
          </a>

        </div>

        {/* RIGHT CONTENT */}
        <div className="relative mx-auto flex w-full max-w-[680px] items-center justify-center lg:ml-auto">

          {/* Blue top border */}
          <div className="about-border-top absolute left-[23%] top-[-30px] h-[35px] w-[175px] rounded-t-[20px] border-t-2 border-x border-[#087df5]/60" />

          {/* Blue left/bottom border */}
          <div className="about-border-left absolute left-[-1%] top-[48%] h-[200px] w-[135px] rounded-bl-[28px] border-b-2 border-l-2 border-[#087df5]" />

          {/* Profile image */}
          <div className="about-profile relative z-10 h-[430px] w-[290px] overflow-hidden rounded-[13px] border border-[#8da9c9]/50 sm:h-[470px] sm:w-[320px] lg:h-[450px] lg:w-[300px] xl:h-[490px] xl:w-[330px]">
            <Image
              src="/image/Profile3.jpeg"
              alt="Muhammad Zamin"
              fill
              priority
              sizes="(min-width: 1280px) 330px, (min-width: 640px) 320px, 290px"
              className="object-cover object-top"
            />
          </div>

          {/* Statistics */}
          <div className="relative z-20 ml-4 flex w-[135px] shrink-0 flex-col gap-4 sm:ml-6 sm:w-[155px]">

            {stats.map((stat, index) => (
              <div
                key={stat.label}
                style={{ animationDelay: `${1 + index * 0.2}s` }}
                className="about-stat flex h-[95px] flex-col justify-center rounded-[12px] border border-[#253b55] bg-[#0b1727]/90 px-4 shadow-[0_5px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1685f8]/70 hover:bg-[#10213a] sm:h-[105px] sm:px-5"
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

          {/* Signature */}
          <div className="about-signature absolute -bottom-[75px] right-[5%] z-20 rotate-[-10deg]">
            <p className="whitespace-nowrap font-serif text-[23px] italic text-white sm:text-[27px]">
              Muhammad Zamin
            </p>

            <div className="ml-5 mt-2 h-[2px] w-[105px] rotate-[-10deg] bg-[#1685f8]" />
          </div>

        </div>

      </section>

      {/* About page animations */}
      <style jsx global>{`
        @keyframes aboutSlideLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes aboutSlideRight {
          from {
            opacity: 0;
            transform: translateX(70px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes aboutFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aboutGlow {
          0%, 100% {
            opacity: 0.4;
            scale: 1;
          }
          50% {
            opacity: 0.8;
            scale: 1.12;
          }
        }

        @keyframes aboutFloat {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -12px;
          }
        }

        @keyframes aboutBorder {
          from {
            opacity: 0;
            scale: 0.8;
          }
          to {
            opacity: 1;
            scale: 1;
          }
        }

        .about-slide-left {
          animation: aboutSlideLeft 0.9s ease-out both;
        }

        .about-fade {
          opacity: 0;
          animation: aboutFadeUp 0.8s ease-out both;
        }

        .about-feature {
          opacity: 0;
          animation: aboutFadeUp 0.8s ease-out both;
        }

        .about-profile {
          animation: aboutSlideRight 1.2s ease-out both;
        }

        .about-stat {
          opacity: 0;
          animation: aboutFadeUp 0.8s ease-out both;
        }

        .about-signature {
          animation: aboutFadeUp 1s ease-out 1.4s both,
                     aboutFloat 4s ease-in-out 2.4s infinite;
        }

        .about-glow {
          animation: aboutGlow 6s ease-in-out infinite;
        }

        .about-glow-delayed {
          animation: aboutGlow 7s ease-in-out 1s infinite;
        }

        .about-border-top {
          transform-origin: left;
          animation: aboutBorder 1s ease-out 0.5s both;
        }

        .about-border-left {
          transform-origin: bottom left;
          animation: aboutBorder 1s ease-out 0.8s both;
        }

        .about-delay-200 { animation-delay: 0.2s; }
        .about-delay-400 { animation-delay: 0.4s; }
        .about-delay-600 { animation-delay: 0.6s; }
        .about-delay-1400 { animation-delay: 1.4s; }

        @media (prefers-reduced-motion: reduce) {
          .about-slide-left,
          .about-fade,
          .about-feature,
          .about-profile,
          .about-stat,
          .about-signature,
          .about-glow,
          .about-glow-delayed,
          .about-border-top,
          .about-border-left {
            animation: none !important;
            opacity: 1;
          }
        }
      `}</style>

    </main>
  );
}
