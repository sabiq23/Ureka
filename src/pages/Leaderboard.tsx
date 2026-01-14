import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Medal, 
  Crown, 
  Flame, 
  Star,
  TrendingUp,
  ArrowUp,
  ArrowDown
} from "lucide-react";

const topUsers = [
  { 
    rank: 1, 
    name: "Sarah Mitchell", 
    username: "@sarah_research",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    points: 15420,
    streak: 89,
    publications: 3,
    change: "up",
  },
  { 
    rank: 2, 
    name: "James Wilson", 
    username: "@jameswilson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    points: 14890,
    streak: 67,
    publications: 2,
    change: "up",
  },
  { 
    rank: 3, 
    name: "Emily Thompson", 
    username: "@emilythompson",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    points: 13750,
    streak: 45,
    publications: 2,
    change: "down",
  },
];

const leaderboardData = [
  { rank: 4, name: "Michael Brown", points: 12340, streak: 34, change: "up" },
  { rank: 5, name: "David Anderson", points: 11890, streak: 56, change: "same" },
  { rank: 6, name: "Jessica Taylor", points: 11450, streak: 23, change: "up" },
  { rank: 7, name: "Christopher Lee", points: 10980, streak: 41, change: "down" },
  { rank: 8, name: "Amanda White", points: 10560, streak: 19, change: "up" },
  { rank: 9, name: "Daniel Harris", points: 10120, streak: 28, change: "up" },
  { rank: 10, name: "Olivia Martin", points: 9870, streak: 15, change: "down" },
];

const currentUser = {
  rank: 42,
  name: "You",
  points: 4520,
  streak: 23,
  change: "up",
};

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      <Navbar />
      
      <main className="pt-20 px-4 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-gradient">Global</span> Leaderboard
          </h1>
          <p className="text-muted-foreground">Compete with researchers worldwide</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex gap-2 justify-center mb-8 overflow-x-auto pb-2 scrollbar-hide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {["This Week", "This Month", "All Time", "My Country"].map((tab, i) => (
            <Button
              key={tab}
              variant={i === 0 ? "default" : "ghost"}
              size="sm"
            >
              {tab}
            </Button>
          ))}
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          className="flex items-end justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 2nd Place */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full border-4 border-gray-400 overflow-hidden mx-auto">
                <img src={topUsers[1].avatar} alt={topUsers[1].name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                <Medal className="w-4 h-4 text-foreground" />
              </div>
            </div>
            <p className="font-semibold text-sm">{topUsers[1].name.split(" ")[0]}</p>
            <p className="text-xs text-muted-foreground">{topUsers[1].points.toLocaleString()} pts</p>
            <div className="w-16 h-24 mx-auto mt-2 rounded-t-lg bg-gray-400/20 border border-gray-400/50 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">2</span>
            </div>
          </motion.div>

          {/* 1st Place */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative mb-3">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Crown className="w-8 h-8 text-secondary mx-auto mb-1" />
              </motion.div>
              <div className="w-24 h-24 rounded-full border-4 border-secondary overflow-hidden mx-auto glow-secondary">
                <img src={topUsers[0].avatar} alt={topUsers[0].name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Trophy className="w-5 h-5 text-secondary-foreground" />
              </div>
            </div>
            <p className="font-semibold">{topUsers[0].name.split(" ")[0]}</p>
            <p className="text-sm text-primary">{topUsers[0].points.toLocaleString()} pts</p>
            <div className="w-20 h-32 mx-auto mt-2 rounded-t-lg gradient-primary flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-foreground">1</span>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full border-4 border-amber-700 overflow-hidden mx-auto">
                <img src={topUsers[2].avatar} alt={topUsers[2].name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center">
                <Medal className="w-4 h-4 text-foreground" />
              </div>
            </div>
            <p className="font-semibold text-sm">{topUsers[2].name.split(" ")[0]}</p>
            <p className="text-xs text-muted-foreground">{topUsers[2].points.toLocaleString()} pts</p>
            <div className="w-16 h-20 mx-auto mt-2 rounded-t-lg bg-amber-700/20 border border-amber-700/50 flex items-center justify-center">
              <span className="text-2xl font-bold text-amber-700">3</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Leaderboard List */}
        <motion.div
          className="bg-card border border-border rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-border text-sm text-muted-foreground font-medium">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Researcher</div>
            <div className="col-span-2 text-center">Points</div>
            <div className="col-span-2 text-center">Streak</div>
            <div className="col-span-2 text-center">Change</div>
          </div>

          {leaderboardData.map((user, i) => (
            <motion.div
              key={user.rank}
              className="grid grid-cols-12 gap-4 p-4 border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
            >
              <div className="col-span-1 font-semibold text-muted-foreground">
                {user.rank}
              </div>
              <div className="col-span-5 font-medium">{user.name}</div>
              <div className="col-span-2 text-center font-semibold text-primary">
                {user.points.toLocaleString()}
              </div>
              <div className="col-span-2 text-center flex items-center justify-center gap-1">
                <Flame className="w-4 h-4 text-secondary" />
                {user.streak}
              </div>
              <div className="col-span-2 flex justify-center">
                {user.change === "up" && <ArrowUp className="w-4 h-4 text-green-500" />}
                {user.change === "down" && <ArrowDown className="w-4 h-4 text-destructive" />}
                {user.change === "same" && <span className="text-muted-foreground">—</span>}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Your Position */}
        <motion.div
          className="mt-6 bg-primary/10 border border-primary/30 rounded-2xl p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-primary">#{currentUser.rank}</span>
              <div>
                <p className="font-semibold">Your Position</p>
                <p className="text-sm text-muted-foreground">{currentUser.points.toLocaleString()} points</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-secondary" />
                  <span className="font-semibold">{currentUser.streak}</span>
                </div>
                <p className="text-xs text-muted-foreground">Streak</p>
              </div>
              <div className="flex items-center gap-1 text-green-500">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">+5 this week</span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Leaderboard;
