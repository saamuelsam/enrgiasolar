import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'Como funciona a energia solar fotovoltaica?',
            answer: 'Os painéis solares captam a luz do sol e convertem em energia elétrica através de células fotovoltaicas. A energia gerada é enviada para um inversor que a transforma em corrente alternada, compatível com sua rede elétrica. O excedente pode ser injetado na rede da concessionária, gerando créditos de energia.',
        },
        {
            question: 'Quanto tempo leva a instalação?',
            answer: 'O processo completo desde a visita técnica até a instalação leva em média de 30 a 60 dias. A instalação física dos painéis é rápida, geralmente de 1 a 3 dias, dependendo do tamanho do sistema. O tempo maior se deve aos trâmites de aprovação junto à concessionária de energia.',
        },
        {
            question: 'Existe financiamento disponível?',
            answer: 'Sim! Trabalhamos com diversas linhas de financiamento em até 120 meses. Oferecemos parcerias com bancos e financeiras que possuem condições especiais para energia solar. Em muitos casos, a parcela do financiamento é menor que a economia na conta de luz.',
        },
        {
            question: 'Qual é a garantia dos equipamentos?',
            answer: 'Os painéis solares possuem garantia de 25 anos de eficiência mínima de 80%. Os inversores têm garantia de 5 a 10 anos (podendo ser estendida). Além disso, oferecemos garantia de instalação e suporte técnico durante todo o período.',
        },
        {
            question: 'Preciso fazer manutenção?',
            answer: 'A manutenção é mínima. Recomendamos limpeza dos painéis a cada 6 meses (ou quando necessário) e inspeção anual do sistema. Em Fortaleza, as chuvas já ajudam na limpeza natural. Oferecemos planos de manutenção preventiva para garantir máxima eficiência.',
        },
        {
            question: 'Em quanto tempo recupero o investimento?',
            answer: 'O retorno do investimento (ROI) varia de 3 a 7 anos, dependendo do consumo e do tamanho do sistema. Considerando que os painéis duram mais de 25 anos, você terá pelo menos 18 anos de energia praticamente gratuita após recuperar o investimento.',
        },
        {
            question: 'Funciona em dias nublados ou chuvosos?',
            answer: 'Sim! Mesmo em dias nublados os painéis geram energia, embora em menor quantidade. O sistema é dimensionado considerando as variações climáticas da região. Além disso, os créditos gerados em dias ensolarados compensam os períodos de menor geração.',
        },
        {
            question: 'Posso instalar em apartamento?',
            answer: 'Sim, é possível! Para apartamentos, existem duas opções: instalação no telhado do prédio (com aprovação do condomínio) ou participação em fazendas solares (geração compartilhada). Nossa equipe avalia a melhor solução para cada caso.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-brand-light">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-brand-darkBlue mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-lg text-gray-600">
                        Tire suas dúvidas sobre energia solar
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-brand-orange"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300 hover:bg-brand-light"
                            >
                                <span className="font-semibold text-brand-darkBlue pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`h-5 w-5 text-brand-orange flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 text-center bg-gradient-to-r from-brand-darkBlue to-brand-mediumBlue rounded-xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-3">
                        Ainda tem dúvidas?
                    </h3>
                    <p className="mb-6 text-gray-200">
                        Nossa equipe está pronta para ajudar você
                    </p>
                    <button
                        onClick={() => window.open('https://wa.me/5585999999999?text=Olá! Tenho algumas dúvidas sobre energia solar.', '_blank')}
                        className="bg-brand-orange hover:bg-brand-darkOrange text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        Falar com Especialista
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
