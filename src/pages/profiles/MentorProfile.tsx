import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/Cards";
import { 
  Settings, 
  Edit2, 
  Users, 
  Calendar, 
  Star,
  DollarSign,
  Award,
  BookOpen,
  Mail,
  MapPin,
  Share2,
  Briefcase
} from "lucide-react";

const expertiseAreas = [
  "Machine Learning",
  "Data Science",
  "Research Methods",
  "Statistical Analysis",
  "Academic Writing"
];

const reviews = [
  { 
    name: "Sarah Mitchell", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    rating: 5,
    comment: "Incredibly helpful mentor. Clear explanations and great feedback!",
    date: "2 days ago"
  },
  { 
    name: "James Wilson", 
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    rating: 5,
    comment: "Dr. Smith helped me understand complex concepts easily.",
    date: "1 week ago"
  },
  { 
    name: "Emily Thompson", 
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    rating: 4,
    comment: "Very knowledgeable and patient. Highly recommend!",
    date: "2 weeks ago"
  },
];

const MentorProfile = () => {
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
              <div className="w-28 h-28 rounded-full bg-secondary p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <Edit2 className="w-4 h-4 text-secondary-foreground" />
              </button>
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h1 className="text-2xl font-bold mb-1">Dr. John Smith</h1>
                <p className="text-secondary mb-2">@drjohnsmith</p>
                <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-sm font-medium rounded-full mb-3">
                  Mentor
                </span>
                <p className="text-muted-foreground text-sm max-w-md">
                  Associate Professor at MIT | 15+ years in Data Science research | 
                  Helping the next generation of researchers succeed.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Boston, USA
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" /> MIT
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" /> drsmith@mit.edu
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
          <StatsCard value="48" label="Students Mentored" icon={<Users className="w-5 h-5 text-primary" />} />
          <StatsCard value="156" label="Sessions Held" icon={<Calendar className="w-5 h-5 text-secondary" />} variant="secondary" />
          <StatsCard value="4.9" label="Average Rating" icon={<Star className="w-5 h-5 text-primary" />} />
          <StatsCard value="$8.2k" label="Earnings" icon={<DollarSign className="w-5 h-5 text-secondary" />} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Expertise Areas */}
          <motion.div
            className="bg-card border border-border rounded-2xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">Expertise Areas</h2>
            <div className="flex flex-wrap gap-2">
              {expertiseAreas.map((area, i) => (
                <motion.span
                  key={area}
                  className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                >
                  {area}
                </motion.span>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-semibold mb-3">Credentials</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Ph.D. in Computer Science, Stanford University</p>
                <p>• 45+ peer-reviewed publications</p>
                <p>• NSF Research Grant Recipient</p>
                <p>• Best Paper Award, ICML 2022</p>
              </div>
            </div>
          </motion.div>

          {/* Reviews */}
          <motion.div
            className="bg-card border border-border rounded-2xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Student Reviews</h2>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-secondary fill-secondary" />
                <span className="font-semibold">4.9</span>
                <span className="text-muted-foreground text-sm">(156)</span>
              </div>
            </div>
            <div className="space-y-4">
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  className="pb-4 border-b border-border last:border-0 last:pb-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img src={review.avatar} alt={review.name} className="w-8 h-8 rounded-full object-cover" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{review.name}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star 
                            key={j} 
                            className={`w-3 h-3 ${j < review.rating ? "text-secondary fill-secondary" : "text-muted"}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Session Booking */}
        <motion.div
          className="mt-6 bg-secondary rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-secondary-foreground">Book a Session</h3>
              <p className="text-secondary-foreground/70">30-minute 1-on-1 mentoring session</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-2xl font-bold text-secondary-foreground">$45</p>
                <p className="text-sm text-secondary-foreground/70">per session</p>
              </div>
              <Button className="gradient-primary text-primary-foreground">
                Schedule Now
              </Button>
            </div>
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default MentorProfile;
