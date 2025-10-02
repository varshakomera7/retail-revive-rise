import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          
          <h1 className="text-2xl font-bold text-primary">ModernShop</h1>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              New Arrivals
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Categories
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Sale
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
