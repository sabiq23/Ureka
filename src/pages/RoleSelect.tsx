import { motion } from "framer-motion";
import { LightBulb } from "@/components/LightBulb";
import { useNavigate } from "react-router-dom";
import { useUserRole } from "@/contexts/UserRoleContext";
import { GraduationCap, Users, Heart, Lightbulb, ArrowRight } from "lucide-react";

const roles = [
  {
    id: "researcher" as const,
    icon: GraduationCap,
    title: "Researcher / Learner",
    description: "Explore, learn, and publish your research journey. Access courses, AI assistance, and get published in credible journals.",
    color: "primary",
  },
  {
    id: "mentor" as const,
    icon: Users,
    title: "Mentor",
    description: "Guide the next generation of researchers. Provide feedback, conduct 1-to-1 sessions, and share your expertise from partner institutions.",
    color: "secondary",
  },
  {
    id: "sponsor" as const,
    icon: Heart,
    title: "Sponsor",
    description: "Fund education and make a global impact. Support scholarships, enable publications, and transform young lives worldwide.",
    color: "accent",
  },
];

const RoleSelect = () => {
  const navigate = useNavigate();
  const { setRole } = useUserRole();

  const handleRoleSelect = (roleId: "researcher" | "mentor" | "sponsor") => {
    setRole(roleId);
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Decorative light bulbs */}
      <div className="absolute top-0 left-1/4">
        <LightBulb size="sm" delay={0.2} />
      </div>
      <div className="absolute top-0 right-1/3">
        <LightBulb size="md" delay={0.4} />
      </div>
      <div className="absolute top-0 right-1/4">
        <LightBulb size="lg" delay={0.6} />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        {/* Logo */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="w-12 h-12 text-secondary animate-glow-pulse" />
          </div>
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-secondary">U</span>
            <span className="text-foreground">REKA</span>
          </h1>
          <p className="text-muted-foreground text-lg">Choose how you want to contribute</p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => handleRoleSelect(role.id)}
              >
                <div className={`bg-card border-2 border-border rounded-3xl p-8 h-full transition-all duration-300 group-hover:border-${role.color}/50 group-hover:shadow-lg group-hover:shadow-${role.color}/20`}>
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl ${
                      role.id === "researcher" ? "gradient-primary" :
                      role.id === "mentor" ? "bg-secondary" :
                      "bg-gradient-to-br from-pink-500 to-rose-500"
                    } flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold mb-3">{role.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{role.description}</p>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 font-medium ${
                    role.id === "researcher" ? "text-primary" :
                    role.id === "mentor" ? "text-secondary" :
                    "text-pink-500"
                  }`}>
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl ${
                  role.id === "researcher" ? "bg-primary/20" :
                  role.id === "mentor" ? "bg-secondary/20" :
                  "bg-pink-500/20"
                }`} />
              </motion.div>
            );
          })}
        </div>

        {/* Footer text */}
        <motion.p
          className="text-center text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          You can always change your role later in settings
        </motion.p>
      </div>
    </div>
  );
};

export default RoleSelect;
