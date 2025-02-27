/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { SecondaryButton } from "@/app/ui/button";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const TradeCard = ({
  coin,
  marketPrice,
}: {
  coin: string;
  marketPrice: number;
}) => {
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy");
  const [amount, setAmount] = useState<number>(1);
  const [price, setPrice] = useState<number>(Number(marketPrice.toFixed(2)));
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setPrice(Number(marketPrice.toFixed(2)));
  }, [marketPrice]);

  return (
    <div className="rounded-lg w-1/3 p-8 bg-white/[.02] shadow-lg shadow-[rgba(134, 134, 134, 0.25)] border-white/[.1] border">
      <div className="flex w-full items-start justify-between h-full flex-col gap-2">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-xl mb-4 font-semibold font-robotoMono">
            Place a Limit Order
          </h1>
          <p className="text-light text-sm font-inriaSans">
            Choose order type.
          </p>
          <div className="flex items-center w-full">
            <TradeButton
              type="buy"
              isActive={tradeType === "buy"}
              onClick={() => setTradeType("buy")}
            />
            <TradeButton
              type="sell"
              isActive={tradeType === "sell"}
              onClick={() => setTradeType("sell")}
            />
          </div>

          <div className="flex mt-4 flex-col w-full gap-2">
            <p className="text-light text-sm font-inriaSans">
              Amount of {coin}.
            </p>
            <div className="flex items-center justify-between gap-2">
              <input
                type="number"
                className="z-20 w-full bg-white/[.02] border border-white/[.1] rounded-lg p-2 text-white font-inriaSans focus:outline-none focus:ring-2 focus:ring-[#63B9B8]"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <select
                className="z-20 bg-white/[.02] border border-white/[.1] rounded-lg p-2 text-white font-inriaSans focus:outline-none focus:ring-2 focus:ring-[#63B9B8]"
                defaultValue={coin}
              >
                <option value="ETH">ETH</option>
              </select>
            </div>

            <p className="text-light text-sm font-inriaSans">Price in USD.</p>
            <div className="flex items-center justify-between gap-2">
              <input
                type="number"
                className="z-20 w-full bg-white/[.02] border border-white/[.1] rounded-lg p-2 text-white font-inriaSans focus:outline-none focus:ring-2 focus:ring-[#63B9B8]"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <select
                className="z-20 bg-white/[.02] border border-white/[.1] rounded-lg p-2 text-white font-inriaSans focus:outline-none focus:ring-2 focus:ring-[#63B9B8]"
                defaultValue={coin}
              >
                <option value="USD">USD</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <p className="text-light text-sm font-inriaSans">
              Total:{" "}
              <span className="font-semibold">
                ${(amount * price).toFixed(2)}
              </span>
            </p>
          </div>
        </div>

        <div className="h-10 w-full">
          <SecondaryButton
            text="Place Order"
            onClick={() => {}}
            fullWidth
            fullHeight
          >
            {loading ? <BeatLoader size={10} /> : "Place Order"}
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

const TradeButton = ({
  type,
  isActive,
  onClick,
}: {
  type: "buy" | "sell";
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`${type === "sell" ? "-ml-6" : ""}
              w-full capitalize border cursor-pointer px-auto rounded-xl font-inriaSans py-2
              ${isActive ? "z-10 text-black" : "z-0 text-white"}
              transition-colors duration-0 ease-in-out
              ${
                isActive
                  ? "border-[#63B9B8] bg-button-primary"
                  : "border-[#63B9B8]/[.50] hover:bg-[#63B9B8]/[.15]"
              }
            `}
      onClick={onClick}
    >
      {type}
    </button>
  );
};

export default TradeCard;
