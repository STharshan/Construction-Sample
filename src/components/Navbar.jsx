import { useState } from "react";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const navLinks = [
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Recent Projects", href: "projects" },
    { label: "Why Choose Us", href: "why-choose-us" },
    { label: "Testimonials", href: "testimonials" },
    { label: "Contact", href: "contact" },
];

const Navbar = ({ overlay = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Handle phone call
    const handleCall = () => {
        console.log("Calling 0115 9641 600");
    };

    return (
        <header
            className={`app-section inset-x-0 z-50 w-full ${overlay ? "absolute top-4 sm:top-6" : "fixed top-4 left-0 sm:top-5"
                }`}
        >
            <div
                className={`app-container flex items-center justify-between ${overlay
                    ? "rounded-[1.4rem] border border-white/80 bg-white px-4 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.15)] sm:rounded-[2rem] sm:px-8 lg:rounded-[2.6rem] lg:px-10"
                    : "rounded-full border border-slate-200/80 bg-white/95 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.16)] backdrop-blur-md sm:px-7 lg:px-10"
                    }`}
            >
                <div className="flex items-center">
                    <HashLink smooth to="/#top" className="flex items-center">
                        <img
                            src="/Logo-bg.png"
                            alt="Empire Scaffolding Logo"
                            className="h-11 w-auto object-contain sm:h-12 lg:h-14"
                        />
                    </HashLink>
                </div>

                <nav
                    className={`hidden items-center text-[1.05rem] font-medium xl:flex ${overlay ? "gap-10 text-slate-700" : "gap-8 text-slate-900"
                        }`}
                >
                    {navLinks.map((link) => (
                        <HashLink
                            key={link.href}
                            smooth
                            to={`/#${link.href}`}
                            scroll={(el) => {
                                const yOffset = -80; // height of your fixed navbar
                                const y =
                                    el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: y, behavior: "smooth" });
                                setIsOpen(false); // close mobile menu
                            }}
                            className="transition hover:text-blue-600"
                        >
                            {link.label}
                        </HashLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-6 xl:flex">
                    <a
                        href="mailto:Shay@empirescaffolding.co.uk"
                        className={`group inline-flex items-center gap-3 rounded-full bg-[#0B1224] font-semibold text-white transition hover:bg-blue-800 ${overlay ? "px-6 py-3 text-sm lg:px-8 lg:text-base" : "px-6 py-3"
                            }`}
                    >
                        Get a Free Quote
                        <ArrowUpRight className="btn-arrow h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                    </a>
                </div>

                <button
                    className={`xl:hidden ${overlay ? "text-slate-900" : "text-slate-900"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {isOpen && (
                <div
                    className={`app-container mt-3 flex flex-col gap-4 bg-white px-6 text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.14)] xl:hidden ${overlay
                        ? "rounded-[2rem] border border-slate-200 py-6 text-base"
                        : "items-center rounded-[2rem] border border-slate-200 py-6 text-lg"
                        }`}
                >
                    {navLinks.map((link) => (
                        <HashLink
                            key={link.href}
                            smooth
                            to={`/#${link.href}`}
                            scroll={(el) => {
                                const yOffset = -80; // height of your fixed navbar
                                const y =
                                    el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: y, behavior: "smooth" });
                                setIsOpen(false); // close mobile menu
                            }}
                            className={`font-medium transition hover:text-blue-600 ${overlay ? "text-slate-700" : ""
                                }`}
                        >
                            {link.label}
                        </HashLink>
                    ))}
                    <a
                        href="mailto:Shay@empirescaffolding.co.uk"
                        className={`group inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1224] font-semibold text-white transition hover:bg-blue-800 ${overlay
                                ? "mt-2 w-full py-3 text-sm"
                                : "px-5 py-3"
                            }`}
                    >
                        Get a Free Quote
                        <ArrowUpRight className="btn-arrow h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
