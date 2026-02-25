import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-20 px-5 gradient-gold text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-3xl lg:text-5xl text-secondary-foreground mb-5 font-display">Ready to Start Your Journey?</h2>
      <p className="text-xl text-secondary-foreground/85 mb-10 font-body">
        Join Bharathidasan College (Autonomous) or Shree Venkateshwara Institute and transform your career aspirations into reality
      </p>
      <div className="flex flex-wrap gap-5 justify-center">
        <a
          href="#apply"
          className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-base font-body hover:-translate-y-1 hover:shadow-xl transition-all"
        >
          Apply Now for 2025-26
        </a>
        <a
          href="tel:+91 99523 17770"
          className="border-2 border-primary text-primary px-10 py-4 rounded-full font-bold text-base font-body hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-2"
        >
          <Phone className="w-5 h-5" strokeWidth={1.5} />
          Call:  99523 17770
        </a>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
