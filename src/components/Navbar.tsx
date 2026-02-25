import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Courses", href: "#courses" },
    { label: "Admission", href: "#apply" },
    { label: "Placement", href: "#placement" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-card shadow-md sticky top-0 z-50 animate-slide-down">
      <nav className="max-w-[1400px] mx-auto px-5 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-card flex items-center justify-center border border-border overflow-hidden transition-all duration-300 flex-shrink-0">
            <img
              src="/kalvippaathai.jpeg"
              alt="Kalvippaathai logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl md:text-2xl text-primary font-display truncate">BCAS</h1>
            <p className="text-[10px] sm:text-xs text-muted-foreground font-body truncate sm:whitespace-normal">Bharathidasan College of Arts and Science</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden lg:flex list-none gap-7 items-center">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-foreground font-semibold text-[15px] font-body relative hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[3px] after:bg-secondary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#apply"
            className="hidden md:inline-block gradient-orange text-orange-foreground px-7 py-3 rounded-full font-bold font-body transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl ml-4"
          >
            Apply Now
          </a>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-5 py-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 font-semibold font-body text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            className="block mt-3 text-center gradient-orange text-orange-foreground px-7 py-3 rounded-full font-bold font-body"
            onClick={() => setMobileOpen(false)}
          >
            Apply Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
