import { motion } from "framer-motion";
import { Trophy, Building2, Briefcase, Star, Target, Palette } from "lucide-react";
import campusImg from "@/assets/campus-infrastructure.jpg";

const features = [
  {
    icon: Trophy,
    title: "Academic Excellence",
    desc: "Top-ranked faculty with industry experience, modern curriculum aligned with market demands, and 159 university rank holders.",
  },
  {
    icon: Building2,
    title: "State-of-the-Art Infrastructure",
    desc: "Advanced computer labs, well-equipped science laboratories, extensive library with digital resources, and comfortable hostel facilities.",
  },
  {
    icon: Briefcase,
    title: "84% Placement Record",
    desc: "Dedicated placement cell, regular campus drives from top companies, interview preparation, and industry internships with ₹8.3 LPA highest package.",
  },
  {
    icon: Star,
    title: "Skill Development Programs",
    desc: "Soft skills training, technical workshops, personality development sessions, and competitive exam coaching.",
  },
  {
    icon: Target,
    title: "Industry Collaboration",
    desc: "Partnerships with leading companies, guest lectures from industry experts, live projects, and industrial visits.",
  },
  {
    icon: Palette,
    title: "Holistic Development",
    desc: "Sports facilities, cultural activities, NSS & YRC programs, entrepreneurship cell, and leadership opportunities.",
  },
];

const FeaturesSection = () => (
  <section className="py-20 px-5 bg-muted overflow-x-hidden" id="about">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-secondary-foreground font-bold text-sm tracking-widest uppercase mb-4 font-body text-gold">Why Choose Us</p>
      <h2 className="text-3xl lg:text-5xl text-primary mb-5 font-display">Exceptional Learning Experience</h2>
      <p className="text-lg text-muted-foreground font-body">Discover what makes BCAS & SVIEG the preferred choice for higher education in Erode</p>
    </div>

    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((f, i) => {
        const Icon = f.icon;
        return (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card p-8 rounded-2xl text-center hover:-translate-y-2 transition-all relative overflow-hidden group"
          >
            {/* Transparent background image */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
              <img src={campusImg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl gradient-primary flex items-center justify-center">
                <Icon className="w-8 h-8 text-secondary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-primary mb-3 font-display">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body text-sm">{f.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default FeaturesSection;
