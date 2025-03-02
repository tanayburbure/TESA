import React from 'react'

function Startup() {
    const img = ["./startup/VXT.jpg","./startup/Searchin.jpg","./startup/adarshgurav.jpg","./startup/adarshgurav.jpg","./startup/adarshgurav.jpg","./startup/adarshgurav.jpg"]
    const field = ["Media", "Technology", "Technology", "Art and Craft", "Media", "Media"]
    const brand = ["Vectron XT Films", "SEARCH-IN TECH", "Mayank Deshmukh", "S2 ART AND CRAFTS", "SASSY DESIGNS", "Adarsh Gurav"]
    const Description = ["I am a Travel Cinematographer/Photographer and a self-taught video editor from Pune, Maharashtra. I am well-known for creating stunning transition videos even without professional gear. So far, I have explored 8 states/ 1 UT and over 25 cities in India with the intention to travel the world and capture every moment of it. Apart from that, I have successfully delivered 20+ video production projects for my clients across India.",

        "Search-In is an End-to-End provider of tech to digital service. People in the business community trust Search-in service due to clarity and work-ethic. Search-In is one of the prominent companies with remarkable expertise & execution.",

        "Myself Mayank, I am a B.tech undergrad with great passion for programming. I am passionate about delivering solutions that add to people's lives and at the same time challenge me. I'm constantly imporveing my Full-stack developing skills. With my passion for tech , I am very egar to contribute to a bigger cause.",

        "My art account serves as a creative hub showcasing a diverse range of artwork, including canvas paintings, customized calendars, and other innovative creations. With a focus on originality and personalization, my small-scale business offers unique pieces that resonate with my audience's tastes and preferences.",
        "Elevate your message with Tushar Patil's skilled touch. Whether it's dynamic video edits or compelling poster designs, capture attention and convey your story with finesse. From menus to political campaigns, every project shines with creativity and impact, making your vision a reality !!",

        "I am filmmaker , I do films and advertising for the company's. I do cinematography, Video Editing, Animation and vfx. I also do a marketing for the company's."]

    const profile = [""]
    const Name = ["ADITYA NIMBALKAR", "ANKIT SONAWANE", "Mayank Deshmukh", "Shraddha Sidhankar", "TUSHAR PATIL", "Adarsh Gurav"]
    const batch = ["BE 2025", "BE 2022", "BE 2026", "BE 2024", "BE 2024", "BE 2024"]
    const Too = ["INSTAGRAM", "WEBSITE", "WEBSITE", "INSTAGRAM", "INSTAGRAM", "INSTAGRAM"]

    return (
        <div className='w-full min-h-screen bg-zinc-900 py-10'>
            <h1 className='text-[4.5vw] font-medium text-center text-white mb-16'>OUR STARTUPS</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto'>
                {field.map((item, index) => (
                    <div key={index} className='bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'>
                        <div className='aspect-video bg-zinc-700'>
                            {/* Image placeholder - replace with actual image */}
                            <img
                                src={img[0]}
                                alt={brand[index]}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='p-6'>
                            <div className='flex justify-between items-center mb-4'>
                                <span className='text-sm text-zinc-400'>{field[index]}</span>
                                <span className='text-sm text-zinc-400'>{batch[index]}</span>
                            </div>
                            <h2 className='text-xl font-bold text-white mb-2'>{brand[index]}</h2>
                            <h3 className='text-md font-medium text-zinc-300 mb-4'>{Name[index]}</h3>
                            <p className='text-zinc-400 text-sm mb-6 line-clamp-4'>
                                {Description[index]}
                            </p>
                            <div className='flex justify-between items-center'>
                                <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'>
                                    Contact
                                </button>
                                <a
                                    href="#"
                                    className='text-blue-400 hover:text-blue-300 transition-colors'
                                >
                                    {Too[index]} →
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Startup