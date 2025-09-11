"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Finances <br /> with Intelligence
        </h1>

        {/* Subtext */}
        <p className="text-xl font-extralight tracking-wide text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>

        {/* Button */}
        <div className="flex justify-center space-x-4 mb-10">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative w-full h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden">
          <div className="w-full h-full scale-110 filter brightness-110">
            <Spline
              scene="https://prod.spline.design/2FAYBbJFs6cseoVY/scene.splinecode"
            />
          </div>
          {/* Optional overlay to make it even lighter */}
          <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
