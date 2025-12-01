import { Users, Zap, Award, TrendingUp } from 'lucide-react';

const Stats = () => {
    const stats = [
        {
            icon: Users,
            number: '500+',
            label: 'Instalações Realizadas',
            color: 'text-white',
        },
        {
            icon: Zap,
            number: 'R$ 15M+',
            label: 'Economia Gerada',
            color: 'text-white',
        },
        {
            icon: Award,
            number: '98%',
            label: 'Clientes Satisfeitos',
            color: 'text-white',
        },
        {
            icon: TrendingUp,
            number: '25 Anos',
            label: 'Garantia dos Painéis',
            color: 'text-white',
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-brand-orange to-brand-darkOrange">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="text-center group"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon className={`h-8 w-8 ${stat.color}`} />
                                    </div>
                                </div>
                                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm sm:text-base text-white/90 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
