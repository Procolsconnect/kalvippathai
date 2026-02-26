import { motion } from "framer-motion";
import {
  Monitor, Globe, Briefcase, BarChart3, Microscope, Dna, Calculator, Scissors,
  BookOpen, BookMarked, HardDrive, Bot, GraduationCap, Target,
  Calendar, Armchair, Crosshair
} from "lucide-react";
import courseCs from "@/assets/course-cs.jpg";
import courseCommerce from "@/assets/course-commerce.jpg";
import courseScience from "@/assets/course-science.jpg";
import courseFashion from "@/assets/course-fashion.jpg";
import courseMath from "@/assets/course-math.jpg";
import courseEnglish from "@/assets/course-english.jpg";

interface Course {
  title: string;
  icon: React.ElementType;
  image: string;
  duration: string;
  seats: string;
  eligibility: string;
  tags: string[];
}

const ugCourses: Course[] = [
  { title: "B.Sc Computer Science", icon: Monitor, image: courseCs, duration: "3 Years", seats: "60", eligibility: "12th Any Stream", tags: ["Programming", "AI & ML", "Web Development", "100% Placement"] },
  { title: "B.Sc Information Technology", icon: Globe, image: courseCs, duration: "3 Years", seats: "60", eligibility: "12th with Maths", tags: ["Networks", "Cloud Computing", "Cybersecurity", "Industry Ready"] },
  { title: "B.Com", icon: Briefcase, image: courseCommerce, duration: "3 Years", seats: "100", eligibility: "12th Any Stream", tags: ["Accounting", "Finance", "Taxation", "Banking Jobs"] },
  { title: "BBA - Business Administration", icon: BarChart3, image: courseCommerce, duration: "3 Years", seats: "60", eligibility: "12th Any Stream", tags: ["Management", "Marketing", "HR", "Entrepreneurship"] },
  { title: "B.Sc Microbiology", icon: Microscope, image: courseScience, duration: "3 Years", seats: "40", eligibility: "12th Bio Science", tags: ["Lab Work", "Research", "Pharma Industry", "Hospital Jobs"] },
  { title: "B.Sc Biochemistry", icon: Dna, image: courseScience, duration: "3 Years", seats: "40", eligibility: "12th Bio Science", tags: ["Molecular Biology", "Genetics", "Lab Skills", "Research Career"] },
  { title: "B.Sc Mathematics", icon: Calculator, image: courseMath, duration: "3 Years", seats: "40", eligibility: "12th with Maths", tags: ["Pure Math", "Statistics", "Data Science", "Teaching Career"] },
  { title: "B.Sc Costume Design & Fashion", icon: Scissors, image: courseFashion, duration: "3 Years", seats: "30", eligibility: "12th Any Stream", tags: ["Design Skills", "Textiles", "Fashion Industry", "Creative Career"] },
  { title: "B.Com (Computer Applications)", icon: Monitor, image: courseCommerce, duration: "3 Years", seats: "60", eligibility: "12th Any Stream", tags: ["Tally", "MS Office", "Accounting Software", "IT + Commerce"] },
  { title: "BA English", icon: BookOpen, image: courseEnglish, duration: "3 Years", seats: "40", eligibility: "12th Any Stream", tags: ["Literature", "Communication", "Content Writing", "Teaching"] },
  { title: "BA Tamil", icon: BookMarked, image: courseEnglish, duration: "3 Years", seats: "30", eligibility: "12th Any Stream", tags: ["Tamil Literature", "Language Skills", "Translation", "Govt Jobs"] },
  { title: "BCA", icon: HardDrive, image: courseCs, duration: "3 Years", seats: "60", eligibility: "12th with Maths", tags: ["Programming Languages", "Database Management", "Software Development", "IT Career Path"] },
  { title: "B.Sc (CS) AI & Data Science", icon: Bot, image: courseCs, duration: "3 Years", seats: "60", eligibility: "12th with Maths", tags: ["Artificial Intelligence", "Data Science", "Machine Learning", "Future Tech"] },
];

