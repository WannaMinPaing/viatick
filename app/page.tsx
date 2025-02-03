import { FaCircleArrowRight } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="text-center">

        <div className="mt-[30px] font-bold  text-[20px] text-gradient" >
          Revolutionizing business activities with AIoT
        </div>

        <div className="text-[35px] text-blue mt-[20px] font-bold dark:text-white/80">
          Unleash Your Full Potential
          With The <span className="text-gradient">JARVIS</span> Platform
        </div>

        <div className="mt-[20px]">
          <span className="text-[20px] border-[1px] rounded-[25px] border-primary/90 text-gradient font-bold px-[10px] py-[5px] inline-flex items-center gap-2 group hover:italic transition-transform duration-2000">
            Contact Us 
            <FaCircleArrowRight size={20} className="text-primary mx-[5px] group-hover:-rotate-45 transition-transform duration-1000" />
          </span>
        </div>
        
    </div>
  );
}
