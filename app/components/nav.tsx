import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  return (
    <>
      <div className="bg-[#005963] h-[41px]">
        <div className="container mx-auto flex justify-between font-sans text-white items-center h-full">
          <div className="flex">
            <span className="">1-596-446-6218 x952</span>
            <div className="bg-white w-[1px] mx-[28px]"></div>
            <span className="">363 Marianna Court, Eloisaborough</span>
          </div>
          <div>
            <span>Monday - Saturday: 9 am - 6 pm</span>
          </div>
        </div>
      </div>
      <div className="h-[72px] bg-white">
        <div className="container mx-auto flex h-full items-center justify-between">
          <div className="flex items-center">
            <Image src="/assets/logo.png" alt="" width={134} height={29} />
            <div className="ml-[117px] flex gap-[25px] items-center font-sans">
              <Link href="#" className="text-[16px] leading-[24px]">
                Home
              </Link>
              <Link href="#" className="text-[16px] leading-[24px]">
                About
              </Link>
              <Link href="#" className="text-[16px] leading-[24px]">
                Services
              </Link>
              <Link href="#" className="text-[16px] leading-[24px]">
                Doctors
              </Link>
              <Link href="#" className="text-[16px] leading-[24px]">
                Testimonials
              </Link>
            </div>
          </div>
          <button className="outline-none border-none w-[137px] h-[38px] flex items-center justify-center text-white leading-[24px] font-bold text-[16px] font-sans bg-[#005963] rounded-[5px]">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};
