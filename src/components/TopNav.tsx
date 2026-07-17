import { useState, useEffect } from "react";
import playtimeLogo from "@/assets/playtime-logo.png";

const navLinks = ["HOME", "SERIES", "MOVIES", "DOCUMENTARIES", "LIVE"];

const TopNav = () => {
  const [active, setActive] = useState("HOME");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-10 h-16">
        {/* Left: Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src={playtimeLogo} alt="Playtime+" className="h-8 w-auto" />
            <span className="font-display text-foreground font-extrabold text-xl tracking-tight">
              PLAYTIME<span className="text-primary">+</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActive(link)}
                className={`px-3 py-1.5 text-sm font-body font-semibold tracking-wide transition-colors ${
                  active === link
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {link}
              </button>
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-body font-medium text-foreground/70 hover:text-foreground transition-colors">
            SIGN IN
          </button>
          <button className="bg-primary hover:bg-accent text-primary-foreground px-5 py-2.5 text-sm font-body font-bold tracking-wide transition-colors border border-primary">
            GET PLAYTIME+
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
