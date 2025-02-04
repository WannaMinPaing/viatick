import { FaCircleArrowRight } from "react-icons/fa6";

const WelcomeBlog = () => {
    return (
        <div className="relative text-center">
            <video
                className="w-full object-cover h-screen max-lg:h-[500px] max-sm:h-[350px]"
                autoPlay
                loop
                muted
            >
                <source src="/videos/welcome.mp4" type="video/mp4" />
            </video>

            <div className="absolute top-0 w-full z-5">
                <div className="pt-[150px] max-sm:pt-[50px] font-bold text-[20px] text-gradient font-SofiaSans">
                    Revolutionizing business activities with AIoT
                </div>

                <div className="text-[35px] max-sm:text-[30px] text-blue mt-[20px] font-bold dark:text-white/80">
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
    )
}


export default WelcomeBlog;