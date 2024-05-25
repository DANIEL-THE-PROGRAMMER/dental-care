import Image from "next/image";

export const DiffSection = () => {
  return (
    <>
      <div className="min-h-[523px] bg-[#005963]">
        <div className="flex">
          <div className="flex flex-col  justify-center pr-[140px] pl-[40px] w-[50%] font-sans">
            <h3 className="text-white text-[46px] leading-[54px] flex flex-col">
              <span>Experience the difference </span>
              <span>in Dental Care</span>
            </h3>
            <p className="flex flex-col leading-[24px] text-[16px] text-white mt-[15px] mb-[25px]">
              <span>
                From preventive check-ups to advanced cosmetic dentistry, our
              </span>
              <span>
                experienced team is here to ensure you have a healthy, beautiful
                smile.{" "}
              </span>
              <span>Schedule</span>
            </p>
            <div className="flex justify-stretch gap-[15px]">
              <input className="outline-none border-[0.5px] border-white rounded-[10px] px-[23px] w-[342px] bg-transparent" type="Email" />
              <button className="border-none outline-none rounded-[5px] shrink-0 bg-white text-[#005963] text-center leading-[50px] w-[179px] min-h-[50px] font-bold text-[16px]">
                Book Appointment
              </button>
            </div>
          </div>
          <div className="w-[50%] shrink-0">
            <Image src="/assets/dentalcare.png" alt="" layout="responsive" width={0} height={0} style={{
                width:"100%",
                height:"100%",
                objectFit:"cover"
            }} />
          </div>
        </div>
      </div>
    </>
  );
};
