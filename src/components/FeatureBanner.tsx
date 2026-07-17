interface FeatureBannerProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  align?: "left" | "right";
}

const FeatureBanner = ({ image, title, subtitle, description, align = "right" }: FeatureBannerProps) => {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden my-4">
      {/* Background */}
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/40" />
      {align === "right" ? (
        <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/40 to-transparent" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      )}

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col justify-center h-full px-6 lg:px-10 max-w-xl ${
          align === "right" ? "ml-auto text-center" : "text-left"
        }`}
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-2 tracking-tight">
          {title}
        </h2>
        <p className="font-body text-foreground font-semibold text-base mb-2">{subtitle}</p>
        <p className="font-body text-foreground/70 text-sm mb-6">{description}</p>
        <button className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 text-sm font-body font-bold tracking-wider transition-colors w-full max-w-md mx-auto">
          LEARN MORE ON PLAYTIME+
        </button>
      </div>
    </section>
  );
};

export default FeatureBanner;
