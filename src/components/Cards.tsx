import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export const StatsCard = ({ value, label, icon, variant = "default", className }: StatsCardProps) => {
  const variants = {
    default: "bg-card border-border",
    primary: "gradient-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
  };

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl border p-4 transition-all hover:scale-105",
        variants[variant],
        className
      )}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="flex flex-col items-center text-center gap-1">
        {icon && <div className="mb-1">{icon}</div>}
        <span className="text-2xl font-bold">{value}</span>
        <span className={cn(
          "text-xs font-medium",
          variant === "default" ? "text-muted-foreground" : "opacity-90"
        )}>
          {label}
        </span>
      </div>
    </motion.div>
  );
};

interface ProgressCardProps {
  title: string;
  subtitle?: string;
  progress?: number;
  children?: React.ReactNode;
  className?: string;
}

export const ProgressCard = ({ title, subtitle, progress, children, className }: ProgressCardProps) => {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-card border border-border p-6",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
      
      {progress !== undefined && (
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full gradient-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      )}
      
      {children}
    </motion.div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export const FeatureCard = ({ title, description, icon, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

interface CourseCardProps {
  title: string;
  image: string;
  category: string;
  progress?: number;
  duration?: string;
  onClick?: () => void;
}

export const CourseCard = ({ title, image, category, progress, duration, onClick }: CourseCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-card border border-border cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="inline-block px-2 py-1 rounded-md text-xs font-medium gradient-primary text-primary-foreground mb-2">
          {category}
        </span>
        <h4 className="font-semibold line-clamp-2">{title}</h4>
        {duration && (
          <p className="text-xs text-muted-foreground mt-1">{duration}</p>
        )}
        {progress !== undefined && (
          <div className="w-full h-1 bg-muted rounded-full mt-3 overflow-hidden">
            <div
              className="h-full gradient-primary rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};
