/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import CoinChart from "@/app/components/limit/chart";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import TradeCard from "@/app/components/limit/trade_card";
import { BackButton } from "@/app/ui/back_button";
import { useEffect, useState } from "react";

const LimitPage = () => {
  const [marketPrice, setMarketPrice] = useState<number>(0);
  const fetchCoins = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/exchangerate/ETH/USD`,
      {
        headers: {
          "X-CoinAPI-Key": process.env.NEXT_PUBLIC_API_KEY || "",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch market price: " + response.statusText);
    }

    console.log("response", response);

    const data_price = await response.json();
    setMarketPrice(data_price.rate);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="w-screen bg-background">
      <div className="w-[400px] h-[400px] blur-[720px] rounded-full fixed top-32 left-32 select-none bg-bubble"></div>
      <div className="w-[300px] h-[300px] blur-[720px] rounded-full fixed bottom-32 right-16 select-none bg-bubble"></div>

      <Navbar />

      <div className="w-full h-[calc(100vh-80px)] mt-[80px] flex justify-center">
        <div className="w-3/4 flex-col pt-8">
          <BackButton />

          <div className="flex gap-4 justify-between items-center my-8">
            <div className="flex gap-4 items-center">
              <Image
                src={`/coins/ethereum.png`}
                alt={"ETH"}
                width={32}
                height={32}
                className="rounded-full"
              />
              <h2 className="text-2xl font-semibold font-robotoMono">
                ETH-USD
              </h2>
            </div>

            <h1 className="text-4xl font-light font-robotoMono mr-4 flex justify-center items-end gap-4">
              <span className="font-normal text-lg text-light">Price:</span> $
              {marketPrice.toFixed(2)}
            </h1>
          </div>

          <div className="flex gap-4">
            <CoinChart coin={"ETH"} />
            <TradeCard coin={"ETH"} marketPrice={marketPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitPage;
