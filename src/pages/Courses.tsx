import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/Cards";
import { 
  Play, 
  Pause,
  BookOpen, 
  Clock, 
  Star,
  ChevronLeft,
  ChevronRight,
  Lock,
  CheckCircle,
  List,
  LayoutGrid,
  Filter
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  "All Courses",
  "Research Methods",
  "Data Analysis",
  "Academic Writing",
  "Publication",
  "AI & ML",
];

const courses = [
  {
    id: 1,
    title: "Introduction to Research Methodology",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600",
    category: "Research Methods",
    duration: "2h 30m",
    lessons: 12,
    progress: 100,
    rating: 4.9,
    enrolled: 15420,
  },
  {
    id: 2,
    title: "Literature Review Mastery",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600",
    category: "Academic Writing",
    duration: "3h 15m",
    lessons: 18,
    progress: 65,
    rating: 4.8,
    enrolled: 12350,
  },
  {
    id: 3,
    title: "Statistical Analysis with Python",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    category: "Data Analysis",
    duration: "4h 45m",
    lessons: 24,
    progress: 30,
    rating: 4.7,
    enrolled: 9870,
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600",
    category: "AI & ML",
    duration: "5h 20m",
    lessons: 28,
    progress: 0,
    rating: 4.9,
    enrolled: 8540,
  },
  {
    id: 5,
    title: "How to Write a Research Paper",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600",
    category: "Academic Writing",
    duration: "2h 50m",
    lessons: 15,
    progress: 0,
    rating: 4.8,
    enrolled: 18920,
  },
  {
    id: 6,
    title: "Publication in Top Journals",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
    category: "Publication",
    duration: "3h 30m",
    lessons: 20,
    progress: 0,
    rating: 4.9,
    enrolled: 7650,
  },
];

const currentCourse = courses[1]; // Literature Review Mastery

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const navigate = useNavigate();

  const filteredCourses = activeCategory === "All Courses" 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      <Navbar />
      
      <main className="pt-20 px-4 max-w-6xl mx-auto">
        {/* Continue Learning */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto relative">
                <img 
                  src={currentCourse.image} 
                  alt={currentCourse.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent md:bg-gradient-to-r" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full gradient-primary flex items-center justify-center glow-primary hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-primary-foreground ml-1" />
                </button>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="text-sm text-primary mb-2">{currentCourse.category}</span>
                <h3 className="text-xl font-semibold mb-3">{currentCourse.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {currentCourse.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {currentCourse.duration}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>{currentCourse.progress}% complete</span>
                    <span className="text-muted-foreground">Lesson 8 of {currentCourse.lessons}</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full gradient-primary rounded-full transition-all"
                      style={{ width: `${currentCourse.progress}%` }}
                    />
                  </div>
                </div>
                <Button>
                  <Play className="w-4 h-4 mr-2" />
                  Continue Course
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex items-center gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex gap-2 flex-shrink-0">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0"
              >
                {cat}
              </Button>
            ))}
          </div>
          <div className="flex-1" />
          <div className="flex gap-1 flex-shrink-0">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <LayoutGrid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          className={viewMode === "grid" 
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              {viewMode === "grid" ? (
                <div 
                  className="group bg-card border border-border rounded-2xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    {course.progress > 0 && (
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium gradient-primary text-primary-foreground">
                        {course.progress}%
                      </div>
                    )}
                    {course.progress === 0 && i > 2 && (
                      <div className="absolute top-3 right-3 p-2 rounded-full bg-muted/80">
                        <Lock className="w-4 h-4 text-muted-foreground" />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                      <div 
                        className="h-full gradient-primary"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-primary">{course.category}</span>
                    <h3 className="font-semibold mt-1 mb-2 line-clamp-2">{course.title}</h3>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {course.lessons}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {course.duration}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-secondary fill-secondary" />
                        {course.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div 
                  className="flex gap-4 bg-card border border-border rounded-xl p-4 cursor-pointer hover:border-primary/50 transition-all"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  <div className="w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-primary">{course.category}</span>
                    <h3 className="font-semibold mt-1">{course.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {course.lessons} lessons
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-secondary fill-secondary" />
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {course.progress > 0 ? (
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{course.progress}%</div>
                        <div className="text-xs text-muted-foreground">Complete</div>
                      </div>
                    ) : (
                      <Button size="sm">Start</Button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Courses;
