import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { StatsCard } from "@/components/Cards";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar,
  DollarSign,
  Star,
  Clock,
  MessageSquare,
  Video,
  FileCheck,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const mentees = [
  { name: "Sarah Mitchell", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", progress: 75, topic: "Machine Learning" },
  { name: "James Wilson", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", progress: 45, topic: "Data Science" },
  { name: "Emily Thompson", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100", progress: 90, topic: "Research Methods" },
];

const upcomingSessions = [
  { mentee: "Sarah Mitchell", time: "2:00 PM Today", topic: "Literature Review" },
  { mentee: "Michael Brown", time: "4:30 PM Today", topic: "Data Analysis" },
  { mentee: "Emily Thompson", time: "10:00 AM Tomorrow", topic: "Final Review" },
];

const pendingReviews = [
  { mentee: "James Wilson", type: "Research Proposal", submitted: "2 hours ago" },
  { mentee: "David Anderson", type: "Draft Chapter", submitted: "Yesterday" },
  { mentee: "Jessica Taylor", type: "Methodology", submitted: "2 days ago" },
];

const MentorDashboard = () => {
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
          <h1 className="text-3xl font-bold mb-2">Welcome back, <span className="text-gradient">Mentor</span>!</h1>
          <p className="text-muted-foreground">Guide the next generation of researchers</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <StatsCard value="12" label="Active Mentees" icon={<Users className="w-5 h-5" />} variant="primary" />
          <StatsCard value="8" label="Sessions This Week" icon={<Calendar className="w-5 h-5" />} />
          <StatsCard value="$2,450" label="Earnings This Month" icon={<DollarSign className="w-5 h-5" />} variant="secondary" />
          <StatsCard value="4.9" label="Average Rating" icon={<Star className="w-5 h-5" />} />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Mentees */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Active Mentees</h2>
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="space-y-4">
                {mentees.map((mentee, i) => (
                  <motion.div
                    key={mentee.name}
                    className="flex items-center gap-4 p-3 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  >
                    <img src={mentee.avatar} alt={mentee.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <p className="font-medium">{mentee.name}</p>
                      <p className="text-sm text-muted-foreground">{mentee.topic}</p>
                    </div>
                    <div className="text-right">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full gradient-primary rounded-full"
                          style={{ width: `${mentee.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{mentee.progress}% complete</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pending Reviews */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Pending Reviews</h2>
                <span className="px-2 py-1 bg-destructive/20 text-destructive text-xs font-medium rounded-full">
                  3 pending
                </span>
              </div>
              <div className="space-y-3">
                {pendingReviews.map((review, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                        <FileCheck className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">{review.mentee}</p>
                        <p className="text-sm text-muted-foreground">{review.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground">{review.submitted}</span>
                      <Button size="sm">Review</Button>
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
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Video className="w-5 h-5 text-primary" />
                  Start Session
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Calendar className="w-5 h-5 text-secondary" />
                  Schedule Session
                </Button>
                <Button className="w-full justify-start gap-3" variant="outline">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Message Student
                </Button>
              </div>
            </motion.div>

            {/* Upcoming Sessions */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
              <div className="space-y-4">
                {upcomingSessions.map((session, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full gradient-primary mt-2" />
                    <div className="flex-1">
                      <p className="font-medium">{session.mentee}</p>
                      <p className="text-sm text-muted-foreground">{session.topic}</p>
                      <div className="flex items-center gap-1 mt-1 text-xs text-primary">
                        <Clock className="w-3 h-3" />
                        {session.time}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Video className="w-4 h-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Earnings Summary */}
            <motion.div
              className="bg-secondary rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold text-secondary-foreground mb-4">Earnings This Month</h2>
              <div className="text-4xl font-bold text-secondary-foreground mb-2">$2,450</div>
              <p className="text-sm text-secondary-foreground/70 mb-4">From 24 sessions</p>
              <Link to="/earnings">
                <Button variant="outline" size="sm" className="w-full">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default MentorDashboard;
