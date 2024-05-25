import Image from "next/image";
import { Linkedin, Facebook, X, Instagram } from "./icons";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#003137] py-[80px] flex flex-col gap-[80px]">
        <div className="container mx-auto flex gap-[198px]">
          <div className="flex flex-col font-sans">
            <div className="flex flex-col gap-[24px]">
              <Image src="/assets/flogo.png" alt="" width={154} height={39} />
              <span className="text-[16px] leading-[24px] text-white">
                Join our newsletter to stay up to date on features and releases.
              </span>
              <div className="flex justify-stretch gap-[15px]">
                <input
                  className="outline-none border-[0.5px] border-white rounded-[10px] px-[23px] w-[351px] bg-transparent"
                  type="Email"
                  placeholder="ENter yorur email"
                />
                <button className="border-none outline-none rounded-[5px] shrink-0 bg-white text-[#005963] text-center leading-[48px] w-[133px] min-h-[48px] text-[16px]">
                  Subsribe
                </button>
              </div>
              <span className="text-white pt-[16px] text-[16px] leading-[24px] flex flex-col">
                <span>
                  By subscribing you agree to with our Privacy Policy and
                  provide consent{" "}
                </span>
                <span>to receive updates from our company.</span>
              </span>
            </div>
          </div>
          <div className="grow shrink-0 flex gap-[40px] font-sans">
            <div className="flex flex-col text-white grow">
              <div className="mb-[16px]">
                <span className="font-bold text-[16px] leading-[24px]">
                  Link
                </span>
              </div>
              <span className="py-[8px] text-[16px] leading-[24px]">Home</span>
              <span className="py-[8px] text-[16px] leading-[24px]">About</span>
              <span className="py-[8px] text-[16px] leading-[24px]">
                Service
              </span>
              <span className="py-[8px] text-[16px] leading-[24px]">
                Doctors
              </span>
              <span className="py-[8px] text-[16px] leading-[24px]">
                Testimonials
              </span>
            </div>
            <div className="flex flex-col grow text-white">
              <div className="mb-[16px]">
                <span className="font-bold text-[16px] leading-[24px]">
                  Follow Us
                </span>
              </div>
              <span className="flex gap-[12px] py-[8px] text-[16px] leading-[24px] items-center">
                <Facebook />
                <span>Facebook</span>
              </span>
              <span className="flex gap-[12px] py-[8px] text-[16px] leading-[24px] items-center">
                <Instagram />
                <span>Instagram</span>
              </span>
              <span className="flex gap-[12px] py-[8px] text-[16px] leading-[24px] items-center">
                <X />
                <span>X</span>
              </span>
              <span className="flex gap-[12px] py-[8px] text-[16px] leading-[24px] items-center">
                <Linkedin />
                <span>Linkedin</span>
              </span>
            </div>
          </div>
        </div>
        <div className="pt-[32px] border-t-[0.2px] border-t-white/[0.4] flex justify-between font-sans container mx-auto">
          <span className="text-[16px] leading-[24px] text-white">
            © Dental care, All rights reserved
          </span>
          <div className="flex items-center gap-[24px] text-white text-[16px] leading-[24px]">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies Settings</span>
          </div>
        </div>
      </div>
    </>
  );
};
