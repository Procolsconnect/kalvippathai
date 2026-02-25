import { useState } from "react";
import { CheckCircle, Trophy, BookOpen, Briefcase, BadgeDollarSign, GraduationCap, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyIoL5MQoj-ltrc05z4kMKce0BnT7LadzV3tPj3XqauFrx_SgjmkyOrSJose6MBThKr/exec";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    studentName: "", phone: "", email: "", course: "", qualification: "", city: "", message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("submitting");

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({
        studentName: "",
        phone: "",
        email: "",
        course: "",
        qualification: "",
        city: "",
        message: "",
      });
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  const badges = [
    { icon: CheckCircle, label: "Direct Admission Open" },
    { icon: Trophy, label: "Autonomous College" },
    { icon: BookOpen, label: "159 Rank Holders" },
    { icon: Briefcase, label: "100% Placement" },
    { icon: BadgeDollarSign, label: "Scholarship Available" },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-5" id="home">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#064e59]/90 via-[#0f626d]/80 to-[#0f626d]/40" />
      </div>

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[56px] text-primary-foreground leading-tight mb-5 font-display">
            Admission 2025-26 Open at
            <span className="block text-secondary mt-2">
              Bharathidasan College (Autonomous)
            </span>
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-8 font-body leading-relaxed">
            BCAS- Top Arts & Science Colleges in Erode | 12 UG, 7 PG & 3 Ph.D Programs | 100% Placement | ₹8.3 LPA Highest | Autonomous College | Bharathiar University Affiliated
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-primary-foreground/20 backdrop-blur-sm px-4 py-2.5 rounded-full text-primary-foreground text-sm font-semibold font-body flex items-center gap-2"
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Admission Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card rounded-2xl shadow-2xl p-8 lg:p-10"
          id="apply"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <GraduationCap className="w-7 h-7 text-primary" strokeWidth={1.5} />
              <h2 className="text-2xl lg:text-3xl text-primary font-display">Apply for Admission 2025-26</h2>
            </div>
            <p className="text-muted-foreground font-body text-sm">Get instant admission details, course information & scholarship eligibility</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1.5 text-foreground font-semibold text-sm font-body">Student Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border-2 border-border rounded-lg text-sm font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1.5 text-foreground font-semibold text-sm font-body">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile"
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg text-sm font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-1.5 text-foreground font-semibold text-sm font-body">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg text-sm font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block mb-1.5 text-foreground font-semibold text-sm font-body">Interested Course *</label>
              <select
                required
                className="w-full px-4 py-3 border-2 border-border rounded-lg text-sm font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              >
                <option value="">Select a course</option>
                <optgroup label="UG Programs (12 Courses)">
                  <option>B.Sc Computer Science</option>
                  <option>B.Sc (CS) AI & Data Science</option>
                  <option>B.Sc Information Technology</option>
                  <option>BCA - Bachelor of Computer Applications</option>
                  <option>B.Com</option>
                  <option>B.Com (Computer Applications)</option>
                  <option>BBA - Business Administration</option>
                  <option>B.Sc Microbiology</option>
                  <option>B.Sc Biochemistry</option>
                  <option>B.Sc Mathematics</option>
                  <option>B.Sc Costume Design & Fashion</option>
                  <option>BA English</option>
                </optgroup>
                <optgroup label="PG Programs (7 Courses)">
                  <option>M.Sc Computer Science</option>
                  <option>M.Sc Information Technology</option>
                  <option>M.Com</option>
                  <option>M.Com (Computer Applications)</option>
                  <option>MBA</option>
                  <option>M.Sc Microbiology</option>
                  <option>M.Sc Biochemistry</option>
                  <option>MA English</option>
                  <option>M.Sc Mathematics</option>
                  <option>M.Sc Costume Design & Fashion</option>
                </optgroup>
                <optgroup label="Research Programs">
                  <option>Ph.D Biochemistry</option>
                  <option>Ph.D Commerce</option>
                  <option>Ph.D Computer Science</option>
                </optgroup>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1.5 text-foreground font-semibold text-sm font-body">Qualification *</label>
                <select
                  required
                  className="w-full px-4 py-3 border-2 border-border rounded-lg text-sm font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                >
                  <option value="">Select</option>
                  <option>10th Standard</option>
                  <option>12th Standard</option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                </select>
              </div>
              <div>
                <label className="block mb-1.5 text-foreground font-semibold text-sm font-body">City *</label>
                <input
                  type="text"
                  required
                  placeholder="Your city"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg text-sm font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block mb-1.5 text-foreground font-semibold text-sm font-body">Message (Optional)</label>
              <textarea
                rows={2}
                placeholder="Any specific queries?"
                className="w-full px-4 py-3 border-2 border-border rounded-lg text-sm font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={submitStatus === "submitting"}
              className="w-full gradient-gold text-secondary-foreground py-4 rounded-lg font-bold text-base font-body transition-all hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Rocket className="w-5 h-5" strokeWidth={1.5} />
              {submitStatus === "submitting" ? "Submitting..." : "Submit Application"}
            </button>

            {submitStatus === "success" && (
              <p className="text-green-900 text-sm font-body text-center">Thanks! Your application was submitted.</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 text-sm font-body text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
