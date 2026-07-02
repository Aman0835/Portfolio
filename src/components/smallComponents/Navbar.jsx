import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // Floating navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
      ${scrolled ? "pt-3 px-4" : "pt-0 px-0"}`}
    >
      <div
        className={`transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
        ${
          scrolled
            ? "rounded-full bg-[#E8E8E3]/10 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-[#d8d8d0]"
            : "rounded-none bg-[#E8E8E3]/20 backdrop-blur-xl border-b border-[#d8d8d0]"
        }`}
      >
        <nav className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-semibold tracking-wide text-[#444141]"
          >
            Aman<span className="text-[#6B645C] ">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative transition-all duration-300 group
                  ${
                    isActive
                      ? "text-[#171717] font-semibold"
                      : "text-[#6B645C] hover:text-[#171717]"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#171717] transition-all duration-300
                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}

            <a
              href="#contact"
              className="ml-4 flex items-center gap-2 rounded-full bg-[#171717] text-[#E8E8E3] px-6 py-3 hover:scale-105 transition"
            >
              Hire Me
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#171717]"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="bg-[#E8E8E3] px-6 py-6 flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`transition-colors ${
                    isActive
                      ? "text-[#171717] font-semibold"
                      : "text-[#6B645C]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#171717] text-[#E8E8E3] py-3"
            >
              Hire Me
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;