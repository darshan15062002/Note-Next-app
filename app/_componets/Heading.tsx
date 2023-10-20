"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

function Heading() {
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

      <Button className="bg-[#F15825]">
        Enter Note
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
}

export default Heading;
