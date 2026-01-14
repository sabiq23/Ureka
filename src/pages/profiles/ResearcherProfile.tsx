import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/Cards";
import { 
  Settings, 
  Edit2, 
  BookOpen, 
  Flame, 
  Trophy, 
  Star,
  Award,
  Target,
  Calendar,
  Mail,
  MapPin,
  Share2
} from "lucide-react";
import { Link } from "react-router-dom";

const achievements = [
  { icon: Trophy, label: "First Publication", unlocked: false },
  { icon: Star, label: "7-Day Streak", unlocked: true },
  { icon: Award, label: "Top 10%", unlocked: false },
  { icon: Target, label: "Complete Course", unlocked: true },
];

const recentActivity = [
  { type: "course", title: "Completed: Research Methods 101", time: "2 hours ago" },
  { type: "streak", title: "Maintained 23-day streak!", time: "Today" },
  { type: "achievement", title: "Earned: First Steps badge", time: "Yesterday" },
  { type: "community", title: "Posted in Machine Learning group", time: "2 days ago" },
];

const ResearcherProfile = () => {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      <Navbar />
      
      <main className="pt-20 px-4 max-w-4xl mx-auto">
        {/* Profile Header */}
        <motion.div
          className="bg-card border border-border rounded-3xl p-6 md:p-8 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-28 h-28 rounded-full gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <Edit2 className="w-4 h-4 text-primary-foreground" />
              </button>
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h1 className="text-2xl font-bold mb-1">Alex Johnson</h1>
                <p className="text-primary mb-3">@alexjohnson</p>
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                  Researcher
                </span>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Bangladesh
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> Joined Dec 2024
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" /> alex@email.com
                </span>
              </motion.div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StatsCard value="7" label="Courses Done" icon={<BookOpen className="w-5 h-5 text-primary" />} />
          <StatsCard value="23" label="Days Streak" icon={<Flame className="w-5 h-5 text-secondary" />} variant="secondary" />
          <StatsCard value="#42" label="Global Rank" icon={<Trophy className="w-5 h-5 text-primary" />} />
          <StatsCard value="4.8" label="Avg. Rating" icon={<Star className="w-5 h-5 text-secondary" />} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Achievements */}
          <motion.div
            className="bg-card border border-border rounded-2xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, i) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.label}
                    className={`p-4 rounded-xl border ${
                      achievement.unlocked 
                        ? "bg-primary/10 border-primary/30" 
                        : "bg-muted/50 border-border opacity-50"
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  >
                    <Icon className={`w-8 h-8 mb-2 ${
                      achievement.unlocked ? "text-primary" : "text-muted-foreground"
                    }`} />
                    <p className="text-sm font-medium">{achievement.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {achievement.unlocked ? "Unlocked" : "Locked"}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="bg-card border border-border rounded-2xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full gradient-primary mt-2" />
                  <div>
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Share Post */}
        <motion.div
          className="mt-6 bg-card border border-border rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full gradient-primary" />
            <input
              type="text"
              placeholder="Share your thoughts with the community..."
              className="flex-1 bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <Button size="sm">Post</Button>
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default ResearcherProfile;
