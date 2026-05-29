import { FadeIn } from './FadeIn';
import { Mail, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="relative h-auto bg-bg-dark flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-10 sm:py-16 overflow-hidden border-t border-[rgba(215,226,234,0.1)]">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12 sm:gap-16 z-10">
        <FadeIn y={20} className="text-center">
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] md:text-7xl font-bold uppercase tracking-wider mb-4">
            Contact <span className="text-[#D7E2EA]">Us</span>
          </h2>
          <p className="text-[#D7E2EA] font-light tracking-wide max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Ready to start your next project? Let's talk about how we can help you achieve your goals.
          </p>
        </FadeIn>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full max-w-3xl justify-center">
          <FadeIn delay={0.2} y={20} className="w-full sm:w-[50%]">
            <a 
              href="mailto:veltrix.website@gmail.com"
              className="flex flex-col items-center justify-center gap-4 p-8 rounded-[32px] border border-white/10 bg-[rgba(255,255,255,0.02)] backdrop-blur-md hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-lg uppercase tracking-wider mb-2">Email Us</h3>
                <p className="text-[#D7E2EA] font-light text-sm break-all">veltrix.website@gmail.com</p>
              </div>
              <span className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-colors duration-300">
                Send Email
              </span>
            </a>
          </FadeIn>

          <FadeIn delay={0.4} y={20} className="w-full sm:w-[50%]">
            <a 
              href="tel:+918147486632"
              className="flex flex-col items-center justify-center gap-4 p-8 rounded-[32px] border border-white/10 bg-[rgba(255,255,255,0.02)] backdrop-blur-md hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-lg uppercase tracking-wider mb-2">Call Us</h3>
                <p className="text-[#D7E2EA] font-light text-sm">+91 8147486632</p>
              </div>
              <span className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-colors duration-300">
                Call Now
              </span>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
