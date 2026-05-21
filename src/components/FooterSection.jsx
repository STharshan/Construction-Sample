import { FaFacebookF, FaInstagram } from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
];

export default function FooterSection() {
  return (
    <footer className="app-section bg-black py-16 text-white sm:py-20">
      <div className="app-container">
        <div className="grid gap-12 border-b border-white/12 pb-14 sm:grid-cols-2 xl:grid-cols-4 xl:gap-16">
          <div>
            <h2 className="max-w-[280px] text-[1.5rem] font-semibold uppercase leading-[1.2] tracking-[0.03em]">
              Hello, We Are AW Detailing
            </h2>
            <p className="mt-10 max-w-[320px] text-[1.05rem] leading-9 text-white/74">
              Our experienced technicians provide quality services for your car.
            </p>
          </div>

          <div>
            <h3 className="text-[1.5rem] font-semibold uppercase tracking-[0.03em]">
              Office
            </h3>
            <div className="mt-10 space-y-7 text-[1.05rem] text-white/78">
              <p>Yorkshire</p>
              <a
                href="mailto:office@-nottingham.co.uk"
                className="block transition-colors duration-200 hover:text-white"
              >
                office@-nottingham.co.uk
              </a>
              <a
                href="tel:07494397582"
                className="block text-[1.2rem] font-semibold tracking-tight text-white transition-colors duration-200 hover:text-white/80"
              >
                07494 397582
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[1.5rem] font-semibold uppercase tracking-[0.03em]">
              Links
            </h3>
            <nav className="mt-10 flex flex-col gap-6 text-[1.05rem] text-white/78">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[1.5rem] font-semibold uppercase tracking-[0.03em]">
              Get In Touch
            </h3>
            <div className="mt-10 flex flex-col gap-6">
              {socialLinks.map((link) => {
                const SocialIcon = link.icon;
                
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group inline-flex items-center gap-4 text-[1.05rem] text-white/78 transition-colors duration-200 hover:text-white"
                  >
                    <span className="flex items-center justify-center text-white/80 transition-colors duration-200 group-hover:text-white">
                      <SocialIcon size={20} />
                    </span>
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-white/72 sm:flex-row sm:items-center sm:justify-between">
          <p>AW Detailing (c) 2026. All rights reserved.</p>
          <p>Powered by Ansely</p>
        </div>
      </div>
    </footer>
  );
}