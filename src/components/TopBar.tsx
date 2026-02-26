import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";

const TopBar = () => (
  <div className="gradient-primary text-primary-foreground py-2.5 text-xs sm:text-sm">
    <div className="max-w-[1400px] mx-auto px-5 grid grid-cols-2 gap-3 sm:flex sm:justify-between sm:items-center sm:flex-wrap sm:gap-4">
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4" strokeWidth={1.5} />
        <a href="mailto:kalvippaathai@gmail.com" className="hover:text-secondary transition-colors">
          kalvippaathai@gmail.com
        </a>
      </div>
      <div className="flex items-start gap-2">
        <Phone className="w-4 h-4 mt-0.5" strokeWidth={1.5} />
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <a href="tel:+919600581759" className="hover:text-secondary transition-colors">+91 96005 81759</a>
          <span className="hidden sm:inline">/</span>
          <a href="tel:+919952317770" className="hover:text-secondary transition-colors">+91 99523 17770</a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4" strokeWidth={1.5} />
        <span>Erode, Tamil Nadu</span>
      </div>
      <div className="flex items-center gap-2 font-bold">
        <GraduationCap className="w-4 h-4" strokeWidth={1.5} />
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJ8N-zgjLuzZrj1q4CCmm3P3fXc4m6Ed2wHZAW50bL02WXlg/viewform?usp=publish-editor">   <span> Admissions Open 2026-27</span> </a>
      </div>
    </div>
  </div>
);

export default TopBar;
