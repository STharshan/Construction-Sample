import {
  ArrowUpRight,
  Building2,
  ClipboardList,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";
import { siteConfig } from "../global";

const iconMap = {
  building: Building2,
  wrench: Wrench,
  clipboard: ClipboardList,
  panels: PanelsTopLeft,
};

export default function ServicesSection() {
  const { branding, services } = siteConfig;

  return (
    <section
      className="app-section py-16"
      id="services"
      style={{ backgroundColor: "var(--theme-surface-soft)" }}
    >
      <div className="app-container">
        <div className="mb-14 text-center">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-[11px] font-medium shadow-sm"
            style={{ color: "var(--theme-primary)" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />
            <span>{services.badge}</span>
          </div>

          <h2
            className="mx-auto max-w-[760px] text-[34px] font-bold leading-[1.1] tracking-[-1px] md:text-[48px]"
            style={{ color: "var(--theme-heading)" }}
          >
            {services.heading}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.cards.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <div
                key={index}
                className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-[24px] bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute inset-0 z-0 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <div
                    className="absolute inset-0 blend-multiply"
                    style={{ backgroundColor: "rgba(5, 8, 22, 0.78)" }}
                  />
                  <img
                    src={service.image}
                    alt={`${service.title} by ${branding.companyName}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="relative z-10 flex flex-1 flex-col justify-between">
                  <div>
                    <div
                      className="mb-8 flex h-14 w-14 items-center hover:bg-var(--theme-accent) justify-center rounded-full transition-all duration-500 ease-out group-hover:text-gray-900"
                      style={{
                        backgroundColor: "var(--theme-accent)",
                        color: "var(--theme-heading)",
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    <h3
                      className="mb-3 text-[22px] font-bold leading-tight transition-colors duration-500 group-hover:text-white"
                      style={{ color: "var(--theme-heading)" }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="text-[14px] leading-relaxed transition-colors duration-500 group-hover:text-gray-200"
                      style={{ color: "var(--theme-text-muted)" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4">
                    <button
                      className="inline-flex items-center gap-3 text-sm font-bold transition-colors duration-500 group-hover:text-white"
                      style={{ color: "var(--theme-heading)" }}
                    >
                      {services.ctaLabel}
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-500 ease-out group-hover:text-gray-900"
                        style={{
                          backgroundColor: "var(--theme-accent)",
                          color: "var(--theme-heading)",
                        }}
                      >
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-500 ease-out group-hover:rotate-45"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-5 text-center">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {services.clients.map((client) => (
                <img
                  key={client.alt}
                  src={client.image}
                  alt={client.alt}
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                  loading="lazy"
                />
              ))}
            </div>

            <p
              className="max-w-[540px] text-sm"
              style={{ color: "var(--theme-text-muted)" }}
            >
              {services.summary} -{" "}
              <span
                className="font-semibold underline underline-offset-4"
                style={{ color: "var(--theme-heading)" }}
              >
                {services.summaryLinkLabel}
              </span>
            </p>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold"
            style={{ color: "var(--theme-heading)" }}
          >
            <span className="text-[20px]">{services.rating.value}</span>
            <div
              className="flex items-center gap-1"
              style={{ color: "var(--theme-accent-strong)" }}
            >
              {Array.from({ length: services.rating.stars }).map((_, index) => (
                <span key={index}>★</span>
              ))}
            </div>
            <span>{services.rating.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
