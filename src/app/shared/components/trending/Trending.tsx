   "use client";

   const Trending = () => {
   const gridItems = [
      { title: "MOST CLICKED", desc: "Urban Prime Plaza Premier", img: "/images/plaza1.jpg" },
      { title: "MOST WATCHLISTED", desc: "Urban Prime Plaza Premier", img: "/images/plaza2.jpg" },
      { title: "HOTTEST LISTING", desc: "Urban Prime Plaza Premier", img: "/images/plaza3.webp" },
   ];

   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
         {gridItems.map((item, index) => (
         <div
            
            key={index}
            className="relative w-full h-68 rounded-lg overflow-hidden"
            style={{
               backgroundImage: `url(${item.img})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
         >
            <div className="h-full w-full bg-black/30"/> 
            {/* Overlay text at bottom-left */}
            <div className="absolute bottom-2 left-2 px-2 py-1 rounded">
               <p className="text-white text-lg ">{item.title}</p>
               <p className="text-white text-[16px] font-semibold">{item.desc}</p>
            </div>
         </div>
         ))}
      </div>
   );
};

export default Trending;
