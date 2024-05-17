import { LinkIconBlack } from "../icons";

import Image from "next/image";

export const SectionTwo = () => {
  return (
    <>
      <div className="bg-white py-[61px]">
        <div className="container mx-auto flex flex-col gap-[40px]">
          {SectionArray.map((section, index) => {
            return (
              <div className="flex flex-col gap-[50px]" key={index}>
                <div className="flex">
                  <div className="grow flex flex-col justify-between font-sans">
                    <div className="flex flex-col gap-[36px]">
                      <span className="text-[16px]">{section.col1.row1}</span>
                      <span className="flex flex-col text-[46px] leading-[54px]">
                        <span>{section.col1.row2.row21}</span>
                        <span>{section.col1.row2.row22}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <span className="font-bold text-[16px] leading-[24px]">
                        Know more
                      </span>
                      <LinkIconBlack />
                    </div>
                  </div>
                  <div className="grow ml-[222px] mr-[109px] flex  items-start text-[16px] leading-[24px] flex-col">
                    <span>{section.col2.row1}</span>
                    <span>{section.col2.row2}</span>
                  </div>
                  <div className="grow w-[440px] h-[270px]  overflow-hidden relative">
                    <Image src={`${section.image}`} alt="" fill sizes="100vw" />
                  </div>
                </div>
                <div className="bg-[rgba(0,0,0,0.31)] h-[0.5px]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const SectionArray = [
  {
    image: "/assets/Frame 584.png",
    col1: {
      row1: "Safe and Painless Removal",
      row2: {
        row21: "Wisdom Teeth",
        row22: "Removal",
      },
    },
    col2: {
      row1: "Surgical extraction of impacted or problematic ",
      row2: "wisdom teeth to prevent complications.",
    },
  },
  {
    image: "/assets/Frame 585.png",
    col1: {
      row1: "Permanent Tooth Solutions",
      row2: {
        row21: "Dental Implant",
        row22: "Surgery",
      },
    },
    col2: {
      row1: "Surgical placement of titanum posts in the",
      row2: "Jawbone to support crowns, bridges or dentures.",
    },
  },
  {
    image: "/assets/Frame 587.png",
    col1: {
      row1: "Restoring jaw Bone",
      row2: {
        row21: "Bone Grafting ",
        row22: "Procedures",
      },
    },
    col2: {
      row1: "Procedures to restore or build up bone density ",
      row2: "often in preparation for dental implants.",
    },
  },
  {
    image: "/assets/Frame 586.png",
    col1: {
      row1: "Early Detection Saves Lives",
      row2: {
        row21: "Oral Cancer",
        row22: "Screening",
      },
    },
    col2: {
      row1: "Examination and disgnostic tests to detect early",
      row2: "signs of oral cance for prompt treatment.",
    },
  },
];
