import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Língua Hub
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#cursos" className="text-foreground hover:text-primary transition-colors">
              Cursos
            </a>
            <a href="#materiais" className="text-foreground hover:text-primary transition-colors">
              Materiais Gratuitos
            </a>
          </div>
          
          <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-elegant">
            Agendar Aula Gratuita
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;