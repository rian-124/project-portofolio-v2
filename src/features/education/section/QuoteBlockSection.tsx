import BlurText from "~/components/shared/BlurText";

export default function QuoteBlockSection() {
  return (
    <section className="md:px-10 h-screen flex items-center justify-center">
      <BlurText
        text="“Success is not for those who never fail, but for those who never quit.“"
        delay={150}
        animateBy="words"
        direction="top"
        className="md:text-8xl text-4xl mb-8"
      />
    </section>
  );
}
