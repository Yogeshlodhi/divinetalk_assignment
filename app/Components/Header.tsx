"use client"
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { navbarData } from '../data';
import { ChevronLeft, Menu, X } from 'lucide-react';

const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="py-6 shadow-lg">
            <div className="flex justify-around items-center">

                {/* Back button with title */}
                <div className="flex items-center">
                    <ChevronLeft className="md:hidden bg-transparent border-none text-black" />
                    {/* <Button className="md:hidden bg-transparent border-none text-black">
                        <ChevronLeft />
                    </Button> */}
                    <span className="ml-2 text-lg font-bold md:hidden">Connect with Astrologers</span>
                </div>

                <Link href="/" className="hidden sm:text-xl font-bold">
                    <Image src="/logo.png" alt="Divinetalk" width={100} height={100} />
                </Link>

                <Button
                    // className="md:hidden"
                    className="md:hidden bg-transparent border-black outline-black text-black"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>

                <div className="hidden md:flex space-x-4 justify-around items-center gap-6">
                    {
                        navbarData.map((nav_item) => (
                            <Link
                                key={nav_item.id}
                                href={nav_item.link}
                                className={`hover:text-gray-500 ${pathname === `/${nav_item.link}` ? 'font-bold' : ''}`}
                            >
                                {nav_item.name}
                            </Link>
                        ))
                    }

                    <Select>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="English" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Languages</SelectLabel>
                                <SelectItem value="hindi">Hindi</SelectItem>
                                <SelectItem value="urdu">Urdu</SelectItem>
                                <SelectItem value="french">French</SelectItem>
                                <SelectItem value="spanish">Spanish</SelectItem>
                                <SelectItem value="korean">Korean</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Button className="text-white bg-red-500 hover:bg-red-600 w-[120px]">
                        Get App
                    </Button>
                </div>
                {isMenuOpen && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center py-8 px-4">
                        {/* Close Button */}
                        <Button
                            className="absolute top-4 right-4 bg-transparent text-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </Button>

                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-xl font-bold mb-8"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Image src="/logo.png" alt="Divinetalk" width={120} height={120} />
                        </Link>

                        {/* Navigation Links */}
                        <div className="flex flex-col space-y-6 text-center mb-6">
                            {navbarData.map((nav_item) => (
                                <Link
                                    key={nav_item.id}
                                    href={nav_item.link}
                                    className={`text-xl hover:text-gray-500 ${pathname === `/${nav_item.link}` ? "font-bold" : ""
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {nav_item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Language Selector */}
                        <Select>
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="English" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Languages</SelectLabel>
                                    <SelectItem value="hindi">Hindi</SelectItem>
                                    <SelectItem value="urdu">Urdu</SelectItem>
                                    <SelectItem value="french">French</SelectItem>
                                    <SelectItem value="spanish">Spanish</SelectItem>
                                    <SelectItem value="korean">Korean</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        {/* Get App Button */}
                        <Button className="text-white bg-red-500 hover:bg-red-600 w-[200px] mt-6">
                            Get App
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;


// "use client"
// import { Button } from '@/components/ui/button';
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectLabel,
//     SelectTrigger,
//     SelectValue,
// } from '@/components/ui/select';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React from 'react';
// import { navbarData } from '../data';

// const Header = () => {
//     const pathname = usePathname();

//     return (
//         <nav className="py-6 shadow-lg">
//             <div className="flex justify-around items-center">
//                 <Link href="/" className="text-xl font-bold">
//                     <Image src="/logo.png" alt="Divinetalk" width={100} height={100} />
//                 </Link>
//                 <div className="flex space-x-4 justify-around items-center gap-6">
//                     {
//                         navbarData.map((nav_item) => (
//                             <Link
//                                 key={nav_item.id}
//                                 href={nav_item.link}
//                                 className={`hover:text-gray-500 ${pathname === `/${nav_item.link}` ? 'font-bold' : ''}`}
//                             >
//                                 {nav_item.name}
//                             </Link>
//                         ))
//                     }

//                     <Select>
//                         <SelectTrigger className="w-[120px]">
//                             <SelectValue placeholder="English" />
//                         </SelectTrigger>
//                         <SelectContent>
//                             <SelectGroup>
//                                 <SelectLabel>Languages</SelectLabel>
//                                 <SelectItem value="hindi">Hindi</SelectItem>
//                                 <SelectItem value="urdu">Urdu</SelectItem>
//                                 <SelectItem value="french">French</SelectItem>
//                                 <SelectItem value="spanish">Spanish</SelectItem>
//                                 <SelectItem value="korean">Korean</SelectItem>
//                             </SelectGroup>
//                         </SelectContent>
//                     </Select>

//                     <Button className="text-white bg-red-500 hover:bg-red-600 w-[120px]">
//                         Get App
//                     </Button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Header;