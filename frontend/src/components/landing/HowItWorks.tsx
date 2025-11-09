import { Upload, Search, Send, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Resume",
    description: "Simply upload your resume and fill in your basic information. Takes less than 2 minutes.",
  },
  {
    icon: Search,
    title: "AI Finds Jobs",
    description: "Our AI scans thousands of job listings and matches you with the best opportunities.",
  },
  {
    icon: Send,
    title: "Auto-Apply",
    description: "ApplyWing automatically submits your applications to all relevant positions.",
  },
  {
    icon: TrendingUp,
    title: "Track & Interview",
    description: "Monitor your applications and get ready for interviews as responses roll in.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in 4 simple steps and watch the interview requests come in
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto shadow-lg">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
