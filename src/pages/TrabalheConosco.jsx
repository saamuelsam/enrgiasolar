import { Trophy, Target, Gift, Users, TrendingUp, Award, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrabalheConosco = () => {
    const levels = [
        {
            name: "FORTAL Elite",
            color: "from-gray-700 to-gray-900",
            commission: "5% (Venda) + 5% (Seguro)",
            meta: "Atingir 1.000 Pontos",
            bonus: "R$ 300,00",
            metaPessoal: "Vender 1 contrato no mês",
            icon: Star
        },
        {
            name: "FORTAL Master",
            color: "from-blue-600 to-blue-800",
            commission: "7% + 5% (Seguro)",
            comissaoRede: "2% (1ª linha) + 0.5% (2ª linha)",
            meta: "Atingir 10.000 Pontos",
            equipe: "Mínimo 5 pessoas na 1ª linha, máximo 2 linhas",
            bonus: "R$ 1.000,00 + Jantar no Sal e Brasa",
            metaPessoal: "Vender 2 contratos no mês + 4 mil pontos",
            icon: Award
        },
        {
            name: "FORTAL Sênior",
            color: "from-purple-600 to-purple-800",
            commission: "10% + 5% (Seguro) + 1,5% (1ª linha)",
            meta: "Atingir 400.000 Pontos",
            equipe: "Mínimo 8 pessoas na 1ª linha, 2 na 2ª linha, máximo 4 linhas",
            bonus: "R$ 1.500,00 + Jantar no Grand Parrilla",
            metaPessoal: "Vender 4 contratos no mês",
            icon: Trophy
        },
        {
            name: "FORTAL Prime",
            color: "from-orange-500 to-orange-700",
            commission: "10% + 5% (Seguro)",
            comissaoRede: "1,5% (1ª linha) + 0,5% (restante)",
            ajudaCusto: "R$ 1.518,00",
            meta: "R$ 800.000/mês",
            equipe: "10 pessoas na 1ª linha, 5 na 2ª, 3 na 3ª",
            bonus: "R$ 1.500,00 + Jantar no Ilamare",
            metaPessoal: "300.000 Pontos (dobrando meta, dobra ajuda de custo)",
            icon: Zap
        },
        {
            name: "FORTAL Executivo",
            color: "from-yellow-500 to-yellow-700",
            commission: "13% + 5% (Seguro)",
            comissaoRede: "1% (1ª linha) + 0,5% (restante)",
            ajudaCusto: "R$ 1.518,00 (sobe para R$ 2.000,00 com R$ 700k em vendas)",
            meta: "Atingir 2.000.000 Pontos",
            metaPessoal: "R$ 600.000 obrigatório",
            bonus: "R$ 10.000,00 + Fim de semana em Balneário Camboriú",
            icon: TrendingUp
        }
    ];

    const prizes = [
        { icon: Gift, title: "Kits Eletrônicos", description: "Para quem atinge as metas mensais" },
        { icon: Trophy, title: "Jantares e Viagens", description: "Premiações trimestrais" },
        { icon: Target, title: "Moto Elétrica", description: "Prêmio especial" },
        { icon: Award, title: "Sorteio de Carro", description: "Anual para os melhores" }
    ];

    const team = [
        { name: "Jamys Vasconcelos", role: "CEO / Comercial" },
        { name: "Gizele Vasconcelos", role: "CEO / Financeiro" },
        { name: "Samara Nascimento", role: "Líder" },
        { name: "José Marques", role: "Líder" },
        { name: "Denise", role: "Líder" },
        { name: "Vitória Lídia", role: "Vendedor" },
        { name: "Fábio", role: "Vendedor" },
        { name: "Fran Barbosa", role: "Vendedor" },
        { name: "Francisco Cleyton", role: "Vendedor" },
        { name: "Edrei Levi", role: "Vendedor" },
        { name: "Luciano Alencar", role: "Vendedor" },
        { name: "Agatha Lima", role: "Vendedor" },
        { name: "Jhony Weslley", role: "Vendedor" },
        { name: "Leonardo", role: "Vendedor" },
        { name: "Kailany Souza", role: "Vendedor" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-brand-darkBlue to-brand-mediumBlue">
            {/* Back to Home Button */}
            <div className="fixed top-4 left-4 z-50">
                <Link
                    to="/"
                    className="bg-white text-brand-darkBlue px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 text-sm md:text-base"
                >
                    ← Voltar
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative py-16 md:py-24 px-4 text-center text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-brand-orange rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-48 h-48 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-4xl mx-auto pt-12 md:pt-0">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2">
                        O Seu Caminho para o <span className="text-brand-orange">Sucesso</span>
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8 text-gray-200">
                        Fortal Energia Solar
                    </p>
                    <div className="inline-block bg-green-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-xl md:text-2xl lg:text-3xl font-bold shadow-2xl">
                        +95% de Aprovação
                    </div>
                </div>
            </section>

            {/* Como Funciona */}
            <section className="py-12 md:py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-brand-darkBlue mb-8 md:mb-12">
                        Como Funciona?
                    </h2>

                    <div className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white shadow-2xl mb-6 md:mb-8">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
                            A Base do Nosso Sucesso: Sistema de Pontos
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                            <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6">
                                <div className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4">1 kWh = 1 Ponto</div>
                                <p className="text-sm sm:text-base md:text-xl">Uma venda de 300 kWh gera automaticamente 300 Pontos para você</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6">
                                <div className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4">Comissão de Seguro</div>
                                <p className="text-sm sm:text-base md:text-xl">Todos os vendedores recebem 5% de comissão sobre cada venda de seguro de placas solares</p>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-8 bg-white/20 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                            <p className="text-base sm:text-lg md:text-2xl font-bold">🎁 Ao atingir 400 pontos, você garante uma cesta básica premium!</p>
                            <p className="text-xs sm:text-sm md:text-lg mt-2">Passando de fases batendo as metas, você concorrerá a PIX, viagens e eletrodomésticos!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Níveis de Carreira */}
            <section className="py-12 md:py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-brand-darkBlue mb-8 md:mb-12">
                        Plano de Carreira
                    </h2>

                    <div className="space-y-4 md:space-y-6">
                        {levels.map((level, index) => {
                            const Icon = level.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden"
                                >
                                    <div className={`bg-gradient-to-r ${level.color} p-4 md:p-6 flex items-center gap-3 md:gap-4`}>
                                        <Icon className="h-8 w-8 md:h-12 md:w-12 text-white flex-shrink-0" />
                                        <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white">{level.name}</h3>
                                    </div>
                                    <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                                        <div>
                                            <p className="text-xs md:text-sm text-gray-600 mb-1">Comissão</p>
                                            <p className="font-bold text-sm md:text-base text-brand-darkBlue">{level.commission}</p>
                                        </div>
                                        {level.comissaoRede && (
                                            <div>
                                                <p className="text-xs md:text-sm text-gray-600 mb-1">Comissão de Rede</p>
                                                <p className="font-bold text-sm md:text-base text-brand-darkBlue">{level.comissaoRede}</p>
                                            </div>
                                        )}
                                        {level.ajudaCusto && (
                                            <div>
                                                <p className="text-xs md:text-sm text-gray-600 mb-1">Ajuda de Custo</p>
                                                <p className="font-bold text-sm md:text-base text-green-600">{level.ajudaCusto}</p>
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-xs md:text-sm text-gray-600 mb-1">Meta para Avançar</p>
                                            <p className="font-bold text-sm md:text-base text-brand-orange">{level.meta}</p>
                                        </div>
                                        {level.equipe && (
                                            <div>
                                                <p className="text-xs md:text-sm text-gray-600 mb-1">Requisitos de Equipe</p>
                                                <p className="font-bold text-xs sm:text-sm md:text-base text-brand-darkBlue">{level.equipe}</p>
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-xs md:text-sm text-gray-600 mb-1">Bônus de Avanço</p>
                                            <p className="font-bold text-sm md:text-lg text-green-600">{level.bonus}</p>
                                        </div>
                                        <div className="bg-brand-light rounded-xl p-3 md:p-4">
                                            <p className="text-xs md:text-sm text-gray-600 mb-1">Meta Pessoal</p>
                                            <p className="font-bold text-xs sm:text-sm md:text-base text-brand-darkBlue">{level.metaPessoal}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Premiações */}
            <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-brand-darkBlue to-brand-mediumBlue text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Premiações</h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
                        {prizes.map((prize, index) => {
                            const Icon = prize.icon;
                            return (
                                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                                    <Icon className="h-10 w-10 md:h-16 md:w-16 mx-auto mb-2 md:mb-4 text-brand-orange" />
                                    <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">{prize.title}</h3>
                                    <p className="text-xs md:text-base text-gray-200">{prize.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="bg-brand-orange rounded-2xl md:rounded-3xl p-6 md:p-8 text-center mb-6 md:mb-8">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">🏆 Premiação Anual 2026</h3>
                        <p className="text-base sm:text-lg md:text-2xl mb-2">Os 10 melhores do ano ganharão:</p>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 md:mt-4">Cruzeiro Nacional - 10 Vagas!</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6">
                        <p className="text-sm md:text-lg text-center">
                            <strong>Atenção:</strong> A cada 3 meses a empresa fará uma ata geral para premiar a equipe, líder e vendedor que mais se destacaram.
                        </p>
                        <p className="text-center mt-3 md:mt-4 text-yellow-300 text-xs md:text-base">
                            ⚠️ Se em 3 meses não bater a meta, o nível desce e perde a rede. Presença obrigatória nas reuniões da empresa.
                        </p>
                    </div>
                </div>
            </section>

            {/* Time */}
            <section className="py-12 md:py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-darkBlue mb-2 md:mb-4">Nosso Time</h2>
                        <p className="text-xl sm:text-2xl md:text-2xl text-brand-orange font-bold">Mais de 100 premiações entregues!</p>
                        <p className="text-sm md:text-lg text-gray-600 mt-2">
                            Cada premiação representa uma história de sucesso construída com estratégia, criatividade e performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                        {team.map((member, index) => (
                            <div key={index} className="bg-gradient-to-br from-brand-darkBlue to-brand-mediumBlue rounded-xl md:rounded-2xl p-3 md:p-4 text-center text-white">
                                <Users className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-1 md:mb-2 text-brand-orange" />
                                <h4 className="font-bold text-xs md:text-sm">{member.name}</h4>
                                <p className="text-xs text-gray-300">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-brand-orange to-orange-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
                        Pronto para Fazer Parte do Time?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 px-2">
                        Entre em contato e comece sua jornada de sucesso conosco!
                    </p>
                    <button
                        onClick={() => window.open('https://wa.me/+558586948201?text=Olá! Tenho interesse em trabalhar na Fortal Energia Solar!', '_blank')}
                        className="bg-white text-brand-orange px-8 py-3 md:px-12 md:py-4 rounded-full text-lg md:text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                        Fale Conosco Agora!
                    </button>
                </div>
            </section>
        </div>
    );
};

export default TrabalheConosco;
