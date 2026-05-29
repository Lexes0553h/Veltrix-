import { FadeIn } from './FadeIn';
import { CheckCircle2, ChevronRight, Crown, Sparkles, Zap } from 'lucide-react';

const PACKAGES = [
  {
    name: "Starter Launch",
    icon: Sparkles,
    price: "₹7,000 - ₹15,000",
    features: [
      "1–3 fully responsive web pages (Desktop, Tablet, and Mobile optimised)",
      "Modern, clean layout with smooth entrance animations (fades & transitions)",
      "Fully functional contact / enquiry form linked directly to your email",
      "Social media profile integration"
    ],
    support: {
      title: "■ Ongoing Support Asset",
      details: "Optional Maintenance: Rs. 1,000 / month — basic text edits, image swaps, and link health checks"
    }
  },
  {
    name: "Growth Pro",
    icon: Zap,
    price: "₹20,000 - ₹35,000",
    featured: true,
    features: [
      "5–8 fully custom-styled web pages",
      "User authentication — secure signup / login portals",
      "Live Database Connectivity: dynamic content, real-time data rendering, interactive charts & tracking tables",
      "Light 3D / Micro-Interactions: scroll effects or cursor-responsive micro-animations",
      "Structural SEO setup (meta tags, fast-loading image optimisation)"
    ],
    support: {
      title: "■ Ongoing Support Asset",
      details: "Optional Maintenance: Rs. 2,500 / month — database backups, monthly security checks, UI updates (up to 4 hrs)"
    }
  },
  {
    name: "Elite Scale",
    icon: Crown,
    price: "₹35,000 - ₹70,000",
    features: [
      "Full-scale web application with custom structural routing",
      "Immersive 3D Graphics: Three.js rendering with mouse drag, zoom, and scroll mechanics",
      "Advanced Backend Architecture: multi-layered databases, complex state handling, admin panels",
      "Seamless API integrations (payment gateways, external services, live data feeds)",
      "Deep performance testing & high-speed optimisation across all devices"
    ],
    support: {
      title: "■ Ongoing Support Asset",
      details: "Optional Maintenance: Rs. 5,000 – Rs. 6,000 / month — cloud monitoring, weekly encrypted backups, priority debugging, feature updates (up to 8 hrs)"
    }
  }
];

export function PricingSection() {
  return (
    <section id="price" className="relative bg-bg-dark flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10 sm:py-16 overflow-hidden border-t border-[rgba(215,226,234,0.05)] z-40">
      <FadeIn y={20} className="w-full text-center mb-10 md:mb-12">
        <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,5rem)] leading-none tracking-tight">
          Pricing <span className="text-[#D7E2EA] opacity-60">Plans</span>
        </h2>
        <p className="mt-6 text-[#D7E2EA] font-light tracking-wide max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
          Transparent, value-driven packages designed to scale with your ambition.
        </p>
      </FadeIn>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
        {PACKAGES.map((pkg, idx) => (
          <FadeIn key={pkg.name} delay={idx * 0.1} y={30} className="h-full">
            <div className={`relative flex flex-col h-full rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 transition-all duration-300 ${pkg.featured ? 'bg-white/5 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)]' : 'bg-[rgba(255,255,255,0.02)] border border-[rgba(215,226,234,0.1)] hover:bg-[rgba(255,255,255,0.04)]'}`}>
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#D7E2EA] text-bg-dark text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${pkg.featured ? 'bg-white text-bg-dark' : 'bg-white/10 text-white'}`}>
                  <pkg.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl sm:text-2xl uppercase tracking-wider">{pkg.name}</h3>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black text-[#D7E2EA] tracking-tighter">
                  {pkg.price}
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-6">
                <ul className="flex flex-col gap-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 opacity-70 text-[#D7E2EA]" />
                      <span className="font-light leading-relaxed opacity-80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-white/10">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-90">
                    {pkg.support.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-light leading-relaxed opacity-60">
                    {pkg.support.details}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
