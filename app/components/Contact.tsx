"use client";
import { motion } from "framer-motion";

const LINKS = [
  {
    label: "linkedin.com/in/john-duong-x",
    sub: "Connect on LinkedIn",
    href: "https://linkedin.com/in/john-duong-x",
  },
  {
    label: "github.com/chocolatepainx",
    sub: "See the code",
    href: "https://github.com/chocolatepainx",
  },
  {
    label: "johnle_10@hotmail.com",
    sub: "Email directly",
    href: "mailto:johnle_10@hotmail.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-20 md:py-28 border-t border-[#E8E3D6]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="font-mono text-[10px] text-[#BDB9B1] tracking-[0.12em] uppercase mb-3">
              Contact
            </p>
            <h2 className="font-serif text-[36px] md:text-[48px] text-[#1A1917] leading-[1.05] tracking-tight mb-5">
              Let&apos;s talk.
            </h2>
            <p className="text-[14px] text-[#6E6B62] leading-[1.9] mb-8 max-w-[340px]">
              Always building, always recruiting. Open for conversations about
              AI-native talent infrastructure, autonomous sourcing, or just
              talking agents.
            </p>
            <a
              href="mailto:johnle_10@hotmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1917] text-[#FAFAF7] text-[13px] font-medium rounded-full hover:bg-[#2E2E28] transition-colors"
            >
              Say hello
              <span className="text-[#FAFAF7]/40">→</span>
            </a>
          </motion.div>

          {/* Right: Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="pt-0 md:pt-14"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-5 border-b border-[#E8E3D6] hover:border-[#C4BFB5] transition-colors"
              >
                <div>
                  <div className="text-[13px] text-[#6E6B62] group-hover:text-[#1A1917] transition-colors font-mono">
                    {link.label}
                  </div>
                  <div className="text-[11px] text-[#BDB9B1] mt-0.5">{link.sub}</div>
                </div>
                <motion.span
                  className="text-[#BDB9B1] group-hover:text-[#3D6B1A] transition-colors"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.15 }}
                >
                  ↗
                </motion.span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
