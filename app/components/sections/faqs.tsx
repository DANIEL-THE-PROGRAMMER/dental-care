export const FAQs = () => {
  return (
    <>
      <div className="py-[73px] mt-[140px]">
        <div className="container mx-auto">
          <h2 className="text-[46px] leading-[54px] font-sans text-center mb-[54px]">FAQs</h2>
          <div className="flex flex-col gap-[25px]">
            {Questions.map((question, index) => {
              return (
                <div
                  className="flex pb-[23px] border-b-[1px] border-[rgba(0,0,0,0.19)] items-start justify-between"
                  key={index}
                >
                  <span className="leading-[33px] text-[25px] text-black font-sans">
                    {question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M12.9974 2.16406C18.9804 2.16406 23.8307 7.01431 23.8307 12.9974C23.8307 18.9804 18.9804 23.8307 12.9974 23.8307C7.01431 23.8307 2.16406 18.9804 2.16406 12.9974C2.16406 7.01431 7.01431 2.16406 12.9974 2.16406ZM12.9974 3.78906C7.91177 3.78906 3.78906 7.91177 3.78906 12.9974C3.78906 18.083 7.91177 22.2057 12.9974 22.2057C18.083 22.2057 22.2057 18.083 22.2057 12.9974C22.2057 7.91177 18.083 3.78906 12.9974 3.78906ZM8.08954 10.7979C8.40684 10.4806 8.92129 10.4806 9.23859 10.7979L12.9974 14.5566L16.7562 10.7979C17.0735 10.4806 17.5879 10.4806 17.9052 10.7979C18.2225 11.1152 18.2225 11.6296 17.9052 11.9469L13.5719 16.2802C13.2546 16.5975 12.7402 16.5975 12.4229 16.2802L8.08954 11.9469C7.77224 11.6296 7.77224 11.1152 8.08954 10.7979Z"
                      fill="#005963"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const Questions = [
  "What should I do if I have a dental emergency",
  "How often should I visit the dentist?",
  "What should I expect during a dental check-up?",
  "How do I schedule an appointment?",
  "What are your office hours?",
];
