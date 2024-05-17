import { LinkIcon } from "../icons";

export const SectionOne = () => {
  return (
    <>
      <div className="py-[111px] bg-[#005963]">
        <div className="container mx-auto">
          <h2 className="flex flex-col text-white text-[46px] leading-[54px] font-sans">
            <span>Experience the Difference</span>
            <span>in Dental Care</span>
          </h2>
          <p className="flex flex-col text-white text-[16px] leading-[24px] mt-[15px] mb-[31px]">
            <span>
              From preventive check-ups to advanced cosmetic dentistry, our
              experienced team is here to ensure you have a healthy,
            </span>
            <span>
              beautiful smile. Schedule an appointment today and experience
              dental care that truly makes you smile!
            </span>
          </p>
          <div className="mt-[96px]">
            <div className="flex gap-[159px] items-center">
              <div className="grow flex flex-col text-white font-sans">
                <h2 className="text-white text-[30px] leading-[38px]">
                  Professional Dental Services
                </h2>
                <p className="flex flex-col mt-[15px] mb-[25px] leading-[24px] text-[16px]">
                  <span>Comprehensive offerings, including preventive,</span>
                  <span>restorative, cosmetic, and orthodontic </span>
                  <span>treatments.</span>
                </p>
                <div className="flex items-center gap-[10px]">
                  <span className="font-bold text-[16px] leading-[24px]">
                    Know more
                  </span>
                  <LinkIcon />
                </div>
              </div>
              <div className="grow flex flex-col text-white font-sans">
                <h2 className="text-white text-[30px] leading-[38px]">
                  Experienced Dental Team
                </h2>
                <p className="flex flex-col mt-[15px] mb-[25px] leading-[24px] text-[16px]">
                  <span>A team of qualified dentists, hygienists, and</span>
                  <span>support staff with diverse skills and</span>
                  <span>experience.</span>
                </p>
                <div className="flex items-center gap-[10px]">
                  <span className="font-bold text-[16px] leading-[24px]">
                    Know more
                  </span>
                  <LinkIcon />
                </div>
              </div>
              <div className="grow flex flex-col text-white font-sans">
                <h2 className="text-white text-[30px]  leading-[38px]">
                  Flexible Scheduling
                </h2>
                <p className="flex flex-col mt-[15px] mb-[25px] leading-[24px] text-[16px]">
                  <span>Appointment times that accommodate </span>
                  <span>different schedules, including evenings or </span>
                  <span>weekends.</span>
                </p>
                <div className="flex items-center gap-[10px]">
                  <span className="font-bold text-[16px] leading-[24px]">
                    Know more
                  </span>
                  <LinkIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
