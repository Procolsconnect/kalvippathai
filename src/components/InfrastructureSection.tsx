import { motion } from "framer-motion";
import {
  BookOpen, Monitor, Microscope, Dna, Scissors, Home, CircleDot, Gamepad2,
  Tv, Drama, PartyPopper, Leaf, Sun, Flower2, Trees, FlaskConical,
  Library, Smartphone, MonitorPlay, Salad, Recycle, Dumbbell, Users,
  Music, HeartPulse, Trophy as TrophyIcon, Dribbble, Warehouse, Bed, ShieldCheck, Utensils
} from "lucide-react";
import campusImg from "@/assets/campus-infrastructure.jpg";

const infrastructure = [
  { icon: BookOpen, title: "Library", desc: "Extensive collection of books, journals, and digital resources with comfortable study spaces" },
  { icon: Monitor, title: "Computer Lab", desc: "State-of-the-art computer labs with latest hardware and licensed software" },
  { icon: Microscope, title: "Microbiology Lab", desc: "Well-equipped microbiology laboratory with advanced research equipment" },
  { icon: Dna, title: "Biochemistry Lab", desc: "Modern biochemistry lab with latest instruments for practical learning" },
  { icon: Scissors, title: "Costume Design & Fashion Lab", desc: "Fully equipped fashion design studio with latest tools and technology" },
  { icon: Home, title: "Hostel", desc: "Separate boys and girls hostels with comfortable rooms and nutritious meals" },
  { icon: CircleDot, title: "Basketball Court", desc: "Professional-grade basketball court for sports and physical fitness" },
  { icon: Gamepad2, title: "Playground", desc: "Spacious playground for various outdoor sports and activities" },
  { icon: Tv, title: "Digital Classroom", desc: "Smart classrooms equipped with projectors and interactive learning tools" },
  { icon: Drama, title: "Club Activities", desc: "Active clubs for cultural, technical, and social activities" },
  { icon: PartyPopper, title: "Cultural Fest", desc: "Regular cultural events and festivals celebrating talent and diversity" },
  { icon: Leaf, title: "Eco-Friendly Campus", desc: "Green campus with solar power, medicinal garden, mushroom cultivation & more" },
];

const featureColumns = [
  { icon: Trees, title: "Eco-Friendly Horizon", items: ["Solar Powered Campus", "Medicinal Garden", "Greenery Life"] },
  { icon: FlaskConical, title: "Infrastructure", items: ["State-of-the-Art Laboratories", "Library Study Resources", "Digital Access", "Digital Classrooms"] },
  { icon: Salad, title: "Best Practices", items: ["Mushroom Cultivation", "Azolla Cultivation", "Vermi Compost Plant", "Waste Segregation Management"] },
  { icon: Bed, title: "Hostel", items: ["Where Memories are Made", "Spacious Rooms", "Hygienic and Nutritious Meals", "Safe and Secured"] },
  { icon: Dumbbell, title: "Campus Life", items: ["Clubs and Forums", "Value Added Courses", "Dance and Meditation", "Fitness"] },
  { icon: TrophyIcon, title: "Play - Complete - Excel", items: ["Expert Sports Training", "Cricket and Football Ground", "Basket Ball Court, Etc."] },
];

const InfrastructureSection = () => (
  <section className="py-20 px-5 bg-card overflow-hidden">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-gold font-bold text-sm tracking-widest uppercase mb-4 font-body">World-Class Facilities</p>
      <h2 className="text-3xl lg:text-5xl text-primary mb-5 font-display">Campus Infrastructure</h2>
      <p className="text-lg text-muted-foreground font-body">Modern facilities designed to provide the best learning environment</p>
    </div>

    <div className="max-w-[1400px] mx-auto mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {infrastructure.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-muted p-7 rounded-2xl text-center hover:-translate-y-2 hover:border-secondary border-2 border-transparent hover:shadow-lg hover:bg-card transition-all relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                <img src={campusImg} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h4 className="text-lg text-primary mb-2 font-display">{item.title}</h4>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

    <div className="max-w-[1400px] mx-auto gradient-primary rounded-2xl p-8 lg:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-primary-foreground">
      {featureColumns.map((col) => {
        const Icon = col.icon;
        return (
          <div key={col.title}>
            <h4 className="text-lg font-display text-primary-foreground mb-4 flex items-center gap-2">
              <Icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.items.map((item) => (
                <li key={item} className="text-sm font-body opacity-90 flex items-start gap-2">
                  <span className="text-secondary font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </section>
);

export default InfrastructureSection;
