import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/outline";
import OnboardingModal from "./OnboardingModal";
import Button from "../Button";
import { animated, useSpring } from "react-spring";

/**
 * Displays a modal containing information
 */
export default function OnBoarding() {
  const [step, setStep] = useState<number | null>(1);
  const [open, setOpen] = useState(true);

  return (
    <div>
      <OnboardingModal isOpen={step === 1} onClose={setOpen}>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
              <InformationCircleIcon
                className="h-6 w-6 text-blue-300"
                aria-hidden="true"
              />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Kia Ora!
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  The content here is a little bit of a description of what this
                  application is intended for, and also something quite light
                  hearted and making plant eaters feel good about themselves.
                  Chur!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <div className="relative">
            <Button onClick={() => setStep(2)}>Next</Button>
            <span className="flex justify-center items-center absolute h-5 w-5 top-0 right-0 -mt-2 -mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
        </div>
      </Modal>
      <Modal isOpen={step === 2} onClose={setOpen}>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
              <InformationCircleIcon
                className="h-6 w-6 text-blue-300"
                aria-hidden="true"
              />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                How to use this map
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  This content is what will explain to the user the different
                  aspects of viewing, favouriting and
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <div className="relative">
            <Button onClick={() => setStep(null)}>Dismiss</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
