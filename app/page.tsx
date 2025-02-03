import OfferSection from "@/components/home/offerSection";
import Platform from "@/components/home/platform";
import WelcomeBlog from "@/components/home/welcomeBlog";

export default function Home() {
  return (
    <>
      <WelcomeBlog/>
      <div className="background-grid dark:background-grid-dark mx-[100px] h-full">
          <OfferSection />
          <Platform/>
      </div>
    </>
  );
}


