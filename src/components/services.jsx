import React from "react";
import SectionCards from "./smallComponents/SectionCards";

const Services = () => {
  return (
    <section className="w-full bg-[#080807] text-[#D1D1C7] rounded-t-[40px] overflow-hidden">

      {/* Header */}
      <div className="px-5 sm:px-8 lg:px-16 py-10 lg:py-16">

        <h1 className="text-5xl sm:text-8xl md:text-7xl lg:text-[8rem] font-semibold leading-none">
          WHAT I DO/
        </h1>

        <div className="mt-10 flex justify-end">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl">

            <div className="text-[#6B645C] text-lg">
              (Services)
            </div>

            <p className="md:col-span-4 text-lg sm:text-xl leading-relaxed text-[#A29E9A]">
              I'm Aman Vishwakarma, a Full-Stack Developer who builds modern,
              scalable web applications. I combine clean UI design with robust
              backend architecture to create fast, reliable, and user-focused
              digital experiences.
            </p>

          </div>
        </div>

      </div>

      <hr className="border-[#A29E9A]/40 mx-5 sm:mx-8 lg:mx-16" />

      {/* Services */}
      <SectionCards
        number="1"
        title="Full-Stack Development"
        description="From frontend interactions to backend APIs, I build complete web applications using modern technologies that are scalable, maintainable, and production-ready."
        skills={[
          "React • Node.js • Express.js",
          "REST APIs • Firebase • Docker",
          "Git • GitHub • Postman",
        ]}
      />

      <hr className="border-[#A29E9A]/40 mx-5 sm:mx-8 lg:mx-16" />

      <SectionCards
        number="2"
        title="UI/UX & Frontend Development"
        description="I create modern, responsive interfaces with clean layouts, smooth animations, and user experiences that feel intuitive across every device."
        skills={[
          "React • Next.js • Tailwind CSS",
          "GSAP • Framer Motion",
          "Figma to Responsive Code",
        ]}
      />

      <hr className="border-[#A29E9A]/40 mx-5 sm:mx-8 lg:mx-16" />

      <SectionCards
        number="3"
        title="Backend & Optimization"
        description="I design efficient backend systems, optimize application performance, and build software that is reliable, scalable, and easy to maintain."
        skills={[
          "Data Structures & Algorithms",
          "DBMS • OOP • Operating Systems",
          "Performance Optimization & Scalability",
        ]}
      />

    </section>
  );
};

export default Services;