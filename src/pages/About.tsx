import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LightBulb } from "@/components/LightBulb";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Navbar";
import {
  BookOpen,
  Users,
  Trophy,
  Brain,
  Globe,
  Zap,
  ArrowRight,
  Target,
  Rocket,
  Heart,
  GraduationCap,
  BarChart3,
  Shield,
  Sparkles,
  User,
} from "lucide-react";
import founderAbid from "@/assets/founder-abid.jpg";
import founderSabiq from "@/assets/founder-sabiq.jpg";
import founderTawsif from "@/assets/founder-tawsif.jpg";

const founders = [
  { name: "Abdullah Islam Sabiq", role: "Founder", image: founderSabiq },
  { name: "Abid Ahsan Khan", role: "Founder", image: founderAbid },
  { name: "Tawsif Rahman", role: "Founder", image: founderTawsif },
];

const stats = [
  { value: "200M+", label: "Youth lacking basic education" },
  { value: "61%", label: "Not achieving reading proficiency" },
  { value: "75%", label: "Off-track for employment skills" },
  { value: "35%", label: "Reading proficiency in Africa" },
];

const features = [
  { icon: BookOpen, title: "Basics to Publication", description: "Complete curriculum from fundamentals to credible journal publication" },
  { icon: Zap, title: "Nutshell Videos", description: "Concise 10-15 minute lessons for maximum learning" },
  { icon: Trophy, title: "Gamified Interface", description: "Streak-based incentives, leaderboards, and achievements" },
  { icon: Globe, title: "Native Language", description: "Learn in your own language with localized content" },
  { icon: Brain, title: "AI Support", description: "Intelligent chatbot and personalized algorithms" },
  { icon: Users, title: "Expert Sessions", description: "1-to-1 discussions with experts and peers" },
  { icon: Target, title: "Personalized Path", description: "AI-driven customizable learning algorithm" },
  { icon: Shield, title: "Focused Community", description: "Distraction-free networking with like-minded peers" },
  { icon: Sparkles, title: "Publication Guarantee", description: "Guaranteed publication in credible journals" },
  { icon: Heart, title: "Merit-based Waivers", description: "Scholarships based on test and performance" },
];

