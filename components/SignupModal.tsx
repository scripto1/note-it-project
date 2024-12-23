import React, { useState } from "react";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from "/components/ui/responsive-modal";
import { InputOTPControlled } from "./InputOTP";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { createBrowserSupabaseClient } from "utils/supabase/client";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export function SignupModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmRequired, setConfirmRequired] = useState(false);

  const supabase = createBrowserSupabaseClient();

  const signUpMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "http://localhost:3000/signup/confirm",
        },
      });
      if (data) {
        setConfirmRequired(true);
      }
      if (error) {
        alert(error.message);
      }
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.auth.verifyOtp({
        type: "signup",
        email,
        token: otp,
      });

      if (data) {
        setConfirmRequired(true);
      }
      if (error) {
        alert(error.message);
      }
    },
  });

  // 카카오 로그인
  const signInWithKakao = async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_VERCEL_URL
          ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/auth/callback`
          : "http://localhost:3000/auth/callback",
      },
    });
  };

  return (
    <ResponsiveModal>
      <ResponsiveModalTrigger asChild>
        <button className="h-8 px-5 pt-1 font-semibold text-gray-800 text-base bg-amber-300 hover:bg-amber-500 transition-all duration-200 ease-in-out rounded-3xl mobile:hidden">
          Sign up
        </button>
      </ResponsiveModalTrigger>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>
            Create a Noteit account
            <hr className="h-[1.5px] bg-gray-600 my-3" />
            <p className="flow-root mt-1 font-normal text-sm ">
              Already have an account?{" "}
            </p>
          </ResponsiveModalTitle>

          {confirmRequired ? (
            <InputOTPControlled />
          ) : (
            <>
              <section className="font-bold gap-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </section>
              <section className="font-bold gap-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </section>
              <section className="font-bold gap-1">
                <Label htmlFor="password">Confirm Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </section>
            </>
          )}

          <button
            className="h-10 w-full font-bold text-gray-200 text-base bg-gray-700 hover:bg-gray-800 transition-all duration-200 ease-in-out rounded-md mobile:hidden"
            onClick={() => {
              if (confirmRequired) {
                verifyOtpMutation.mutate();
              } else {
                signUpMutation.mutate();
              }
            }}
            disabled={
              confirmRequired
                ? verifyOtpMutation.isPending
                : signUpMutation.isPending
            }
          >
            {confirmRequired ? `Validate` : `Create an account`}
          </button>
          <section className="flex justify-between items-center">
            <hr className="h-[1.5px] w-full bg-gray-700" />
            <p className="px-2 text-gray-700 font-bold">or</p>
            <hr className="h-[1.5px] w-full bg-gray-700" />
          </section>
          <section className="flex gap-3">
            <button
              onClick={() => {
                signInWithKakao();
              }}
              className="w-full pt-2 flex justify-center align-center gap-2 tracking-wide font-bold text-black/85 text-base py-1 border border-gray-500 bg-[#FFCD00] rounded-md transition-all duration-200 ease-in-out"
            >
              <Image
                src="/images/kakaologo.svg"
                alt="logo"
                width={19}
                height={19}
                className="pt-[2px] mobile:!w-[90px]"
              />
              Kakao
            </button>
            <button
              onClick={() => {
                signInWithKakao();
              }}
              className="w-full pt-2 flex justify-center align-center gap-2 tracking-wide font-bold text-black/85 text-md py-1 border border-gray-500 bg-white rounded-md transition-all duration-200 ease-in-out"
            >
              <Image
                src="/images/Google__G__logo.svg"
                alt="logo"
                width={20}
                height={20}
                className="mobile:!w-[90px]"
              />
              Google
            </button>
          </section>

          {/* <ResponsiveModalDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </ResponsiveModalDescription> */}
        </ResponsiveModalHeader>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
}
