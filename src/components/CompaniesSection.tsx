import { motion } from "framer-motion";
import { Monitor, Landmark, ShoppingCart, Factory } from "lucide-react";

const categories = [
  {
    icon: Monitor,
    title: "IT & Software Companies",
    logos: [
      { name: "TCS", url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
      { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
      { name: "Wipro", url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
      { name: "Cognizant", url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Cognizant_logo_2022.svg" },
      { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Accenture_logo.svg" },
      { name: "HCL", url: "https://upload.wikimedia.org/wikipedia/commons/8/87/HCL_Tech_Bee_logo.svg" },
      { name: "Capgemini", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Capgemini_201x_logo.svg" },
      { name: "Zoho", url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Zoho_Corporation_logo.svg" },
      { name: "Freshworks", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Freshworks_logo.svg" },
      { name: "Mphasis", url: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Mphasis_logo.svg" },
      { name: "Tech Mahindra", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Tech_Mahindra_New_Logo.svg" },
      { name: "LTI", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/L%26T_Infotech_Logo.svg" },
    ],
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    logos: [
      { name: "ICICI Bank", url: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
      { name: "HDFC Bank", url: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
      { name: "Axis Bank", url: "https://upload.wikimedia.org/wikipedia/en/8/8b/Axis_Bank_logo.svg" },
      { name: "SBI", url: "https://upload.wikimedia.org/wikipedia/en/1/1f/State_Bank_of_India_logo.svg" },
      { name: "Kotak Mahindra", url: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Kotak_Mahindra_Bank_logo.svg" },
      { name: "IndusInd Bank", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/IndusInd_Bank_Logo.svg" },
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Startups",
    logos: [
      { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
      { name: "Flipkart", url: "https://upload.wikimedia.org/wikipedia/en/1/11/Flipkart_logo.png" },
      { name: "Paytm", url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Paytm_logo.svg" },
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing & Others",
    logos: [
      { name: "Tata Motors", url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Tata_Motors_Logo.svg" },
      { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
      { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
      { name: "Deloitte", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Deloitte.svg" },
    ],
  },
];

const CompaniesSection = () => (
  <section className="py-20 px-5 bg-card">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-gold font-bold text-sm tracking-widest uppercase mb-4 font-body">Our Placement Partners</p>
      <h2 className="text-3xl lg:text-5xl text-primary mb-5 font-display">200+ Companies Recruit From BCAS</h2>
      <p className="text-lg text-muted-foreground font-body">Leading organizations across IT, Banking, Manufacturing, and Service sectors hire our graduates</p>
    </div>

    <div className="max-w-[1400px] mx-auto space-y-12">
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <div key={cat.title}>
            <h3 className="text-2xl text-primary font-display text-center pb-4 mb-8 border-b-[3px] border-secondary flex items-center justify-center gap-3">
              <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              {cat.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {cat.logos.map((logo) => (
                <motion.div
                  key={logo.name}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-card p-5 rounded-2xl flex items-center justify-center h-24 shadow-md border border-border hover:border-secondary transition-all"
                >
                  <img src={logo.url} alt={logo.name} className="max-w-full max-h-14 object-contain grayscale-[20%] hover:grayscale-0 transition-all" />
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default CompaniesSection;
