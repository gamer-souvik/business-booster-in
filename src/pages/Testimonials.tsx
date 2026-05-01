import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import TestimonialsSection from '@/components/TestimonialsSection';
import InternalLinks from '@/components/InternalLinks';

const Testimonials = () => (
  <div className="min-h-screen flex flex-col">
    <SEO
      title="Client Testimonials & Reviews | Business Booster"
      description="Read what our clients say about Business Booster's digital marketing, SEO, branding and AI services. Real results from real Indian businesses."
      canonical="https://business-booster.in/testimonials"
    />
    <Navbar />
    <main className="pt-24">
      <header className="container mx-auto px-6 md:px-12 py-12">
        <h1 className="text-4xl md:text-6xl font-bold font-cyber text-gradient-cyber">
          Client Testimonials
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-3xl font-body leading-relaxed">
          Hear directly from the founders, marketers, and entrepreneurs who scaled their brands
          with Business Booster.
        </p>
      </header>
      <TestimonialsSection />
      <InternalLinks exclude="/testimonials" />
    </main>
    <Footer />
  </div>
);

export default Testimonials;
