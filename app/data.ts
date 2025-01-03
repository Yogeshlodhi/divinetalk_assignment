import { AstrologerType, navLinkType } from "./type";

export const AstroLogersData: AstrologerType[] = [
    {
        id: 1,
        name: "Deepak",
        image: "/astro1.png",
        rating: 4.5,
        specialization: ["Vedic", "Numerology", "Vedic", "Numerology"],
        languages: ["Hindi", "English", "Gujarati"],
        experience: 10,
        charge: 25,
        discount: 100,
        status: true,
    },
    {
        id: 2,
        name: "Pushpak",
        image: "/astro2.png",
        rating: 4.2,
        specialization: ["Vedic", "Numerology"],
        languages: ["Hindi", "English", "Gujarati"],
        experience: 10,
        charge: 25,
        discount: 100,
        status: true,
    },
    {
        id: 3,
        name: "Tripti",
        image: "/astro3.png",
        rating: 4.5,
        specialization: ["Vedic", "Numerology"],
        languages: ["Hindi", "English", "Gujarati"],
        experience: 10,
        charge: 200,
        discount: 25,
        status: true,
    },
    {
        id: 4,
        name: "Amit",
        image: "/astro4.png",
        rating: 4.7,
        specialization: ["Vedic", "Palmistry"],
        languages: ["Hindi", "English"],
        experience: 12,
        charge: 30,
        discount: 0,
        status: false,
    },
    {
        id: 5,
        name: "Nisha",
        image: "/astro5.png",
        rating: 4.3,
        specialization: ["Tarot", "Numerology"],
        languages: ["English", "Hindi"],
        experience: 8,
        charge: 20,
        discount: 50,
        status: true,
    },
    {
        id: 6,
        name: "Ravi",
        image: "/astro9.webp",
        rating: 4.4,
        specialization: ["Vedic", "Numerology"],
        languages: ["English", "Hindi", "Bengali"],
        experience: 6,
        charge: 280,
        discount: 50,
        status: false,
    },
    {
        id: 7,
        name: "Rajeev",
        image: "/astro6.png",
        rating: 4.6,
        specialization: ["Vedic", "Astrology"],
        languages: ["English", "Hindi", "Gujarati"],
        experience: 15,
        charge: 40,
        discount: 20,
        status: true,
    },
    {
        id: 8,
        name: "Priya",
        image: "/astro9.webp",
        rating: 4.8,
        specialization: ["Numerology", "Palmistry"],
        languages: ["Hindi", "Punjabi"],
        experience: 9,
        charge: 35,
        discount: 20,
        status: false,
    },
    {
        id: 9,
        name: "Maya",
        image: "/astro9.webp",
        rating: 4.9,
        specialization: ["Tarot", "Crystal Healing"],
        languages: ["Hindi", "English"],
        experience: 12,
        charge: 50,
        discount: 50,
        status: true,
    },
];

export const navbarData: navLinkType[] = [
    {
        id: 1, 
        link: '/',
        name: 'Home'
    },
    {
        id: 2, 
        link: '/services',
        name: 'Services'
    },
    {
        id: 3, 
        link: '/astrologers',
        name: 'Astrologers'
    },
    {
        id: 4, 
        link: '/blogs',
        name: 'Blogs'
    },
]

export default AstroLogersData;
