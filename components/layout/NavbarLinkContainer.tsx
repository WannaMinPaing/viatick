import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { TargetAndTransition } from "framer-motion";
import { navbarlinks } from "@/data/navbarlinks";
interface PositionType {
    left: number;
    width: number;
    opacity: number;
}

interface TabProps {
    children: React.ReactNode;
    setPosition: React.Dispatch<React.SetStateAction<PositionType>>;
}

export const NavbarLinkContainer = () => {
    return (
        <div className="grid place-content-center bg-neutral-100">
            <SlideTabs />
        </div>
    );
};

const SlideTabs = () => {
    const [position, setPosition] = useState<PositionType>({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((prev) => ({
                    ...prev,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto flex w-fit   bg-white p-1 justify-center items-center"
        >
            {navbarlinks.map((link, index) => (
                <Tab key={index} setPosition={setPosition}>{link.text}</Tab>
            ))}
             <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition }: TabProps) => {
    const ref = useRef<HTMLLIElement | null>(null);
    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return;
                const { width } = ref.current.getBoundingClientRect();
                setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs  mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }: { position: PositionType }) => {
    return (
        <motion.li
            animate={position as TargetAndTransition}
            className="absolute z-0 h-7 rounded-[20px] bg-slide-tab-background-color md:h-8"
        />
    );
};

