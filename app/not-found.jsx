
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050d18] px-6 py-16 text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="error-glow absolute left-[10%] top-[10%] h-[350px] w-[350px] rounded-full bg-blue-600/15 blur-[130px]" />

        <div className="error-glow-two absolute bottom-[-100px] right-[5%] h-[400px] w-[400px] rounded-full bg-blue-700/15 blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">

        {/* Error Label */}
        <div className="error-fade mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#1685f8]" />

          <span className="text-[13px] font-semibold tracking-[4px] text-[#8ba8c9]">
            PAGE NOT FOUND
          </span>

          <span className="h-px w-10 bg-[#1685f8]" />
        </div>

        {/* 404 Number */}
        <div className="error-number relative mb-5">
          <h1 className="select-none text-[125px] font-extrabold leading-none tracking-[-8px] text-transparent sm:text-[180px] lg:text-[220px]"
            style={{
              WebkitTextStroke: "2px #1685f8",
              textShadow: "0 0 50px rgba(22,133,248,0.2)",
            }}
          >
            404
          </h1>

          {/* Blue glow behind number */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[90px]" />
        </div>

        {/* Heading */}
        <div className="error-content">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Oops! Page Not Found
          </h2>

          <p className="mx-auto max-w-xl text-[16px] leading-8 text-[#aebed2] sm:text-[18px]">
            The page you're looking for might have been removed,
            had its name changed, or is temporarily unavailable.
            Let's get you back on track.
          </p>
        </div>

        {/* Animated Icon */}
        <div className="error-icon mx-auto my-9 flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-400/20 bg-[#0b1d32] text-[#1685f8] shadow-[0_0_35px_rgba(22,133,248,0.12)]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10"
          >
            <path d="M12 3v10" />
            <path d="M8 9 12 13l4-4" />
            <path d="M5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
          </svg>
        </div>

        {/* Buttons */}
        <div className="error-buttons flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="group flex min-w-[180px] items-center justify-center gap-3 rounded-xl bg-[#087df5] px-7 py-4 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1685f8] hover:shadow-blue-500/40"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="m3 10 9-7 9 7" />
              <path d="M5 9v11h14V9" />
              <path d="M9 20v-7h6v7" />
            </svg>
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex min-w-[180px] items-center justify-center gap-3 rounded-xl border border-[#29415e] bg-[#0b1727] px-7 py-4 text-[15px] font-semibold text-[#d4e3f5] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-[#102039] hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Go Back
          </button>

        </div>

        {/* Footer */}
        <div className="error-footer mt-16">
          <p className="text-[13px] tracking-wide text-[#71859e]">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#1685f8]">ZAMIN</span>.
            All Rights Reserved.
          </p>
        </div>

      </div>

      {/* Animations */}
      <style jsx global>{`
        .error-fade {
          animation: errorFade 0.8s ease both;
        }

        .error-number {
          animation: errorZoom 1s ease both;
        }

        .error-content {
          animation: errorFadeUp 0.9s ease 0.2s both;
        }

        .error-icon {
          animation: errorFloat 3s ease-in-out infinite;
        }

        .error-buttons {
          animation: errorFadeUp 0.9s ease 0.4s both;
        }

        .error-footer {
          animation: errorFade 1s ease 0.7s both;
        }

        .error-glow {
          animation: errorGlow 7s ease-in-out infinite alternate;
        }

        .error-glow-two {
          animation: errorGlow 9s ease-in-out infinite alternate-reverse;
        }

        @keyframes errorFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes errorZoom {
          from {
            opacity: 0;
            transform: scale(0.7);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes errorFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes errorFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes errorGlow {
          from {
            transform: translate(0, 0) scale(1);
          }
          to {
            transform: translate(35px, -25px) scale(1.15);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .error-fade,
          .error-number,
          .error-content,
          .error-icon,
          .error-buttons,
          .error-footer,
          .error-glow,
          .error-glow-two {
            animation: none !important;
          }
        }
      `}</style>

    </main>
  );
}
