"use client";
import Lead from "./Lead";
import ParallaxScroll from "./ParallaxScroll";

const eventsData = [
  { src: "./images/Events/Athletics-sports.jpg", title: "Athletics", description: "Athletics is a comprehensive sports game that brings the exhilarating world of track and field to life on your gaming device." },
  { src: "./images/Events/Badminton-sports.jpg", title: "Badminton", description: "An exhilarating badminton tournament that promises fierce competition, thrilling rallies, and unforgettable moments on the court!." },
  { src: "./images/Events/BGAS-sports.jpg", title: "BGAS", description: "BGMI game with thrilling gameplay where players can choose between solo matches or teaming up with friends for squad battles." },
];
const products = [
  {
    title: "Vectron XT Films",
    thumbnail: "./images/aditya(vectron).jpg",
    profile: { name: "ADITYA NIMBALKAR", imageUrl: "./images/aaditya nimbalkar.jpg" },
  },
  {
    title: "WEB AGENCY",
    thumbnail: "./images/tanayweb.png",
    profile: { name: "TANAY BURBURE", imageUrl: "./images/Tanayburbure.jpg" },
  },
  {
    title: "SEARCH-IN TECH",
    thumbnail: "./images/Search_In.png",
    profile: { name: "ANKIT SONAWANE", imageUrl: "./images/Ankit_Photo.jpg" },
  },
  {
    title: "FULL STACK DEVELOPER",
    thumbnail: "./images/Mayank start.png",
    profile: { name: "Mayank Deshmukh", imageUrl: "./images/Mayank.png" },
  },
  {
    title: "S2 ART AND CRAFTS",
    thumbnail: "./startup/S2 ART.png",
    profile: { name: "SHRADDHA SIDHANKAR", imageUrl: "./startup/Shraddha.png" },
  },
  {
    title: "SASSY DESIGNS",
    thumbnail: "./startup/sassyDesigns.png",
    profile: { name: "TUSHAR PATIL", imageUrl: "./startup/sassyDesigns.png" },
  },
  {
    title: "FILMMAKER",
    thumbnail: "./startup/adarshgaurav.jpg",
    profile: { name: "ADARSH GAURAV", imageUrl: "./startup/adarshgaurav.jpg" },
  },
];

export default function Techteam({ className }) {
  return (
   <div>
     <Lead
      title="STARTUP"
      subtitle="Promotion"
      tagline="INNOVATE | COLLABORATE | TRANSFORM"
      products={products}
    />
    <div className={className}>
          <h1 className="text-center text-8xl text-[#3B6654] font-semibold font-[font1] mt-32">
            TECHNICAL EVENTS
          </h1>
          <ParallaxScroll images={eventsData} />
    </div>
   </div>
    
  );
}
