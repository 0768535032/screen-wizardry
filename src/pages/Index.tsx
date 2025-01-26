import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { CategoryCard } from "@/components/CategoryCard";
import { SupplierCarousel } from "@/components/SupplierCarousel";
import { Footer } from "@/components/Footer";
import { Filter, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Groceries",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000",
    href: "https://external-groceries-link.com"
  },
  {
    title: "Local Eateries",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    href: "https://external-eateries-link.com"
  },
  {
    title: "Retail Goods",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000",
    href: "https://external-retail-link.com"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000"
              alt="Featured"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-start p-12">
              <div className="max-w-lg">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-4 py-1 bg-gold text-black rounded-full text-sm font-medium mb-4"
                >
                  New Feature
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Fresh Groceries Delivered
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-gray-200 mb-8"
                >
                  Shop from local stores and get your groceries delivered to your doorstep
                </motion.p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Filter Section */}
        <section className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowUpDown className="h-4 w-4" />
              <span>Sort</span>
            </Button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Suppliers Section */}
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8">Meet our suppliers...</h2>
            <SupplierCarousel />
          </motion.div>
        </section>

        {/* Promotion Section */}
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[200px] rounded-2xl overflow-hidden bg-gradient-to-r from-gold/20 to-gold/5 backdrop-blur-lg"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-6xl font-bold text-gold">15% OFF</h2>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;