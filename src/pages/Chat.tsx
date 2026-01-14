import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Lightbulb,
  BookOpen,
  FileText,
  Code,
  Mic,
  Paperclip
} from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedPrompts = [
  { icon: BookOpen, text: "Help me understand research methodology" },
  { icon: FileText, text: "Review my abstract draft" },
  { icon: Code, text: "Explain statistical analysis" },
  { icon: Lightbulb, text: "Generate research topic ideas" },
];

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content: "Hello! 👋 I'm your UREKA AI Research Assistant. I can help you with:\n\n• Research methodology and design\n• Literature review guidance\n• Writing and editing support\n• Statistical analysis explanations\n• Publication process navigation\n\nHow can I assist your research journey today?",
    timestamp: new Date(),
  },
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        methodology: "Great question about research methodology! Here are the key steps:\n\n1. **Define your research problem** - Be specific about what you want to investigate\n2. **Review existing literature** - Understand what's already known\n3. **Choose your approach** - Qualitative, quantitative, or mixed methods\n4. **Select data collection methods** - Surveys, interviews, experiments, etc.\n5. **Plan your analysis** - How will you interpret the data?\n\nWould you like me to elaborate on any of these steps?",
        abstract: "I'd be happy to help review your abstract! A strong abstract should include:\n\n• **Background** - Why is this research important?\n• **Objective** - What did you aim to achieve?\n• **Methods** - How did you conduct the research?\n• **Results** - What did you find?\n• **Conclusion** - What does it mean?\n\nPlease share your draft, and I'll provide specific feedback!",
        default: "That's an interesting question! Based on your query, I'd recommend starting with a clear research framework. Would you like me to:\n\n1. Explain foundational concepts\n2. Suggest relevant resources\n3. Help you develop a research plan\n4. Review any work you've done so far\n\nLet me know how I can best support your research!",
      };

      let response = responses.default;
      if (input.toLowerCase().includes("methodology")) response = responses.methodology;
      if (input.toLowerCase().includes("abstract")) response = responses.abstract;

      const aiMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 pb-24 md:pb-8 flex flex-col max-w-4xl mx-auto w-full px-4">
        {/* Chat Header */}
        <motion.div
          className="flex items-center gap-3 py-4 border-b border-border"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold flex items-center gap-2">
              UREKA AI Assistant
              <Sparkles className="w-4 h-4 text-secondary" />
            </h1>
            <p className="text-sm text-muted-foreground">Your research companion</p>
          </div>
        </motion.div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6 custom-scrollbar">
          <AnimatePresence>
            {messages.map((message, i) => (
              <motion.div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {message.role === "assistant" && (
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-primary-foreground" />
                  </div>
                )}
                
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-4 ${
                    message.role === "user"
                      ? "gradient-primary text-primary-foreground"
                      : "bg-card border border-border"
                  }`}
                >
                  <p className="whitespace-pre-line text-sm leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-2 ${
                    message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                {message.role === "user" && (
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-secondary-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="bg-card border border-border rounded-2xl px-5 py-4">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts */}
        {messages.length === 1 && (
          <motion.div
            className="grid grid-cols-2 gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {suggestedPrompts.map((prompt, i) => {
              const Icon = prompt.icon;
              return (
                <motion.button
                  key={i}
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors text-left"
                  onClick={() => handlePromptClick(prompt.text)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm">{prompt.text}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* Input */}
        <motion.div
          className="border-t border-border pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Paperclip className="w-5 h-5" />
            </Button>
            <div className="flex-1 relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                placeholder="Ask anything about your research..."
                className="pr-12"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2"
              >
                <Mic className="w-5 h-5 text-muted-foreground" />
              </Button>
            </div>
            <Button onClick={handleSend} disabled={!input.trim()}>
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Chat;
