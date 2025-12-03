import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
    const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2345678901234!2d-38.5267!3d-3.7319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDMnNTQuOCJTIDM4wrAzMSczNi4xIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr";

    const locations = [
        {
            city: "Fortaleza - CE",
            address: "BS Design Torres Corporativas Torre Sul Av. Desembargador Moreira 1300, Aldeota Fortaleza CE",
            phone: "(85) 98694-8201",
            email: "fortalengenhariasolar@sesfortal.com.br",
            hours: "Seg - Sex: 8h às 18h"
        }
    ];

    return (
        <section id="location" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-brand-darkBlue mb-4">
                        Onde Estamos
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Visite nossa sede ou entre em contato conosco
                    </p>
                </div>

                {/* Building Photo - Full Width */}
                <div className="mb-8">
                    <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                        <img
                            src="/bs-design-building.jpg"
                            alt="BS Design Corporate Towers - Fortaleza"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">BS Design Corporate Towers</h3>
                            <p className="text-gray-200 text-sm md:text-base">Nossa sede em Fortaleza - CE</p>
                        </div>
                    </div>
                </div>

                {/* Map and Contact Info */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Google Maps */}
                    <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <iframe
                            src={googleMapsUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>
                    </div>

                    {/* Location Info */}
                    <div className="space-y-6">
                        {locations.map((location, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-brand-darkBlue to-brand-mediumBlue rounded-2xl p-8 text-white shadow-xl"
                            >
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <MapPin className="h-6 w-6 text-brand-orange" />
                                    {location.city}
                                </h3>

                                <div className="space-y-4">
                                    {/* Address */}
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-brand-orange flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold mb-1">Endereço</p>
                                            <p className="text-gray-200">{location.address}</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-3">
                                        <Phone className="h-5 w-5 text-brand-orange flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold mb-1">Telefone</p>
                                            <a
                                                href={`tel:${location.phone.replace(/\D/g, '')}`}
                                                className="text-gray-200 hover:text-brand-orange transition-colors"
                                            >
                                                {location.phone}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-3">
                                        <Mail className="h-5 w-5 text-brand-orange flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold mb-1">E-mail</p>
                                            <a
                                                href={`mailto:${location.email}`}
                                                className="text-gray-200 hover:text-brand-orange transition-colors break-all"
                                            >
                                                {location.email}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex items-start gap-3">
                                        <Clock className="h-5 w-5 text-brand-orange flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold mb-1">Horário de Atendimento</p>
                                            <p className="text-gray-200">{location.hours}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="mt-6 pt-6 border-t border-white/20">
                                    <button
                                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`, '_blank')}
                                        className="w-full bg-brand-orange hover:bg-brand-darkOrange text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                                    >
                                        Ver no Google Maps
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Regional Presence with Images */}
                        <div className="bg-brand-light rounded-2xl p-6">
                            <h4 className="text-xl font-bold text-brand-darkBlue mb-3">
                                Atendemos em Todo o Brasil
                            </h4>
                            <p className="text-gray-600 mb-6">
                                Com bases em Ceará, Rio Grande do Sul, Goiás e Distrito Federal,
                                estamos prontos para atender você onde estiver.
                            </p>

                            {/* Regional Cards Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Ceará */}
                                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src="/ceara-building.jpg"
                                            alt="Ceará - BS Design Towers"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <h5 className="text-white font-bold text-sm md:text-base">Ceará</h5>
                                        <p className="text-gray-200 text-xs">Fortaleza</p>
                                    </div>
                                </div>

                                {/* Rio Grande do Sul */}
                                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src="/rio-grande-sul.png"
                                            alt="Rio Grande do Sul - Usina do Gasômetro"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <h5 className="text-white font-bold text-sm md:text-base">Rio Grande do Sul</h5>
                                        <p className="text-gray-200 text-xs">Porto Alegre</p>
                                    </div>
                                </div>

                                {/* Goiás */}
                                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src="/goias.png"
                                            alt="Goiás - Monumento às Três Raças"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <h5 className="text-white font-bold text-sm md:text-base">Goiás</h5>
                                        <p className="text-gray-200 text-xs">Goiânia</p>
                                    </div>
                                </div>

                                {/* Distrito Federal */}
                                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src="/distrito-federal.png"
                                            alt="Distrito Federal - Congresso Nacional"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <h5 className="text-white font-bold text-sm md:text-base">Distrito Federal</h5>
                                        <p className="text-gray-200 text-xs">Brasília</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
