import { HeroHeader } from "./components/heroheader";
import { SectionOne } from "./components/sections/sectionone";
import { SectionThree } from "./components/sections/sectionthree";
import { SectionTwo } from "./components/sections/sectiontwo";


export default function Home() {
  return (
    <>
      <HeroHeader />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
}
