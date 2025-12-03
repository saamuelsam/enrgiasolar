import { Home, Building2, Building, Zap, TrendingUp, DollarSign, Leaf, Award, Gift, Car, Percent, ShieldCheck, Clock } from 'lucide-react';

const Features = () => {
    const projectTypes = [
        {
            icon: Home,
            title: 'Projetos Residenciais',
            color: 'from-blue-500 to-blue-700',
            benefits: [
                { icon: Percent, text: 'Economia de até 95% na conta de luz' },
                { icon: TrendingUp, text: 'Valorização do imóvel' },
                { icon: Leaf, text: 'Energia 100% limpa e renovável' },
            ]
        },
        {
            icon: Building2,
            title: 'Projetos Comerciais',
            color: 'from-orange-500 to-orange-700',
            benefits: [
                { icon: Percent, text: 'Economia de até 95% de energia' },
                { icon: TrendingUp, text: 'Valorização do imóvel' },
                { icon: DollarSign, text: 'Alta rentabilidade do investimento' },
            ]
        },
        {
            icon: Building,
            title: 'Projetos em Condomínios',
            color: 'from-green-500 to-green-700',
            benefits: [
                { icon: Percent, text: 'Redução de 95% na conta de energia' },
                { icon: TrendingUp, text: 'Valorização do imóvel' },
                { icon: Gift, text: '3% para o condomínio a cada morador que adquirir' },
                { icon: Award, text: 'Kit solar + rentabilidade de 3%' },
                { icon: Car, text: 'Possibilidade de estação de carregamento elétrico' },
            ]
        },
        {
            icon: Zap,
            title: 'Energia Livre (Condomínios/Prédios)',
            color: 'from-purple-500 to-purple-700',
            benefits: [
                { icon: Percent, text: 'Economia de 30% na fatura' },
                { icon: DollarSign, text: 'Redução de 95% de energia' },
                { icon: Car, text: 'Modelo Carport disponível' },
            ]
        },
        {
            icon: Zap,
            title: 'Usinas Solares de Investimento',
            color: 'from-yellow-500 to-yellow-700',
            benefits: [
                { icon: Clock, text: 'Viabilidade em curto prazo (até 90 dias)' },
                { icon: DollarSign, text: 'Venda garantida da geração de energia' },
                { icon: TrendingUp, text: 'Arrendamento de terras: lucro de 15% a 20%' },
                { icon: ShieldCheck, text: 'Investimento seguro e rentável' },
            ]
        },
    ];

    const ibsBenefits = [
        'Investimento seguro com a parceria IBS',
        'Rentabilidade garantida',
        'Agilidade nos processos',
        'Viabilidade do processo em até 90 dias',
        'Arrendamento de terras com lucro de 15% a 20%',
        'Ao contratar a Fortal, sua usina será vendida',
    ];

    return (
        <section id="features" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-darkBlue mb-4">
                        Por que escolher a Fortal Solar?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Soluções completas em energia solar para todos os tipos de projetos
                    </p>
                </div>

                {/* Project Types Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                    {projectTypes.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-transparent hover:border-brand-orange"
                            >
                                {/* Header with gradient */}
                                <div className={`bg-gradient-to-r ${project.color} p-6 md:p-8`}>
                                    <Icon className="h-10 w-10 md:h-12 md:w-12 text-white mb-3 md:mb-4" />
                                    <h3 className="text-xl md:text-2xl font-bold text-white">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Benefits List */}
                                <div className="p-6 md:p-8">
                                    <ul className="space-y-3 md:space-y-4">
                                        {project.benefits.map((benefit, idx) => {
                                            const BenefitIcon = benefit.icon;
                                            return (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-6 h-6 bg-brand-orange/10 rounded-full flex items-center justify-center mt-0.5">
                                                        <BenefitIcon className="h-3.5 w-3.5 text-brand-orange" />
                                                    </div>
                                                    <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                        {benefit.text}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* IBS Partnership Section */}
                <div className="bg-gradient-to-br from-brand-darkBlue via-brand-mediumBlue to-brand-darkBlue rounded-2xl md:rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-brand-orange/20 backdrop-blur-md px-4 py-2 rounded-full mb-4 md:mb-6">
                                <ShieldCheck className="h-5 w-5 text-brand-orange" />
                                <span className="text-brand-orange font-semibold text-sm md:text-base">Parceria IBS</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                                Fortal + IBS: Investimento Seguro e Rentável
                            </h3>
                            <p className="text-gray-200 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                                A Fortal Engenharia Solar, em parceria com a IBS, oferece soluções completas para usinas solares
                                com segurança, rentabilidade e agilidade em todos os processos.
                            </p>
                            <ul className="space-y-3 md:space-y-4">
                                {ibsBenefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-white text-sm font-bold">✓</span>
                                        </div>
                                        <span className="text-base md:text-lg">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Visual Element */}
                        <div className="hidden md:flex justify-center items-center">
                            <div className="relative">
                                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-brand-orange/20 rounded-full flex items-center justify-center animate-pulse">
                                    <div className="w-48 h-48 lg:w-60 lg:h-60 bg-brand-orange/30 rounded-full flex items-center justify-center">
                                        <div className="w-32 h-32 lg:w-40 lg:h-40 bg-brand-orange rounded-full flex items-center justify-center shadow-2xl">
                                            <Zap className="h-16 w-16 lg:h-20 lg:w-20 text-white" />
                                        </div>
                                    </div>
                                </div>
                                {/* Floating elements */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400 rounded-full opacity-50 animate-bounce"></div>
                                <div className="absolute bottom-0 left-0 w-12 h-12 bg-green-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Benefits */}
                <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-brand-light hover:border-brand-orange transition-all duration-300">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                            <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-white" />
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-brand-darkBlue mb-3">
                            Economia Garantida
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Reduza até 95% da sua conta de luz com energia solar de qualidade
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-brand-light hover:border-brand-orange transition-all duration-300">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                            <Leaf className="h-6 w-6 md:h-8 md:w-8 text-white" />
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-brand-darkBlue mb-3">
                            Sustentabilidade
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Energia 100% limpa e renovável para um futuro mais verde
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-brand-light hover:border-brand-orange transition-all duration-300">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                            <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-white" />
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-brand-darkBlue mb-3">
                            Valorização
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Imóveis com energia solar valorizam até 30% no mercado
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
