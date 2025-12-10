import Title from "~/components/ui/Title";
import ExperienceTimeline from "../components/ExperienceTimeline";

export default function ExperienceSection() {
  return (
    <section className="p-5 md:p0">
      <Title className="md:p-10 p-5 text-center">My experience</Title>
      <ExperienceTimeline />
    </section>
  );
}
