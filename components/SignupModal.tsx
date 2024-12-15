import React from "react";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from "/components/ui/responsive-modal";
import { InputOTPControlled } from "./InputOTP";

export default function SignupModal() {
  return (
    <ResponsiveModal>
      <ResponsiveModalTrigger asChild>
        <button className="h-8 px-5 pt-1 font-semibold text-gray-800 text-base bg-amber-300 hover:bg-amber-500 transition-all duration-200 ease-in-out rounded-3xl mobile:hidden">
          Sign up
        </button>
      </ResponsiveModalTrigger>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>Create a Noteit account</ResponsiveModalTitle>
          <InputOTPControlled />
          {/* <ResponsiveModalDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </ResponsiveModalDescription> */}
        </ResponsiveModalHeader>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
}
