import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/1ba052a5-f4cb-4975-b68f-d865c22df9b6.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Língua Hub
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Aprenda inglês para falar com o mundo.
          </p>
          
          {/* English Level Test */}
          <Card className="max-w-lg mx-auto p-8 bg-card/95 backdrop-blur-sm shadow-elegant">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Teste seu nível de inglês
            </h2>
            <p className="text-accent mb-6">
              Descubra seu nível em apenas 5 minutos ✨
            </p>
            
            <div className="text-left mb-6">
              <p className="text-muted-foreground mb-4">Complete a frase:</p>
              <p className="text-lg font-medium text-foreground mb-4">
                "___ you speak English?"
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {["Do", "Does", "Are", "Have"].map((option) => (
                  <Button
                    key={option}
                    variant={selectedAnswer === option ? "default" : "outline"}
                    onClick={() => handleAnswerSelect(option)}
                    className="w-full"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            
            {showResult && (
              <div className="border-t pt-6 mt-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-2xl">🎓</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Seu nível de inglês
                </p>
                <p className="text-lg font-bold text-primary mb-4">
                  {selectedAnswer === "Do" ? "Intermediário" : "Iniciante"}
                </p>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90 shadow-glow">
                  Comece sua jornada hoje! ⭐
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;