import { Zap, TrendingDown, Award, Clock } from 'lucide-react';

const InfoBanner = () => {
    const banners = [
        {
            icon: TrendingDown,
            title: "ECONOMIA DE ATÉ 95%",
            subtitle: "Reduza sua conta de energia drasticamente",
            color: "from-orange-600 to-orange-500"
        },
        {
            icon: Award,
            title: "25 ANOS DE GARANTIA",
            subtitle: "Equipamentos de alta qualidade e durabilidade",
            color: "from-blue-600 to-blue-500"
        },
        {
            icon: Zap,
            title: "INSTALAÇÃO RÁPIDA",
            subtitle: "Projeto completo em até 30 dias",
            color: "from-green-600 to-green-500"
        },
        {
            icon: Clock,
            title: "RETORNO EM 3-5 ANOS",
            subtitle: "Investimento que se paga sozinho",
            color: "from-purple-600 to-purple-500"
        }
    ];

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-brand-darkBlue via-brand-mediumBlue to-brand-darkBlue py-16">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Scrolling banners container */}
            <div className="relative flex animate-scroll-slow">
                {/* First set */}
                <div className="flex flex-shrink-0 gap-8 px-4">
                    {banners.map((banner, index) => (
                        <div
                            key={`banner-1-${index}`}
                            className={`min-w-[400px] bg-gradient-to-br ${banner.color} rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300`}
                        >
                            <div className="flex items-center gap-6">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                    <banner.icon className="h-12 w-12 text-white" />
                                </div>
                                <div className="text-white">
                                    <h3 className="text-2xl font-bold mb-1">{banner.title}</h3>
                                    <p className="text-white/90 text-sm">{banner.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex flex-shrink-0 gap-8 px-4">
                    {banners.map((banner, index) => (
                        <div
                            key={`banner-2-${index}`}
                            className={`min-w-[400px] bg-gradient-to-br ${banner.color} rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300`}
                        >
                            <div className="flex items-center gap-6">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                    <banner.icon className="h-12 w-12 text-white" />
                                </div>
                                <div className="text-white">
                                    <h3 className="text-2xl font-bold mb-1">{banner.title}</h3>
                                    <p className="text-white/90 text-sm">{banner.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-darkBlue to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-darkBlue to-transparent pointer-events-none z-10"></div>
        </section>
    );
};

export default InfoBanner;
