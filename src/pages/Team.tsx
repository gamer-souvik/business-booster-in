import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import TeamSection from '@/components/TeamSection';
import InternalLinks from '@/components/InternalLinks';

const Team = () => (
  <div className="min-h-screen flex flex-col">
    <SEO
      title="Our Team | Founders & Experts at Business Booster"
      description="Meet the Business Booster team — founders Souvik Bardhan and Dhrubojyoti Mondal alongside our marketing, AI and design experts driving real business growth."
      canonical="https://business-booster.in/team"
    />
    <Navbar />
    <main className="pt-24">
      <header className="container mx-auto px-6 md:px-12 py-12">
        <h1 className="text-4xl md:text-6xl font-bold font-cyber text-gradient-cyber">
          Meet Our Team
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-3xl font-body leading-relaxed">
          Behind every successful campaign is a team of strategists, engineers, and creators.
          Get to know the people powering Business Booster.
        </p>
      </header>
      <TeamSection />
      <InternalLinks exclude="/team" />
    </main>
    <Footer />
  </div>
);

export default Team;
