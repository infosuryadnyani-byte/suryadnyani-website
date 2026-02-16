'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder brand images - in a real scenario, these would be actual brand logos
// For now we'll use some placeholders or just text if images aren't present
const brands = [
    { name: 'Brand 1', src: '/ourbrands/Brand 1.webp', url: 'https://www.luminousindia.com/' },
    { name: 'Brand 2', src: '/ourbrands/Brand2.png', url: 'https://www.tatapowersolar.com/' },
    { name: 'Brand 3', src: '/ourbrands/Brand 3.png', url: 'https://rayzonsolar.com/' },
    { name: 'Brand 4', src: '/ourbrands/Brand 4.png', url: 'https://waaree.com/' },
    { name: 'Brand 5', src: '/ourbrands/Brand 5.png', url: 'https://www.vikramsolar.com/' },
    { name: 'Brand 6', src: '/ourbrands/Brand 6.svg', url: 'https://www.jindalsteel.in/' },
    { name: 'Brand 7', src: '/ourbrands/Brand 7.png', url: 'https://www.pennarindia.com/' },
    { name: 'Brand 8', src: '/ourbrands/Brand 8.svg', url: 'https://havells.com/' },
    { name: 'Brand 9', src: '/ourbrands/Brand 9.png', url: 'https://www.kei-ind.com/' },
    { name: 'Brand 10', src: '/ourbrands/Brand 10.png', url: 'https://polycab.com/' },
    { name: 'Brand 11', src: '/ourbrands/Brand11.png', url: 'https://jiothings.com/jio-sparq-microinverter.html' },
    { name: 'Brand 12', src: '/ourbrands/Brand 12.svg', url: 'https://jiothings.com' },
    { name: 'Brand 13', src: '/ourbrands/Brand13.png', url: 'https://en.growatt.com/' },
    { name: 'Brand 14', src: '/ourbrands/Brand 14.png', url: 'https://ksolare.com' },
    { name: 'Brand 15', src: '/ourbrands/Brand15.png', url: 'https://www.renewsysworld.com/' },
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

            {/* Removed outer Link to allow individual brand links */}
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
                            <Link href={brand.url} target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={brand.src}
                                    alt={brand.name}
                                    fill
                                    className="object-contain p-4"
                                />
                            </Link>
                        </div>
                    ))}

                    {/* Second set of brands for seamless scrolling */}
                    {brands.map((brand, index) => (
                        <div key={`brand-2-${index}`} className="mx-8 flex items-center justify-center min-w-[400px] h-64 transform transition-transform hover:scale-105">
                            <Link href={brand.url} target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={brand.src}
                                    alt={brand.name}
                                    fill
                                    className="object-contain p-4"
                                />
                            </Link>
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
                            <Link href={brand.url} target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={brand.src}
                                    alt={brand.name}
                                    fill
                                    className="object-contain p-4"
                                />
                            </Link>
                        </div>
                    ))}

                    {brands.map((brand, index) => (
                        <div key={`brand-4-${index}`} className="mx-8 flex items-center justify-center min-w-[400px] h-64 transform transition-transform hover:scale-105">
                            <Link href={brand.url} target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={brand.src}
                                    alt={brand.name}
                                    fill
                                    className="object-contain p-4"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
