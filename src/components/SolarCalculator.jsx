import { useEffect } from 'react';
import { Calculator } from 'lucide-react';

const SolarCalculator = () => {
    useEffect(() => {
        // Carregar o script da calculadora Solar Ideal
        const script = document.createElement('script');
        script.src = 'https://fortalengenhariasolar.solarideal.com.br/assets/calculadora/js/incorporar.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Limpar o script quando o componente for desmontado
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="calculadora" className="py-12 md:py-16 lg:py-24 px-3 md:px-4 bg-gradient-to-br from-brand-darkBlue via-brand-mediumBlue to-brand-darkBlue relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-64 h-64 bg-brand-orange rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 md:gap-3 bg-brand-orange/20 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
                        <Calculator className="h-5 w-5 md:h-6 md:w-6 text-brand-orange" />
                        <span className="text-brand-orange font-semibold text-sm md:text-base">Calculadora Solar</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 px-2">
                        Calcule Sua <span className="text-brand-orange">Economia</span>
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                        Descubra quanto você pode economizar com energia solar e em quanto tempo seu investimento retorna
                    </p>
                </div>

                {/* Calculadora Iframe */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-2 md:p-4 lg:p-8 border border-white/20 shadow-2xl">
                    <iframe
                        src="https://fortalengenhariasolar.solarideal.com.br/calculadora/solar"
                        id="calculadora-mds"
                        className="w-full rounded-xl md:rounded-2xl"
                        style={{
                            minHeight: '600px',
                            height: 'auto',
                            border: 'none',
                            overflow: 'hidden'
                        }}
                        title="Calculadora Solar - Fortal Engenharia"
                    />
                </div>

                {/* Bottom Note */}
                <div className="mt-6 md:mt-8 text-center px-4">
                    <p className="text-white/80 text-sm md:text-base lg:text-lg">
                        * Valores estimados. Para um orçamento personalizado, entre em contato conosco.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SolarCalculator;
