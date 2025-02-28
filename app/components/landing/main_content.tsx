"use client";

import { PrimaryButton } from "../../ui/button";
import { useRouter } from "next/navigation";

const MainContent = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-3/4 flex items-center justify-between">
        <div className="flex flex-col items-start justify-center gap-8">
          <h1 className="z-10 text-5xl font-light font-robotoMono text-white">
            Decentralized AI-Powered
            <p className="pt-2">Order Book AVS</p>
          </h1>
          <PrimaryButton
            text="Create Order"
            onClick={() => router.push("/limit")}
          />
        </div>

        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default MainContent;
