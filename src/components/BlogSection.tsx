import { Card } from "@/components/ui/card";

const BlogSection = () => {
  const posts = [
    {
      title: "Como descrever Hospedagens em Inglês",
      date: "9 de maio de 2025",
      image: "🏨"
    },
    {
      title: "Como descrever obras de arte em inglês", 
      date: "6 de maio de 2025",
      image: "🎨"
    },
    {
      title: "Vocabulário Para Descrever Cidades em Inglês",
      date: "6 de maio de 2025", 
      image: "🏙️"
    },
    {
      title: "Used to x Would: Qual a Diferença?",
      date: "22 de abril de 2025",
      image: "📚"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Acesse o conteúdo da Língua Hub!
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <div className="aspect-video bg-gradient-primary flex items-center justify-center text-4xl text-white">
                {post.image}
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {post.date}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;