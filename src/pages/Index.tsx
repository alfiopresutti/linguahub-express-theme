import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AgeGroups from "@/components/AgeGroups";
import Differentials from "@/components/Differentials";
import ChatHub from "@/components/ChatHub";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AgeGroups />
        <Differentials />
        <ChatHub />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
