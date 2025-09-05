import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        {/* Final CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Venha estudar inglês na Língua Hub!
          </h2>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-4"
          >
            Quero me matricular
          </Button>
        </div>
        
        {/* Footer Content */}
        <div className="border-t border-primary-foreground/20 pt-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Língua Hub
            </h3>
            <p className="opacity-90 mb-4">
              Aprenda inglês para falar com o mundo. Transforme seu futuro com a melhor metodologia de ensino online.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <p className="opacity-75 hover:opacity-100 cursor-pointer transition-opacity">Início</p>
              <p className="opacity-75 hover:opacity-100 cursor-pointer transition-opacity">Sobre</p>
              <p className="opacity-75 hover:opacity-100 cursor-pointer transition-opacity">Cursos</p>
              <p className="opacity-75 hover:opacity-100 cursor-pointer transition-opacity">Chat Hub</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>📞 (11) 99999-9999</p>
              <p>📧 contato@linguahub.com.br</p>
              <p>🌍 www.linguahub.com.br</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 Língua Hub. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;