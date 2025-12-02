import { useState } from 'react';
import { X, Phone, MessageCircle, User, MapPin } from 'lucide-react';

const SpecialistModal = ({ isOpen, onClose }) => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    // Localizações disponíveis
    const locations = [
        {
            id: 'rs',
            name: 'Rio Grande do Sul',
            city: 'Gramado',
            icon: '🏔️'
        },
        {
            id: 'ce',
            name: 'Ceará',
            city: 'Fortaleza',
            icon: '🏖️'
        },
        {
            id: 'go',
            name: 'Goiás',
            city: 'Goiânia',
            icon: '🌾'
        },
        {
            id: 'df',
            name: 'Distrito Federal',
            city: 'Brasília',
            icon: '🏛️'
        }
    ];

    // Especialistas por localização
    const specialistsByLocation = {
        ce: [
            {
                id: 1,
                name: "Denise Almeida - Lider Master",
                role: "Especialista em Energia Solar para condomínios",
                phone: "5585992755198",
                avatar: "/avatar-placeholder.png",
                status: "online",
                description: "Especialista em projetos de condomínios e pequeno porte"
            },
            {
                id: 2,
                name: "José Marques - Lider Master",
                role: "Especialista em Projetos Residenciais",
                phone: "5585982202073",
                avatar: "/avatar-placeholder.png",
                status: "online",
                description: "Especialista em projetos residenciais e pequeno porte"
            },
            {
                id: 3,
                name: "Samara Nascimento - Lider Master",
                role: "Especialista em projetos comerciais",
                phone: "5585991463191",
                avatar: "/avatar-placeholder.png",
                status: "online",
                description: "Especialista em projetos comerciais e pequeno porte"
            },
            {
                id: 4,
                name: "Jamys Vasconcelos - CEO",
                role: "Especialista em Usinas de investimento e arrendamento de terrenos",
                phone: "5585991463191",
                avatar: "/avatar-placeholder.png",
                status: "online",
                description: "Especialista em projetos comerciais e pequeno porte"
            }
        ],
        rs: [
            {
                id: 5,
                name: "Especialista RS",
                role: "Consultor Regional",
                phone: "5551999999999",
                avatar: "/avatar-placeholder.png",
                status: "online",
                description: "Especialista em projetos no Rio Grande do Sul"
            }
        ],
        go: [
            {
                id: 6,
                name: "Especialista GO",
                role: "Consultor Regional",
                phone: "5562999999999",
                avatar: "/avatar-placeholder.png",
                status: "online",
                description: "Especialista em projetos em Goiás"
            }
        ],
        df: [
            {
                id: 7,
                name: "Especialista DF",
                role: "Consultor Regional",
                phone: "5561999999999",
                avatar: "/avatar-placeholder.png",
                status: "online",
                description: "Especialista em projetos no Distrito Federal"
            }
        ]
    };

    const handleWhatsApp = (specialist) => {
        const message = `Olá ${specialist.name}! Vim do site e gostaria de falar sobre energia solar.`;
        window.open(`https://wa.me/${specialist.phone}?text=${encodeURIComponent(message)}`, '_blank');
        onClose();
    };

    const handleLocationSelect = (locationId) => {
        setSelectedLocation(locationId);
    };

    const handleBack = () => {
        setSelectedLocation(null);
    };

    const handleClose = () => {
        setSelectedLocation(null);
        onClose();
    };

    if (!isOpen) return null;

    const specialists = selectedLocation ? specialistsByLocation[selectedLocation] : [];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            {/* Modal Container */}
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
                {/* Header */}
                <div className="bg-gradient-to-r from-brand-darkBlue to-brand-mediumBlue px-6 py-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            {selectedLocation ? 'Fale com um Especialista' : 'Escolha sua Região'}
                        </h2>
                        <p className="text-gray-200 text-sm mt-1">
                            {selectedLocation
                                ? 'Escolha o especialista ideal para seu projeto'
                                : 'Selecione a base mais próxima de você'
                            }
                        </p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="text-white hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                        aria-label="Fechar"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                    {!selectedLocation ? (
                        /* Location Selection */
                        <div className="grid md:grid-cols-2 gap-4">
                            {locations.map((location) => (
                                <button
                                    key={location.id}
                                    onClick={() => handleLocationSelect(location.id)}
                                    className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-brand-orange rounded-2xl p-8 transition-all duration-300 hover:shadow-xl text-left"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="text-5xl">{location.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-brand-darkBlue group-hover:text-brand-orange transition-colors">
                                                {location.name}
                                            </h3>
                                            <div className="flex items-center gap-1 text-gray-600 mt-1">
                                                <MapPin className="h-4 w-4" />
                                                <span className="text-sm">{location.city}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                                        Clique para ver especialistas desta região
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : (
                        /* Specialists List */
                        <>
                            <button
                                onClick={handleBack}
                                className="mb-4 text-brand-darkBlue hover:text-brand-orange font-semibold flex items-center gap-2 transition-colors"
                            >
                                ← Voltar para regiões
                            </button>
                            <div className="grid md:grid-cols-2 gap-4">
                                {specialists.map((specialist) => (
                                    <div
                                        key={specialist.id}
                                        className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-brand-orange rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
                                    >
                                        {/* Avatar and Status */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="relative">
                                                <div className="w-16 h-16 bg-gradient-to-br from-brand-darkBlue to-brand-mediumBlue rounded-full flex items-center justify-center">
                                                    <User className="h-8 w-8 text-white" />
                                                </div>
                                                {specialist.status === 'online' && (
                                                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-brand-darkBlue">{specialist.name}</h3>
                                                <p className="text-sm text-brand-orange font-semibold">{specialist.role}</p>
                                                {specialist.status === 'online' && (
                                                    <span className="inline-flex items-center gap-1 text-xs text-green-600 mt-1">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                        Disponível agora
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm mb-4">{specialist.description}</p>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleWhatsApp(specialist)}
                                                className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                                            >
                                                <MessageCircle className="h-5 w-5" />
                                                WhatsApp
                                            </button>
                                            <button
                                                onClick={() => window.open(`tel:${specialist.phone}`)}
                                                className="bg-brand-darkBlue hover:bg-brand-orange text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                                            >
                                                <Phone className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center">
                        💡 <strong>Dica:</strong> Nossos especialistas estão prontos para ajudar você a economizar com energia solar!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SpecialistModal;
