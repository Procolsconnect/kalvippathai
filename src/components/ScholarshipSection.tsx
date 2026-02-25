import { motion } from "framer-motion";
import { BookOpen, Medal, Sparkles } from "lucide-react";

const ScholarshipSection = () => (
  <section className="py-20 px-5 bg-gradient-to-br from-muted to-accent/10">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-gold font-bold text-sm tracking-widest uppercase mb-4 font-body">Financial Support</p>
      <h2 className="text-3xl lg:text-5xl text-primary mb-5 font-display">Talent Based Scholarship - Supporting Dreams</h2>
      <p className="text-lg text-muted-foreground font-body">We believe in rewarding merit and supporting sports excellence</p>
    </div>

    <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 mb-8">
      {/* Merit Based */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all"
      >
        <div className="gradient-primary text-primary-foreground p-6 text-center flex items-center justify-center gap-3">
          <BookOpen className="w-6 h-6 text-secondary" strokeWidth={1.5} />
          <h3 className="text-2xl font-display">Mark Based Fee Concession</h3>
        </div>
        <div className="p-6 space-y-0">
          {[
            { marks: "450 - 499 Marks", benefit: "10% for all semester", highlight: false },
            { marks: "500 - 549 Marks", benefit: "15% for all semester", highlight: false },
            { marks: "550 & above", benefit: "25% for all semester", highlight: true },
          ].map((row) => (
            <div
              key={row.marks}
              className={`grid grid-cols-2 gap-4 p-5 border-b border-border last:border-0 items-center transition-all hover:translate-x-1 ${
                row.highlight ? "bg-secondary/10 border-l-4 border-l-secondary font-bold" : ""
              }`}
            >
              <span className="text-primary font-semibold font-body">{row.marks}</span>
              <span className="text-gold font-bold text-right font-body text-lg">{row.benefit}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Sports Based */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all"
      >
        <div className="gradient-primary text-primary-foreground p-6 text-center flex items-center justify-center gap-3">
          <Medal className="w-6 h-6 text-secondary" strokeWidth={1.5} />
          <h3 className="text-2xl font-display">Sports Fee Concession</h3>
        </div>
        <div className="p-6 space-y-0">
          {[
            { marks: "Zonal & District Level", benefit: "10% for all semester", highlight: false },
            { marks: "State Level", benefit: "25% for all semester", highlight: false },
            { marks: "National Level", benefit: "50% for all semester", highlight: true },
          ].map((row) => (
            <div
              key={row.marks}
              className={`grid grid-cols-2 gap-4 p-5 border-b border-border last:border-0 items-center transition-all hover:translate-x-1 ${
                row.highlight ? "bg-secondary/10 border-l-4 border-l-secondary font-bold" : ""
              }`}
            >
              <span className="text-primary font-semibold font-body">{row.marks}</span>
              <span className="text-gold font-bold text-right font-body text-lg">{row.benefit}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    <div className="max-w-[1200px] mx-auto bg-card p-5 px-8 rounded-2xl border-l-4 border-l-success shadow-md">
      <p className="text-foreground font-body flex items-start gap-2">
        <Sparkles className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
        <span><strong>Note:</strong> Fee concessions are applicable from the first semester and continue throughout the course duration based on eligibility criteria.</span>
      </p>
    </div>
  </section>
);

export default ScholarshipSection;
