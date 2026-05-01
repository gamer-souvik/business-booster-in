import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ContactSection from '@/components/ContactSection';
import InternalLinks from '@/components/InternalLinks';

const Contact = () => (
  <div className="min-h-screen flex flex-col">
    <SEO
      title="Contact Business Booster | Start Your Project Today"
      description="Get in touch with Business Booster. Call +91 99327 02906, email boosterbusiness.org@gmail.com, or send a message to start scaling your business."
      canonical="https://business-booster.in/contact"
    />
    <Navbar />
    <main className="pt-24">
      <header className="container mx-auto px-6 md:px-12 py-12">
        <h1 className="text-4xl md:text-6xl font-bold font-cyber text-gradient-cyber">
          Contact Us
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-3xl font-body leading-relaxed">
          Ready to grow? Reach out for a free consultation and discover how Business Booster can
          transform your digital presence.
        </p>
      </header>
      <ContactSection />
      <InternalLinks exclude="/contact" />
    </main>
    <Footer />
  </div>
);

export default Contact;
