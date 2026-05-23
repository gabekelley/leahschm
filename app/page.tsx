import HeroLogo from "@/components/HeroLogo";
import LandingNav from "@/components/LandingNav";
import FilterGrid from "@/components/FilterGrid";

export default function Home() {
  return (
    <>
      <LandingNav />
      <div className="px-6 pt-16 pb-8 max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <HeroLogo />
        </div>

        <p className="copy-playfair text-dark mb-16">
          Leah Schmidt is a product designer and illustrator based in Richmond,
          Virginia. ☻ She is currently working on digital products and other
          various crafts. ✿
        </p>

        <FilterGrid />
      </div>

      <div className="py-24 flex items-center justify-center">
        <p className="headline-m text-dark">more projects coming soon</p>
      </div>
    </>
  );
}
