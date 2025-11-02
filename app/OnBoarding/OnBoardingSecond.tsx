
import { images } from "@/constants";
import React from "react";
import OnBoarding from "../../components/OnBoarding";

export default function OnBoardingSecond() {


  return (
    <OnBoarding buttonName="Next"
      title="Easy Booking & Scheduling"
      description="Easily schedule pickups with flexible timing, instant booking, and hassle-free recurring transfer options."
      imagesPath={images.onBoardingSecond}
      routeName="/OnBoarding/OnBoardingThird"
      widthSize1="bg-gray-300 w-2 mr-2"
      widthSize2="bg-[#00D2FF] w-6 mr-2"
      widthSize3="bg-gray-300 w-2"
      skip={true}
    />
  );
}
