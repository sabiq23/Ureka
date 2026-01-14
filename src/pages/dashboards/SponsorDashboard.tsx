import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { StatsCard } from "@/components/Cards";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users,
  GraduationCap,
  FileText,
  ArrowRight,
  TrendingUp,
  Globe,
  DollarSign,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const impactData = [
  { name: "Scholarships", value: 45, color: "hsl(var(--primary))" },
  { name: "Research Grants", value: 30, color: "hsl(var(--secondary))" },
  { name: "Publication Support", value: 25, color: "hsl(210, 70%, 50%)" },
];

const featuredScholars = [
  { 
    name: "Sarah Mitchell", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    field: "Environmental Science",
    country: "Kenya",
    status: "Published"
  },
  { 
    name: "James Wilson", 
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    field: "Public Health",
    country: "Bangladesh",
    status: "In Progress"
  },
  { 
    name: "Emily Thompson", 
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    field: "Education Technology",
    country: "Nigeria",
    status: "Published"
  },
];

const recentContributions = [
  { type: "Scholarship", recipient: "Maria Santos", amount: "$500", date: "2 days ago" },
  { type: "Research Grant", recipient: "Ahmed Hassan", amount: "$1,200", date: "1 week ago" },
  { type: "Publication Fee", recipient: "Priya Patel", amount: "$350", date: "2 weeks ago" },
];

const SponsorDashboard = () => {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      <Navbar />
      
      <main className="pt-20 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">Welcome back, <span className="text-gradient">Sponsor</span>!</h1>
          <p className="text-muted-foreground">Your generosity is changing lives worldwide</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <StatsCard value="24" label="Students Funded" icon={<Users className="w-5 h-5" />} variant="primary" />
          <StatsCard value="8" label="Publications Enabled" icon={<FileText className="w-5 h-5" />} />
          <StatsCard value="$12,500" label="Total Contributed" icon={<DollarSign className="w-5 h-5" />} variant="secondary" />
          <StatsCard value="6" label="Countries Reached" icon={<Globe className="w-5 h-5" />} />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Impact Overview */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Your Impact</h2>
                <Button variant="ghost" size="sm">
                  View Report <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={impactData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {impactData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  {impactData.map((item, i) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="flex-1 text-sm">{item.name}</span>
                      <span className="font-semibold">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Featured Scholars */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Scholars You Support</h2>
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="space-y-4">
                {featuredScholars.map((scholar, i) => (
                  <motion.div
                    key={scholar.name}
                    className="flex items-center gap-4 p-3 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  >
                    <img src={scholar.avatar} alt={scholar.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <p className="font-medium">{scholar.name}</p>
                      <p className="text-sm text-muted-foreground">{scholar.field}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        scholar.status === "Published" 
                          ? "bg-green-500/20 text-green-500" 
                          : "bg-primary/20 text-primary"
                      }`}>
                        {scholar.status}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{scholar.country}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Contributions */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold mb-4">Recent Contributions</h2>
              <div className="space-y-3">
                {recentContributions.map((contribution, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                        <Heart className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">{contribution.type}</p>
                        <p className="text-sm text-muted-foreground">{contribution.recipient}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-secondary">{contribution.amount}</p>
                      <p className="text-xs text-muted-foreground">{contribution.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button className="w-full justify-start gap-3 gradient-primary text-primary-foreground">
                  <Heart className="w-5 h-5" />
                  Make a Donation
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Browse Scholars
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <FileText className="w-5 h-5 text-secondary" />
                  View Impact Report
                </Button>
              </div>
            </motion.div>

            {/* Funding Opportunities */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-4">Funding Opportunities</h2>
              <div className="space-y-4">
                {[
                  { title: "Student Scholarship", amount: "$500", impact: "Fund 1 student's journey" },
                  { title: "Research Grant", amount: "$1,200", impact: "Support a research project" },
                  { title: "Publication Fee", amount: "$350", impact: "Enable journal publication" },
                ].map((opportunity, i) => (
                  <motion.div
                    key={opportunity.title}
                    className="p-4 border border-border rounded-xl hover:border-primary/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">{opportunity.title}</p>
                      <span className="text-secondary font-semibold">{opportunity.amount}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{opportunity.impact}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Global Impact */}
            <motion.div
              className="bg-secondary rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-secondary-foreground" />
                <h2 className="text-xl font-semibold text-secondary-foreground">Global Impact</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground/70">Students Helped</span>
                  <span className="font-semibold text-secondary-foreground">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground/70">Countries</span>
                  <span className="font-semibold text-secondary-foreground">6</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground/70">Publications</span>
                  <span className="font-semibold text-secondary-foreground">8</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default SponsorDashboard;
