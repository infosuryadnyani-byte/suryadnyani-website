import Link from 'next/link';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { WhatsAppButton } from '@/components/shared/whatsapp-button';

export default function FarmerPartnershipPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/farmer.jpeg"
                            alt="Farmer Partnership"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </section>

                {/* Intro Quote */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light border-l-4 border-primary pl-6 italic">
                            "We are committed to strengthening the financial future of farmers by transforming underutilized land into high-performing solar energy assets. Our ground-mounted solar projects create stable income opportunities, support rural development, and contribute to India’s clean energy transition."
                        </blockquote>
                    </div>
                </section>

                {/* Model Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold font-poppins text-foreground mb-4">Farmers Partnership Model</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                At Suryadnyani Renewable Energy Private Limited, we believe that farmers should benefit directly from the renewable energy revolution. Our partnership model is designed to deliver long-term financial security while preserving land ownership.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Lease Income */}
                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <Check className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">Lease Income Model</h3>
                                <p className="text-gray-600">
                                    Farmers earn predictable, fixed lease income by allowing their land to be used for solar installations. This ensures steady cash flow without the risks associated with traditional agriculture.
                                </p>
                            </div>

                            {/* Land Value */}
                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <Check className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">25–30 Year Land Value</h3>
                                <p className="text-gray-600">
                                    Our long-term solar projects enhance the economic value of land. Even after the project lifecycle, the land remains a valuable asset for future use.
                                </p>
                            </div>

                            {/* Job Creation */}
                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <Check className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">Job Creation</h3>
                                <p className="text-gray-600">
                                    Ground-mounted solar plants generate employment for local communities, from site preparation to maintenance, boosting rural economies.
                                </p>
                            </div>

                            {/* Rural Electrification */}
                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <Check className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">Rural Electrification</h3>
                                <p className="text-gray-600">
                                    By expanding clean energy infrastructure, we help improve power reliability for villages and nearby industries, supporting regional growth.
                                </p>
                            </div>

                            {/* Social Impact */}
                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 md:col-span-2 lg:col-span-2">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <Check className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">Social Impact</h3>
                                <p className="text-gray-600">
                                    Our mission goes beyond power generation. We aim to reduce financial stress in farming communities, encourage sustainable development, and build a stronger, energy-secure nation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA / Closing */}
                <section className="py-20 bg-primary text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                            "When farmers prosper, communities grow, and the nation moves forward with clean energy."
                        </h2>
                        <div className="mt-12">
                            <Link
                                href="/farmer-partnership/social-commitment"
                                className="inline-flex items-center px-8 py-4 bg-white text-primary text-lg font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Discover Our Social Commitment
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
