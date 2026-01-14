import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { StatsCard, ProgressCard } from "@/components/Cards";
import { Button } from "@/components/ui/button";
import { 
  Flame, 
  BookOpen, 
  ArrowRight, 
  Play,
  FileText,
  MessageSquare,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const activityData = [
  { day: "Fri", minutes: 180 },
  { day: "Sat", minutes: 240 },
  { day: "Sun", minutes: 120 },
  { day: "Mon", minutes: 200 },
  { day: "Tue", minutes: 90 },
  { day: "Wed", minutes: 160 },
  { day: "Thu", minutes: 140 },
];

const pendingTasks = [
  { id: 1, title: "Speaking", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300" },
  { id: 2, title: "Exam", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300" },
  { id: 3, title: "Session", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300" },
];

const suggestedCourses = [
  { title: "Machine Learning", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=300" },
  { title: "Competitive Programming", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300" },
  { title: "Microsoft Office", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" },
];

const ResearcherDashboard = () => {
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
          <h1 className="text-3xl font-bold mb-2">Welcome back, <span className="text-gradient">Researcher</span>!</h1>
          <p className="text-muted-foreground">Continue your journey to publication</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pending Tasks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Pending Tasks</h2>
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {pendingTasks.map((task, i) => (
                  <motion.div
                    key={task.id}
                    className="flex-shrink-0 w-32 group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="aspect-square rounded-xl overflow-hidden relative mb-2">
                      <img 
                        src={task.image} 
                        alt={task.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <span className="text-sm font-medium">{task.title}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Activity Chart */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Activity</h2>
                <span className="text-sm text-muted-foreground">This Week</span>
              </div>
              <p className="text-sm text-primary mb-4">Minutes of Productivity</p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activityData}>
                    <XAxis 
                      dataKey="day" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        background: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      labelStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Bar 
                      dataKey="minutes" 
                      fill="hsl(var(--secondary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Suggested Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Suggested For You</h2>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {suggestedCourses.map((course, i) => (
                  <motion.div
                    key={course.title}
                    className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-xs font-medium">{course.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Notes */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Notes</h2>
              </div>
              <textarea
                placeholder="Preserve your insights here..."
                className="w-full h-24 bg-muted/50 border border-border rounded-xl p-4 resize-none text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StatsCard
                value="7"
                label="Courses Done"
                variant="primary"
                icon={<BookOpen className="w-5 h-5" />}
              />
              <StatsCard
                value="23"
                label="Days Streak"
                variant="secondary"
                icon={<Flame className="w-5 h-5" />}
              />
            </motion.div>

            {/* Continue Course */}
            <motion.div
              className="bg-secondary rounded-2xl p-6 cursor-pointer hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/courses" className="block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-foreground">Hop into your Courses!</h3>
                    <p className="text-sm text-secondary-foreground/70">Continue where you left off</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Progress Path */}
            <ProgressCard title="Progress" subtitle="Just 5 more steps ahead to be a Novice Researcher!">
              <div className="relative py-4">
                <svg className="w-full h-32" viewBox="0 0 200 80">
                  <path
                    d="M 10 70 Q 50 70, 60 50 Q 70 30, 100 30 Q 130 30, 140 50 Q 150 70, 190 70"
                    stroke="hsl(var(--muted))"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M 10 70 Q 50 70, 60 50 Q 70 30, 80 35"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="3"
                    fill="none"
                  />
                  {[
                    { x: 10, y: 70, completed: true },
                    { x: 40, y: 60, completed: true },
                    { x: 60, y: 50, completed: true },
                    { x: 80, y: 35, completed: false, current: true },
                    { x: 100, y: 30, completed: false },
                    { x: 120, y: 35, completed: false },
                    { x: 140, y: 50, completed: false },
                    { x: 190, y: 70, completed: false },
                  ].map((node, i) => (
                    <g key={i}>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={node.current ? 8 : 6}
                        fill={node.completed ? "hsl(var(--secondary))" : node.current ? "hsl(var(--primary))" : "hsl(var(--muted))"}
                        stroke={node.current ? "hsl(var(--primary))" : "none"}
                        strokeWidth={node.current ? 3 : 0}
                      />
                      {node.completed && (
                        <path
                          d={`M ${node.x - 3} ${node.y} L ${node.x - 1} ${node.y + 2} L ${node.x + 3} ${node.y - 2}`}
                          stroke="hsl(var(--secondary-foreground))"
                          strokeWidth="2"
                          fill="none"
                        />
                      )}
                    </g>
                  ))}
                </svg>
                
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>Start</span>
                  <span className="text-primary font-medium">You're Here</span>
                  <span>Publication</span>
                </div>
              </div>
            </ProgressCard>

            {/* Quick Actions */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to="/chat">
                <Button variant="outline" className="w-full justify-start gap-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Ask AI Assistant
                </Button>
              </Link>
              <Link to="/community">
                <Button variant="outline" className="w-full justify-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Check Your Previous Records
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

export default ResearcherDashboard;
