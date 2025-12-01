import { Building2, Target, Award, MapPin } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: Target,
            title: 'Nossa Missão',
            description: 'Democratizar o acesso à energia solar, tornando-a acessível para todos os brasileiros.',
        },
        {
            icon: Award,
            title: 'Excelência',
            description: 'Compromisso com a qualidade em cada instalação, do planejamento à manutenção.',
        },
        {
            icon: Building2,
            title: 'Experiência',
            description: 'Mais de 500 projetos concluídos com sucesso em todo o Ceará.',
        },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-darkBlue mb-6">
                            Sobre a Fortal Engenharia Solar
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Somos uma empresa cearense especializada em soluções de energia solar fotovoltaica.
                            Com anos de experiência no mercado, transformamos a forma como residências e empresas
                            consomem energia elétrica.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Nossa equipe de engenheiros certificados trabalha com as melhores tecnologias do mercado,
                            garantindo máxima eficiência e durabilidade em cada projeto. Do planejamento à instalação,
                            cuidamos de cada detalhe para que você tenha a melhor experiência.
                        </p>

                        {/* Address */}
                        <div className="flex items-start space-x-3 bg-brand-light p-6 rounded-xl">
                            <MapPin className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold text-brand-darkBlue mb-1">Nossa Sede</h4>
                                <p className="text-gray-600">
                                    BS Design Corporate Towers<br />
                                    Fortaleza, Ceará
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Values */}
                    <div className="space-y-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-gradient-to-br from-brand-light to-white border border-gray-200 hover:border-brand-orange rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-brand-orange/10 group-hover:bg-brand-orange rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                            <Icon className="h-6 w-6 text-brand-orange group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Certifications */}
                        <div className="bg-gradient-to-r from-brand-darkBlue to-brand-mediumBlue rounded-xl p-6 text-white">
                            <h4 className="font-bold text-lg mb-3">Certificações e Parcerias</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                                    <span>Certificação INMETRO</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                                    <span>Parceiro oficial de fabricantes internacionais</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                                    <span>Engenheiros certificados CREA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
