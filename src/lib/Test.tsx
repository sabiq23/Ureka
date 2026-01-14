import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  CheckCircle, 
  XCircle,
  ChevronLeft,
  ChevronRight,
  Flag,
  HelpCircle
} from "lucide-react";

const questions = [
  {
    id: 1,
    question: "What is the primary purpose of a literature review in research?",
    options: [
      "To copy existing research",
      "To identify gaps and establish context for your study",
      "To increase the word count of your paper",
      "To list all books you've read",
    ],
    correct: 1,
  },
  {
    id: 2,
    question: "Which of the following is NOT a characteristic of a good research question?",
    options: [
      "Specific and focused",
      "Researchable with available resources",
      "Too broad to answer definitively",
      "Relevant to the field of study",
    ],
    correct: 2,
  },
  {
    id: 3,
    question: "What does 'peer review' mean in academic publishing?",
    options: [
      "Friends reviewing your paper",
      "Experts in the field evaluating the research before publication",
      "Self-review of your own work",
      "AI-generated feedback",
    ],
    correct: 1,
  },
  {
    id: 4,
    question: "Which section of a research paper typically contains the methodology?",
    options: [
      "Abstract",
      "Introduction",
      "Methods",
      "Conclusion",
    ],
    correct: 2,
  },
  {
    id: 5,
    question: "What is the purpose of a hypothesis in research?",
    options: [
      "To conclude the research",
      "To make a testable prediction about the relationship between variables",
      "To summarize findings",
      "To list references",
    ],
    correct: 1,
  },
];

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const totalAnswered = Object.keys(selectedAnswers).length;

  const handleSelect = (optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const getScore = () => {
    let correct = 0;
    questions.forEach((q, i) => {
      if (selectedAnswers[i] === q.correct) correct++;
    });
    return correct;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const score = getScore();
    const percentage = (score / questions.length) * 100;

    return (
      <div className="min-h-screen bg-background pb-24 md:pb-8">
        <Navbar />
        
        <main className="pt-20 px-4 max-w-2xl mx-auto">
          <motion.div
            className="bg-card border border-border rounded-3xl p-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center ${
                percentage >= 70 ? "gradient-primary" : "bg-destructive/20"
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            >
              <span className="text-4xl font-bold text-primary-foreground">{Math.round(percentage)}%</span>
            </motion.div>

            <h2 className="text-2xl font-bold mb-2">
              {percentage >= 70 ? "Congratulations! 🎉" : "Keep Learning! 📚"}
            </h2>
            <p className="text-muted-foreground mb-6">
              You answered {score} out of {questions.length} questions correctly.
            </p>

            <div className="grid grid-cols-5 gap-2 mb-8">
              {questions.map((q, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium ${
                    selectedAnswers[i] === q.correct
                      ? "bg-green-500/20 text-green-500"
                      : "bg-destructive/20 text-destructive"
                  }`}
                >
                  {selectedAnswers[i] === q.correct ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <XCircle className="w-5 h-5" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => {
                setShowResults(false);
                setCurrentQuestion(0);
                setSelectedAnswers({});
              }}>
                Retry Test
              </Button>
              <Button onClick={() => window.history.back()}>
                Back to Course
              </Button>
            </div>
          </motion.div>
        </main>

        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      <Navbar />
      
      <main className="pt-20 px-4 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h1 className="text-xl font-semibold">Research Methods Quiz</h1>
            <p className="text-sm text-muted-foreground">Module 1 Assessment</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-mono font-semibold">{formatTime(timeLeft)}</span>
          </div>
        </motion.div>

        {/* Progress */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex items-center justify-between text-sm mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-muted-foreground">{totalAnswered} answered</span>
          </div>
          <div className="flex gap-1">
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQuestion(i)}
                className={`flex-1 h-2 rounded-full transition-all ${
                  i === currentQuestion
                    ? "gradient-primary"
                    : selectedAnswers[i] !== undefined
                    ? "bg-secondary"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-primary-foreground">{currentQuestion + 1}</span>
            </div>
            <h2 className="text-lg font-medium">{question.question}</h2>
          </div>

          <div className="space-y-3">
            {question.options.map((option, i) => (
              <motion.button
                key={i}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedAnswers[currentQuestion] === i
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => handleSelect(i)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswers[currentQuestion] === i
                      ? "border-primary bg-primary"
                      : "border-muted-foreground"
                  }`}>
                    {selectedAnswers[currentQuestion] === i && (
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Flag className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <HelpCircle className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentQuestion === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            {currentQuestion === questions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={totalAnswered < questions.length}
              >
                Submit Test
              </Button>
            ) : (
              <Button onClick={handleNext}>
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </motion.div>

        {/* Question Navigator */}
        <motion.div
          className="mt-8 p-4 bg-card border border-border rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground mb-3">Quick Navigation</p>
          <div className="flex gap-2 flex-wrap">
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQuestion(i)}
                className={`w-10 h-10 rounded-lg font-medium transition-all ${
                  i === currentQuestion
                    ? "gradient-primary text-primary-foreground"
                    : selectedAnswers[i] !== undefined
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Test;
