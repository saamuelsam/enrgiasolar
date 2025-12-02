const PromoBanner = () => {
    return (
        <div className="relative overflow-hidden bg-black py-2 sm:py-3">
            {/* Infinite scrolling container */}
            <div className="flex animate-scroll">
                {/* First set of images */}
                <div className="flex flex-shrink-0 space-x-3 sm:space-x-4 md:space-x-6 px-2 sm:px-3">
                    <img
                        src="/ibs-logo-new.png"
                        alt="IBS - Integradora Brasileira de Sistemas"
                        className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <img
                        src="/logo-blue.png"
                        alt="Fortal Energia Solar"
                        className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <img
                        src="/conasol-logo.png"
                        alt="Conasol - Consórcio Nacional Solar"
                        className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <img
                        src="/ibs-logo-new.png"
                        alt="IBS - Integradora Brasileira de Sistemas"
                        className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <img
                        src="/logo-blue.png"
                        alt="Fortal Energia Solar"
                        className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <img
                        src="/conasol-logo.png"
                        alt="Conasol - Consórcio Nacional Solar"
                        className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex flex-shrink-0 space-x-3 sm:space-x-4 md:space-x-6 px-2 sm:px-3">
                    <img
                        src="/ibs-logo-new.png"
                        alt="IBS - Integradora Brasileira de Sistemas"
                        className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <img
                        src="/logo-blue.png"
                        alt="Fortal Energia Solar"
                        className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <img
                        src="/conasol-logo.png"
                        alt="Conasol - Consórcio Nacional Solar"
                        className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <img
                        src="/ibs-logo-new.png"
                        alt="IBS - Integradora Brasileira de Sistemas"
                        className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <img
                        src="/logo-blue.png"
                        alt="Fortal Energia Solar"
                        className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                    <img
                        src="/conasol-logo.png"
                        alt="Conasol - Consórcio Nacional Solar"
                        className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                    />
                </div>
            </div>

            {/* Gradient overlays for fade effect - responsive width */}
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-12 md:w-16 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-12 md:w-16 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
    );
};

export default PromoBanner;