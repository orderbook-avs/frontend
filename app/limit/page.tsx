/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import CoinChart from "@/app/components/limit/chart";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import TradeCard from "@/app/components/limit/trade_card";
import { useEffect, useState } from "react";

export type Coin = {
  name: "Wrapped Ether" | "Wrapped Bitcoin" | "USDC";
  symbol: "WETH" | "WBTC" | "USDC";
  image: string;
  address: string;
};

export const COINS: Coin[] = [
  {
    name: "Wrapped Ether",
    symbol: "WETH",
    image: "/coins/ethereum.png",
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  },
  {
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    image: "/coins/bitcoin.png",
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  },
  {
    name: "USDC",
    symbol: "USDC",
    image: "/coins/usdc.png",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  },
];

const LimitPage = () => {
  const [marketPrice, setMarketPrice] = useState<number>(2268.96);
  const [selectedCoin, setSelectedCoin] = useState<Coin>(COINS[0]);
  const [swapCoin, setSwapCoin] = useState<Coin>(COINS[2]);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/exchangerate/${
          selectedCoin.symbol === "WETH" ? "ETH" : selectedCoin.symbol
        }/${swapCoin.symbol === "WETH" ? "ETH" : swapCoin.symbol}`,
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

    fetchCoins();
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
              coin={selectedCoin}
              marketPrice={marketPrice}
              swapCoin={swapCoin}
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
