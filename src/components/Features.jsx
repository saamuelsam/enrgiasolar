import { DollarSign, Leaf, TrendingUp } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: DollarSign,
            title: 'Economia Garantida',
            description: 'Com energia solar, é possível reduzir em até 95% a conta de luz, trazendo mais previsibilidade financeira.',
            color: 'bg-green-500',
        },
        {
            icon: Leaf,
            title: 'Sustentabilidade',
            description: 'Energia 100% limpa e renovável. Contribua para um planeta mais verde e saudável.',
            color: 'bg-emerald-500',
        },
        {
            icon: TrendingUp,
            title: 'Valorização do Imóvel',
            description: 'Imóveis com energia solar valorizam até 30% no mercado imobiliário.',
            color: 'bg-blue-500',
        },
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-brand-darkBlue mb-4">
                        Por que escolher a Fortal Solar?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Transforme seu investimento em economia real com tecnologia de ponta e suporte completo
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-brand-light hover:bg-white border-2 border-transparent hover:border-brand-orange rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                            >
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="h-8 w-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-brand-darkBlue mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-orange/5 rounded-bl-full -z-10 group-hover:bg-brand-orange/10 transition-colors duration-300"></div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Benefits */}
                <div className="mt-16 bg-gradient-to-r from-brand-darkBlue to-brand-mediumBlue rounded-2xl p-8 sm:p-12 text-white">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                                Benefícios Exclusivos
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <span>Instalação profissional e certificada</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <span>Monitoramento em tempo real via app</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <span>Garantia de 25 anos nos painéis</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <span>Financiamento facilitado em até 120x</span>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:flex justify-center">
                            <div className="relative">
                                <div className="w-48 h-48 bg-brand-orange/20 rounded-full flex items-center justify-center">
                                    <div className="w-32 h-32 bg-brand-orange/40 rounded-full flex items-center justify-center">
                                        <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center">
                                            <Leaf className="h-8 w-8 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
