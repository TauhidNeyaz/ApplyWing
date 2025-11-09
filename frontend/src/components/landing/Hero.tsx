import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Automated Job Applications
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Land Your Dream Job with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ApplyWing
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Upload your resume once, and let our AI automatically apply to hundreds of relevant 
              job openings and internships. Save time, increase your chances, and focus on what matters.
            </p>

            <div className="space-y-3">
              {[
                "Apply to 100+ jobs automatically",
                "Smart matching with AI",
                "Track all applications in one place"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/signup">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional using ApplyWing platform"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground">Jobs Applied</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
