const PromoBanner = () => {
    return (
        <div className="relative overflow-hidden bg-black py-4">
            {/* Infinite scrolling container */}
            <div className="flex animate-scroll">
                {/* First set of images */}
                <div className="flex flex-shrink-0 space-x-8 px-4">
                    <img
                        src="/ibs-logo-new.png"
                        alt="IBS - Integradora Brasileira de Sistemas"
                        className="h-24 sm:h-32 md:h-40 w-auto object-contain"
                    />
                    <img
                        src="/logo-blue.png"
                        alt="Parceiro Certificado"
                        className="h-24 sm:h-32 md:h-40 w-auto object-contain"
                    />
                    <img
                        src="/ibs-logo-new.png"
                        alt="IBS - Integradora Brasileira de Sistemas"
                        className="h-24 sm:h-32 md:h-40 w-auto object-contain"
                    />
                    <img
                        src="/logo-blue.png"
                        alt="Parceiro Certificado"
                        className="h-24 sm:h-32 md:h-40 w-auto object-contain"
                    />
                    <img
                        src="/ibs-logo-new.png"
                        alt="IBS - Integradora Brasileira de Sistemas"
                        className="h-24 sm:h-32 md:h-40 w-auto object-contain"
                    />
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex flex-shrink-0 space-x-8 px-4">
                    <img
                        src="/ibs-logo-new.png"
                        alt="IBS - Integradora Brasileira de Sistemas"
                        className="h-24 sm:h-32 md:h-40 w-auto object-contain"
                    />
                    <img
                        src="/logo-blue.png"
                        alt="Parceiro Certificado"
                        className="h-24 sm:h-32 md:h-40 w-auto object-contain"
                    />
                    <img
                        src="/ibs-logo-new.png"
                        alt="IBS - Integradora Brasileira de Sistemas"
                        className="h-24 sm:h-32 md:h-40 w-auto object-contain"
                    />
                    <img
                        src="/logo-blue.png"
                        alt="Parceiro Certificado"
                        className="h-24 sm:h-32 md:h-40 w-auto object-contain"
                    />
                    <img
                        src="/ibs-logo-new.png"
                        alt="IBS - Integradora Brasileira de Sistemas"
                        className="h-24 sm:h-32 md:h-40 w-auto object-contain"
                    />
                </div>
            </div>

            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
    );
};

export default PromoBanner;