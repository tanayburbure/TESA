"use client";
import ParallaxScroll from "./ParallaxScroll";

const eventsData = [
  { src: "./images/Events/Athletics-sports.jpg", title: "Athletics", description: "Athletics is a comprehensive sports game that brings the exhilarating world of track and field to life on your gaming device." },
  { src: "./images/Events/Badminton-sports.jpg", title: "Badminton", description: "An exhilarating badminton tournament that promises fierce competition, thrilling rallies, and unforgettable moments on the court!." },
  { src: "./images/Events/BGAS-sports.jpg", title: "BGAS", description: "BGMI game with thrilling gameplay where players can choose between solo matches or teaming up with friends for squad battles." },
  { src: "./images/Events/Chess-sports.jpg", title: "Chess", description: "Dive into the timeless strategy of chess with this captivating digital rendition of the classic board game." },
  { src: "./images/Events/coffeealumini.jpg", title: "Coffee Alumni Meet", description: "Connect with old friends and make new memories." },
  { src: "./images/Events/Deadlift-sports.jpg", title: "Deadlift", description: "It is a challenging and intense fitness game that simulates the experience of weightlifting." },
  { src: "./images/Events/Incredible-cultural.jpg", title: "Incredible India", description: "Merges pageantry and talent showcase, featuring diverse skills, interviews, and formalwear presentation for lively entertainment." },
  { src: "./images/Events/Innovator desk-technical.jpg", title: "Innovator Desk", description: "Here you come and pitch your Startup and innovation ideas for exciting prizes." },
  { src: "./images/Events/mission unblockable-tnpsc.jpg", title: "Mission Unblockable", description: "Remove block Every block has colour for which categories ques if you are ans is correct then you get 1point in some condition the zhenga is." },
  { src: "./images/Events/Mystery coders-technical.jpg", title: "Mystery Coders", description: "Blind coding event where you have to solve the problem statement with monitors switched off" },
  { src: "./images/Events/newsletter.jpeg", title: "Newsletter Workshop", description: "Learn to create and design engaging newsletters." },
  { src: "./images/Events/quizsocial.jpg", title: "Quiz Social", description: "A fun-filled evening of trivia and brain teasers." },
  { src: "./images/Events/Roborush-technical.jpg", title: "Roborush", description: "Roborush is a bot-obstacle racing event, the fastest one to complete wins." },
  { src: "./images/Events/Scared games-cultural.jpg", title: "Scared Games", description: "A spooky night of horror stories and games." },
  { src: "./images/Events/Shiny colors-cultural.jpg", title: "Shiny Colors", description: "Adorn faces and hands with imaginative designs using a palette of vibrant and shiny colors." },
  { src: "./images/Events/Table tennis-sports.jpg", title: "Table Tennis", description: "Immerse yourself in the fast-paced excitement of table tennis with this thrilling game." },
  { src: "./images/Events/telescan.png", title: "Telescan", description: "Explore the depths of technology and innovation." },
  { src: "./images/Events/Worthy words-cultural.jpg", title: "Worthy Words", description: "Where Hindi poets entwine language, emotions, and culture, celebrating the profound impact of poetry." },
];

export default function Events({ className }) {
  return (
    <div className={className}>
      <ParallaxScroll images={eventsData} />
    </div>
  );
}
