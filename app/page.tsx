import Footer from "@/components/footer";
import FrequentlyAskedQuestion from "@/components/home/frequentlyAskedQuestion";
import Government from "@/components/home/government";
import Journey from "@/components/home/journey";
import OfferSection from "@/components/home/offerSection";
import Partners from "@/components/home/partners";
import Platform from "@/components/home/platform";
import RealEstate from "@/components/home/realEstate";
import WelcomeBlog from "@/components/home/welcomeBlog";

export default function Home() {
  return (
    <>
      <WelcomeBlog/>
      <div className="background-grid dark:background-grid-dark mx-[100px] max-lg:mx-[50px] max-sm:mx-[15px] h-full">
          <OfferSection />
          <Platform/>
          <Government />
          <RealEstate />
          <FrequentlyAskedQuestion/>
          <Partners />
      </div>
      <Journey />
    </>
  );
}


