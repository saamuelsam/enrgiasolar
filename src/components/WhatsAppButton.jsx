import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const handleClick = () => {
        window.open('https://wa.me/5585999999999?text=Olá! Vim do site e gostaria de mais informações sobre energia solar.', '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
            aria-label="Fale conosco no WhatsApp"
        >
            {/* Pulse Animation */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

            {/* Icon */}
            <MessageCircle className="h-7 w-7 relative z-10" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 bg-brand-darkBlue text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Fale conosco!
            </span>
        </button>
    );
};

export default WhatsAppButton;
