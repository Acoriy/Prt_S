// // next image 
// import Image from "next/image";

// const Avatar = () => {
//   return <div className="hidden xl:flex xl:max-w-none">
//     <Image src={'/Avatar_SF.png'} width={737} height={678} alt="image" 
//       className="translate-z-0 w-full h-full " />
//   </div>
// };

// export default Avatar;


import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none relative group">
      <Image 
        src={'/Avatar_SF.png'} 
        width={737} 
        height={678} 
        alt="image" 
        className="translate-z-0 w-full h-full transition-all duration-500 
          group-hover:scale-[1.03]
          group-hover:brightness-110
          group-hover:contrast-105"
      />
      
      {/* Effet de lumière traversante */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent 
          opacity-0 group-hover:opacity-100 group-hover:translate-x-full 
          transition-all duration-1000"></div>
      </div>
      
      {/* Bordure lumineuse subtile
      <div className="absolute inset-0
        group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
        transition-all duration-400"></div> */}
    </div>
  );
};

export default Avatar;

