import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Transform Your Job Search?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of professionals who are landing more interviews with ApplyWing
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/signup">
              <Button variant="hero" size="lg">
                Start Applying Now
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg">
                Already have an account?
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            No credit card required • Free trial available • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
