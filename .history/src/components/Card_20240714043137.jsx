import React from "react";

function Card() {
    const data=[
        {image:'https://4kwallpapers.com/images/wallpapers/jujutsu-kaisen-3840x2160-13824.jpg',name:"Jujutsu Kaisan",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit repellat itaque?",instock:true},
        {image:'https://4kwallpapers.com/images/walls/thumbs_3t/16947.jpg',name:"Demon Slayer",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit repellat itaque?",instock:false},
        {image:'https://4kwallpapers.com/images/walls/thumbs_3t/15351.jpg',name:"Solo Leveling",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit repellat itaque?",instock:true}
    ]
    return (
        <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-700">
            {data.map((elem,index) =>(
                <div key={index} className="w-52 bg-zinc-300 rounded-md overflow-hidden">
                <div className="w-full h-40 bg-zinc-500 overflow-hidden">
                    <img className="w-full h-full object-cover bg-bottom" src={elem.image} alt="" />
                </div>
                <div className="w-full px-4 py-4">
                    <h1 className="font-semibold text-lg">{elem.name}</h1>
                    <p className="text-sm mt-3 ">{elem.description}</p>
                    <button className={`px-3 py-1 ${elem.instock ? "bg-blue-600" : "bg-red-800"} text-s rounded text-white mt-3`} >
                        {elem.instock ? "In Stock" : "Out of Stock"} {/* <=conditional rendering */}
                    </button> 
                </div>
            </div>
            ) )}            
        </div>
    );
}

export default Card;    