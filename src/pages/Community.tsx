import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark,
  MoreHorizontal,
  Image as ImageIcon,
  Send,
  Users,
  TrendingUp,
  Hash
} from "lucide-react";

const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Chen",
      username: "@sarahchen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      badge: "Top Contributor",
    },
    content: "Just submitted my first research paper to the Journal of Applied Sciences! 🎉 The UREKA pathway made it so much easier to understand the publication process. Thank you to everyone who helped review my work!",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600",
    likes: 234,
    comments: 45,
    shares: 12,
    time: "2h ago",
    topic: "Research Success",
  },
  {
    id: 2,
    author: {
      name: "Ahmed Rahman",
      username: "@ahmedresearch",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      badge: "Rising Star",
    },
    content: "Looking for collaborators on a machine learning project focused on agricultural yield prediction in South Asia. DM if interested! 🌾🤖\n\n#MachineLearning #Agriculture #Research",
    likes: 89,
    comments: 23,
    shares: 8,
    time: "4h ago",
    topic: "Collaboration",
  },
  {
    id: 3,
    author: {
      name: "Dr. Maria Santos",
      username: "@drmariasantos",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      badge: "Mentor",
    },
    content: "Pro tip for new researchers: Start with a clear research question before diving into methodology. Your question should be:\n\n✓ Specific and focused\n✓ Researchable with available resources\n✓ Relevant to your field\n✓ Original or adds new perspective\n\nWhat research questions are you working on?",
    likes: 567,
    comments: 89,
    shares: 156,
    time: "6h ago",
    topic: "Tips & Advice",
  },
];

const trendingTopics = [
  { name: "Machine Learning", posts: 1234 },
  { name: "Climate Research", posts: 892 },
  { name: "Data Science", posts: 756 },
  { name: "Publication Tips", posts: 543 },
];

const suggestedConnections = [
  { name: "John Doe", field: "AI Research", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" },
  { name: "Emily Wang", field: "Biotechnology", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" },
  { name: "Carlos Ruiz", field: "Economics", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" },
];

const Community = () => {
  const [newPost, setNewPost] = useState("");

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      <Navbar />
      
      <main className="pt-20 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-6">
            {/* Create Post */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex-shrink-0" />
                <div className="flex-1">
                  <textarea
                    placeholder="Share your research insights, ask questions, or celebrate achievements..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="w-full bg-transparent border-none resize-none text-foreground placeholder:text-muted-foreground focus:outline-none min-h-[80px]"
                  />
                  <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <ImageIcon className="w-5 h-5 text-primary" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Hash className="w-5 h-5 text-muted-foreground" />
                      </Button>
                    </div>
                    <Button size="sm">
                      <Send className="w-4 h-4 mr-2" />
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feed Tabs */}
            <motion.div
              className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {["All", "Following", "Research", "Discussions", "Achievements"].map((tab, i) => (
                <Button
                  key={tab}
                  variant={i === 0 ? "default" : "ghost"}
                  size="sm"
                  className="flex-shrink-0"
                >
                  {tab}
                </Button>
              ))}
            </motion.div>

            {/* Posts */}
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                className="bg-card border border-border rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                {/* Author */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{post.author.name}</h3>
                        <span className="px-2 py-0.5 rounded-full text-xs gradient-primary text-primary-foreground">
                          {post.author.badge}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {post.author.username} · {post.time}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>

                {/* Topic */}
                <div className="mb-3">
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                    #{post.topic}
                  </span>
                </div>

                {/* Content */}
                <p className="text-foreground whitespace-pre-line mb-4">{post.content}</p>

                {/* Image */}
                {post.image && (
                  <div className="rounded-xl overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Heart className="w-4 h-4 mr-2" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Share2 className="w-4 h-4 mr-2" />
                    {post.shares}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-secondary">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block space-y-6">
            {/* Trending Topics */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h2 className="font-semibold">Trending Topics</h2>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, i) => (
                  <motion.div
                    key={topic.name}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  >
                    <span className="text-sm font-medium">#{topic.name}</span>
                    <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Suggested Connections */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-secondary" />
                <h2 className="font-semibold">People to Connect</h2>
              </div>
              <div className="space-y-4">
                {suggestedConnections.map((person, i) => (
                  <motion.div
                    key={person.name}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  >
                    <img
                      src={person.avatar}
                      alt={person.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{person.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{person.field}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Community;
