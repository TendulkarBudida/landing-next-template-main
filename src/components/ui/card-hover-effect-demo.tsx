import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Professional AV Tools",
    description:
      "Access cutting-edge audio visual tools and resources designed by industry experts to streamline your workflow and enhance project outcomes.",
    link: "#",
  },
  {
    title: "AV Career Hub",
    description:
      "Discover exciting career opportunities in the audio visual industry. Connect with top employers and advance your AV professional journey.",
    link: "#",
  },
  {
    title: "AV Marketplace",
    description:
      "Shop the latest audio visual equipment and solutions. Find everything from professional microphones to complete venue setups.",
    link: "#",
  },
  {
    title: "AV Professional Network",
    description:
      "Join a thriving community of audio visual professionals. Share knowledge, collaborate on projects, and grow your network.",
    link: "#",
  },
  {
    title: "Equipment Reviews",
    description:
      "Read honest reviews and comparisons of the latest AV equipment from industry professionals who actually use the gear.",
    link: "#",
  },
  {
    title: "Professional Training",
    description:
      "Enhance your skills with comprehensive training programs led by industry experts. Stay current with the latest AV technologies and techniques.",
    link: "#",
  },
];
