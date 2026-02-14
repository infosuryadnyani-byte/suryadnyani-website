'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder brand images - in a real scenario, these would be actual brand logos
// For now we'll use some placeholders or just text if images aren't present
const brands = [
    { name: 'Brand 1', src: '/ourbrands/Brand 1.webp' },
    { name: 'Brand 2', src: '/ourbrands/Brand2.png' },
    { name: 'Brand 3', src: '/ourbrands/Brand 3.png' },
    { name: 'Brand 4', src: '/ourbrands/Brand 4.png' },
    { name: 'Brand 5', src: '/ourbrands/Brand 5.png' },
    { name: 'Brand 6', src: '/ourbrands/Brand 6.svg' },
    { name: 'Brand 7', src: '/ourbrands/Brand 7.png' },
    { name: 'Brand 8', src: '/ourbrands/Brand 8.svg' },
    { name: 'Brand 9', src: '/ourbrands/Brand 9.png' },
    { name: 'Brand 10', src: '/ourbrands/Brand 10.png' },
    { name: 'Brand 11', src: '/ourbrands/Brand11.png' },
    { name: 'Brand 12', src: '/ourbrands/Brand 12.svg' },
    { name: 'Brand 13', src: '/ourbrands/Brand13.png' },
    { name: 'Brand 14', src: '/ourbrands/Brand 14.png' },
    { name: 'Brand 15', src: '/ourbrands/Brand15.png' },
];

export function BrandsMarquee() {
    const [isHovered, setIsHovered] = useState(false);

    // Create placeholders since user hasn't added images yet
    // We'll use a mix of text/colors for the demo if images fail to load

    return (
        <section className="py-12 bg-gray-350 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <h2 className="text-3xl font-poppins font-bold text-white">Brands With Us</h2>
            </div>

            <Link href="/contact" className="block cursor-pointer">
                <div
                    className="relative flex overflow-x-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className={`flex animate-marquee whitespace-nowrap ${isHovered ? 'paused' : ''}`}
                        style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                    >
                        {/* First set of brands */}
                        {brands.map((brand, index) => (
                            <div key={`brand-1-${index}`} className="mx-8 flex items-center justify-center min-w-[400px] h-64 transform transition-transform hover:scale-105">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={brand.src}
                                        alt={brand.name}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Second set of brands for seamless scrolling */}
                        {brands.map((brand, index) => (
                            <div key={`brand-2-${index}`} className="mx-8 flex items-center justify-center min-w-[400px] h-64 transform transition-transform hover:scale-105">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={brand.src}
                                        alt={brand.name}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className={`flex absolute top-0 animate-marquee2 whitespace-nowrap ${isHovered ? 'paused' : ''}`}
                        style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                    >
                        {/* Duplicate required for true infinite scroll effect with CSS animation */}
                        {brands.map((brand, index) => (
                            <div key={`brand-3-${index}`} className="mx-8 flex items-center justify-center min-w-[400px] h-64 transform transition-transform hover:scale-105">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={brand.src}
                                        alt={brand.name}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                        ))}

                        {brands.map((brand, index) => (
                            <div key={`brand-4-${index}`} className="mx-8 flex items-center justify-center min-w-[400px] h-64 transform transition-transform hover:scale-105">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={brand.src}
                                        alt={brand.name}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Link>
        </section>
    );
}
