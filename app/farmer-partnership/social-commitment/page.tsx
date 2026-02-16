import Link from 'next/link';
import Image from 'next/image';
import { Heart, Users, Zap, Leaf, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { WhatsAppButton } from '@/components/shared/whatsapp-button';

export default function SocialCommitmentPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gray-900">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b43?q=80&w=2940&auto=format&fit=crop"
                            alt="Rural community in India"
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                    </div>
                    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 animate-fade-in-up">
                            Social Commitment
                        </h1>
                        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto animate-fade-in-up delay-100">
                            Powering Communities. Empowering Farmers.
                        </p>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            At Suryadnyani Renewable Energy Private Limited, our mission extends beyond generating clean power. We are committed to creating lasting social value by empowering farmers, strengthening rural economies, and supporting India’s transition toward sustainable infrastructure.
                        </p>
                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                            We believe renewable energy should benefit everyone, especially the communities that form the backbone of our nation.
                        </p>
                    </div>
                </section>

                {/* Pillars Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold font-poppins text-foreground">Our Social Responsibility Pillars</h2>
                            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {/* Pillar 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                    <TrendingUp className="w-7 h-7 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-foreground">Empowering Farmers Financially</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We help landowners convert underutilized land into dependable long-term income sources through ground-mounted solar projects. This reduces financial uncertainty and supports multi-generational stability.
                                </p>
                            </div>

                            {/* Pillar 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <Users className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-foreground">Driving Rural Development</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Solar infrastructure attracts roads, connectivity, technical services, and workforce opportunities to rural areas. This contributes to overall regional growth.
                                </p>
                            </div>

                            {/* Pillar 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <Heart className="w-7 h-7 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-foreground">Employment Generation</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    From construction to plant operations, our projects create local job opportunities, encouraging skill development and economic participation within the community.
                                </p>
                            </div>

                            {/* Pillar 4 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                                    <Zap className="w-7 h-7 text-yellow-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-foreground">Supporting Reliable Power</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    By expanding renewable capacity, we help improve electricity availability for rural regions and industries, enabling productivity and reducing dependence on traditional power sources.
                                </p>
                            </div>

                            {/* Pillar 5 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-2">
                                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                                    <Leaf className="w-7 h-7 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-foreground">Environmental Stewardship</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our projects reduce carbon emissions and promote responsible land use, ensuring that development today does not compromise the needs of future generations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Impact */}
                <section className="py-20 bg-foreground text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-sm font-bold text-primary tracking-wider uppercase mb-4">Our Long-Term Vision</h3>
                                <blockquote className="text-2xl font-light leading-relaxed italic border-l-4 border-primary pl-6">
                                    "We envision a future where clean energy infrastructure becomes a catalyst for social progress, farmer prosperity, and sustainable economic growth."
                                </blockquote>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                                <h3 className="text-2xl font-bold mb-4 text-primary">Impact Statement</h3>
                                <p className="text-xl font-medium leading-relaxed">
                                    “Every megawatt of solar power we develop is a step toward stronger farmers, cleaner energy, and a more resilient India.”
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Government Schemes / Useful Links - Can also be in footer, but adding here as specific content context */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold font-poppins text-foreground mb-8 text-center">Government Initiatives & Resources</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noopener noreferrer" className="block p-6 border rounded-lg hover:border-primary hover:shadow-md transition-all group">
                                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">PM Surya Ghar Muft Bijli Yojana</h3>
                                <p className="text-sm text-gray-500 mt-2">Central Government Scheme</p>
                            </a>
                            <a href="https://www.mahadiscom.in/ismart/" target="_blank" rel="noopener noreferrer" className="block p-6 border rounded-lg hover:border-primary hover:shadow-md transition-all group">
                                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Maharashtra SMART Solar Scheme</h3>
                                <p className="text-sm text-gray-500 mt-2">State Government Scheme</p>
                            </a>
                            <a href="https://mnre.gov.in/en/notice/guidelines-for-pm-surya-ghar-muft-bijli-yojana/" target="_blank" rel="noopener noreferrer" className="block p-6 border rounded-lg hover:border-primary hover:shadow-md transition-all group">
                                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">GHS / RWA Guidelines</h3>
                                <p className="text-sm text-gray-500 mt-2">Ministry of New and Renewable Energy</p>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
