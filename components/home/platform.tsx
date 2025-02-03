'use client'

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const Platform = () => {
    const [showFeatures, setShowFeatures] = useState<boolean>(false);
    const [showBenefits, setShowBenefits] = useState<boolean>(false);
    const [showConclusion, setShowConclusion] = useState<boolean>(false);

    return (
        <div className="mt-[100px] mx-[20px]">
            <div className="flex">
                <div className="w-1/2">
                    <h2 className="!mb-3 !text-[.75rem] uppercase leading-[1.35] tracking-[0.02rem] text-primary">
                        Improve your processes with JARVIS
                    </h2>
                    <h3 className="mb-5 font-bold !leading-[1.3] text-primary-500 dark:text-white-200 xl:text-[1.5rem]">
                        <span className="text-gradient dark:dark-text-gradient">JARVIS Platform</span>
                    </h3>
                    <p className="!mb-6 dark:text-white text-blue">
                        JARVIS offers comprehensive solutions tailored to diverse industries, supported by its versatile templates and intuitive interface. With adaptable hardware options and proven deployment strategies, our platform facilitates seamless reporting and analysis on the cloud.
                    </p>
                </div>

                <div className="w-1/2 flex justify-center items-center">
                    <Image
                        alt="Viatick"
                        src="/images/platform.jpeg"
                        width={100}
                        height={100}
                        className="w-[400px] h-[200px] rounded-[10px]"
                    />
                </div>
            </div>

            {/* Key Features */}
            <div>
                <button  onClick={() => setShowFeatures(!showFeatures)} className="pt-[5px] text-white flex justify-center items-center">
                    <span className="dark:text-white text-blue font-bold font-SofiaSans">Key Features </span> <FaArrowRightLong className={`w-[20px] h-[20px] ml-[10px] text-primary transition-all duration-2000 ${showFeatures ? "rotate-45" : ""} `}/>
                </button>
                
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: showFeatures ? 1 : 0, height: showFeatures ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {showFeatures && (
                        <ul className="grid grid-cols-4 mt-[10px] gap-2 overflow-hidden mb-[10px]">
                            <PlatformItem title="Industry-Specific Templates" description="JARVIS provides pre-designed templates tailored to various industries, streamlining processes and addressing specific needs efficiently." />
                            <PlatformItem title="Versatile Views" description="Our platform offers customizable views to accommodate different workflows and preferences, ensuring ease of use across diverse sectors." />
                            <PlatformItem title="Hardware Options" description="Choose from a range of hardware options that have been rigorously tested and proven effective across multiple deployments, ensuring reliability and performance." />
                            <PlatformItem title="Cloud-Based Reporting and Analysis" description="JARVIS enables real-time reporting and analysis on the cloud, allowing for informed decision-making and agile responses to market dynamics." />
                        </ul>
                    )}
                </motion.div>
            </div>

            {/* Benefits */}
            <div>
                <button  onClick={() => setShowBenefits(!showBenefits)} className="pt-[5px] text-white flex justify-center items-center">
                    <span className="dark:text-white text-blue font-bold font-SofiaSans">Benefits</span> <FaArrowRightLong className={`w-[20px] h-[20px] ml-[10px] text-primary transition-all duration-2000 ${showBenefits ? "rotate-45" : ""} `}/>
                </button>
                
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: showBenefits ? 1 : 0, height: showBenefits ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {showBenefits && (
                        <ul className="grid grid-cols-4 mt-[10px] gap-2 overflow-hidden mb-[10px]">
                            <PlatformItem title="Enhanced Efficiency" description="By leveraging industry-specific templates and intuitive views, organizations can optimize workflows and boost productivity." />
                            <PlatformItem title="Versatile Views" description="Our platform offers customizable views to accommodate different workflows and preferences, ensuring ease of use across diverse sectors." />
                            <PlatformItem title="Scalability" description=" JARVIS offers scalable solutions that can grow with your business, adapting to evolving requirements and expanding operations seamlessly." />
                            <PlatformItem title="Reliability" description="With proven hardware options and robust deployment strategies, our platform ensures reliability and stability in mission-critical environments." />
                            <PlatformItem title="Insightful Analytics" description="With proven hardware options and robust deployment strategies, our platform ensures reliability and stability in mission-critical environments.." />

                        </ul>
                    )}
                </motion.div>
            </div>

            {/* Conclusion */}
            <div>
                <button  onClick={() => setShowConclusion(!showConclusion)} className="pt-[5px] text-white flex justify-center items-center">
                    <span className="dark:text-white text-blue font-bold font-SofiaSans">Conclusion</span> <FaArrowRightLong className={`w-[20px] h-[20px] ml-[10px] text-primary transition-all duration-2000 ${showConclusion ? "rotate-45" : ""} `}/>
                </button>
                
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: showConclusion ? 1 : 0, height: showConclusion ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {showConclusion && (
                        <ul className="grid grid-cols-1 mt-[10px] gap-2 overflow-hidden mb-[10px]">
                            <PlatformItem title="" description="JARVIS empowers organizations across diverse industries with its versatile templates, customizable views, and reliable hardware options. By harnessing the power of cloud-based reporting and analysis, our platform equips businesses with the tools they need to thrive in today’s dynamic marketplace." />
                        </ul>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

const PlatformItem = ({ title, description }: { title: string; description: string }) => {
    return (
        <li className="relative">
            <div className="mb-[5px] text-[16px] text-gradient dark:dark-text-gradient">
                {title}
            </div>
            <div className="dark:text-white text-blue text-[14px]">
                {description}
            </div>
        </li>
    );
};

export default Platform;