import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ServicesSection from '@/components/ServicesSection';
import InternalLinks from '@/components/InternalLinks';

const Services = () => (
  <div className="min-h-screen flex flex-col">
    <SEO
      title="Services | AI, SEO, Branding & Web Development — Business Booster"
      description="Explore Business Booster's full service catalog: AI automation, AI agents, voice calling agents, AI UGC videos, web apps, SEO, social media marketing, branding & growth strategy."
      canonical="https://business-booster.in/services"
    />
    <Navbar />
    <main className="pt-24">
      <header className="container mx-auto px-6 md:px-12 py-12">
        <h1 className="text-4xl md:text-6xl font-bold font-cyber text-gradient-cyber">
          Our Services
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-3xl font-body leading-relaxed">
          From AI automation and intelligent agents to SEO, branding, and full-stack web
          development — Business Booster delivers end-to-end digital growth services for ambitious
          brands across India and beyond.
        </p>
      </header>
      <ServicesSection />
      <InternalLinks exclude="/services" />
    </main>
    <Footer />
  </div>
);

export default Services;
