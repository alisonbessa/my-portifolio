type HeroProps = {
  title: string;
  subtitle: string;
  description: string;
};

export function Hero({ title, subtitle, description }: HeroProps) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{description}</p>
    </section>
  );
}
