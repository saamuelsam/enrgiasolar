import { useState, useEffect } from 'react';

const PromotionalBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array de banners promocionais - você pode adicionar/remover banners aqui
    const banners = [
        {
            id: 1,
            image: '/banner.jpg',
            alt: 'Promoção 1',
            link: '#products'
        },
        {
            id: 2,
            image: '/banner2.jpg',
            alt: 'Promoção 2',
            link: '#products'
        }
    ];

    // Auto-play: muda de slide a cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % banners.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [banners.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative w-full bg-white py-4 md:py-6 mt-16">
            {/* Banner Container - Full Width with responsive heights optimized for mobile */}
            <div className="relative w-full h-[200px] xs:h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] xl:h-[500px] overflow-hidden">
                {/* Slides */}
                <div className="relative w-full h-full">
                    {banners.map((banner, index) => (
                        <div
                            key={banner.id}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            <a href={banner.link} className="block w-full h-full group">
                                <img
                                    src={banner.image}
                                    alt={banner.alt}
                                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Dots Indicator - Responsive sizing */}
                <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 md:gap-2 bg-black/40 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-brand-orange w-8 md:w-10 shadow-lg shadow-brand-orange/50'
                                    : 'bg-white/60 hover:bg-white w-2 md:w-2.5'
                                }`}
                            aria-label={`Ir para banner ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromotionalBanner;
