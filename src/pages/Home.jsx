
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "./Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const mouseGlowRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Hero entrance animation
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
        .fromTo(
          ".hero-intro",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.35"
        )
        .fromTo(
          ".hero-word",
          { opacity: 0, y: 80, rotateX: -45 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.18,
          },
          "-=0.3"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.35"
        )
        .fromTo(
          ".hero-action",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            clearProps: "opacity,transform",
          },
          "-=0.3"
        )
        .fromTo(
          ".hero-social > *",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
          },
          "-=0.3"
        )
        .fromTo(
          ".hero-bottom > *",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.2"
        );

      // Technical background animation
      gsap.to(".technical-glow", {
        opacity: 0.7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".technical-line", {
        opacity: 0.5,
        duration: 2.5,
        stagger: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Mouse-following orange glow
      const hero = containerRef.current;
      const mouseGlow = mouseGlowRef.current;

      const handleMouseMove = (event) => {
        if (!hero || !mouseGlow) return;

        const rect = hero.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        gsap.to(mouseGlow, {
          x,
          y,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(mouseGlow, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      hero?.addEventListener("mousemove", handleMouseMove);
      hero?.addEventListener("mouseleave", handleMouseLeave);

      // Scroll animation
      gsap.to(".hero-content", {
        y: -100,
        opacity: 0.2,
        scale: 0.95,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        hero?.removeEventListener("mousemove", handleMouseMove);
        hero?.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="bg-[#101010] text-white min-h-screen overflow-hidden"
    >
      <Navbar />

      <main>
        <section className="hero-section relative min-h-screen flex items-center pt-28 pb-20 px-6 md:px-10 overflow-hidden">

          {/* Mouse Following Orange Glow */}
          <div
            ref={mouseGlowRef}
            className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none z-0 opacity-0"
            style={{
              background:
                "radial-gradient(circle, rgba(255,107,53,0.15) 0%, rgba(255,107,53,0.06) 40%, transparent 70%)",
              transform: "translate(-50%, -50%)",
              willChange: "transform, opacity",
            }}
          />

          {/* Technical Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

            {/* Technical Grid */}
            <div
              className="absolute right-0 top-0 w-[65%] h-full opacity-[0.10]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #ff6b35 1px, transparent 1px),
                  linear-gradient(to bottom, #ff6b35 1px, transparent 1px)
                `,
                backgroundSize: "55px 55px",
                maskImage:
                  "linear-gradient(to left, black, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to left, black, transparent)",
              }}
            />

            {/* Technical Glow */}
            <div className="technical-glow absolute right-[10%] top-[20%] w-80 h-80 bg-[#ff6b35]/10 blur-[120px] rounded-full" />

            {/* Horizontal Circuit Lines */}
            <div className="technical-line absolute right-[5%] top-[25%] w-[45%] h-px bg-gradient-to-r from-transparent via-[#ff6b35]/40 to-transparent" />

            <div className="technical-line absolute right-[8%] top-[70%] w-[40%] h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent" />

            <div className="technical-line absolute right-[15%] top-[45%] w-[35%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Vertical Circuit Lines */}
            <div className="technical-line absolute right-[18%] top-[12%] h-[70%] w-px bg-gradient-to-b from-transparent via-[#ff6b35]/30 to-transparent" />

            <div className="technical-line absolute right-[42%] top-[8%] h-[75%] w-px bg-gradient-to-b from-transparent via-[#ff6b35]/20 to-transparent" />

            {/* Geometric Technical Shapes */}
            <div className="absolute right-[12%] top-[24%] w-40 h-40 border border-[#ff6b35]/20 rotate-45" />

            <div className="absolute right-[17%] top-[31%] w-24 h-24 border border-white/10 rotate-45" />

            <div className="absolute right-[32%] top-[58%] w-16 h-16 border border-[#ff6b35]/20 rotate-45" />

            {/* Corner Brackets */}
            <div className="absolute right-[8%] top-[18%] w-10 h-10 border-t border-r border-[#ff6b35]/40" />

            <div className="absolute right-[8%] bottom-[18%] w-10 h-10 border-b border-r border-[#ff6b35]/30" />

            {/* Technical Labels */}
            <div className="absolute right-[9%] top-[13%] text-[9px] tracking-[0.3em] text-[#ff6b35]/40 hidden md:block">
              SYSTEM / 001
            </div>

            <div className="absolute right-[9%] bottom-[13%] text-[9px] tracking-[0.3em] text-gray-500 hidden md:block">
              DIGITAL EXPERIENCE
            </div>

          </div>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto w-full relative z-10">

            <div className="hero-content max-w-5xl">

              {/* Badge */}
              <div className="hero-badge inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/5 mb-8">

                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b35] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b35]" />
                </span>

                <span className="text-sm text-gray-300">
                  Open to opportunities
                </span>
              </div>

              {/* Intro */}
              <p className="hero-intro text-gray-400 text-lg md:text-xl mb-5">
                Hello, I'm{" "}
                <span className="text-white font-semibold">
                  Himanshu Mishra
                </span>
              </p>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-8">

                <span className="hero-word block">
                  Building
                </span>

                <span className="hero-word block text-[#ff6b35]">
                  Digital
                </span>

                <span className="hero-word block">
                  Experiences<span className="text-[#ff6b35]">.</span>
                </span>

              </h1>

              {/* Description */}
              <p className="hero-description max-w-2xl text-gray-400 text-base md:text-lg leading-8 mb-10">
                I'm a frontend developer focused on creating modern,
                responsive and user-friendly web experiences using
                React, JavaScript and modern web technologies.
              </p>

              {/* Action Buttons */}
              <div className="hero-buttons flex flex-wrap items-center gap-4 mb-10">

                <Link
                  to="/projects"
                  className="hero-action group flex items-center gap-3 px-7 py-4 bg-[#ff6b35] text-black font-semibold rounded-xl hover:bg-white transition-all duration-300"
                >
                  Explore Projects

                  <FiArrowUpRight
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="hero-action group flex items-center gap-3 px-7 py-4 border border-white/20 text-white font-semibold rounded-xl hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-300"
                >
                  Contact Me

                  <FiArrowUpRight
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Link>

                <a
                  href="/resume.pdf"
                  download="Himanshu_Mishra_Resume.pdf"
                  className="hero-action flex items-center gap-2 px-7 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FiDownload size={18} />
                  Resume
                </a>

              </div>

              {/* Social Links */}
              <div className="hero-social flex items-center gap-5">

                <a
                  href="https://github.com/hm74088170"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                >
                  <FiGithub size={23} />
                </a>

                <a
                  href="https://www.linkedin.com/in/himanshumishra-559377312"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                >
                  <FiLinkedin size={23} />
                </a>

              </div>

            </div>

            {/* Bottom Information */}
            <div className="hero-bottom border-t border-white/10 mt-24 pt-7 flex flex-col sm:flex-row justify-between gap-5">

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-2">
                  Location
                </p>

                <p className="text-gray-300">
                  India
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-2">
                  Focus
                </p>

                <p className="text-gray-300">
                  Frontend Development
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-2">
                  Currently Exploring
                </p>

                <p className="text-gray-300">
                  Next.js · Node.js · MongoDB
                </p>
              </div>

            </div>

          </div>
        </section>

        <About />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
