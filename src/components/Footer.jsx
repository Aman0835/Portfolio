import React, { useEffect, useState, useRef } from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const [showButton, setShowButton] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowButton(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#E8E8E3] text-gray-800 px-16 py-24 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16 border-b border-gray-300 pb-16">
        <div>
          <h2 className="font-semibold text-lg mb-8">Menu</h2>
          <hr className="border-gray-300 mb-8" />
          <ul className="space-y-4 text-base">
            {["Home", "Services", "Projects", "About", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:underline hover:text-gray-900 transition">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-8">Socials</h2>
          <hr className="border-gray-300 mb-8" />
          <ul className="space-y-4 text-base">
            <li>
              <a
                href="https://www.linkedin.com/in/aman-vishwakarma-97700a317/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-900 transition">
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-900 transition">
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Aman0835/CODSOFT"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-900 transition">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="font-semibold text-sm mb-4">LOCAL TIME</p>
        <p className="text-sm">
          {time.toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour12: true,
          })}{" "}
          , IST
        </p>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-300 text-gray-800 p-4 rounded-full shadow-md hover:bg-gray-400 transition">
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
