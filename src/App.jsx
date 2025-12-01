import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PromoBanner from './components/PromoBanner'
import Features from './components/Features'
import Stats from './components/Stats'
import Products from './components/Products'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <PromoBanner />
            <Features />
            <Stats />
            <Products />
            <About />
            <FAQ />
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default App
