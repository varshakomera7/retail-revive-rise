import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  {
    id: 1,
    name: "Smart Watch Pro",
    price: 299,
    category: "Wearables",
    image: product1,
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 149,
    category: "Audio",
    image: product2,
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 189,
    category: "Accessories",
    image: product3,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 179,
    category: "Tech",
    image: product4,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 129,
    category: "Audio",
    image: product5,
  },
  {
    id: 6,
    name: "Desk Lamp Pro",
    price: 89,
    category: "Home",
    image: product6,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Premium Audio
                <br />
                Redefined
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-md">
                Experience crystal-clear sound with our latest collection of premium headphones.
              </p>
              <div className="flex gap-4">
                <Button variant="accent" size="lg">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroProduct}
                alt="Premium Headphones"
                className="w-full h-auto rounded-2xl shadow-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully curated collection of premium products designed for the modern lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ModernShop</h3>
              <p className="text-sm text-muted-foreground">
                Premium products for the modern lifestyle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">New Arrivals</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Best Sellers</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Shipping</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">About</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 ModernShop. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
