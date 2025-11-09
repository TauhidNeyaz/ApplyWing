import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CTA } from "@/components/landing/CTA";

const Landing = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </main>
  );
};

export default Landing;
