import Navbar from '../components/Navbar'
import IBSBadge from '../components/IBSBadge'
import PromotionalBanner from '../components/PromotionalBanner'
import Hero from '../components/Hero'
import PromoBanner from '../components/PromoBanner'
import Features from '../components/Features'
import SolarCalculator from '../components/SolarCalculator'
import Stats from '../components/Stats'
import Products from '../components/Products'
import About from '../components/About'
import CreatoriPartnership from '../components/CreatoriPartnership'
import Location from '../components/Location'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const Home = () => {
    return (
        <>
            <Navbar />
            <PromotionalBanner />
            <IBSBadge />
            <Hero />
            <PromoBanner />
            <Features />
            <SolarCalculator />
            <Stats />
            <Products />
            <About />
            <CreatoriPartnership />
            <Location />
            <FAQ />
            <Footer />
            <WhatsAppButton />
        </>
    );
};

export default Home;
