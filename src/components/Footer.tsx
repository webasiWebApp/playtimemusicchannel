const Footer = () => {
  const links = ["Terms of Use", "Privacy Policy", "Help", "About", "Careers", "Press"];

  return (
    <footer className="border-t border-border mt-8">
      <div className="px-6 lg:px-10 py-10">
        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-muted-foreground hover:text-foreground text-xs font-body transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <span className="font-display text-foreground/40 font-extrabold text-lg tracking-tight">
            PLAYTIME<span className="text-primary/40">+</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center text-muted-foreground text-xs font-body">
          Playtime+ © 2026 Playtime. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
