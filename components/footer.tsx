import Link from "next/link";

interface LinkProps {
    text : string,
    href : string
}

interface FooterProps {
    title : string,
    links : LinkProps[]
}

const FooterSection = ({ title, links } : FooterProps) => (
  <div className="w-3/12 ml-[100px] max-xl:ml-[10px] max-sm:mt-[20px]">
    <span className="text-[18px] font-bold dark:text-white text-blue border-b-[1px] border-primary pb-[5px]  whitespace-nowrap">{title}</span>
    <div className="mt-[10px]">
      {links.map((link, index) => (
        <div key={index} className={index > 0 ? "mt-[0.35rem]" : ""}>
          <Link className="dark:text-white text-blue" href={link.href}>
            {link.text}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <div className="bg-secondary dark:bg-dark px-[100px] mt-[100px] max-xl:px-[50px] max-sm:px-[10px] ">
      <div className="mt-[-30px] flex flex-wrap lg:mt-0 xl:mt-0 max-xl:flex-col">
        <div className="px-[15px] w-3/12 max-xl:px-[10px] max-xl:w-full">
          <span className="text-[20px] dark:text-white text-blue border-b-[1px] border-primary pb-[5px]">Viatick Information</span>
          <div className="text-[0.9rem] font-medium leading-[1.65] dark:text-white text-blue mt-[10px]">
            <div className="">enquiry@viatick.com</div>
            <div className="">6 Yio Chu Kang Rd, Singapore 545521</div>
          </div>
        </div>

        <div className="w-9/12 grid grid-cols-4 max-sm:grid-cols-3 max-xl:w-full max-xl:mt-[30px]">
          <FooterSection
            title="Solutions"
            links={[
              { text: "Healthcare", href: "#" },
              { text: "Maritime", href: "#" },
              { text: "Logistics", href: "#" },
              { text: "Construction", href: "#" },
              { text: "Events", href: "#" },
            ]}
          />
          <FooterSection
            title="Platforms"
            links={[
              { text: "JARVIS", href: "#" },
              { text: "BMS", href: "#" },
            ]}
          />
          <FooterSection
            title="Resources"
            links={[
              { text: "Developers", href: "#" },
              { text: "T&C", href: "#" },
            ]}
          />
          <FooterSection
            title="About Us"
            links={[
              { text: "Company", href: "#" },
              { text: "News", href: "#" },
              { text: "FAQ", href: "#" },
            ]}
          />
        </div>
      </div>

      <hr className="mt-[30px] mb-7 text-primary" />

      <div className="flex w-full justify-center max-lg:flex-col">
        <div className="dark:text-white text-blue mb-7 text-center">
            <div>Copyright © 2014-2024 <span className="text-primary"> Viatick </span></div>
            <div className="flex  text-center gap-3 mt-[10px] items-center justify-center">
                <div className="cursor-pointer">Privacy Policy</div>
                <div className="cursor-pointer">Terms And Condition</div>
                <div className="cursor-pointer">Contact Us</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
