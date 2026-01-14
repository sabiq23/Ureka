import { motion } from "framer-motion";

interface LightBulbProps {
  size?: "sm" | "md" | "lg";
  isOn?: boolean;
  className?: string;
  delay?: number;
}

const sizeClasses = {
  sm: "w-8 h-12",
  md: "w-12 h-18",
  lg: "w-16 h-24",
};

export const LightBulb = ({ size = "md", isOn = true, className = "", delay = 0 }: LightBulbProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Wire */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-0.5 h-20 bg-gradient-to-b from-muted-foreground/30 to-muted-foreground/60" />
      
      <motion.div
        className={`${sizeClasses[size]} animate-swing`}
        style={{ transformOrigin: "top center" }}
      >
        <svg viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Bulb glow */}
          {isOn && (
            <motion.ellipse
              cx="32"
              cy="40"
              rx="28"
              ry="32"
              fill="url(#bulbGlow)"
              className="animate-glow-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.3 }}
            />
          )}
          
          {/* Bulb glass */}
          <path
            d="M32 4C18 4 8 16 8 32C8 44 14 52 20 58C24 62 26 68 26 72V76H38V72C38 68 40 62 44 58C50 52 56 44 56 32C56 16 46 4 32 4Z"
            fill={isOn ? "hsl(45, 93%, 58%)" : "hsl(0, 0%, 40%)"}
            stroke="hsl(0, 0%, 30%)"
            strokeWidth="2"
          />
          
          {/* Bulb base */}
          <rect x="24" y="76" width="16" height="4" fill="hsl(0, 0%, 50%)" rx="1" />
          <rect x="22" y="80" width="20" height="3" fill="hsl(0, 0%, 45%)" rx="1" />
          <rect x="24" y="83" width="16" height="3" fill="hsl(0, 0%, 40%)" rx="1" />
          <rect x="26" y="86" width="12" height="6" fill="hsl(0, 0%, 35%)" rx="2" />
          
          {/* Filament lines */}
          {isOn && (
            <>
              <path d="M28 50 Q32 42 36 50" stroke="hsl(35, 95%, 70%)" strokeWidth="2" fill="none" />
              <path d="M28 55 Q32 47 36 55" stroke="hsl(35, 95%, 70%)" strokeWidth="2" fill="none" />
            </>
          )}
          
          <defs>
            <radialGradient id="bulbGlow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="hsl(45, 93%, 70%)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(35, 95%, 53%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(25, 95%, 53%)" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
};
