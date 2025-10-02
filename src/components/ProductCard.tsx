import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  category: string;
}

const ProductCard = ({ image, name, price, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-hover transition-smooth cursor-pointer">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="w-full">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {category}
          </p>
          <h3 className="text-lg font-semibold text-foreground mt-1">{name}</h3>
          <p className="text-2xl font-bold text-primary mt-2">${price}</p>
        </div>
        <Button variant="accent" className="w-full" size="lg">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
