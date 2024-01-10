"use client";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Spinner } from "./spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Welcome to a Unified Hub for Your Thoughts, Documents, and Blueprints.
        Welcome to {"  "}
        <span className="underline text-[#F15825]">Note</span>
      </h1>
      <h3 className=" text-base sm:text-xl md:text-2xl font-medium">
        Welcome to Note, the Workspace That Facilitates Enhanced Productivity
        and Speed.
      </h3>

      {isAuthenticated && !isLoading && (
        <Button className="bg-[#F15825]" asChild>
          <Link href="/documents">
            Enter Note
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button className="bg-[#F15825]">
            Get Note free <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}

export default Heading;
