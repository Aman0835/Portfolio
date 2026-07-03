import React from "react";
import { Mail, ArrowUpRight, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[#E8E8E3] px-4 sm:px-8 lg:px-16 py-6">
      <div className="rounded-[32px] bg-gradient-to-t from-[#34312E] to-[#080807] px-6 py-10 sm:px-10 sm:py-12">

        <div className="max-w-3xl mx-auto text-center">

          {/* Heading */}
          <p className="uppercase tracking-[5px] text-[#6B645C] text-sm">
            CONTACT
          </p>

          <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-bold text-[#D1D1C7] leading-none">
            Let's Connect
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#A29E9A] leading-relaxed max-w-xl mx-auto">
            Whether you have a project, a job opportunity,
            or simply want to collaborate,
            I'd love to hear from you.
          </p>

          {/* Email */}
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-3 rounded-full border border-[#2E2E2E] bg-[#111111] px-5 py-4">

              <Mail size={20} className="text-[#A29E9A]" />

              <span className="text-[#D1D1C7] break-all">
                amanvishwakarma4719@gmail.com
              </span>

            </div>
          </div>

          {/* CTA */}
          <a
            href="mailto:amanvishwakarma4719@gmail.com"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D1D1C7] px-8 py-3 text-[#080807] font-semibold transition-all duration-300 hover:scale-105 hover:bg-white"
          >
            Email Me
            <ArrowUpRight size={18} />
          </a>

          {/* Social Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">

            <a
              href="/amanvishwakarma.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-[#3A3A3A] px-5 py-3 text-[#D1D1C7] hover:bg-[#1A1A1A] transition"
            >
              <Download size={18} />
              Resume
            </a>

            <a
              href="https://github.com/Aman0835"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#3A3A3A] px-5 py-3 text-[#D1D1C7] hover:bg-[#1A1A1A] transition"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aman-vishwakarma-97700a317/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#3A3A3A] px-5 py-3 text-[#D1D1C7] hover:bg-[#1A1A1A] transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
