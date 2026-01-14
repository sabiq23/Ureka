import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Logo = ({ showText = true }: { showText?: boolean }) => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Lightbulb className="w-8 h-8 text-secondary animate-glow-pulse" />
      </motion.div>
      {showText && (
        <span className="text-2xl font-bold tracking-wide">
          <span className="text-secondary">U</span>
          <span className="text-foreground">REKA</span>
        </span>
      )}
    </Link>
  );
};

const navItems = [
  { path: "/dashboard", label: "Home" },
  { path: "/courses", label: "Courses" },
  { path: "/community", label: "Community" },
  { path: "/leaderboard", label: "Leaderboard" },
  { path: "/chat", label: "AI Chat" },
  { path: "/about", label: "About Ureka" },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative px-4 py-2 rounded-lg transition-colors"
            >
              <span
                className={`relative z-10 text-sm font-medium ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </span>
              {location.pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/profile"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold hover:scale-105 transition-transform"
          >
            U
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};
