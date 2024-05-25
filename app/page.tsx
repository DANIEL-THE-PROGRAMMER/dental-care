import { HeroHeader } from "./components/heroheader";
import { DiffSection } from "./components/sections/diffsection";
import { FAQs } from "./components/sections/faqs";
import { SectionOne } from "./components/sections/sectionone";
import { SectionThree } from "./components/sections/sectionthree";
import { SectionTwo } from "./components/sections/sectiontwo";
import { Testimonials } from "./components/sections/testimonials";


export default function Home() {
  return (
    <>
      <HeroHeader />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Testimonials />
      <FAQs />
      <DiffSection />
    </>
  );
}
