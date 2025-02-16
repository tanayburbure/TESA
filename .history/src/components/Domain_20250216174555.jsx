ChatGPT
You said:
import React from 'react'
import { useState } from 'react';

const Domain = () => {
  const [hoverText, setHoverText] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (text, index) => {
    setHoverText(text);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverText("");
    setHoveredIndex(null);
  };

  return (
    <div className='h-[28vw] mt-20'>
      <div className='flex gap-2 items-center justify-center'>
        {[...Array(8)].map((_, index) => (
          <img 
            key={index}
            className={h-16 w-20 rounded grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-[1.5] cursor-pointer ${hoveredIndex === index ? 'ml-4' : ''}}
            src="/images/socialbg.jpg"
            alt=""
            onMouseEnter={() => handleMouseEnter(["TECHNICAL", "SPORTS", "T & P", "CULTURAL", "MEDIA", "SOCIAL", "STUDY CIRCLE", "EDITORIAL"][index], index)}
            onMouseLeave={handleMouseLeave} />
        ))}
      </div>
      <h1 className='text-[16vh] mt-16 flex items-center justify-center text-zinc-500 font-medium tracking-tight'>
        {hoverText || 'OUR DOMAINS'}
      </h1>
    </div>
  );
};


export default Domain can you optimize this code and fix values so can hover scale move smoothly
ChatGPT said:
Here's an optimized and improved version of your code with better scaling, smooth transitions, and a natural movement effect:

Optimized Domain Hover
Optimizations:
Refactored the domain names into an array to make the code more readable.
Simplified state management by keeping hoverText default as "OUR DOMAINS" instead of an empty string.
Smoother scaling:
Default hover effect: hover:scale-125
Active hover effect: scale-150 translate-y-[-10px] for a subtle lift effect.
Better transitions: transition-transform duration-500 ease-out for smooth scaling/movement.
Added transition-opacity to the heading for a softer text update effect.
This version ensures smooth hover interactions while making the UI more elegant. Let me know if you need any further tweaks! 🚀






You said:
the img elements should be moved to accomodate changes in their size 
ChatGPT said:
Edited
I've adjusted the image elements to shift horizontally (translate-x-4) when they scale up, ensuring they don't overlap awkwardly. Let me know if you'd like further refinements! 🚀






You said:
i mean when the hover image is gets big the other images should be shrinked
ChatGPT said:
Edited
I've modified the hover effect so that when an image is hovered over, it enlarges (scale-150), while the others shrink (scale-75). This ensures better visual balance and smoother interaction. Let me know if you need further tweaks! 🚀






You said:
when an img is hovered i want the other images size to be shrinked to size small

2/2

ChatGPT said:
Edited
I've updated the hover effect so that when an image is hovered over, it enlarges (scale-150), and all other images shrink to a smaller size (scale-50). When no image is hovered, all images return to their original size (scale-100). Let me know if you need further refinements! 🚀










Search

Reason

ChatGPT can make mistakes. Check important info.
?


Optimized Domain Hover






Preview


1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
import React, { useState } from 'react';

const Domain = () => {
  const [hoverText, setHoverText] = useState("OUR DOMAINS");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const domains = [
    "TECHNICAL", "SPORTS", "T & P", "CULTURAL", "MEDIA", "SOCIAL", "STUDY CIRCLE", "EDITORIAL"
  ];

  const handleMouseEnter = (text, index) => {
    setHoverText(text);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverText("OUR DOMAINS");
    setHoveredIndex(null);
  };

  return (
    <div className='h-[28vw] mt-20 flex flex-col items-center'>
      <div className='flex gap-4 items-center justify-center'>
        {domains.map((text, index) => (
          <div key={index} className='relative'>
            <img 
              className={`h-20 w-24 rounded grayscale transition-transform duration-500 ease-out cursor-pointer ${
                hoveredIndex === index ? 'scale-150' : hoveredIndex !== null ? 'scale-50' : 'scale-100'
              }`}
              src='/images/socialbg.jpg'
              alt={text}
              onMouseEnter={() => handleMouseEnter(text, index)}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
      </div>
      <h1 className='text-[16vh] mt-16 flex items-center justify-center text-zinc-500 font-medium tracking-tight transition-opacity duration-300'>
        {hoverText}
      </h1>
    </div>
  );
};

export default Domain;


ChatGPT says: I've updated the hover effect so that when an image is hovered over, it enlarges (`scale-150`), and all other images shrink to a smaller size (`scale-50`). When no image is hovered, all images return to their original size (`scale-100`). Let me know if you need further refinements! 🚀