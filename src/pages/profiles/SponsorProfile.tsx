import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/Cards";
import { 
  Settings, 
  Edit2, 
  Users, 
  FileText, 
  Globe,
  DollarSign,
  Heart,
  Mail,
  MapPin,
  Share2,
  Building2,
  TrendingUp
} from "lucide-react";

const sponsoredScholars = [
  { 
    name: "Maria Santos", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    field: "Environmental Science",
    country: "Brazil",
    status: "In Progress"
  },
  { 
    name: "Ahmed Hassan", 
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    field: "Public Health",
    country: "Egypt",
    status: "Published"
  },
  { 
    name: "Priya Patel", 
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    field: "Education Technology",
    country: "India",
    status: "Published"
  },
];

const contributionHistory = [
  { type: "Scholarship", amount: "$500", date: "Dec 2024", recipient: "Maria Santos" },
  { type: "Research Grant", amount: "$1,200", date: "Nov 2024", recipient: "Ahmed Hassan" },
  { type: "Publication Fee", amount: "$350", date: "Nov 2024", recipient: "Priya Patel" },
  { type: "Scholarship", amount: "$500", date: "Oct 2024", recipient: "James Kim" },
];

const SponsorProfile = () => {
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
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <Edit2 className="w-4 h-4 text-white" />
              </button>
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h1 className="text-2xl font-bold mb-1">Michael Anderson</h1>
                <p className="text-pink-500 mb-2">@manderson_giving</p>
                <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-500 text-sm font-medium rounded-full mb-3">
                  Sponsor
                </span>
                <p className="text-muted-foreground text-sm max-w-md">
                  Passionate about education equity | CEO at TechForward | 
                  Committed to empowering young researchers worldwide.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> San Francisco, USA
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" /> TechForward Inc.
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" /> michael@techforward.com
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
          <StatsCard value="24" label="Students Funded" icon={<Users className="w-5 h-5 text-pink-500" />} />
          <StatsCard value="8" label="Publications" icon={<FileText className="w-5 h-5 text-secondary" />} variant="secondary" />
          <StatsCard value="$12.5k" label="Total Given" icon={<DollarSign className="w-5 h-5 text-pink-500" />} />
          <StatsCard value="6" label="Countries" icon={<Globe className="w-5 h-5 text-secondary" />} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sponsored Scholars */}
          <motion.div
            className="bg-card border border-border rounded-2xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">Your Scholars</h2>
            <div className="space-y-4">
              {sponsoredScholars.map((scholar, i) => (
                <motion.div
                  key={scholar.name}
                  className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                >
                  <img src={scholar.avatar} alt={scholar.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{scholar.name}</p>
                    <p className="text-xs text-muted-foreground">{scholar.field}</p>
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

          {/* Contribution History */}
          <motion.div
            className="bg-card border border-border rounded-2xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">Contribution History</h2>
            <div className="space-y-4">
              {contributionHistory.map((contribution, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{contribution.type}</p>
                      <p className="text-xs text-muted-foreground">{contribution.recipient}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-pink-500">{contribution.amount}</p>
                    <p className="text-xs text-muted-foreground">{contribution.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Impact Summary */}
        <motion.div
          className="mt-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-white" />
            <h3 className="text-xl font-semibold text-white">Your Impact</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-white">24</p>
              <p className="text-sm text-white/80">Lives Changed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">8</p>
              <p className="text-sm text-white/80">Papers Published</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">6</p>
              <p className="text-sm text-white/80">Countries Reached</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20">
            <Button variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20">
              Download Impact Report
            </Button>
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default SponsorProfile;
