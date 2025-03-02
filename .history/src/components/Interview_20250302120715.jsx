import React from 'react'

function Interview() {

    const company = ["./placed/accenture.png", "./placed/bharatforge.png", "./placed/hexaware.png", "./placed/infosys.png", "./placed/mahindra.png", "./placed/tatacommu.png", "./placed/tcs.png", "./placed/wipro.png", "./placed/zensoft.png",]
    const name = ["Hrishikesh Deshpande", "Prajwal Bagekari", "Vaishnavi Ghatge", "Snehal Shitole"]
    const job = ["Hitech Electronics 2024", "Wipro Pari 2024", "Bajaj Finserv 2023", "Cognizant 2023"]
    const para = ["Telling brief about yourself- positive n negative sides of urself. Personally I did not worked on this stuff- so I found it a bit tough. Because we as a student just run behind the HR, technical questions and lastly get stuck in this type of questions. So also 'know yourself'. Multiple resources like Google, YouTube some questions from ppl who gave technical interview, Family member who were experts in their domain, also helped me to Crack the tech interview in this firm. Further having your own experience in your technical domain- like preparing your own stuff, what u know about your technical interests and revising them and to go deep in the same. (In simple language- Teko jo aata hai technical mein, wo tu pehle revise karr, bhale hardware/Software ho..usko prefer kar pehla)", "I gained more in-depth understanding of that field by developing various projects and studying for the technical interview from the academic side. I have to continue learning and keep updating my projects. I was able to learn more about what an error signifies and the best practices for fixing it thanks to the platforms I used to address it, such as Google and Youtube. The interview process was excellent overall. For candidates present at the final interview, the corporation arranged lunch. The company is big. We must demonstrate our abilities, our desire to pick up new skills, and our passion. I was asked the following question: What exactly did I do for the project that I have detailed in my resume? What am I aware of in VLSI? what is microcontroller ? What was the IC number of that microcontroller? Several details on my internship experiences. What is my knowledge of the Latex language? additionally A few details included in our resume.The fact that we were divided into groups based on our employment roles was a challenging factor. Even though every member came from one of the key branches, I was nevertheless able to get this job.", "What I experienced from my as well as my frnds interview is most of the companies dont go much deep they just ask you about the basics so having a strong hold on basics is much important. Also the way to represent matter a lots of confidence is what all you need. Important thing to note is never mention any extras in the resume just to show how much your resume weight mention only those things which you have actually worked on. Represent everything precisely starting from your name till your hobbies. So basically the question are asked mostly on the basis of what you have mentioned in your resume. I was a E&tc student so sometimes depends on interviewer they ask you about your trade even. 1. Why I want to go in software being and E&tc student. 2.basics of E&tc (eg :- ohms law, resistor, capacitor such terms) 3. BE Project. 5. The software projects mention in my resume. 6. Java questions( syntax, Fibonacci series, palindrome series , OOPS) 7. Aptitude question ( i.e logical reasoning)......Having a firm hold on basics. It may be any interview either hardware or software yours basics are a must.", "I have completed java full stack course so that helped me out to clear my technical interview , theory concepts were asked by interviewer and technical interview basically based on our resume so be prepared with your skills which u have mentioned in your resume , interviewer never ask anything out of your resume and project , he twist the questions and ask but the main concepts are related to your resume skills and project only 1.First of all he asked about team management skills 2.Details about my project 3.asked to solve two puzzles and logic building questions 4. About relocation and plans about higher studies.He twist the questions and asked to me , that was quite difficult to solve but it was all about logic so after few minutes i cleared that puzzle question and got selected for next round"]

    return (
        <div className='w-full bg-black text-white pt-12'>
            <div className='w-[70vw]  mx-auto'>
                <h1 className='text-center tracking-tighter text-[3vw]'>Learn from Real-Life <span className='text-green-800'>INTERVEIW EXP</span> of our students</h1>
                <p className='text-center'>Expeirence the perfect blend of Culture,Technology,Athleticism at our captivating events , where innovation meets tradition in a spectacular showcase of talent and passsion join us on exhilarating journey through the reamls of Culture, Techonology and Sports</p>
                <div>
                    <div className='flex gap-4 mt-8 text-black'>
                        <div className='h-[20vh] w-1/3 bg-white rounded-lg flex flex-col items-center justify-center p-4'>
                            <img
                                src="./images/s1.png"
                                alt="Interview 1"
                                className='h-24 w-24 object-cover mb-2'
                            />
                            <h2 className='text-lg font-medium text-center'>500+ Students placed</h2>
                        </div>

                        <div className='h-[20vh] w-1/3 bg-white rounded-lg flex flex-col items-center justify-center p-4'>
                            <img
                                src="./images/s2.png"
                                alt="Interview 2"
                                className='h-24 w-24 object-cover mb-2'
                            />
                            <h2 className='text-lg font-medium text-center'>20+ MNC's</h2>
                        </div>

                        <div className='h-[20vh] w-1/3 bg-white rounded-lg flex flex-col items-center justify-center p-4'>
                            <img
                                src="./images/s3.png"
                                alt="Interview 3"
                                className='h-24 w-24 object-cover mb-2'
                            />
                            <h2 className='text-lg font-medium text-center'>10+ Core recruitments</h2>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-4 mt-8'>
                    <button className='bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-900 transition-colors'>
                        View Interviews
                    </button>
                    <button className='bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors'>
                        Share Experience
                    </button>
                </div>
            </div>
            <div className='company mt-12'>
                <h2 className='text-center text-[3vw]'>OUR STUDENTS PLACED IN</h2>
                <style>
                    {`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(calc(-100% - 2rem))}
                        }
                        .scroll-container {
                            animation: scroll 10s linear infinite;
                            will-change: transform;
                            backface-visibility: hidden;
                            transform: translateZ(0);
                            -webkit-font-smoothing: antialiased;
                        }
                        .scroll-container:hover {
                            animation-play-state: paused;
                        }
                        @media (prefers-reduced-motion: reduce) {
                            .scroll-container {
                                animation-duration: 9s;
                            }
                        }
                    `}
                </style>
                <div className='place overflow-hidden py-8 whitespace-nowrap'>
                    <div className='scroll-container inline-flex gap-8'>
                        {company.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Company ${index + 1}`}
                                className='h-20 w-auto object-contain'
                            />
                        ))}
                        {/* Duplicate images for seamless loop */}
                        {company.map((img, index) => (
                            <img
                                key={`duplicate-${index}`}
                                src={img}
                                alt={`Company ${index + 1}`}
                                className='h-20 w-auto object-contain'
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='exp py-16'>
                <h2 className='text-center text-[3vw]'>TOP INTEREVIEW EXPERIENCES</h2>
                <div className='cards grid grid-cols-2 gap-8 w-[70vw] mx-auto mt-8'>
                    {name.map((student, index) => (
                        <div key={index} className='bg-white text-black p-6 rounded-lg'>
                            <div><h3 className='text-xl font-bold mb-2'>{student}</h3>
                            <p className='text-green-800 font-medium mb-4'>{job[index]}</p></div>
                            <p className='text-gray-700 text-sm'>{para[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Interview