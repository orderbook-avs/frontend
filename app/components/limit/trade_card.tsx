/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Coin, COINS } from "@/app/limit/page";
import { SecondaryButton } from "@/app/ui/button";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { Contract, ethers } from "ethers";
import { abi } from "@/app/data/abi";

const TradeCard = ({
  coin,
  marketPrice,
  swapCoin,
  setSwapCoin,
  setSelectedCoin,
}: {
  coin: Coin;
  marketPrice: number;
  swapCoin: Coin;
  setSwapCoin: (coin: Coin) => void;
  setSelectedCoin: (coin: Coin) => void;
}) => {
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy");
  const [amount, setAmount] = useState<number>(1);
  const [price, setPrice] = useState<number>(Number(marketPrice.toFixed(5)));
  const [loading, setLoading] = useState<boolean>(false);

  const placeOrder = async () => {
    setLoading(true);

    const provider = new ethers.BrowserProvider(window.ethereum);

    const new_provider = new ethers.JsonRpcProvider("http://localhost:55012");

    const wallet = new ethers.Wallet(
      "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a",
      new_provider
    );

    const network = await new_provider.getNetwork();

    const chainId = network.chainId;

    const balance = await new_provider.getBalance(wallet.address);

    console.log("balance", balance);

    const contract = new Contract(
      "0x34b40ba116d5dec75548a9e9a8f15411461e8c70",
      abi,
      wallet
    );

    console.log(
      "Placing limit order for",
      amount,
      coin.address,
      " for ",
      price,
      swapCoin.address
    );

    const tx = await contract.createNewTask(
      amount,
      price,
      coin.address,
      swapCoin.address,
      5,
      5,
      "0x0000000000000000000000000000000000000000000000000000000000000001"
    );

    console.log("tx", tx);

    setLoading(false);
  };

  const fetchAgent = async () => {
    const response = await fetch(
      "https://autonome.alt.technology/test1-klhnbn/agents"
    );
    const data = await response.json();
    return data.agents[0].id;
  };

  const fetchAIPrice = async () => {
    const agent = await fetchAgent();

    const response = await fetch(
      `https://autonome.alt.technology/test1-klhnbn/${agent}/message`,
      {
        method: "POST",
        body: JSON.stringify({
          text: "Please run the get price suggestion button action.",
        }),
      }
    );
    const data = await response.json();

    console.log("data", data);

    setPrice(Number(data[1].text.ratio));
  };

  useEffect(() => {
    setPrice(Number(marketPrice.toFixed(5)));
  }, [marketPrice]);

  return (
    <div className="rounded-lg w-[40%] p-8 bg-white/[.02] shadow-lg shadow-[rgba(134, 134, 134, 0.25)] border-white/[.1] border">
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
              Amount of {coin.symbol}.
            </p>
            <div className="flex items-center justify-between gap-2">
              <input
                type="number"
                className="z-20 w-full bg-white/[.02] border border-white/[.1] rounded-lg p-2 text-white font-inriaSans focus:outline-none focus:ring-2 focus:ring-[#BA8BC89F]"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <select
                className="z-20 bg-white/[.02] border border-white/[.1] rounded-lg p-2 text-white font-inriaSans focus:outline-none focus:ring-2 focus:ring-[#BA8BC89F]"
                defaultValue={coin.symbol}
                onChange={(e) =>
                  setSelectedCoin(
                    COINS.find((c) => c.symbol === e.target.value)!
                  )
                }
              >
                {COINS.map(
                  (c) =>
                    c.symbol !== swapCoin.symbol && (
                      <option key={c.symbol} value={c.symbol}>
                        {c.symbol}
                      </option>
                    )
                )}
              </select>
            </div>

            <p className="text-light text-sm font-inriaSans">Price in USD.</p>
            <div className="flex items-center justify-between">
              <input
                type="number"
                className="z-20 w-full h-10 bg-white/[.02] border border-white/[.1] rounded-l-lg p-2 text-white font-inriaSans focus:outline-none focus:ring-2 focus:ring-[#BA8BC89F]"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <button
                className="mr-2 h-10 z-20 max-w-24 whitespace-nowrap relative flex justify-center items-center bg-button-secondary cursor-pointer text-black px-6 py-2 rounded-r-lg font-inriaSans"
                onClick={() => {}}
              >
                AI Tip
              </button>
              <select
                className="z-20 bg-white/[.02] border border-white/[.1] rounded-lg p-2 text-white font-inriaSans focus:outline-none focus:ring-2 focus:ring-[#BA8BC89F]"
                defaultValue={swapCoin.symbol}
                onChange={(e) =>
                  setSwapCoin(COINS.find((c) => c.symbol === e.target.value)!)
                }
              >
                {COINS.map(
                  (c) =>
                    c.symbol !== coin.symbol && (
                      <option key={c.symbol} value={c.symbol}>
                        {c.symbol}
                      </option>
                    )
                )}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <p className="text-light text-sm font-inriaSans">
              Total:{" "}
              <span className="font-semibold">
                ${(amount * price).toFixed(3)}
              </span>
            </p>
          </div>
        </div>

        <div className="h-10 w-full">
          <SecondaryButton
            text="Place Order"
            onClick={() => placeOrder()}
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
                  ? "border-[#BA8BC8FF] bg-button-primary"
                  : "border-[#BA8BC8FF]/[.50] hover:bg-[#BA8BC8FF]/[.15]"
              }
            `}
      onClick={onClick}
    >
      {type}
    </button>
  );
};

export default TradeCard;
