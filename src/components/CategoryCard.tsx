import { motion } from "framer-motion";

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
}

export const CategoryCard = ({ title, image, href }: CategoryCardProps) => {
  return (
    <motion.a
      href={href}
      className="group relative overflow-hidden rounded-2xl aspect-square"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 z-10" />
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-white text-xl font-medium mb-2">{title}</h3>
        <div className="flex items-center text-white/80 text-sm">
          <span className="mr-2">Explore</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </motion.a>
  );
};