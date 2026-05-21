import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaPinterestP, FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const socialLinks = [
    {
        label: "Pinterest",
        href: "https://pinterest.com",
        icon: FaPinterestP,
    },
    {
        label: "X",
        href: "https://x.com",
        icon: FaXTwitter,
    },
    {
        label: "Facebook",
        href: "https://facebook.com",
        icon: FaFacebookF,
    },
    {
        label: "Instagram",
        href: "https://instagram.com",
        icon: FaInstagram,
    },
];

export default function ContactSection() {
    return (
        <section className="app-section bg-[#f5f4f1] py-16 sm:py-20" id="contact">
            <div className="app-container">
                <div className="grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:gap-12">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#d5ff32]" />
                                <span>Contact Us</span>
                            </div>

                            <h2 className="mt-8 max-w-[620px] text-[2.7rem] font-semibold leading-[0.98] tracking-tight text-slate-950 sm:text-[3.2rem]">
                                We&apos;re ready to build
                                <span className="mt-3 block font-light italic">
                                    your future together
                                </span>
                            </h2>

                            <p className="mt-8 max-w-[560px] text-lg leading-8 text-slate-600">
                                We partner with you to plan, design, and deliver high-quality
                                construction projects with transparency, expertise, and a
                                commitment to long-term value.
                            </p>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div className="flex flex-col">
                                <a
                                    href="mailto:info@domainname.com"
                                    className="inline-flex items-center text-[1.5rem] font-semibold tracking-tight text-slate-950 transition-colors duration-200 hover:text-slate-700"
                                >
                                    <span>info@domainname.com</span>
                                </a>

                                <a
                                    href="tel:+91123456789"
                                    className="mt-5 inline-flex items-center text-xl text-slate-950 transition-colors duration-200 hover:text-slate-700"
                                >
                                    <span>+91 12345 6789</span>
                                </a>
                            </div>

                            <div className="border-y border-slate-200 py-8">
                                <p className="text-[2rem] font-semibold tracking-tight text-slate-950">
                                    Address:
                                </p>
                                <div className=" inline-flex items-start gap-3 text-lg leading-8 text-slate-600">
                                    <span>123 Main Street, City Name, Office 201</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                {socialLinks.map((link) => {
                                    const IconComponent = link.icon;

                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            aria-label={link.label}
                                            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-transparent text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-950 hover:bg-white"
                                        >
                                            <IconComponent size={18} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[32px] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10 xl:p-14">
                        <form className="space-y-7">
                            <div className="grid gap-6 md:grid-cols-2">
                                <label className="block">
                                    <span className="mb-3 block text-lg font-semibold text-slate-950">
                                        First Name:
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Enter First Name*"
                                        className="h-15 w-full rounded-[20px] border border-transparent bg-[#f3f3f2] px-6 text-lg text-slate-950 outline-none transition focus:border-slate-300 focus:bg-white"
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-3 block text-lg font-semibold text-slate-950">
                                        Last Name:
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Enter Last Name"
                                        className="h-15 w-full rounded-[20px] border border-transparent bg-[#f3f3f2] px-6 text-lg text-slate-950 outline-none transition focus:border-slate-300 focus:bg-white"
                                    />
                                </label>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <label className="block">
                                    <span className="mb-3 block text-lg font-semibold text-slate-950">
                                        Email Address:
                                    </span>
                                    <input
                                        type="email"
                                        placeholder="Enter Email Address"
                                        className="h-15 w-full rounded-[20px] border border-transparent bg-[#f3f3f2] px-6 text-lg text-slate-950 outline-none transition focus:border-slate-300 focus:bg-white"
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-3 block text-lg font-semibold text-slate-950">
                                        Phone Number:
                                    </span>
                                    <input
                                        type="tel"
                                        placeholder="Enter Phone Number"
                                        className="h-15 w-full rounded-[20px] border border-transparent bg-[#f3f3f2] px-6 text-lg text-slate-950 outline-none transition focus:border-slate-300 focus:bg-white"
                                    />
                                </label>
                            </div>

                            <label className="block">
                                <span className="mb-3 block text-lg font-semibold text-slate-950">
                                    Message:
                                </span>
                                <textarea
                                    rows="2"
                                    placeholder="Any Additional Message..."
                                    className="w-full resize-none rounded-[20px] border border-transparent bg-[#f3f3f2] px-6 py-6 text-lg text-slate-950 outline-none transition focus:border-slate-300 focus:bg-white"
                                />
                            </label>

                            <button
                                type="submit"
                                className="inline-flex items-center gap-3 rounded-full bg-[#070b1f] px-8 py-5 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900"
                            >
                                <span>Send Message</span>
                                <Send className="h-5 w-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}