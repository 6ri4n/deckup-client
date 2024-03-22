import About from "./About";
import Intro from "./Intro";
import ImageContainer from "./ImageContainer";

function LandingPage() {
  return (
    <div className="h-screen font-mono">
      <section className="mx-4 mt-8 mb-0 md:mx-12 md:mt-12 lg:flex lg:mx-24 lg:mt-24 lg:flex-col xl:flex-row xl:mb-24 xl:justify-between">
        <Intro />
        <ImageContainer />
      </section>

      <section className="mx-4 mb-4 mt-0 md:mx-12 md:mb-12 lg:mx-24 lg:mb-24">
        <About />
      </section>
    </div>
  );
}

export default LandingPage;
