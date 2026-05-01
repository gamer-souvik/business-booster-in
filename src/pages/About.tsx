import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AboutSection from '@/components/AboutSection';
import InternalLinks from '@/components/InternalLinks';

const About = () => (
  <div className="min-h-screen flex flex-col">
    <SEO
      title="About Business Booster | Digital Marketing & AI Agency in India"
      description="Learn about Business Booster — a futuristic digital marketing and AI agency helping Indian businesses scale through SEO, branding, automation and growth strategy."
      canonical="https://business-booster.in/about"
    />
    <Navbar />
    <main className="pt-24">
      <header className="container mx-auto px-6 md:px-12 py-12">
        <h1 className="text-4xl md:text-6xl font-bold font-cyber text-gradient-cyber">
          About Business Booster
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-3xl font-body leading-relaxed">
          We are a digital-first agency built for the AI era. Our mission is to fuse cutting-edge
          technology with proven marketing strategy so businesses can grow faster, smarter, and
          with measurable ROI.
        </p>
      </header>
      <AboutSection />
      <InternalLinks exclude="/about" />
    </main>
    <Footer />
  </div>
);

export default About;
