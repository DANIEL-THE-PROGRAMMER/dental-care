import Image from "next/image";

export const SectionThree = () => {
  return (
    <>
      <div className="bg-[#005963] py-[58px]">
        <div className="container mx-auto flex flex-col">
          <h2 className="font-sans text-[46px] leading-[54px] text-white">
            Our Expert Dentists
          </h2>
          <p className="flex flex-col pt-[16px] pb-[50px] text-white font-sans text-[16px] leading-[24px]">
            <span>
              From preventive check-ups to advanced cosmetic dentistry, our
              experienced team is here to ensure you have a healthy,
            </span>
            <span>
              beautiful smile. Schedule an appointment today and experience
              dental care that truly makes you smile!
            </span>
          </p>
          <div className="w-full flex gap-[20px] items-center">
            {Experts.map((exp, index) => {
              return (
                <div className="flex flex-col grow" key={index}>
                  <Image
                    src={`${exp.image}`}
                    alt=""
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex text-white font-sans flex-col mt-[25px] gap-[8px]">
                    <span className="leading-[38px] text-[30px]">{exp.name}</span>
                    <span className="text-[16px] leading-[24px]">{exp.profession}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const Experts = [
  {
    image: "/assets/Frame 581.png",
    name: "Bernice Cruickshank",
    profession: "Bernice Cruickshank",
  },
  {
    image: "/assets/Frame 588.png",
    name: "Jonathan Tromp",
    profession: "Dental Technician",
  },
  {
    image: "/assets/Frame 589.png",
    name: "Becky Willms",
    profession: "Dental Technician",
  },
  {
    image: "/assets/Frame 590.png",
    name: "Randy Bashirian",
    profession: "Dental Technician",
  },
];