const pgCourses: Course[] = [
  { title: "M.Sc Computer Science", icon: Monitor, image: courseCs, duration: "2 Years", seats: "30", eligibility: "B.Sc CS/IT", tags: ["Advanced Programming", "Research", "AI/ML Specialization", "High Salary"] },
  { title: "M.Sc Information Technology", icon: Globe, image: courseCs, duration: "2 Years", seats: "30", eligibility: "B.Sc CS/IT", tags: ["Cloud & DevOps", "Big Data", "IoT", "MNC Jobs"] },
  { title: "M.Com", icon: Briefcase, image: courseCommerce, duration: "2 Years", seats: "40", eligibility: "B.Com/BBA", tags: ["Advanced Accounting", "Finance", "CA Pathway", "Banking Career"] },
  { title: "MBA", icon: BarChart3, image: courseCommerce, duration: "2 Years", seats: "40", eligibility: "Any Graduate", tags: ["Leadership", "Strategy", "Marketing/HR/Finance", "Manager Role"] },
  { title: "M.Sc Microbiology", icon: Microscope, image: courseScience, duration: "2 Years", seats: "20", eligibility: "B.Sc Microbiology", tags: ["Advanced Research", "Industry Expert", "Pharma", "PhD Pathway"] },
  { title: "M.Sc Biochemistry", icon: Dna, image: courseScience, duration: "2 Years", seats: "20", eligibility: "B.Sc Biochemistry", tags: ["Research", "Drug Development", "Lab Director", "Academic Career"] },
  { title: "MA English", icon: BookOpen, image: courseEnglish, duration: "2 Years", seats: "30", eligibility: "BA English", tags: ["Literature", "Teaching", "Content Strategy", "Research"] },
];

const phdCourses: Course[] = [
  { title: "Ph.D Biochemistry", icon: Dna, image: courseScience, duration: "3-5 Years", seats: "FT/PT", eligibility: "M.Sc Biochemistry", tags: ["Original Research", "Publications", "Expert Faculty", "Bharathiar University"] },
  { title: "Ph.D Commerce", icon: Briefcase, image: courseCommerce, duration: "3-5 Years", seats: "FT/PT", eligibility: "M.Com/MBA", tags: ["Business Research", "Publications", "Expert Faculty", "Bharathiar University"] },
  { title: "Ph.D Computer Science", icon: Monitor, image: courseCs, duration: "3-5 Years", seats: "FT/PT", eligibility: "M.Sc CS/IT", tags: ["Tech Research", "Publications", "Expert Faculty", "Bharathiar University"] },
];

const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  const Icon = course.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-card rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all group"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
          <Icon className="w-16 h-16 text-secondary" strokeWidth={1} />
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-lg font-display text-primary mb-3">{course.title}</h4>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
            <Calendar className="w-4 h-4 text-secondary" strokeWidth={1.5} />
            <span>Duration: {course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
            <Armchair className="w-4 h-4 text-secondary" strokeWidth={1.5} />
            <span>Seats: {course.seats}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
            <Crosshair className="w-4 h-4 text-secondary" strokeWidth={1.5} />
            <span>Eligibility: {course.eligibility}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {course.tags.map((tag) => (
            <span key={tag} className="bg-muted px-3 py-1 rounded-full text-xs font-semibold font-body text-foreground">{tag}</span>
          ))}
        </div>
        <a
          href="#apply"
          className="block w-full text-center gradient-gold text-secondary-foreground py-3 rounded-lg font-bold font-body transition-all hover:shadow-md"
        >
          Apply Now
        </a>
      </div>
    </motion.div>
  );
};

const CategoryHeader = ({ icon: Icon, title, badge }: { icon: React.ElementType; title: string; badge: string }) => (
  <div className="gradient-primary text-primary-foreground p-6 lg:p-8 rounded-2xl mb-8 flex flex-wrap justify-between items-center gap-4">
    <h3 className="text-2xl lg:text-4xl font-display flex items-center gap-3">
      <Icon className="w-8 h-8 text-secondary" strokeWidth={1.5} />
      {title}
    </h3>
    <span className="bg-secondary text-secondary-foreground px-5 py-2 rounded-full text-sm font-bold font-body">{badge}</span>
  </div>
);

const CoursesSection = () => (
  <section className="py-20 px-5 bg-card overflow-x-hidden" id="courses">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 font-body">Admission 2027 Open</p>
      <h2 className="text-3xl lg:text-5xl text-primary mb-5 font-display">12 UG Programs + 7 PG Programs + 3 Ph.D Courses</h2>
      <p className="text-lg text-muted-foreground font-body">Best Arts and Science College in Erode offering industry-focused programs with 84% placement record</p>
    </div>

    <div className="max-w-[1400px] mx-auto">
      <div className="mb-20">
        <CategoryHeader icon={GraduationCap} title="Undergraduate Programs (UG)" badge="3 Years" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {ugCourses.map((c, i) => <CourseCard key={c.title} course={c} index={i} />)}
        </div>
      </div>

      <div className="mb-20">
        <CategoryHeader icon={Target} title="Postgraduate Programs (PG)" badge="2 Years" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {pgCourses.map((c, i) => <CourseCard key={c.title} course={c} index={i} />)}
        </div>
      </div>

      <div>
        <CategoryHeader icon={BookOpen} title="Research Programs (Ph.D)" badge="3-5 Years" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {phdCourses.map((c, i) => <CourseCard key={c.title} course={c} index={i} />)}
        </div>
      </div>
    </div>
  </section>
);

export default CoursesSection;
