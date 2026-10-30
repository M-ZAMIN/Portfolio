
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Personal Portfolio Website",
    category: "Frontend Development",
    description:
      "A modern and responsive personal portfolio website showcasing my skills, experience, services and projects.",
    image: "/image/project-1.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    live: "https://example.com",
    github: "https://github.com/",
  },
  {
    title: "E-Commerce Website",
    category: "Web Development",
    description:
      "A responsive online shopping website with a modern interface, product listings and a smooth shopping experience.",
    image: "/image/project-2.png",
    technologies: ["React", "JavaScript", "CSS"],
    live: "https://example.com",
    github: "https://github.com/",
  },
  {
    title: "Business Website",
    category: "WordPress Development",
    description:
      "A professional business website designed to present services, build trust and provide a user-friendly experience.",
    image: "/image/project-3.png",
    technologies: ["WordPress", "Elementor", "CSS"],
    live: "https://example.com",
    github: "https://github.com/",
  },
  {
    title: "Dashboard Interface",
    category: "Frontend Development",
    description:
      "A clean dashboard interface with organized information, responsive layouts and reusable UI components.",
    image: "/image/project-4.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://example.com",
    github: "https://github.com/",
  },
  {
    title: "Landing Page Design",
    category: "UI/UX Development",
    description:
      "A modern landing page with attractive sections, clear content hierarchy and responsive design.",
    image: "/image/project-5.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://example.com",
    github: "https://github.com/",
  },
  {
    title: "Web Application",
    category: "Full Stack Development",
    description:
      "A web application built with a modern frontend and backend architecture, focused on usability and performance.",
    image: "/image/project-6.png",
    technologies: ["React", "Node.js", "MongoDB"],
    live: "https://example.com",
    github: "https://github.com/",
  },
];

const filters = [
  "All",
  "Frontend Development",
  "Web Development",
  "WordPress Development",
  "UI/UX Development",
  "Full Stack Development",
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050d18] text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="projects-glow absolute right-[10%] top-[5%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.10] blur-[130px]" />

        <div className="projects-glow-two absolute bottom-[5%] left-[5%] h-[350px] w-[350px] rounded-full bg-blue-700/[0.08] blur-[120px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-[1440px] px-6 pb-24 pt-16 sm:px-10 lg:px-[7%] lg:pt-20">

        {/* Page Heading */}
        <div
          className={`mx-auto mb-12 max-w-3xl text-center transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#53759f]" />

            <span className="text-[13px] font-semibold tracking-[3px] text-[#a5bad5]">
              MY PORTFOLIO
            </span>

            <span className="h-px w-10 bg-[#53759f]" />
          </div>

          <h1 className="text-[38px] font-extrabold leading-tight tracking-tight sm:text-[48px] lg:text-[55px]">
            My Creative
            <span className="text-[#1685f8]"> Projects</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-[#b7c8dd] sm:text-[18px]">
            Explore some of my recent work, creative ideas and
            development projects. Each project reflects my passion
            for building modern, responsive and user-friendly
            digital experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`mb-12 flex flex-wrap justify-center gap-3 transition-all delay-200 duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2.5 text-[13px] font-medium transition-all duration-300 sm:text-[14px] ${
                activeFilter === filter
                  ? "border-[#1685f8] bg-[#087df5] text-white shadow-lg shadow-blue-500/20"
                  : "border-[#263b54] bg-[#0b1727] text-[#b7c8dd] hover:border-[#1685f8] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              className={`project-card group overflow-hidden rounded-2xl border border-[#203650]/90 bg-[#091525]/90 transition-all duration-500 hover:-translate-y-2 hover:border-[#1685f8]/80 hover:shadow-[0_15px_45px_rgba(0,100,255,0.16)] ${
                visible
                  ? "project-show"
                  : "project-hidden"
              }`}
            >

              {/* Project Image */}
              <div className="relative h-[220px] overflow-hidden bg-[#102039] sm:h-[230px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050d18]/70 via-transparent to-transparent opacity-80" />

                <span className="absolute left-4 top-4 rounded-full border border-blue-400/30 bg-[#050d18]/80 px-4 py-2 text-[11px] font-semibold tracking-wide text-blue-300 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-7">

                <h2 className="text-[19px] font-bold text-[#e8f1ff] transition-colors duration-300 group-hover:text-[#3b9cff]">
                  {project.title}
                </h2>

                <p className="mt-3 min-h-[76px] text-[14px] leading-[1.8] text-[#a9bdd5] sm:text-[15px]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#263b54] bg-[#102039] px-3 py-1.5 text-[11px] font-medium text-[#9fc9f5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-[13px] font-semibold text-[#1685f8] transition-colors hover:text-white"
                  >
                    Live Demo
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      ↗
                    </span>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#b7c8dd] transition-colors hover:text-white"
                  >
                    Source Code
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.75-.24.75-.53v-2.08c-3.06.67-3.71-1.3-3.71-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.21.92.1-.72.38-1.2.7-1.48-2.45-.28-5.02-1.22-5.02-5.46 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.91 0 0 .92-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.12-1.43 3.04-1.13 3.04-1.13.61 1.51.23 2.63.12 2.91.7.77 1.12 1.75 1.12 2.95 0 4.25-2.57 5.18-5.03 5.45.4.35.75 1.02.75 2.06V22c0 .3.2.64.76.53A11.1 11.1 0 0 0 12 .9Z" />
                    </svg>
                  </a>

                </div>
              </div>
            </article>
          ))}

        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <p className="py-16 text-center text-[16px] text-[#a9bdd5]">
            No projects found in this category.
          </p>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border border-[#203650] bg-[#091525]/90 px-6 py-12 text-center sm:px-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#a9bdd5] sm:text-[16px]">
            Let's work together to turn your ideas into something
            amazing. I'm always open to exciting projects and
            collaborations.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#087df5] px-7 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1685f8] hover:shadow-lg hover:shadow-blue-500/25"
          >
            Let's Talk
            <span>→</span>
          </a>
        </div>

      </section>

      {/* Animations */}
      <style jsx global>{`
        .project-hidden {
          opacity: 0;
          transform: translateY(35px);
        }

        .project-show {
          animation: projectFadeUp 0.7s ease both;
        }

        .projects-glow {
          animation: projectsGlow 8s ease-in-out infinite alternate;
        }

        .projects-glow-two {
          animation: projectsGlow 10s ease-in-out infinite alternate-reverse;
        }

        @keyframes projectFadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes projectsGlow {
          from {
            transform: translate(0, 0) scale(1);
          }
          to {
            transform: translate(35px, -25px) scale(1.15);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-show,
          .projects-glow,
          .projects-glow-two {
            animation: none !important;
          }

          .project-card {
            transition: none !important;
          }
        }
      `}</style>

    </main>
  );
}
