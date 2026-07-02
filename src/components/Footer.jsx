import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-[#E8E8E3] text-[#171717] px-6 sm:px-8 lg:px-16 py-16 relative">
      <div className="max-w-6xl mx-auto">

        {/* Menu + Socials */}
        <div className="grid grid-cols-2 gap-10 border-b border-gray-300 pb-12">

          {/* Menu */}
          <div>
            <h2 className="font-semibold text-xl mb-6">Menu</h2>
            <hr className="border-gray-300 mb-6" />

            <ul className="space-y-4">
              {["Home", "Services", "Projects", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-black transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h2 className="font-semibold text-xl mb-6">Socials</h2>
            <hr className="border-gray-300 mb-6" />

            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/aman-vishwakarma-97700a317/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Aman0835"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Time */}
        <div className="text-center mt-10">
          <p className="text-sm font-semibold tracking-wider">
            LOCAL TIME
          </p>

          <p className="mt-2 text-sm text-gray-600">
            {time.toLocaleTimeString("en-IN", {
              timeZone: "Asia/Kolkata",
              hour12: true,
            })}{" "}
            IST
          </p>
        </div>
      </div>

      {/* Back To Top */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#D9D9D9] shadow-lg flex items-center justify-center hover:scale-105 transition"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </footer>
  );
};

export default Footer;