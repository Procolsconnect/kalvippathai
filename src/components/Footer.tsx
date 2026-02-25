import { GraduationCap, Phone, Mail, Globe, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-16 pb-8 px-5" id="contact">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      <div>
        <div className="flex items-center gap-3 mb-5">
          <GraduationCap className="w-8 h-8 text-secondary" strokeWidth={1.5} />
          <h3 className="text-xl font-display">BCAS & SVIEG</h3>
        </div>
        <p className="text-primary-foreground/90 font-body text-sm leading-relaxed mb-4">
          BCAS & SVIEG are premier educational institutions in Erode, Tamil Nadu. Bharathidasan College has autonomous status and is affiliated to Bharathiar University. We are committed to providing quality education and shaping future leaders.
        </p>
        <p className="text-primary-foreground/90 font-body text-sm">
          <strong>📍</strong> Chithode to Kavindapadi Road, Ellispettai, Pallapalayam (PO), Erode - 638116, Tamil Nadu
        </p>
      </div>

      <div>
        <h4 className="text-lg font-display mb-5">Quick Links</h4>
        <ul className="space-y-3">
          {["Home", "Courses", "Admission", "Placement", "About Us"].map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(" ", "")}`} className="text-primary-foreground/90 font-body text-sm hover:text-secondary transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-display mb-5">Programs</h4>
        <ul className="space-y-3">
          {["UG Programs", "PG Programs", "Ph.D Programs", "Research", "Apply Online"].map((l) => (
            <li key={l}>
              <a href="#courses" className="text-primary-foreground/90 font-body text-sm hover:text-secondary transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-display mb-5">Contact Us</h4>
        <ul className="space-y-3 text-primary-foreground/90 font-body text-sm">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" strokeWidth={1.5} /> +91 96005 81759</li>
          <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" strokeWidth={1.5} /> +91 99523 17770</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-secondary" strokeWidth={1.5} /> kalvippaathai@gmail.com</li>
          <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-secondary" strokeWidth={1.5} /> www.bcas.ac.in</li>
          <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" strokeWidth={1.5} /> Mon-Sat: 9 AM - 5 PM</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/20 pt-6 text-center text-primary-foreground/80 font-body text-xs">
      <p>© 2025 Bharathidasan College of Arts and Science (Autonomous) & Shree Venkateshwara Institute of Education and Guidance. All Rights Reserved. | Affiliated to Bharathiar University</p>
    </div>
  </footer>
);

export default Footer;
