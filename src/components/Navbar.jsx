import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { siteConfig } from "../global";

const Navbar = ({ overlay = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { branding, navigation } = siteConfig;

  const linkMouseEnter = (event) => {
    event.currentTarget.style.color = "var(--theme-accent-strong)";
  };

  const linkMouseLeave = (event) => {
    event.currentTarget.style.color = "";
  };

  const buttonMouseEnter = (event) => {
    event.currentTarget.style.backgroundColor = "var(--theme-accent-strong)";
    event.currentTarget.style.color = "var(--theme-primary-strong)";
  };

  const buttonMouseLeave = (event) => {
    event.currentTarget.style.backgroundColor = "var(--theme-primary)";
    event.currentTarget.style.color = "#ffffff";
  };

  return (
    <header
      className={`app-section inset-x-0 z-50 w-full ${
        overlay ? "absolute top-4 sm:top-6" : "fixed top-4 left-0 sm:top-5"
      }`}
    >
      <div
        className={`app-container flex items-center justify-between ${
          overlay
            ? "rounded-[1.4rem] border px-4 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.15)] sm:rounded-4xl sm:px-8 lg:rounded-[2.6rem] lg:px-10"
            : "rounded-full border px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.16)] backdrop-blur-md sm:px-7 lg:px-10"
        }`}
        style={{
          backgroundColor: "var(--theme-page-bg)",
          borderColor: "var(--theme-border)",
        }}
      >
        <HashLink smooth to="/#top" className="flex items-center">
          <img
            src={branding.logo}
            alt={branding.logoAlt}
            className="h-11 w-auto object-contain sm:h-12 lg:h-14"
          />
        </HashLink>

        <nav
          className={`hidden items-center text-[1.05rem] font-medium xl:flex ${
            overlay ? "gap-10" : "gap-8"
          }`}
          style={{ color: "var(--theme-text)" }}
        >
          {navigation.links.map((link) => (
            <HashLink
              key={link.href}
              smooth
              to={`/#${link.href}`}
              scroll={(el) => {
                const yOffset = -80;
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                setIsOpen(false);
              }}
              className="transition-colors duration-200"
              onMouseEnter={linkMouseEnter}
              onMouseLeave={linkMouseLeave}
            >
              {link.label}
            </HashLink>
          ))}
        </nav>

        <div className="hidden items-center gap-6 xl:flex">
          <a
            href={branding.primaryCtaHref}
            className={`group inline-flex items-center gap-3 rounded-full font-semibold text-white transition-colors duration-200 ${
              overlay ? "px-6 py-3 text-sm lg:px-8 lg:text-base" : "px-6 py-3"
            }`}
            style={{ backgroundColor: "var(--theme-accent)" }}
            onMouseEnter={buttonMouseEnter}
            onMouseLeave={buttonMouseLeave}
          >
            {branding.primaryCtaLabel}
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </div>

        <button
          className="xl:hidden"
          style={{ color: "var(--theme-text)" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div
          className={`app-container mt-3 flex flex-col gap-4 px-6 shadow-[0_20px_60px_rgba(15,23,42,0.14)] xl:hidden ${
            overlay
              ? "rounded-4xl border py-6 text-base"
              : "items-center rounded-4xl border py-6 text-lg"
          }`}
          style={{
            backgroundColor: "var(--theme-surface)",
            color: "var(--theme-text)",
            borderColor: "var(--theme-border)",
          }}
        >
          {navigation.links.map((link) => (
            <HashLink
              key={link.href}
              smooth
              to={`/#${link.href}`}
              scroll={(el) => {
                const yOffset = -80;
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                setIsOpen(false);
              }}
              className="font-medium transition-colors duration-200"
              onMouseEnter={linkMouseEnter}
              onMouseLeave={linkMouseLeave}
            >
              {link.label}
            </HashLink>
          ))}
          <a
            href={branding.primaryCtaHref}
            className={`group inline-flex items-center justify-center gap-3 rounded-full font-semibold text-white transition-colors duration-200 ${
              overlay ? "mt-2 w-full py-3 text-sm" : "px-5 py-3"
            }`}
            style={{ backgroundColor: "var(--theme-accent)" }}
            onMouseEnter={buttonMouseEnter}
            onMouseLeave={buttonMouseLeave}
          >
            {branding.primaryCtaLabel}
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
