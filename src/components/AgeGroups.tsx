import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AgeGroups = () => {
  const groups = [
    {
      age: "de 8 a 11 anos",
      title: "Aulas de inglês para crianças",
      description: "Aulas de inglês com atividades lúdicas, histórias e muita diversão!",
      icon: "🎨"
    },
    {
      age: "de 12 a 17 anos", 
      title: "Aulas de inglês para adolescentes",
      description: "Aulas de inglês com o objetivo de perder a timidez e desenvolver habilidades de comunicação.",
      icon: "🎯"
    },
    {
      age: "A partir de 18 anos",
      title: "Aulas de inglês para adultos", 
      description: "Aprenda inglês de forma interativa e consistente com situações do dia a dia.",
      icon: "💼"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Conheça nossas aulas
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <Card key={index} className="p-8 text-center bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-4">{group.icon}</div>
              <p className="text-sm text-primary font-medium mb-2">{group.age}</p>
              <h3 className="text-2xl font-bold mb-4">{group.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{group.description}</p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                VEJA MAIS
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroups;