"use client";
import React, { useRef, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const studentExperiences = [
  {
    name: "Hrishikesh Deshpande",
    job: "Hitech Electronics 2024",
    paragraph:
      "Telling brief about yourself- positive n negative sides of urself. Personally I did not worked on this stuff- so I found it a bit tough. Because we as a student just run behind the HR, technical questions and lastly get stuck in this type of questions. So also 'know yourself'. Multiple resources like Google, YouTube some questions from ppl who gave technical interview, Family member who were experts in their domain, also helped me to Crack the tech interview in this firm. Further having your own experience in your technical domain- like preparing your own stuff, what u know about your technical interests and revising them and to go deep in the same. (In simple language- Teko jo aata hai technical mein, wo tu pehle revise karr, bhale hardware/Software ho..usko prefer kar pehla)",
  },
  {
    name: "Prajwal Bagekari",
    job: "Wipro Pari 2024",
    paragraph:
      "I gained more in-depth understanding of that field by developing various projects and studying for the technical interview from the academic side. I have to continue learning and keep updating my projects. I was able to learn more about what an error signifies and the best practices for fixing it thanks to the platforms I used to address it, such as Google and Youtube. The interview process was excellent overall. For candidates present at the final interview, the corporation arranged lunch. The company is big. We must demonstrate our abilities, our desire to pick up new skills, and our passion. I was asked the following question: What exactly did I do for the project that I have detailed in my resume? What am I aware of in VLSI? what is microcontroller ? What was the IC number of that microcontroller? Several details on my internship experiences. What is my knowledge of the Latex language? additionally A few details included in our resume.The fact that we were divided into groups based on our employment roles was a challenging factor. Even though every member came from one of the key branches, I was nevertheless able to get this job.",
  },
  {
    name: "Vaishnavi Ghatge",
    job: "Bajaj Finserv 2023",
    paragraph:
      "What I experienced from my as well as my frnds interview is most of the companies dont go much deep they just ask you about the basics so having a strong hold on basics is much important. Also the way to represent matter a lots of confidence is what all you need. Important thing to note is never mention any extras in the resume just to show how much your resume weight mention only those things which you have actually worked on. Represent everything precisely starting from your name till your hobbies. So basically the question are asked mostly on the basis of what you have mentioned in your resume. I was a E&tc student so sometimes depends on interviewer they ask you about your trade even. 1. Why I want to go in software being and E&tc student. 2.basics of E&tc (eg :- ohms law, resistor, capacitor such terms) 3. BE Project. 5. The software projects mention in my resume. 6. Java questions( syntax, Fibonacci series, palindrome series , OOPS) 7. Aptitude question ( i.e logical reasoning)......Having a firm hold on basics. It may be any interview either hardware or software yours basics are a must.",
  },
  {
    name: "Snehal Shitole",
    job: "Cognizant 2023",
    paragraph:
      "I have completed java full stack course so that helped me out to clear my technical interview , theory concepts were asked by interviewer and technical interview basically based on our resume so be prepared with your skills which u have mentioned in your resume , interviewer never ask anything out of your resume and project , he twist the questions and ask but the main concepts are related to your resume skills and project only 1.First of all he asked about team management skills 2.Details about my project 3.asked to solve two puzzles and logic building questions 4. About relocation and plans about higher studies.He twist the questions and asked to me , that was quite difficult to solve but it was all about logic so after few minutes i cleared that puzzle question and got selected for next round",
  },
];

const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const ExperienceCard = memo(function ExperienceCard({ name, job, paragraph }) {
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = prefersReducedMotion();

    const ctx = gsap.context(() => {
      if (!cardRef.current) return;

      if (reduce) {
        if (textRef.current) gsap.set(textRef.current, { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "top 45%",
          scrub: true,
        },
        defaults: { ease: "power3.inOut" },
      });

      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0
        );
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="w-[85%] mt-20 mx-auto bg-white overflow-hidden rounded-2xl shadow-sm mb-10 border border-gray-100"
      layout
      role="region"
      aria-label={name}
    >
      <motion.div ref={textRef} className="p-6 sm:p-8" layout>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 ring-2 ring-green-200 shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 12c2.761 0 5-2.686 5-6s-2.239-6-5-6-5 2.686-5 6 2.239 6 5 6zm0 2c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold leading-tight text-gray-900">
            {name}
          </h2>
        </div>

        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-700">Placed at</span> {job}
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">{paragraph}</p>
      </motion.div>
    </motion.div>
  );
});

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function ShrinkingImageCardList() {
  return (
    <div className="w-full">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl text-center sm:text-3xl font-extrabold tracking-tight text-gray-900">
          OUR Top Interveiw Experiences
        </h1>
      </div>

      <motion.div
        className="w-full"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {studentExperiences.map((s) => (
          <motion.div key={s.name} variants={cardItemVariants}>
            <ExperienceCard name={s.name} job={s.job} paragraph={s.paragraph} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
