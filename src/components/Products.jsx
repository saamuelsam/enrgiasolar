import { useState } from 'react';
import { Check, Zap } from 'lucide-react';
import SpecialistModal from './SpecialistModal';

const Products = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleWhatsApp = (plan) => {
        const message = `Olá! Tenho interesse no plano ${plan}. Gostaria de mais informações.`;
        window.open(`https://wa.me/558586948201?text=${encodeURIComponent(message)}`, '_blank');
    };

    const products = [
        {
            name: 'Plano Residencial',
            capacity: '300 kWh/mês',
            savings: 'Até R$ 250/mês',
            features: [
                'Ideal para residências pequenas',
                '4-6 painéis solares',
                'Instalação em 1 dia',
                'Monitoramento via app',
                'Garantia de 25 anos',
            ],
            popular: false,
        },
        {
            name: 'Plano Familiar',
            capacity: '500 kWh/mês',
            savings: 'Até R$ 450/mês',
            features: [
                'Ideal para residências médias',
                '8-10 painéis solares',
                'Instalação em 2 dias',
                'Monitoramento via app',
                'Garantia de 25 anos',
                'Suporte prioritário',
            ],
            popular: true,
        },
        {
            name: 'Plano Premium',
            capacity: '750 kWh/mês',
            savings: 'Até R$ 650/mês',
            features: [
                'Ideal para residências grandes',
                '12-15 painéis solares',
                'Instalação em 3 dias',
                'Monitoramento via app',
                'Garantia de 25 anos',
                'Suporte VIP 24/7',
            ],
            popular: false,
        },
        {
            name: 'Plano Empresarial',
            capacity: '1000+ kWh/mês',
            savings: 'Até R$ 1.200/mês',
            features: [
                'Ideal para empresas',
                '20+ painéis solares',
                'Projeto personalizado',
                'Monitoramento avançado',
                'Garantia de 25 anos',
                'Gestor de conta dedicado',
            ],
            popular: false,
        },
    ];

    return (
        <section id="products" className="py-20 bg-brand-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-brand-darkBlue mb-4">
                        Nossos Planos de Energia Solar
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Escolha o plano ideal para suas necessidades e comece a economizar hoje mesmo
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2 ${product.popular
                                    ? 'border-2 border-brand-orange shadow-2xl scale-105'
                                    : 'border border-gray-200 hover:border-brand-orange hover:shadow-xl'
                                }`}
                        >
                            {/* Popular Badge */}
                            {product.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Mais Popular
                                </div>
                            )}

                            {/* Icon */}
                            <div className="flex justify-center mb-4">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${product.popular ? 'bg-brand-orange' : 'bg-brand-orange/10'
                                    }`}>
                                    <Zap className={`h-8 w-8 ${product.popular ? 'text-white' : 'text-brand-orange'}`} />
                                </div>
                            </div>

                            {/* Plan Name */}
                            <h3 className="text-xl font-bold text-brand-darkBlue text-center mb-2">
                                {product.name}
                            </h3>

                            {/* Capacity */}
                            <div className="text-center mb-4">
                                <div className="text-3xl font-bold text-brand-orange">
                                    {product.capacity}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                    Economia: {product.savings}
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-6">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start space-x-2">
                                        <Check className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                onClick={() => handleWhatsApp(product.name)}
                                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${product.popular
                                        ? 'bg-brand-orange hover:bg-brand-darkOrange text-white'
                                        : 'bg-brand-darkBlue hover:bg-brand-mediumBlue text-white'
                                    }`}
                            >
                                Solicitar Orçamento
                            </button>
                        </div>
                    ))}
                </div>

                {/* Custom Plan CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">
                        Precisa de um plano personalizado?
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center space-x-2 bg-brand-darkBlue hover:bg-brand-mediumBlue text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                    >
                        <span>Fale com um Especialista</span>
                    </button>
                </div>
            </div>

            {/* Specialist Modal */}
            <SpecialistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default Products;
