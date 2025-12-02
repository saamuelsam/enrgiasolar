import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Início', href: '#hero' },
        { name: 'Serviços', href: '#features' },
        { name: 'Produtos', href: '#products' },
        { name: 'Sobre Nós', href: '#about' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
    ];

    const handleWhatsApp = () => {
        window.open('https://wa.me/+55586948201?text=Olá! Gostaria de mais informações.', '_blank');
    };

    return (
        <footer id="footer" className="bg-brand-darkBlue text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            <img
                                src="/fortal-logo.png"
                                alt="Fortal Engenharia Solar"
                                className="h-12 w-auto brightness-0 invert"
                            />
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Transformando luz solar em economia e sustentabilidade.
                            Soluções completas em energia fotovoltaica para residências e empresas.
                        </p>

                        {/* Social Media */}
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-brand-mediumBlue hover:bg-brand-orange rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/fortalengenhariasolar/"
                                className="w-10 h-10 bg-brand-mediumBlue hover:bg-brand-orange rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-brand-mediumBlue hover:bg-brand-orange rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-brand-orange transition-colors duration-300 flex items-center space-x-2"
                                    >
                                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contato</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm">
                                    BS Design Corporate Towers<br />
                                    Fortaleza, Ceará
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-brand-orange flex-shrink-0" />
                                <button
                                    onClick={handleWhatsApp}
                                    className="text-gray-300 hover:text-brand-orange transition-colors duration-300 text-sm"
                                >
                                    (85) 98694-8201
                                </button>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-brand-orange flex-shrink-0" />
                                <a
                                    href="mailto:fortalengenhariasolar@sesfortal.com.br"
                                    className="text-gray-300 hover:text-brand-orange transition-colors duration-300 text-sm"
                                >
                                    fortalengenhariasolar@sesfortal.com.br

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-brand-mediumBlue mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Fortal Engenharia Solar. Todos os direitos reservados.
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        Desenvolvido com <span className="text-brand-orange">❤️</span> por Fortal Engenharia Solar
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
