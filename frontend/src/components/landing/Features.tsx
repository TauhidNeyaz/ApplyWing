import { Zap, Shield, Target, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Apply to hundreds of jobs in minutes, not hours. Our AI handles the repetitive work.",
  },
  {
    icon: Target,
    title: "Smart Matching",
    description: "Our AI analyzes your resume and matches you with the most relevant opportunities.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is encrypted and secure. We never share your information without permission.",
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Track all your applications in one dashboard with instant status updates.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Why Choose ApplyWing?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to supercharge your job search and land more interviews
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
