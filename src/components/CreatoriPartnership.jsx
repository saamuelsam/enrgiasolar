import { Sparkles, Zap, Globe, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const CreatoriPartnership = () => {
    const [activeImage, setActiveImage] = useState(0);

    const images = [
        { src: '/creatori-1.jpg', alt: 'Casa Cápsula Futurística 1' },
        { src: '/creatori-2.jpg', alt: 'Casa Cápsula Futurística 2' },
        { src: '/creatori-3.png', alt: 'Casa Cápsula Futurística 3' }
    ];

    const features = [
        { icon: Sparkles, text: 'Design Futurista' },
        { icon: Zap, text: 'Energia Solar Integrada' },
        { icon: Globe, text: 'Entrega Global' }
    ];

    return (
        <section className="relative py-20 overflow-hidden bg-gray-50">
            {/* Background Image - Creatori House - VERY SUBTLE (15% opacity) */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center opacity-15"
                    style={{ backgroundImage: 'url(/creatori-1.jpg)' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/50"></div>
            </div>

            {/* STRONG Frosted Glass Overlay with Border Lines */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl z-10 border-t-2 border-b-2 border-white/40"></div>

            {/* Subtle Animated Background Blobs */}
            <div className="absolute inset-0 opacity-10 z-10">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gray-300/40 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gray-200/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
                {/* Partnership Badge - Frosted Glass with Fine Border */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-3xl border-2 border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-full px-6 py-3 mb-6">
                        <Sparkles className="h-5 w-5 text-brand-orange animate-pulse" />
                        <span className="text-gray-800 font-bold text-sm tracking-wider">PARCERIA OFICIAL</span>
                        <Sparkles className="h-5 w-5 text-brand-orange animate-pulse" />
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                                Construindo o <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">futuro</span>
                                <br />que você quer viver.
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-brand-orange to-transparent rounded-full"></div>
                        </div>

                        <p className="text-xl text-gray-800 leading-relaxed font-medium">
                            <strong className="text-gray-900">Casas Cápsulas</strong>, <strong className="text-gray-900">Construções Modulares</strong> e <strong className="text-gray-900">Energia Solar</strong> — projetadas com precisão, fabricadas com tecnologia e entregues para qualquer lugar do mundo.
                        </p>

                        <div className="inline-block bg-white/70 backdrop-blur-3xl border-2 border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-2xl px-6 py-4">
                            <p className="text-2xl font-bold text-gray-900">
                                Arquitetura inteligente para um novo mundo.
                            </p>
                        </div>

                        {/* Features - Frosted Glass Cards with Fine Borders */}
                        <div className="grid grid-cols-3 gap-4">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={index} className="bg-white/70 backdrop-blur-3xl border-2 border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-xl p-4 text-center hover:bg-white/90 hover:border-brand-orange/40 hover:shadow-[0_8px_32px_0_rgba(234,88,12,0.2)] transition-all duration-300 transform hover:scale-105">
                                        <Icon className="h-8 w-8 mx-auto mb-2 text-brand-orange" />
                                        <p className="text-gray-900 text-sm font-bold">{feature.text}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <button className="group bg-gradient-to-r from-brand-orange to-yellow-500 hover:from-yellow-500 hover:to-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-brand-orange/30 flex items-center gap-3">
                            Conheça as Casas Cápsulas
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right Side - Image Showcase */}
                    <div className="relative">
                        {/* Main Image Display with STRONG Frosted Glass Frame and Fine Borders */}
                        <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] border-2 border-white/70 bg-white/60 backdrop-blur-3xl p-3">
                            <div className="rounded-2xl overflow-hidden border border-white/40">
                                <img
                                    src={images[activeImage].src}
                                    alt={images[activeImage].alt}
                                    className="w-full h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Badge - Frosted Glass with Fine Border */}
                            <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-3xl border-2 border-white/70 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] text-gray-900 px-4 py-2 rounded-full font-bold text-sm">
                                CREATORI
                            </div>
                        </div>

                        {/* Thumbnail Navigation - Frosted Glass with Fine Borders */}
                        <div className="flex gap-4 mt-6 justify-center">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 bg-white/70 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] ${activeImage === index
                                            ? 'border-brand-orange shadow-[0_8px_32px_0_rgba(234,88,12,0.3)] scale-105'
                                            : 'border-white/70 hover:border-gray-400/40'
                                        }`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-20 h-20 md:w-24 md:h-24 object-cover"
                                    />
                                    {activeImage === index && (
                                        <div className="absolute inset-0 bg-brand-orange/10 backdrop-blur-sm"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreatoriPartnership;
