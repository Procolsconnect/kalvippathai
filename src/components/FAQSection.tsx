import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, GraduationCap, Briefcase, BadgeDollarSign, Home, FileText, CheckCircle, Trophy, Phone, ChevronDown } from "lucide-react";

const faqs = [
  {
    icon: ClipboardList,
    question: "When does Bharathidasan College & Shree Venkateshwara Institute admission 2025-26 start?",
    answer: `BCAS & SVIEG admission for 2025-26 academic year is now open. Applications are accepted from April to July 2025 or until seats are filled. We offer direct admission for all UG, PG and Ph.D programs at both Bharathidasan College (Autonomous) and Shree Venkateshwara Institute. Walk-in admission is also available. Contact us at +91 96005 81759 or +91 99523 17770 for immediate admission.`,
  },
  {
    icon: GraduationCap,
    question: "What courses are available at BCAS & SVIEG Erode?",
    answer: `12 UG Programs: B.Sc Computer Science, B.Sc CS with AI & Data Science, B.Sc IT, BCA, B.Com, B.Com CA, BBA, B.Sc Microbiology, B.Sc Biochemistry, B.Sc Mathematics, B.Sc Fashion Design, BA English.\n\n7 PG Programs: M.Sc CS, M.Sc IT, M.Com, M.Com CA, MBA, M.Sc Microbiology, M.Sc Biochemistry, MA English, M.Sc Mathematics, M.Sc Fashion Design.\n\n3 Ph.D Programs: Biochemistry, Commerce, Computer Science (Full Time & Part Time).`,
  },
  {
    icon: Briefcase,
    question: "What is the placement record of Bharathidasan College & SVIEG?",
    answer: `BCAS & SVIEG have an excellent 84% placement record. Highest Package: ₹8.3 LPA | Average Package: ₹3.30 LPA. Top recruiters include TCS, Infosys, Wipro, Cognizant, Accenture, HCL, Amazon, Flipkart, Zoho, ICICI Bank, HDFC Bank and 200+ other companies. We provide 100% placement assistance with dedicated training.`,
  },
  {
    icon: BadgeDollarSign,
    question: "What is the fee structure and scholarship details?",
    answer: `Fee Range: ₹20,000 to ₹40,000 per year (varies by course).\n\nMerit Scholarship: 450-499 marks: 10% fee concession, 500-549 marks: 15% fee concession, 550+ marks: 25% fee concession.\n\nSports Scholarship: District level 10%, State level 25%, National level 50%.\n\nEMI facility available. Education loan assistance provided.`,
  },
  {
    icon: Home,
    question: "Does SVIEG provide hostel facility?",
    answer: `Yes! We have separate hostel facilities for boys and girls with spacious rooms, hygienic and nutritious meals, 24/7 security, and safe environment. Hostel includes: Clean accommodation, Mess facility, Study rooms, Recreation areas, WiFi connectivity.`,
  },
  {
    icon: FileText,
    question: "What documents are required for admission?",
    answer: `Required Documents: 10th Marksheet & Certificate, 12th Marksheet & Certificate (for UG), UG Degree & Marksheets (for PG), Transfer Certificate (TC), Community Certificate, Aadhaar Card, Passport size photos.\n\nNo entrance exam required for most courses.`,
  },
  {
    icon: CheckCircle,
    question: "Is BCAS & SVIEG affiliated to any university?",
    answer: `Yes, Bharathidasan College of Arts and Science has Autonomous status and is affiliated to Bharathiar University, Coimbatore. Shree Venkateshwara Institute is also affiliated to Bharathiar University, which is a UGC recognized university. All degrees are valid and recognized across India and internationally.`,
  },
  {
    icon: Trophy,
    question: "What makes BCAS & SVIEG the best colleges in Erode?",
    answer: `Autonomous College Status (BCAS) | 159 University Rank Holders | Expert faculty | State-of-the-art labs | Solar powered eco-friendly campus | Digital classrooms | Extensive library | Sports facilities | Active placement cell | Industry partnerships | Skill development programs.`,
  },
  {
    icon: Phone,
    question: "How to contact BCAS & SVIEG for admission enquiry?",
    answer: `Phone: +91 96005 81759, +91 99523 17770\nEmail: kalvippaathai@gmail.com\nAddress: Chithode to Kavindapadi Road, Ellispettai, Pallapalayam, Erode - 638116\nTiming: Mon-Sat, 9 AM - 5 PM\nVisit our campus for direct admission or apply online.`,
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-5 bg-muted">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-gold font-bold text-sm tracking-widest uppercase mb-4 font-body">Have Questions?</p>
        <h2 className="text-3xl lg:text-5xl text-primary mb-5 font-display">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground font-body">Get answers to common queries about admission process, courses, fees, and placements</p>
      </div>

      <div className="max-w-[1000px] mx-auto space-y-4">
        {faqs.map((faq, i) => {
          const Icon = faq.icon;
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left p-6 flex items-start gap-4 border-l-4 border-secondary bg-gradient-to-r from-card to-muted"
              >
                <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <h3 className="text-lg text-primary font-display flex-1 leading-relaxed">{faq.question}</h3>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 mt-1 ${isOpen ? "rotate-180" : ""}`} strokeWidth={1.5} />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-16 text-foreground font-body leading-relaxed whitespace-pre-line text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
