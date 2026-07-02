import profile from "../assets/p2.png";
import TextAnimation from "./smallComponents/TextAnimation";

const skillGroups = [
  {
    title: "Languages & Tools",
    skills: [
      "Java",
      "JavaScript",
      "SQL",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
      "Firebase",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "GSAP",
      "jQuery",
      "Framer Motion",
    ],
  },
  {
    title: "Core CS Concepts",
    skills: ["DSA", "DBMS", "OOPS", "System Design", "Operating System"],
  },
];

const About = () => {
  return (
    <section className="bg-[#080807] rounded-b-[40px] text-[#A29E9A]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16 py-16 lg:py-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none text-[#D1D1C7]">
              DEVELOPER
              <br />
              DESIGNER
              <br />
              CREATOR /
            </h1>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-center lg:text-left text-[#D1D1C7] mb-12">
              Skills
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {skillGroups.map((group) => (
                <div key={group.title} className="min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#D1D1C7] mb-4">
                    {group.title}
                  </h3>

                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="text-base sm:text-lg cursor-pointer">
                        <TextAnimation
                          text={skill}
                          animateOn="both"
                          revealDirection="center"
                          speed={70}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 mt-24 items-start">
          {/* Image */}
          <div className="lg:col-span-2">
            <img
              src={profile}
              alt="Profile"
              className="w-full rounded-2xl object-cover grayscale"
            />
          </div>

          {/* About */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D1D1C7] leading-tight">
              I'm a software engineer driven by a passion for turning ideas into
              clean, intuitive digital experiences.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="text-[#6B645C] uppercase tracking-wide">
                (About Me)
              </div>

              <div className="md:col-span-3 space-y-6 text-lg sm:text-xl leading-relaxed">
                <p>
                  I'm{" "}
                  <span className="text-[#D1D1C7] font-semibold">
                    Aman Vishwakarma
                  </span>
                  , a passionate Full-Stack Developer who enjoys building modern
                  web applications that are fast, scalable, and intuitive.
                </p>

                <p>
                  With experience across frontend and backend development, I
                  focus on creating clean user experiences, writing maintainable
                  code, and delivering products that solve real-world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
