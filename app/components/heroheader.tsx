import Image from "next/image";

export const HeroHeader = () => {
    return (
      <>
        <div className="heroheader min-h-[90vh] relative">
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.25)] z-10"></div>
          <Image
            src="/assets/himage.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full z-20">
            <div className="w-full h-full flex pt-[150px] pb-[50px]">
              <div className="container mx-auto px-[162px]">
                <h2 className="flex flex-col text-white text-[46px] leading-[54px] font-sans">
                  <span>Experience the Difference</span>
                  <span>in Dental Care</span>
                </h2>
                <p className="flex flex-col text-white text-[16px] leading-[24px] mt-[15px] mb-[31px]">
                  <span>
                    From preventive check-ups to advanced cosmetic dentistry,
                    our
                  </span>
                  <span>
                    experienced team is here to ensure you have a healthy,
                    beautiful smile.
                  </span>
                  <span>
                    Schedule an appointment today and experience dental care
                    that truly
                  </span>
                  <span> makes you smile!</span>
                </p>
                <div className="flex items-center gap-[7px]">
                  <Image
                    src="/assets/Frame 608.png"
                    alt=""
                    width={101}
                    height={34}
                  />
                  <div className="flex flex-col text-white font-sans">
                    <span className="leding-[33px] text-[25px]">100K+</span>
                    <span className="leding-[24px] text-[16px]">
                      Happy Patients
                    </span>
                  </div>
                </div>
                <div className="mt-[109px]">
                  <div className="bbg flex w-full justify-center gap-[102px] h-[184px] items-center text-white">
                    <div className="flex flex-col gap-[10px] items-center">
                      <span className="text-[55px] leading-[54px]">20+</span>
                      <span className="text-[16px] leading-[24px]">
                        Dentists
                      </span>
                    </div>
                    <div className="flex flex-col gap-[10px] items-center">
                      <span className="text-[55px] leading-[54px]">95%</span>
                      <span className="text-[16px] leading-[24px]">
                        Patient Satisfaction
                      </span>
                    </div>
                    <div className="flex flex-col gap-[10px] items-center">
                      <span className="text-[55px] leading-[54px]">1K+</span>
                      <span className="text-[16px] leading-[24px]">
                        Patients
                      </span>
                    </div>
                    <div className="flex flex-col gap-[10px] items-center">
                      <span className="text-[55px] leading-[54px]">10+</span>
                      <span className="text-[16px] leading-[24px]">
                        Clinic Branches
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}