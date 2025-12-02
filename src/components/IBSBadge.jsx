import { Award } from 'lucide-react';

const IBSBadge = () => {
    return (
        <section className="relative bg-gradient-to-r from-brand-darkBlue via-brand-mediumBlue to-brand-darkBlue py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                    {/* IBS Logo */}
                    <div className="flex items-center gap-4">
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="/ibs-logo.png"
                                alt="IBS - Integradora Brasileira de Sistemas"
                                className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-16 w-px bg-white/30"></div>

                    {/* Accreditation Text */}
                    <div className="text-center md:text-left text-white space-y-1">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <Award className="h-5 w-5 text-brand-orange" />
                            <h3 className="text-lg md:text-xl font-bold">
                                Empresa Credenciada IBS
                            </h3>
                        </div>
                        <p className="text-gray-200 text-xs md:text-sm max-w-md">
                            Certificação de qualidade e excelência em projetos de energia solar
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-orange/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-brand-orange/10 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

export default IBSBadge;
