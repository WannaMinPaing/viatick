import Image from "next/image";

const Platform = () =>{
    return(
        <div className="mt-[100px] mx-[20px]">
            <div className="flex">
                <div className="w-1/2">
                    <h2 className="!mb-3 !text-[.75rem] uppercase leading-[1.35] tracking-[0.02rem] text-primary"> Improve your processes with JARVIS </h2>
                    <h3 className="mb-5  font-bold !leading-[1.3] text-primary-500 dark:text-white-200 xl:text-[1.5rem]" >
                        <span className="text-gradient dark:dark-text-gradient">
                            JARVIS Platform
                        </span>
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

            <div>
                <div className="text-primary">Key Features</div>
                <div>
                    <ul className="  grid grid-cols-4 mt-[10px] gap-2">
                        <PlatformItem title="Industry-Specific Templates"  description="JARVIS provides pre-designed templates tailored to various industries, streamlining processes and addressing specific needs efficiently." />
                        <PlatformItem title="Versatile Views"  description="Our platform offers customizable views to accommodate different workflows and preferences, ensuring ease of use across diverse sectors." />
                        <PlatformItem title="Hardware Options"  description="Choose from a range of hardware options that have been rigorously tested and proven effective across multiple deployments, ensuring reliability and performance." />
                        <PlatformItem title="Cloud-Based Reporting and Analysis"  description="JARVIS enables real-time reporting and analysis on the cloud, allowing for informed decision-making and agile responses to market dynamics." />
                    </ul>
                </div>
            </div>

        </div>
    )
}

const PlatformItem = ({title,description}:{title : string, description : string}) => {
    return (
        <li className="relative">
            <div className="mb-[5px] text-[16px] text-gradient dark:dark-text-gradient">
                <i className="{{ $icon }}"></i>
                { title }
            </div>
            <div className="dark:text-white text-blue text-[14px]">
                { description }
            </div>
        </li>
    )
}

export default Platform;