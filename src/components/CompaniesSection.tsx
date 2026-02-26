import { motion } from "framer-motion";
import { Monitor, Landmark, ShoppingCart, Factory } from "lucide-react";

// Using multiple fallback logo sources for guaranteed visibility
const categories = [
  {
    icon: Monitor,
    title: "IT & Software Companies",
    logos: [
      {
        name: "TCS", link: "https://www.tcs.com", abbr: "TCS", color: "#1a1a4b",
        logo: "/Tata.png"
      },
      {
        name: "Infosys", link: "https://www.infosys.com", abbr: "INFY", color: "#007cc2",
        logo: "https://www.google.com/s2/favicons?domain=infosys.com&sz=128"
      },
      {
        name: "Wipro", link: "https://www.wipro.com", abbr: "WIPRO", color: "#341f5e",
        logo: "https://www.google.com/s2/favicons?domain=wipro.com&sz=128"
      },
      {
        name: "Cognizant", link: "https://www.cognizant.com", abbr: "CTS", color: "#1d2e6e",
        logo: "https://www.google.com/s2/favicons?domain=cognizant.com&sz=128"
      },
      {
        name: "Accenture", link: "https://www.accenture.com", abbr: "ACN", color: "#a100ff",
        logo: "https://www.google.com/s2/favicons?domain=accenture.com&sz=128"
      },
      {
        name: "HCL Tech", link: "https://www.hcltech.com", abbr: "HCL", color: "#0069b4",
        logo: "/HCL.png"
      },
      {
        name: "Capgemini", link: "https://www.capgemini.com", abbr: "CGI", color: "#003399",
        logo: "https://www.google.com/s2/favicons?domain=capgemini.com&sz=128"
      },
      {
        name: "Zoho", link: "https://www.zoho.com", abbr: "ZOHO", color: "#e42527",
        logo: "https://www.google.com/s2/favicons?domain=zoho.com&sz=128"
      },
      {
        name: "Freshworks", link: "https://www.freshworks.com", abbr: "FW", color: "#25c16f",
        logo: "https://www.google.com/s2/favicons?domain=freshworks.com&sz=128"
      },
      {
        name: "Mphasis", link: "https://www.mphasis.com", abbr: "MPS", color: "#e8b000",
        logo: "https://www.google.com/s2/favicons?domain=mphasis.com&sz=128"
      },
      {
        name: "Tech Mahindra", link: "https://www.techmahindra.com", abbr: "TM", color: "#ffffffff",
        logo: "/tm.png"
      },
      {
        name: "LTI Mindtree", link: "https://www.ltimindtree.com", abbr: "LTI", color: "#ffffffff",
        logo: "/lti.png"
      },
    ],
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    logos: [
      {
        name: "ICICI Bank", link: "https://www.icicibank.com", abbr: "ICICI", color: "#f47920",
        logo: "https://www.google.com/s2/favicons?domain=icicibank.com&sz=128"
      },
      {
        name: "HDFC Bank", link: "https://www.hdfcbank.com", abbr: "HDFC", color: "#004c8f",
        logo: "https://www.google.com/s2/favicons?domain=hdfcbank.com&sz=128"
      },
      {
        name: "Axis Bank", link: "https://www.axisbank.com", abbr: "AXIS", color: "#97144d",
        logo: "https://www.google.com/s2/favicons?domain=axisbank.com&sz=128"
      },
      {
        name: "SBI", link: "https://www.sbi.co.in", abbr: "SBI", color: "#122261ff",
        logo: "/sbi.png"
      },
      {
        name: "Kotak Bank", link: "https://www.kotak.com", abbr: "KMB", color: "#ed1c24",
        logo: "https://www.google.com/s2/favicons?domain=kotak.com&sz=128"
      },
      {
        name: "IndusInd Bank", link: "https://www.indusind.com", abbr: "IND", color: "#046a38",
        logo: "https://www.google.com/s2/favicons?domain=indusind.com&sz=128"
      },
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Startups",
    logos: [
      {
        name: "Amazon", link: "https://www.amazon.in", abbr: "AMZ", color: "#ff9900",
        logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128"
      },
      {
        name: "Flipkart", link: "https://www.flipkart.com", abbr: "FK", color: "#2874f0",
        logo: "https://www.google.com/s2/favicons?domain=flipkart.com&sz=128"
      },
      {
        name: "Paytm", link: "https://www.paytm.com", abbr: "PTM", color: "#00b9f5",
        logo: "/Paytm-Logo2.jpg"
      },
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing & Others",
    logos: [
      {
        name: "Tata Motors", link: "https://www.tatamotors.com", abbr: "TATA", color: "#003580",
        logo: "https://www.google.com/s2/favicons?domain=tatamotors.com&sz=128"
      },
      {
        name: "Samsung", link: "https://www.samsung.com/in", abbr: "SAM", color: "#1428a0",
        logo: "https://www.google.com/s2/favicons?domain=samsung.com&sz=128"
      },
      {
        name: "IBM", link: "https://www.ibm.com", abbr: "IBM", color: "#0530ad",
        logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128"
      },
      {
        name: "Deloitte", link: "https://www.deloitte.com", abbr: "DLT", color: "#86bc25",
        logo: "https://www.google.com/s2/favicons?domain=deloitte.com&sz=128"
      },
    ],
  },
];

const LogoCard = ({ logo }: { logo: (typeof categories)[0]["logos"][0] }) => {
  return (
    <motion.a
      href={logo.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, scale: 1.05 }}
      className="bg-card p-4 rounded-2xl flex flex-col items-center justify-center gap-2 h-28 shadow-md border border-border hover:border-secondary hover:shadow-xl transition-all cursor-pointer group"
      title={`Visit ${logo.name}`}
    >
      {/* Colored branded icon box with favicon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
        style={{ backgroundColor: logo.color }}
      >
        <img
          src={logo.logo}
          alt={logo.name}
          className="w-12 h-12 object-contain"
          onError={(e) => {
            // fallback: show white abbreviation text on brand color bg
            const img = e.currentTarget;
            img.style.display = "none";
            const span = img.nextElementSibling as HTMLElement;
            if (span) span.style.display = "block";
          }}
        />
        <span
          style={{ display: "none" }}
          className="text-white text-[9px] font-black font-body text-center leading-none"
        >
          {logo.abbr}
        </span>
      </div>
      {/* Company name */}
      <span className="text-[11px] font-semibold text-foreground font-body text-center leading-tight group-hover:text-primary transition-colors line-clamp-2 w-full px-1">
        {logo.name}
      </span>
    </motion.a>
  );
};

const CompaniesSection = () => (
  <section className="py-20 px-5 bg-card overflow-hidden">
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
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {cat.logos.map((logo) => (
                <LogoCard key={logo.name} logo={logo} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default CompaniesSection;
