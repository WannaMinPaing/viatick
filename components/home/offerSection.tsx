import { GiPowerGenerator } from "react-icons/gi";
import { BsPlugin } from "react-icons/bs";
import { BiCustomize } from "react-icons/bi";
import { MdOnlinePrediction } from "react-icons/md";
import { MdOutlineSensorOccupied } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";

interface OfferingProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const offerings: OfferingProps[] = [
  { icon: <GiPowerGenerator className="w-[60px] h-[60px] text-primary" />, title: "All in One Platform", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante." },
  { icon: <BsPlugin className="w-[60px] h-[60px] text-primary" />, title: "Plug & Play", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante." },
  { icon: <BiCustomize className="w-[60px] h-[60px] text-primary" />, title: "Customizable Solution", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante." },
  { icon: <MdOnlinePrediction className="w-[60px] h-[60px] text-primary" />, title: "Predictive AI", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante." },
  { icon: <MdOutlineSensorOccupied className="w-[60px] h-[60px] text-primary" />, title: "Wide Range of Sensors", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante." },
  { icon: <FaComputer className="w-[60px] h-[60px] text-primary" />, title: "Yearly VAPT", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante." }
];
    
const OfferingCard  = ({ icon, title, description } : OfferingProps) => (
  <div className="flex justify-center flex-col items-center px-[20px] mt-[50px]">
    {icon}
    <div className="mt-[20px] text-[18px] font-bold dark:text-white text-blue">{title}</div>
    <div className="dark:text-white text-blue mt-[10px]">{description}</div>
  </div>
);

const OfferSection = () => {
  return (
    <div className="text-center">
      <div className="pt-[100px] text-gradient font-bold font-SofiaSans text-[20px]">What We Offer?</div>
      <div className="text-[30px] dark:text-white text-blue mt-[30px] font-bold font-SofiaSans">
        We Offer Comprehensive Services In Various Industries
      </div>

      <div className="grid grid-cols-3">
        {offerings.map((offering, index) => (
          <OfferingCard key={index} {...offering} />
        ))}
      </div>
    </div>
  );
}

export default OfferSection;
