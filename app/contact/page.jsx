
"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: "email",
    title: "Email Address",
    value: "m.zamin0507@gmail.com",
    link: "mailto:m.zamin0507@gmail.com",
  },
  {
    icon: "phone",
    title: "Phone Number",
    value: "03134412675",
    link: "tel:03134412675",
  },
  {
    icon: "location",
    title: "Location",
    value: "Lahore, Pakistan",
    link: null,
  },
];

function ContactIcon({ type }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      {type === "email" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </>
      )}

      {type === "phone" && (
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
      )}

      {type === "location" && (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:m.zamin0507@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050d18] text-white">

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="contact-glow absolute left-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.08] blur-[120px]" />
        <div className="contact-glow-delayed absolute bottom-[-100px] right-[5%] h-[450px] w-[450px] rounded-full bg-blue-700/[0.08] blur-[130px]" />
      </div>

      {/* Contact section */}
      <section className="relative mx-auto min-h-screen max-w-[1440px] px-6 py-24 sm:px-10 lg:px-[7.3%]">

        {/* Section heading */}
        <div className="contact-heading mx-auto mb-16 max-w-[700px] text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-[40px] bg-[#53759f]" />
            <span className="text-[12px] font-medium tracking-[3px] text-[#a5bad5]">
              GET IN TOUCH
            </span>
            <span className="h-px w-[40px] bg-[#53759f]" />
          </div>

          <h1 className="text-[36px] font-extrabold leading-tight sm:text-[46px] lg:text-[54px]">
            Let's Work{" "}
            <span className="text-[#1685f8]">Together.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-[1.9] text-[#c1d0e2] sm:text-[16px]">
            Have a project in mind or looking for a frontend developer?
            I'd love to hear about it. Let's create something amazing together.
          </p>

        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Left contact information */}
          <div className="contact-left">

            <h2 className="text-[25px] font-bold sm:text-[29px]">
              Let's Talk
            </h2>

            <p className="mt-4 max-w-[420px] text-[14px] leading-[1.9] text-[#aebfd5] sm:text-[15px]">
              I'm always interested in hearing about new projects,
              creative ideas, and opportunities to be part of your vision.
            </p>

            {/* Contact cards */}
            <div className="mt-9 space-y-5">

              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                  className="contact-card group flex items-center gap-5 rounded-[15px] border border-[#253b55] bg-[#0b1727]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1685f8]/70 hover:bg-[#10213a]"
                >

                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-[#082b62] text-[#9ed0ff] transition-all duration-300 group-hover:bg-[#087df5] group-hover:text-white">
                    <ContactIcon type={item.icon} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[14px] font-semibold text-white">
                      {item.title}
                    </h3>

                    {item.link ? (
                      <a
                        href={item.link}
                        className="mt-1 block break-all text-[13px] text-[#a7bad3] transition hover:text-[#1685f8] sm:text-[14px]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[13px] text-[#a7bad3] sm:text-[14px]">
                        {item.value}
                      </p>
                    )}
                  </div>

                </div>
              ))}

            </div>

            {/* Availability message */}
            <div className="mt-8 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
              </span>

              <p className="text-[13px] text-[#a7bad3]">
                Available for freelance projects
              </p>
            </div>

          </div>

          {/* Right contact form */}
          <div className="contact-form rounded-[20px] border border-[#253b55] bg-[#0b1727]/90 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.2)] sm:p-9">

            <h2 className="text-[24px] font-bold sm:text-[28px]">
              Send Me a Message
            </h2>

            <p className="mt-2 text-[13px] leading-relaxed text-[#a7bad3] sm:text-[14px]">
              Fill out the form below and let's discuss your project.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              {/* Name and email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[13px] font-medium text-[#d0dced]"
                  >
                    Your Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="contact-input h-[49px] w-full rounded-[9px] border border-[#263b55] bg-[#071321] px-4 text-[13px] text-white outline-none transition-all duration-300 placeholder:text-[#71839c] focus:border-[#1685f8] focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[13px] font-medium text-[#d0dced]"
                  >
                    Your Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="contact-input h-[49px] w-full rounded-[9px] border border-[#263b55] bg-[#071321] px-4 text-[13px] text-white outline-none transition-all duration-300 placeholder:text-[#71839c] focus:border-[#1685f8] focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-[13px] font-medium text-[#d0dced]"
                >
                  Subject *
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is your project about?"
                  className="contact-input h-[49px] w-full rounded-[9px] border border-[#263b55] bg-[#071321] px-4 text-[13px] text-white outline-none transition-all duration-300 placeholder:text-[#71839c] focus:border-[#1685f8] focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[13px] font-medium text-[#d0dced]"
                >
                  Your Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="contact-input w-full resize-none rounded-[9px] border border-[#263b55] bg-[#071321] px-4 py-4 text-[13px] text-white outline-none transition-all duration-300 placeholder:text-[#71839c] focus:border-[#1685f8] focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="group inline-flex h-[50px] w-full items-center justify-center gap-3 rounded-full bg-[#087df5] px-7 text-[14px] font-semibold text-white shadow-[0_5px_20px_rgba(0,110,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0069dc] hover:shadow-[0_8px_25px_rgba(0,110,255,0.35)] sm:w-auto"
              >
                Send Message

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M22 2 11 13" />
                  <path d="m22 2-7 20-4-9-9-4Z" />
                </svg>
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Contact page animations */}
      <style jsx global>{`
        @keyframes contactFadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contactSlideLeft {
          from {
            opacity: 0;
            transform: translateX(-55px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes contactSlideRight {
          from {
            opacity: 0;
            transform: translateX(55px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes contactGlow {
          0%, 100% {
            opacity: 0.4;
            scale: 1;
          }
          50% {
            opacity: 0.85;
            scale: 1.12;
          }
        }

        .contact-heading {
          opacity: 0;
          animation: contactFadeUp 0.9s ease-out 0.1s both;
        }

        .contact-left {
          opacity: 0;
          animation: contactSlideLeft 1s ease-out 0.3s both;
        }

        .contact-form {
          opacity: 0;
          animation: contactSlideRight 1s ease-out 0.5s both;
        }

        .contact-card {
          opacity: 0;
          animation: contactFadeUp 0.8s ease-out both;
        }

        .contact-glow {
          animation: contactGlow 6s ease-in-out infinite;
        }

        .contact-glow-delayed {
          animation: contactGlow 7s ease-in-out 1s infinite;
        }

        .contact-input:focus {
          box-shadow: 0 0 18px rgba(22, 133, 248, 0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-heading,
          .contact-left,
          .contact-form,
          .contact-card,
          .contact-glow,
          .contact-glow-delayed {
            animation: none !important;
            opacity: 1;
          }
        }
      `}</style>

    </main>
  );
}
