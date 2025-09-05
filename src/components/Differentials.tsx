const Differentials = () => {
  const features = [
    {
      icon: "💻",
      title: "Aulas ao vivo pela internet",
      description: "Estude no conforto da sua casa!"
    },
    {
      icon: "🏆", 
      title: "Qualidade no ensino",
      description: "Didática centrada no aluno, com professores qualificados e metodologia inovadora!"
    },
    {
      icon: "🎭",
      title: "Atividades Culturais", 
      description: "Aprenda através da literatura, música, arte e muito mais!"
    },
    {
      icon: "🚀",
      title: "Inovação",
      description: "Plataforma exclusiva que conta com jogos, vídeos e uma série de exercícios!"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Por que escolher a Língua Hub?
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          Conheça nossos diferenciais:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;