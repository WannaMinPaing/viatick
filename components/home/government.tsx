import Image from "next/image";
import { TbHeartRateMonitor } from "react-icons/tb";
import { MdOutlineMonochromePhotos } from "react-icons/md";
import { LuChartNoAxesGantt } from "react-icons/lu";

const Government = () => {
    return (
        <div className="my-[50px] flex  items-center w-full ">
            <div className="w-1/2 flex  justify-center max-md:hidden">
                    <Image
                        alt="Viatick"
                        src="/images/government.png"
                        width={100}
                        height={100}
                        className="w-[350px] h-[350px]"
                    />
            </div>

            <div className="w-1/2 max-md:w-full max-md:mx-[15px]" >
                <h3 className="mb-5 text-[calc(1rem_+_0.66vw)] font-bold !leading-[1.3] text-primary-500 dark:text-white-200 lg:mb-9 xl:text-[1.5rem]"> 
                    About <span className="text-gradient dark:dark-text-gradient"> JARVIS </span>  Government Template
                </h3>
                <p className="dark:text-white text-blue">
                    Jarvis provides a robust solution centered around sensory monitoring to prevent accidents and oversee incoming data for further analysis. It offers capabilities to monitor trends and utilize AI prediction, enhancing its ability to anticipate and respond to potential issues proactively. By integrating advanced monitoring technologies with data analysis and prediction algorithms, Jarvis empowers users to make informed decisions and take preventive actions, thereby enhancing safety and efficiency across various domains.Multiple usage for Government template :
                </p>

                <div className="w-full flex flex-col items-start my-[10px] ml-[10px]">
                    <div className="mb-[5px] text-[16px] flex justify-center items-center text-primary">
                        <TbHeartRateMonitor size={20} className="mr-[5px]" /> Energy Monitoring
                    </div>
        
                    <div className="mb-[5px] text-[16px]  flex justify-center items-center text-primary ml-[50px] mt-[10px]">
                        <MdOutlineMonochromePhotos size={20} className="mr-[5px]" /> Environment Monitoring
                    </div>
            
                    <div className="mb-[5px] text-[16px] flex justify-center items-center text-primary ml-[100px] mt-[10px]">
                        <LuChartNoAxesGantt size={20} className="mr-[5px]" /> ESG reporting and more
                    </div>
                </div>

                <div className="dark:text-white text-blue">
                    With yearly VAPT assessment for any vulnerability and Consistent updates for performance and stability.
                </div>
            
        </div>
    </div>
    )
}

export default Government;