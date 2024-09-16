import { Header } from "@/components/layouts/Header/Header";
import { useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";

export const Signup = () => {
  const [collectedData, setCollectedData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <main>
      <div className="container mx-auto">
        <Header />

        <div className="grid grid-cols-5 h-[calc(100vh-100px)] py-4 gap-5">
          <div className="flex items-start justify-center h-full w-full flex-col col-span-2">
            <div className="w-3/4">
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
          <div className="col-span-3  overflow-hidden my-2">
            <img
              src="/assets/images/banner.png"
              alt="banner"
              className=" w-full rounded-lg"
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
