import React from "react";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from "/components/ui/responsive-modal";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";

export default function LoginModal() {
  return (
    <ResponsiveModal>
      <ResponsiveModalTrigger asChild>
        <button className="h-8 px-5 pt-1 font-semibold text-gray-300 text-base border border-amber-400 hover:bg-gray-800 transition-all duration-200 ease-in-out rounded-3xl mobile:hidden">
          Log in
        </button>
      </ResponsiveModalTrigger>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>Log in to Noteit</ResponsiveModalTitle>
          <div className="gap-1">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Email" />
          </div>
          <div className="gap-1">
            <Label htmlFor="password">Password</Label>
            <Input type="password" placeholder="Password" />
          </div>
          <button className="h-10 w-full font-bold text-gray-200 text-base bg-gray-700 hover:bg-gray-800 transition-all duration-200 ease-in-out rounded-md mobile:hidden">
            Log in
          </button>
        </ResponsiveModalHeader>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
}
