import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LightBulb } from "@/components/LightBulb";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Brain, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Rocket
} from "lucide-react";
import { FeatureCard } from "@/components/Cards";

const stats = [
  { value: "200M+", label: "Youth lacking education globally" },
  { value: "60%", label: "Not achieving basic literacy" },
  { value: "75%", label: "Off-track for employment skills" },
];

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-primary-foreground" />,
    title: "Basics to Publication",
    description: "Complete pathway from fundamental concepts to publishing in credible academic journals.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary-foreground" />,
    title: "Nutshell Videos",
    description: "Concise 10-15 minute video lessons that deliver maximum learning in minimal time.",
  },
  {
    icon: <Trophy className="w-6 h-6 text-primary-foreground" />,
    title: "Gamified Learning",
    description: "Streak-based incentives, leaderboards, and achievement systems to keep you motivated.",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary-foreground" />,
    title: "Native Language Support",
    description: "Learn in your own language with localized content for specific regions.",
  },
  {
    icon: <Brain className="w-6 h-6 text-primary-foreground" />,
    title: "AI-Powered Support",
    description: "Intelligent chatbot assistance and personalized learning algorithms.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary-foreground" />,
    title: "Expert Peer Sessions",
    description: "1-to-1 discussions with experts and peers working on similar projects.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10">
            <LightBulb size="sm" delay={0.2} />
          </div>
          <div className="absolute top-20 right-20">
            <LightBulb size="md" delay={0.4} />
          </div>
          <div className="absolute top-40 left-1/4">
            <LightBulb size="sm" isOn={false} delay={0.6} />
          </div>
          <div className="absolute top-32 right-1/3">
            <LightBulb size="lg" delay={0.8} />
          </div>
          
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              🎓 Empowering Youth Through Research
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">UREKA</span>
            <br />
            <span className="text-foreground">Your Eureka Moment</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From basics to publication — a complete pathway for young researchers 
            in developing countries to achieve academic excellence and get published 
            in credible journals.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/select-role">
              <Button variant="hero" size="xl">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 mt-16 pt-16 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-gradient">Crisis</span> We're Solving
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Millions of young minds are held back by inadequate education systems and lack of opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                "200 million youth haven't completed primary school",
                "Only 35% achieve minimum reading proficiency in Africa",
                "75% of youth lack skills needed for employment",
                "Education systems prioritize testing over real skills",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive text-lg">!</span>
                  </div>
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                "Complete pathway from basics to publication",
                "Gamified learning that triggers motivation",
                "AI-powered personalized curricula",
                "Merit-based scholarships and waivers",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-primary/30">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful <span className="text-gradient">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to go from novice learner to published researcher.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Unique Value Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Makes Us <span className="text-gradient">Different</span>
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Target, text: "Complete curriculum from basics to credible journal publication" },
                  { icon: Users, text: "Focused networking without social media distractions" },
                  { icon: Star, text: "Freemium model with merit-based scholarships" },
                  { icon: Globe, text: "Native language support for accessibility" },
                  { icon: Rocket, text: "FOMO-inspired gamification for enhanced productivity" },
                ].map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <p className="text-foreground">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-3xl gradient-primary p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold text-gradient mb-4">FREE</div>
                    <p className="text-muted-foreground">
                      Your first complete project from basics to publication — absolutely free.
                    </p>
                    <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                      <p>✓ Full course access</p>
                      <p>✓ AI assistance</p>
                      <p>✓ Community access</p>
                      <p>✓ Journal publication support</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your <span className="text-gradient">Eureka</span> Moment?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of young researchers transforming their futures.
          </p>
          <Link to="/select-role">
            <Button variant="hero" size="xl">
              Get Started — It's Free
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="text-secondary">U</span>
              <span className="text-foreground">REKA</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 UREKA. Empowering youth through research.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
