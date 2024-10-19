import HomeExport from "./export";
import HomeHero from "./hero";
import HomePipeline from "./pipeline";

export default function HomePage() {
  return(
    <div className="w-full mx-auto">
      <HomeHero/>
      <HomePipeline/>
      <HomeExport/>
    </div>
  )
}