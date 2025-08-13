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
                         // The '+=1' creates a pau