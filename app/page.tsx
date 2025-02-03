// import Image from "next/image";
// import { FaCircleArrowRight } from "react-icons/fa6";

// export default function Home() {
//   return (
//     <div className="text-center">

//         <div className="mt-[30px] font-bold  text-[20px] text-gradient font-SofiaSans" >
//           Revolutionizing business activities with AIoT
//         </div>

//         <div className="text-[35px] text-blue mt-[20px] font-bold dark:text-white/80 ">
//           Unleash Your Full Potential
//           With The <span className="text-gradient">JARVIS</span> Platform
//         </div>

//         <div className="mt-[20px] cursor-pointer">
//           <span className="text-[20px] border-[1px] rounded-[25px] border-primary/90 text-gradient font-bold px-[10px] py-[5px] inline-flex items-center gap-2 group hover:italic transition-transform duration-2000 font-SofiaSans">
//             Contact Us 
//             <FaCircleArrowRight size={20} className="text-primary mx-[5px] group-hover:-rotate-45 transition-transform duration-1000" />
//           </span>
//         </div>

//         <video width={100} height={100} autoPlay loop muted className="w-full">
//           <source src="/videos/welcome.mp4" type="video/mp4" />
//         </video>
       
//     </div>
//   );
// }


import { FaCircleArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative text-center">
      <video
        className="absolute top-0 left-0 w-full  object-cover"
        style={{ height: "calc(100vh - 100px)" }}
        autoPlay
        loop
        muted
      >
        <source src="/videos/welcome.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10">
        <div className="pt-[150px] font-bold text-[20px] text-gradient font-SofiaSans">
          Revolutionizing business activities with AIoT
        </div>

        <div className="text-[35px] text-blue mt-[20px] font-bold dark:text-white/80">
          Unleash Your Full Potential
          With The <span className="text-gradient">JARVIS</span> Platform
        </div>

        <div className="mt-[20px] cursor-pointer">
          <span className="text-[20px] border-[1px] rounded-[25px] border-primary/90 text-gradient font-bold px-[10px] py-[5px] inline-flex items-center gap-2 group hover:italic transition-transform duration-2000 font-SofiaSans">
            Contact Us
            <FaCircleArrowRight
              size={20}
              className="text-primary mx-[5px] group-hover:-rotate-45 transition-transform duration-1000"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
