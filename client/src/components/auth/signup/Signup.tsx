import { Header } from "@/components/layouts/Header/Header";
import { useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";

export const Signup = () => {
  const [collectedData, setCollectedData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <main>
      <div className="container mx-auto px-5">
        <Header />

        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 h-[calc(100vh-100px)] py-4 gap-5">
          <div className="flex items-start justify-center h-full w-full flex-col lg:col-span-2 col-span-1 md:max-w-full max-w-[450px] mx-auto">
            <div className="md:w-3/4">
              {currentStep === 1 ? (
                <StepOne
                  collectedData={collectedData}
                  setCollectedData={setCollectedData}
                  setCurrentStep={setCurrentStep}
                />
              ) : (
                <StepTwo
                  collectedData={collectedData}
                  setCollectedData={setCollectedData}
                />
              )}
            </div>
          </div>
          <div className="lg:col-span-3 col-span-1 md:block hidden  overflow-hidden my-2">
            <img
              src="/assets/images/banner.png"
              alt="banner"
              className=" w-full rounded-lg h-[calc(100%-50px)]"
            />
            <img
              src="/assets/svgs/honeypotz.svg"
              alt="banner"
              className=" h-10 ml-auto mt-2"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
