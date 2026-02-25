import { motion } from "framer-motion";

const stats = [
  { value: "84%", label: "Students Placed" },
  { value: "₹8.3 LPA", label: "Highest Package" },
  { value: "₹3.30 LPA", label: "Average Package" },
  { value: "159", label: "University Rank Holders" },
];

const companyLogos = [
  { name: "TCS", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/250px-Tata_Consultancy_Services_Logo.svg.png" },
  { name: "Wipro", url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Cognizant", url: "https://www.google.com/s2/favicons?domain=cognizant.com&sz=128" },
  { name: "Accenture", url: "https://www.google.com/s2/favicons?domain=accenture.com&sz=128" },
  { name: "HCL", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/HCL_Technologies_Logo_%28brand_refresh_2022%29.svg/250px-HCL_Technologies_Logo_%28brand_refresh_2022%29.svg.png" },
  { name: "ICICI Bank", url: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
  { name: "HDFC Bank", url: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Zoho", url: "https://www.google.com/s2/favicons?domain=zoho.com&sz=128" },
  { name: "Freshworks", url: "https://www.google.com/s2/favicons?domain=freshworks.com&sz=128" },
  { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
];

const PlacementSection = () => (
  <section className="py-20 px-5 bg-card overflow-hidden" id="placement">
    <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-gold font-bold text-sm tracking-widest uppercase mb-4 font-body">Career Success</p>
        <h2 className="text-3xl lg:text-[42px] text-primary mb-6 font-display leading-tight">Your Dream Career Starts Here</h2>
        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
          Our dedicated Placement & Training Cell works tirelessly to ensure every student gets the best career opportunities. With strong industry connections and comprehensive training programs, we prepare students for successful careers.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-muted p-6 rounded-2xl text-center">
              <h4 className="text-2xl lg:text-3xl font-display text-gold mb-1">{s.value}</h4>
              <p className="text-sm text-muted-foreground font-body">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="text-foreground font-body text-sm">
          <strong>Training Initiatives:</strong> Resume Building • Mock Interviews • Aptitude Training • Communication Skills • Technical Workshops • Personality Development
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-muted p-8 rounded-2xl"
      >
        <h3 className="text-center text-2xl text-primary font-display mb-8">Top Recruiters</h3>
        <div className="grid grid-cols-3 gap-4">
          {companyLogos.map((c) => (
            <div
              key={c.name}
              className="bg-card p-4 rounded-xl flex items-center justify-center h-20 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <img
                src={c.url}
                alt={c.name}
                className="max-w-full max-h-12 object-contain grayscale hover:grayscale-0 transition-all"
                onError={(e) => {
                  const img = e.currentTarget;
                  img.style.display = "none";
                  const span = img.nextElementSibling as HTMLElement;
                  if (span) span.style.display = "flex";
                }}
              />
              <span style={{ display: "none" }} className="text-xs font-bold text-primary font-body text-center items-center justify-center">{c.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default PlacementSection;
