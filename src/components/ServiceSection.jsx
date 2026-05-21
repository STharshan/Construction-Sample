import {
  ArrowUpRight,
  Building2,
  ClipboardList,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Traditional Tube & Fit Scaffolding",
    description:
      "Standard scaffolding for various commercial, domestic, and industrial construction needs.",
    icon: Building2,
    image: "/8.jpg",
  },
  {
    title: "Full Supply, Erection & Dismantling",
    description:
      "We handle all stages of scaffolding work, from initial supply through to safe dismantling.",
    icon: Wrench,
    image: "/8.jpg",
  },
  {
    title: "Projects of Any Size",
    description:
      "From small domestic towers to large-scale high-rise commercial buildings.",
    icon: ClipboardList,
    image: "/8.jpg",
  },
  {
    title: "Plettac System Scaffolding",
    description:
      "Modular system scaffolding suitable for complex or high-rise projects.",
    icon: PanelsTopLeft,
    image: "/8.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="app-section bg-gray-50 py-16" id="services">
      <div className="app-container">
        {/* TOP */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1 text-[11px] font-medium text-blue-600 shadow-sm">
            ● Our Services
          </div>

          <h2 className="mx-auto max-w-[760px] text-[34px] font-bold leading-[1.1] tracking-[-1px] text-gray-900 md:text-[48px]">
            Reliable scaffolding services for every project
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-[24px] bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                {/* BOTTOM-TO-TOP SLIDING BACKGROUND IMAGE OVERLAY */}
                <div className="absolute inset-0 z-0 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  {/* Dark overlay to keep text readable */}
                  <div className="absolute inset-0 bg-[#0B1224]/75 blend-multiply" />
                  <img
                    src={service.image}
                    alt={`${service.title} by Empire Scaffolding (GB) Ltd`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* CARD CONTENT INNER WRAPPER */}
                <div className="relative z-10 flex flex-1 flex-col justify-between">
                  {/* TOP CONTENT: ICON + TEXT */}
                  <div>
                    {/* ICON CONTAINER */}
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 ease-out group-hover:bg-[#CCFF00] group-hover:text-gray-900">
                      <Icon size={24} />
                    </div>

                    {/* TITLE */}
                    <h3 className="mb-3 text-[22px] font-bold leading-tight text-gray-900 transition-colors duration-500 group-hover:text-white">
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-[14px] leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-gray-200">
                      {service.description}
                    </p>
                  </div>

                  {/* BOTTOM CONTENT: ACTION BUTTON */}
                  <div className="mt-8 pt-4">
                    <button className="inline-flex items-center gap-3 text-sm font-bold text-gray-900 transition-colors duration-500 group-hover:text-white">
                      Learn More
                      {/* ARROW CIRCLE */}
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 ease-out group-hover:bg-[#CCFF00] group-hover:text-gray-900">
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

        {/* BOTTOM REVIEW */}
        <div className="mt-14 flex flex-col items-center justify-center gap-5 text-center">
          <div className="flex items-center gap-3">
            {/* AVATARS */}
            <div className="flex -space-x-3">
              <img
                src="/nhs.png"
                alt="NHS Nottingham University Hospitals logo"
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="/nottingham.png"
                alt="Nottingham City Council logo"
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="/university.png"
                alt="University of Nottingham logo"
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
            </div>

            <p className="max-w-[540px] text-sm text-gray-600">
              Commercial, domestic, and industrial scaffolding across the UK -{" "}
              <span className="font-semibold text-gray-900 underline underline-offset-4">
                View All Services
              </span>
            </p>
          </div>

          {/* RATING */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-gray-900">
            <span className="text-[20px]">5.0/5</span>
            <div className="flex items-center gap-1 text-blue-600">
              ★ ★ ★ ★ ★
            </div>
            <span>Based on Customer Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}