const timeline = [
  { quarter: "Q1", title: "Foundation", description: "Set up initial resources with voluntary help, secure welfare sponsors" },
  { quarter: "Q2", title: "Market Entry", description: "On-field marketing in South Asian high schools, free seminars and bootcamps" },
  { quarter: "Q3", title: "Growth", description: "Broader media presence, government and NGO funding, global researcher outreach" },
  { quarter: "Q4", title: "Breakeven", description: "Revenue covers operational costs, surplus funds expansion" },
  { quarter: "Q5", title: "Global Expansion", description: "Extend to Asia, Africa, and Latin America with local partnerships" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">Home</Button>
            </Link>
            <Link to="/select-role">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10">
            <LightBulb size="sm" delay={0.2} />
          </div>
          <div className="absolute top-20 right-20">
            <LightBulb size="md" delay={0.4} />
          </div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About UREKA
          </motion.span>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Empowering Youth Through{" "}
            <span className="text-gradient">Research Excellence</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            UREKA bridges the gap between potential and opportunity, providing young researchers 
            in developing countries with a complete pathway from basics to publication in credible academic journals.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We believe every young mind deserves access to quality education and the opportunity 
                to contribute to global knowledge. UREKA exists to democratize research education, 
                making it accessible, engaging, and impactful.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Through gamified learning, AI-powered personalization, and a supportive community, 
                we transform curious minds into published researchers, regardless of their background 
                or location.
              </p>
            </div>
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              The <span className="text-gradient">Challenge</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The global education crisis is leaving millions of young people behind.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {[
                "200 million youth aged 15-24 haven't completed primary school",
                "6 out of 10 children globally lack minimum proficiency in reading and math",
                "Only 22% of African students achieve minimum math proficiency",
                "75% of youth in 92 countries are off-track for employment skills",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-destructive/30">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm">!</span>
                  </div>
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {[
                "Education systems prioritize testing over practical skills",
                "Young people lack core employability skills",
                "Limited access to quality research education",
                "No clear pathway to academic publication",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-muted">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-muted-foreground text-sm">•</span>
                  </div>
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution / Features Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient">Solution</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive platform with 10 core features designed for impact.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="bg-card border border-border rounded-2xl p-5 hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unique Value Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">
                What Makes Us <span className="text-gradient">Unique</span>
              </h2>
              <div className="space-y-4">
                {[
                  { icon: GraduationCap, text: "Complete pathway from basics to publication — one package, one price" },
                  { icon: Users, text: "Focused networking without social media distractions" },
                  { icon: Heart, text: "Freemium model with merit-based scholarships and waivers" },
                  { icon: Globe, text: "Native language support for true accessibility" },
                  { icon: Rocket, text: "FOMO-inspired gamification for enhanced productivity" },
                ].map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <p className="text-foreground">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-card border border-border rounded-3xl p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient mb-4">FREE</div>
                <p className="text-lg font-medium mb-2">Your First Complete Project</p>
                <p className="text-muted-foreground mb-6">
                  From basics to publication in credible journals — absolutely free.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground text-left">
                  <p>✓ Full course access</p>
                  <p>✓ AI assistance included</p>
                  <p>✓ Community access</p>
                  <p>✓ Journal publication support</p>
                  <p>✓ Certificate of completion</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Timeline */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient">Growth Plan</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A sustainable model built for long-term impact.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.quarter}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card border border-border rounded-2xl p-6 inline-block">
                      <div className="text-2xl font-bold text-gradient mb-2">{item.quarter}</div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full gradient-primary border-4 border-background hidden md:block z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              From the <span className="text-gradient">Founders</span>
            </h2>
          </motion.div>

          {/* Founder Images */}
          <div className="flex items-center justify-center gap-8 md:gap-16 mb-16">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Glowing Circle Container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  {/* Outer glow ring - pulsing on/off like light bulb */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary blur-md"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  />
                  {/* Spinning gradient border */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Inner container */}
                  <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center overflow-hidden">
                    {founder.image ? (
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <User className="w-12 h-12 md:w-16 md:h-16 text-muted-foreground" />
                    )}
                  </div>
                </div>
                <h3 className="font-semibold mt-4 text-center text-base md:text-lg">
                  {founder.name}
                </h3>
                <p className="text-sm text-muted-foreground">{founder.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Founders Message */}
          <motion.div
            className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We built this platform after confronting a reality that is often overlooked: being enrolled in school does not guarantee meaningful education.
              </p>
              <p>
                Across developing countries, millions of teenagers attend school yet fail to acquire basic literacy, critical thinking, or practical skills. Many never complete primary education at all. This is not a reflection of their ability or ambition—it is the result of systemic shortcomings that continue to disadvantage young people from low- and middle-income communities.
              </p>
              <p>
                Educational inequality goes far beyond access to classrooms. It includes overcrowded schools, undertrained teachers, outdated curricula, economic pressure that forces students to work, and limited access to technology. These challenges silently shape outcomes long before teenagers are given a fair chance to define their future.
              </p>
              <p>
                This website exists to present the facts behind the statistics—to document the scale of the problem, highlight structural barriers, and encourage informed discussion around solutions. Our goal is not to dramatize the issue, but to clearly expose it.
              </p>
              <p>
                We believe that meaningful change begins with understanding. If societies expect the next generation to drive progress, innovation, and stability, then education systems must be held to a higher standard.
              </p>
              <p className="font-medium text-foreground">
                This platform is a step toward accountability, awareness, and action.
              </p>
              <p className="text-primary font-semibold mt-8">
                — The Founders
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Join the <span className="text-gradient">Movement</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Whether you want to learn, teach, or sponsor — there's a place for you at UREKA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/select-role">
              <Button variant="hero" size="xl">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </Link>
          </div>
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

export default About;
