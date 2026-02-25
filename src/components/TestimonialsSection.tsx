import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "BCAS gave me the perfect platform to build my career. The faculty support and placement training helped me secure a job at TCS with an excellent package. Forever grateful!",
    name: "Devika D",
    role: "M.Sc Biochemistry - 3rd Rank",
    initial: "D",
  },
  {
    text: "The practical exposure and industry-oriented curriculum at BCAS prepared me exceptionally well for my career. The college truly cares about student success.",
    name: "R. Keerthana",
    role: "B.Sc Microbiology - 1st Rank",
    initial: "R",
  },
  {
    text: "BCAS has excellent infrastructure and supportive faculty. The skills I learned here helped me get placed in a top IT company. Highly recommend for aspiring students!",
    name: "Sowmiya G",
    role: "B.Sc IT - Placed at Zoho",
    initial: "S",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 px-5 gradient-primary">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 font-body">Student Success Stories</p>
      <h2 className="text-3xl lg:text-5xl text-primary-foreground mb-5 font-display">What Our Students Say</h2>
      <p className="text-primary-foreground/90 text-lg font-body">Hear from our successful alumni and current students</p>
    </div>

    <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/20"
        >
          <Quote className="w-8 h-8 text-secondary mb-4" strokeWidth={1.5} />
          <p className="text-primary-foreground leading-relaxed mb-6 italic font-body">{t.text}</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg font-display">
              {t.initial}
            </div>
            <div>
              <h4 className="text-primary-foreground font-display text-lg">{t.name}</h4>
              <p className="text-primary-foreground/80 text-sm font-body">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
