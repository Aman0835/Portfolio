import React from "react";
import { Mail, Send } from "lucide-react";

const Footercard = () => {
  return (
    <div className="w-full rounded-[32px] border border-[#3B3B38] bg-[#111111]/70 backdrop-blur-xl p-6 sm:p-8 lg:p-10">

      {/* Heading */}
      <div className="mb-10">
        <p className="text-[#6B645C] uppercase tracking-[4px] text-sm">
          Contact
        </p>

        <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-[#D1D1C7]">
          Let's build
          <br />
          something amazing.
        </h2>

        <p className="mt-5 text-[#A29E9A] text-lg leading-relaxed max-w-lg">
          Have a project, job opportunity, or just want to say hello?
          I'd love to hear from you.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6">

        {/* Email */}
        <div className="relative">
          <Mail
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#6B645C]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="
              w-full
              rounded-full
              bg-transparent
              border
              border-[#3B3B38]
              py-4
              pl-14
              pr-5
              text-[#D1D1C7]
              outline-none
              placeholder:text-[#6B645C]
              focus:border-[#A29E9A]
              transition
            "
          />
        </div>

        {/* Message */}
        <textarea
          rows="6"
          placeholder="Tell me about your project..."
          className="
            w-full
            rounded-3xl
            bg-transparent
            border
            border-[#3B3B38]
            p-5
            text-[#D1D1C7]
            outline-none
            resize-none
            placeholder:text-[#6B645C]
            focus:border-[#A29E9A]
            transition
          "
        />

        {/* Button */}
        <button
          className="
            group
            w-full
            rounded-full
            bg-[#D1D1C7]
            text-[#080807]
            py-4
            font-semibold
            text-lg
            flex
            justify-center
            items-center
            gap-3
            transition-all
            duration-300
            hover:bg-white
            hover:scale-[1.02]
          "
        >
          Send Message

          <Send
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>

      </form>
    </div>
  );
};

export default Footercard;