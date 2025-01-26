import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface Supplier {
  id: number;
  name: string;
  logo: string;
}

const suppliers: Supplier[] = [
  { id: 1, name: "Unilever", logo: "https://via.placeholder.com/150" },
  { id: 2, name: "Unilever", logo: "https://via.placeholder.com/150" },
  { id: 3, name: "Unilever", logo: "https://via.placeholder.com/150" },
  { id: 4, name: "Unilever", logo: "https://via.placeholder.com/150" },
  { id: 5, name: "Unilever", logo: "https://via.placeholder.com/150" },
];

export const SupplierCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 z-10"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <div
          ref={containerRef}
          className="flex overflow-x-hidden scroll-smooth gap-4 px-12"
        >
          {suppliers.map((supplier) => (
            <motion.div
              key={supplier.id}
              className="flex-shrink-0 w-32 h-32 bg-white/5 backdrop-blur-lg rounded-lg p-4 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={supplier.logo}
                alt={supplier.name}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 z-10"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};