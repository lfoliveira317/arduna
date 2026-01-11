import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="max-w-md text-center space-y-6">
        <AlertCircle className="w-16 h-16 text-secondary mx-auto opacity-80" />
        
        <h1 className="font-serif text-6xl md:text-8xl font-medium text-foreground">404</h1>
        
        <div className="w-12 h-[1px] bg-secondary mx-auto"></div>
        
        <h2 className="font-serif text-2xl md:text-3xl">Page Not Found</h2>
        
        <p className="text-muted-foreground font-light leading-relaxed">
          The page you are looking for does not exist or has been moved. 
          Let us guide you back to where you belong.
        </p>
        
        <div className="pt-4">
          <Link href="/">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 uppercase tracking-widest text-xs">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
