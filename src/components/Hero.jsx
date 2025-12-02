import { Sun, Zap, ArrowRight } from 'lucide-react';

const Hero = () => {
    const handleWhatsApp = () => {
        window.open('https://wa.me/+558586948201?text=Olá! Quero transformar luz solar em economia!', '_blank');
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-darkBlue to-brand-mediumBlue pt-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-6">
                        <div className="inline-flex items-center space-x-2 bg-brand-orange/20 px-4 py-2 rounded-full backdrop-blur-sm">
                            <Zap className="h-5 w-5 text-brand-orange" />
                            <span className="text-sm font-semibold">Energia Limpa e Renovável</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Transformando luz Solar em{' '}
                            <span className="text-brand-orange">economia</span> e{' '}
                            <span className="text-brand-orange">sustentabilidade</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                            Reduza sua conta de energia em até 95% com sistemas fotovoltaicos de alta eficiência.
                            Invista no futuro e valorize seu imóvel com energia solar.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={handleWhatsApp}
                                className="group bg-brand-orange hover:bg-brand-darkOrange text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl"
                            >
                                <span>Solicite um Orçamento</span>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <a
                                href="#products"
                                className="border-2 border-white hover:bg-white hover:text-brand-darkBlue text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 text-center"
                            >
                                Ver Planos
                            </a>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-brand-orange">95%</div>
                                <div className="text-sm text-gray-300">Economia</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-brand-orange">25+</div>
                                <div className="text-sm text-gray-300">Anos Garantia</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-brand-orange">500+</div>
                                <div className="text-sm text-gray-300">Clientes</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Illustration */}
                    <div className="relative hidden md:block">
                        <div className="relative">
                            {/* Decorative circles */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"></div>

                            {/* Sun Icon */}
                            <div className="relative z-10 flex items-center justify-center">
                                <Sun className="h-64 w-64 text-brand-orange drop-shadow-2xl animate-spin" style={{ animationDuration: '20s' }} />
                            </div>

                            {/* Floating elements */}
                            <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                                <div className="text-white">
                                    <div className="text-2xl font-bold text-brand-orange">R$ 0</div>
                                    <div className="text-sm">Conta de Luz</div>
                                </div>
                            </div>

                            <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                                <div className="text-white">
                                    <div className="text-2xl font-bold text-brand-orange">100%</div>
                                    <div className="text-sm">Sustentável</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
