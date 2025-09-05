import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ChatHub = () => {
  const benefits = [
    {
      icon: "💬",
      title: "Fale inglês todos os dias!",
      description: "Pratique seu inglês todos os dias"
    },
    {
      icon: "❓",
      title: "Tire suas dúvidas!",
      description: "Mande uma mensagem para nossos professores e tire suas dúvidas!"
    },
    {
      icon: "⏰",
      title: "Flexibilidade", 
      description: "Participe do ChatHub de qualquer lugar, a qualquer hora"
    },
    {
      icon: "👥",
      title: "Grupo de Suporte",
      description: "Converse com outros alunos que estão na mesma jornada e tire suas dúvidas"
    }
  ];

  return (
    <section className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Quer conversar em inglês todos os dias sem gastar uma fortuna? 
            <span className="block mt-2">Agora você pode!</span>
          </h2>
          
          <p className="text-lg opacity-90 mb-12 leading-relaxed">
            O Chat Hub é um espaço no qual alunos do nível pré-intermediário ao avançado 
            conversam inglês diariamente. Lá, a gente te ensina novas expressões, vocabulário 
            e pronúncia através de conversas engajadas e descontraídas.
          </p>
          
          <h3 className="text-2xl font-bold mb-12">
            Por uma pequena assinatura mensal você ganha:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="opacity-90">{benefit.description}</p>
              </Card>
            ))}
          </div>
          
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-4"
          >
            QUERO CONHECER O CHAT HUB!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChatHub;