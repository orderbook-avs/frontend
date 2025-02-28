/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import CoinChart from "@/app/components/limit/chart";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import TradeCard from "@/app/components/limit/trade_card";
import { useEffect, useState } from "react";

export type Coin = {
  name: "ETH" | "Wrapped Bitcoin" | "XRP" | "USDC";
  symbol: "ETH" | "WBTC" | "XRP" | "USDC";
  image: string;
};

export const COINS: Coin[] = [
  {
    name: "ETH",
    symbol: "ETH",
    image: "/coins/ethereum.png",
  },
  {
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    image: "/coins/bitcoin.png",
  },
  {
    name: "XRP",
    symbol: "XRP",
    image: "/coins/xrp.png",
  },
  {
    name: "USDC",
    symbol: "USDC",
    image: "/coins/usdc.png",
  },
];

const LimitPage = () => {
  const [marketPrice, setMarketPrice] = useState<number>(2268.96);
  const [selectedCoin, setSelectedCoin] = useState<Coin>(COINS[0]);
  const [swapCoin, setSwapCoin] = useState<Coin>(COINS[3]);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/exchangerate/${selectedCoin.symbol}/${swapCoin.symbol}`,
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

    // fetchCoins();
  }, [selectedCoin, swapCoin]);

  return (
    <div className="w-screen bg-background">
      <div className="w-[400px] h-[400px] blur-[720px] rounded-full fixed top-32 left-32 select-none bg-bubble"></div>
      <div className="w-[300px] h-[300px] blur-[720px] rounded-full fixed bottom-32 right-16 select-none bg-bubble"></div>

      <Navbar />

      <div className="w-full h-[calc(100vh-80px)] mt-[80px] flex justify-center">
        <div className="w-3/4 flex-col pt-8">
          <div className="flex gap-4 justify-between items-center my-8">
            <div className="flex gap-4 items-center">
              <Image
                src={selectedCoin.image}
                alt={selectedCoin.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <h2 className="text-2xl font-semibold font-robotoMono">
                {selectedCoin.symbol}-USDC Chart
              </h2>
            </div>

            <h1 className="text-4xl font-light font-robotoMono mr-4 flex justify-center items-end gap-4">
              <span className="font-normal text-lg text-light">Price:</span> $
              {marketPrice.toFixed(5)}
            </h1>
          </div>

          <div className="flex gap-4">
            <CoinChart coin={selectedCoin.symbol} />
            <TradeCard
              coin={selectedCoin.symbol}
              marketPrice={marketPrice}
              swapCoin={swapCoin.symbol}
              setSwapCoin={setSwapCoin}
              setSelectedCoin={setSelectedCoin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitPage;
