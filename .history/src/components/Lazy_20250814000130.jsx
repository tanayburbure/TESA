import React, { useRef, useEffect, useMemo } from "react";

// GSAP and ScrollTrigger are assumed to be loaded globally in this environment.
// We register the ScrollTrigger plugin with the global GSAP object.
if (window.gsap) {
  window.gsap.registerPlugin(window.ScrollTrigger);
}

// Array of team member data.
const teamImages = [
  { src: "https://placehold.co/400x600/3B6654/EAEFEF?text=Principal", category: "Principal" },
  { src: "https://placehold.co/400x600/313131/EAEFEF?text=HOD", category: "Head of Department" },
  { src: "https://placehold.co/400x600/3B6654/EAEFEF?text=TESA+Chair", category: "TESA Chairperson" },
  { src: "https://placehold.co/400x600/313131/EAEFEF?text=TESA+Chair", category: "TESA Chairperson" },
  { src: "https://placehold.co/400x600/3B6654/EAEFEF?text=President", category: "President" },
  { src: "https://placehold.co/400x600/313131/EAEFEF?text=Vice-Pres", category: "Vice-President" },
  { src: "https://placehold.co/400x600/3B6654/EAEFEF?text=Secretary", category: "General Secretary" },
  { src: "https://placehold.co/400x600/313131/EAEFEF?text=Admin", category: "Administrator" },
  { src: "https://placehold.co/400x600/3B6654/EAEFEF?text=Treasurer", category: "Treasurer" },
];

const Team = () => {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    // A small delay to ensure all elements are mounted before initializing animations
    const timer = setTimeout(() => {
        // Check if GSAP is available on the window object before using it
        if (!window.gsap) {
            console.error("GSAP not loaded. Animations will not work.");
            return;
        }
        
        // Use the global gsap object
        const gsap = window.gsap;

        // Create a GSAP context for cleanup
        const ctx = gsap.context(() => {
            if (sectionRef.current) {
                // Select all individual image elements
                const images = gsap.utils.toArray(".team-image");

                // Set initial state of all images to be invisible
                gsap.set(images, { autoAlpha: 0 });

                // Create a timeline that is controlled by the scroll position
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: `+=${images.length * 400}`, // The scroll distance over which the animation occurs
                        pin: true, // Pin the section while the animation is running
                        scrub: 1, // Smoothly scrub through the animation on scroll
                        invalidateOnRefresh: true, // Recalculate on resize
                    },
                });

                // Loop through each image to create a sequential animation
                images.forEach((image, index) => {
                    // Animate the image to fade in and scale up slightly
                    tl.to(image, { autoAlpha: 1, scale: 1, duration: 0.5 });
                    
                    // If it's not the last image, hold it for a moment, then fade it out
                    if (index < images.length - 1) {
                         // The '+=1' creates a pause, making the image stay visible for a duration of scroll
                        tl.to(image, { autoAlpha: 0, scale: 0.95, duration: 0.5 }, "+=1");
                    }
                });
            }
        }, sectionRef); // Scope the context to the section for easier cleanup

        // Cleanup function to revert all GSAP animations
        return () => {
            ctx && ctx.revert();
        };
    }, 100);

    return () => clearTimeout(timer);

  }, []);

  // useMemo to prevent re-rendering the list of images on every component render
  const renderedTeamImages = useMemo(() => {
    return teamImages.map((image, index) => (
      <div
        key={index}
        // All images are positioned absolutely within the container to stack them
        className="team-image absolute rounded-lg overflow-hidden"
        style={{
          width: "22vw",
          minWidth: "280px",
          height: "60vh",
          maxHeight: "450px",
          border: "4px solid #EAEFEF",
          willChange: "transform, opacity", // Performance optimization for animations
          scale: 0.95, // Initial smaller scale for animation effect
        }}
      >
        <h3 className="absolute bottom-[4%] left-[5%] text-[2vw] text-zinc-100 font-bold z-10" style={{fontFamily: 'sans-serif'}}>
          {image.category}
        </h3>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <img
          src={image.src}
          alt={image.category}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    ));
  }, []);

  return (
    // Main container for the component
    <div className="wrapper relative select-none overflow-hidden bg-[#f0f0f0]">
      {/* The section that will be pinned during the scroll animation */}
      <div ref={sectionRef} className="relative h-screen w-full overflow-hidden">
        {/* Container to center the stacked images */}
        <div
          ref={imageContainerRef}
          className="w-full h-full flex justify-center items-center"
        >
          {renderedTeamImages}
        </div>
      </div>
       {/* Added a section below to demonstrate the scroll functionality */}
       <div className="h-screen w-full flex justify-center items-center bg-gray-800">
            <h2 className="text-4xl text-white font-bold">Scroll Down Further</h2>
       </div>
    </div>
  );
};

export default Team;
