
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const services = [
  {
    icon: "code",
    title: "Web Development",
    description:
      "Build fast, responsive and modern websites using React, Next.js and more.",
  },
  {
    icon: "design",
    title: "UI/UX Design",
    description:
      "Clean and user-friendly interfaces that provide great user experiences.",
  },
  {
    icon: "wordpress",
    title: "WordPress Development",
    description:
      "Custom WordPress themes, plugins and full website solutions.",
  },
  {
    icon: "responsive",
    title: "Responsive Design",
    description:
      "Perfect experience on all devices and screen sizes.",
  },
  {
    icon: "performance",
    title: "Performance Optimization",
    description:
      "Fast loading, SEO friendly and optimized for performance.",
  },
  {
    icon: "support",
    title: "Maintenance & Support",
    description:
      "Ongoing support to keep your website running smoothly.",
  },
];

function ServiceIcon({ type }) {
  const iconProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-8 w-8",
  };

  return (
    <svg {...iconProps}>
      {type === "code" && (
        <>
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="M3 9h18" />
          <path d="m9 13-2 2 2 2" />
          <path d="m15 13 2 2-2 2" />
        </>
      )}

      {type === "design" && (
        <>
          <path d="m12 3 2.2 5.5L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.5L12 3Z" />
          <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
          <path d="M5 3v3M3.5 4.5h3" />
        </>
      )}

      {type === "wordpress" && (
        <>
          <circle cx="12" cy="12" r="9.5" />
          <path d="m5.5 7 4.3 11.5M15.5 7l-3.5 11.5" />
          <path d="M4 12h3M17 12h3" />
          <path d="M8 5.5h8" />
        </>
      )}

      {type === "responsive" && (
        <>
          <rect x="2.5" y="4" width="14" height="11" rx="1.5" />
          <path d="M6 19h7M9.5 15v4" />
          <rect x="17.5" y="8" width="4.5" height="12" rx="1.2" />
          <path d="M19 17.5h1.5" />
        </>
      )}

      {type === "performance" && (
        <>
          <path d="M4 19a9 9 0 1 1 16 0" />
          <path d="M12 14 17 8" />
          <circle cx="12" cy="14" r="1.5" />
          <path d="M7 17h2M15 17h2" />
          <path d="M12 3v2" />
        </>
      )}

      {type === "support" && (
        <>
          <path d="M12 3a8 8 0 0 0-8 8v3a2 2 0 0 0 2 2h2v-6H6a6 6 0 0 1 12 0h-2v6h2a2 2 0 0 0 2-2v-3a8 8 0 0 0-8-8Z" />
          <path d="M16 19c-.8 1.3-2.1 2-4 2" />
        </>
      )}
    </svg>
  );
}

export default function Services() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050d18] text-white">

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[12%] top-[5%] h-[350px] w-[400px] rounded-full bg-blue-600/[0.09] blur-[120px]" />
        <div className="absolute bottom-[-150px] left-[15%] h-[350px] w-[350px] rounded-full bg-blue-700/[0.06] blur-[120px]" />
      </div>

      <section className="relative mx-auto min-h-screen max-w-[1440px] px-6 pb-20 pt-14 sm:px-10 lg:px-[7%] lg:pt-12">

        {/* Heading and Laptop Image */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

          {/* Left heading */}
          <div
            className={`relative z-10 transition-all duration-700 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[14px] font-semibold tracking-[2.5px] text-[#a5bad5]">
                MY SERVICES
              </span>
              <span className="h-px w-[55px] bg-[#53759f]" />
            </div>

            <h1 className="max-w-[600px] text-[38px] font-extrabold leading-[1.25] tracking-tight sm:text-[46px] lg:text-[50px]">
              I Provide Modern Web
              <span className="block text-[#1685f8]">
                Development Services
              </span>
            </h1>

            <p className="mt-5 max-w-[520px] text-[17px] leading-[1.8] text-[#b7c8dd] sm:text-[18px]">
              From simple websites to complex web applications,
              I offer a range of services to help your business grow
              online.
            </p>
          </div>

          {/* Laptop Image */}
          <div
            className={`relative flex h-[250px] items-center justify-center transition-all delay-200 duration-700 sm:h-[290px] ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-[75px]" />

            <div className="relative h-full w-full max-w-[480px] animate-laptop-float">
              <Image
                src="/image/service.png"
                alt="Web development technologies displayed around a laptop"
                fill
                priority
                sizes="(min-width: 768px) 480px, 90vw"
                className="object-contain"
              />
            </div>
          </div>

        </div>

        {/* Services Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

          {services.map((service, index) => (
            <article
              key={service.title}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`group relative flex min-h-[190px] items-start gap-5 rounded-2xl border border-[#203650]/90 bg-[#091525]/85 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#1685f8]/80 hover:bg-[#0d2038] hover:shadow-[0_12px_40px_rgba(0,100,255,0.18)] sm:min-h-[200px] lg:p-8 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >

              {/* Icon */}
              <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-[#082b62] text-[#8bcaff] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:border-blue-400/50 group-hover:bg-[#087df5] group-hover:text-white">
                <ServiceIcon type={service.icon} />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1 pt-1 pr-5">
                <h2 className="text-[17px] font-bold leading-snug text-[#e8f1ff] transition-colors duration-300 group-hover:text-[#3b9cff] sm:text-[18px]">
                  {service.title}
                </h2>

                <p className="mt-4 text-[14px] leading-[1.8] text-[#a9bdd5] sm:text-[15px]">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <a
                href="/contact"
                aria-label={`Contact us about ${service.title}`}
                className="absolute bottom-5 right-5 flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#1685f8] text-[20px] text-[#1685f8] transition-all duration-300 hover:bg-[#1685f8] hover:text-white group-hover:translate-x-1"
              >
                →
              </a>

            </article>
          ))}

        </div>

      </section>

      {/* Animations */}
      <style jsx global>{`
        @keyframes laptopFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        .animate-laptop-float {
          animation: laptopFloat 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-laptop-float {
            animation: none;
          }
        }
      `}</style>

    </main>
  );
}
