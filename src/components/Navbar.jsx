import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Início', href: '#hero' },
        { name: 'Serviços', href: '#features' },
        { name: 'Produtos', href: '#products' },
        { name: 'Sobre', href: '#about' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contato', href: '#footer' },
    ];

    const handleWhatsApp = () => {
        window.open('https://wa.me/5585999999999?text=Olá! Gostaria de saber mais sobre energia solar.', '_blank');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="/fortal-logo.png"
                            alt="Fortal Engenharia Solar"
                            className="h-10 w-auto"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-brand-orange transition-all duration-300 font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={handleWhatsApp}
                            className="bg-brand-orange hover:bg-brand-darkOrange text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                            Fale Conosco
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-brand-orange transition-colors duration-300"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-gray-700 hover:text-brand-orange hover:bg-brand-light transition-all duration-300 rounded-md font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={handleWhatsApp}
                            className="w-full mt-2 bg-brand-orange hover:bg-brand-darkOrange text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
                        >
                            Fale Conosco
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
