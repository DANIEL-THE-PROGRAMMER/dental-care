import Image from "next/image";

export const Testimonials = () => {
  return (
    <>
      <div className="pt-[99px] pb-[72px]">
        <div className="container mx-auto">
          <div className="mb-[55px]">
            <h2 className="text-[46px] leading-[54px] text-[#000] mb-[55px]">
              Client Testimonials
            </h2>
            <div className="flex gap-[33px] items-center">
              {Testimonies.map((testimony, index) => {
                return (
                  <div className="relative grow h-[400px]" key={index}>
                    <Image
                      src={`${testimony.bImage}`}
                      alt=""
                      fill
                      sizes="100vw"
                      className="rounded-[10px]"
                    />
                    <div className="w-full absolute bottom-[-35%]">
                      <div className="w-[90%] mx-auto bg-white bx font-sans flex flex-col pt-[60px] pb-[31px] px-[38px] ">
                        <h5 className="text-[25px] leading-[33px]">
                          {testimony.content1}
                        </h5>
                        <p className="text-[16px] leading-[24px] mt-[12px] mb-[30px]">
                          {testimony.content2}
                        </p>
                        <div className="flex gap-[13px] font-sans">
                          <Image
                            src={`${testimony.image}`}
                            alt=""
                            width={63}
                            height={63}
                          />
                          <div className="flex flex-col h-full justify-between">
                            <span className="leading-[26px] text-[18px]">
                              {testimony.name1}
                            </span>
                            <span className="leading-[26px] text-[16px]">
                              {testimony.name2}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Testimonies = [
  {
    bImage: "/assets/Image (2).png",
    content1: "Highly Recommend",
    content2: `"I can confidently say they're the best! The staff is always welcoming, and Doctors are exceptionally skilled."`,
    image: "/assets/Ellipse 4.png",
    name1: "Stella Herman",
    name2: "Macejkovicbury",
  },
  {
    bImage: "/assets/Image (4).png",
    content1: "Gentle and Caring",
    content2: `"I can confidently say they're the best! The staff is always welcoming, and Doctors are exceptionally skilled."`,
    image: "/assets/Ellipse 4 (1).png",
    name1: "Beulah Mertz",
    name2: "Chelsieshire",
  },
  {
    bImage: "/assets/Frame.png",
    content1: "A wonderful Experience",
    content2: `"I can confidently say they're the best! The staff is always welcoming, and Doctors are exceptionally skilled."`,
    image: "/assets/Ellipse 4 (2).png",
    name1: "Wilfed jerde",
    name2: "Wisokytown",
  },
];
