"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { BeatLoader } from "react-spinners";

const Chat = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [agent, setAgent] = useState<string>("");

  const [chat, setChat] = useState<
    {
      role: "user" | "assistant";
      content: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchAgent = async () => {
      const response = await fetch("http://localhost:3001/agents", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic b3JkZXItYWk6TFdpR1BJaExaSg==",
        },
      });
      const data = await response.json();

      console.log("Agent", data.agents[0].id);
      setAgent(data.agents[0].id);
    };
    fetchAgent();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const messages: { role: "user" | "assistant"; content: string }[] = [
      { role: "user", content: chatMessage },
      { role: "assistant", content: "Loading..." },
    ];
    setChat([...chat, ...messages]);
    setChatMessage("");

    const response = await fetch(`http://localhost:3001/${agent}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic b3JkZXItYWk6TFdpR1BJaExaSg==",
      },
      body: JSON.stringify({ text: chatMessage }),
    });

    const data = await response.json();

    console.log("reply", data);

    messages.pop();

    for (let i = 0; i < data.length; i++) {
      messages.push({ role: "assistant", content: data[i].text });
    }

    setChat([...chat, ...messages]);
  };

  return (
    <div className="w-screen bg-background">
      <div className="w-[400px] h-[400px] blur-[720px] rounded-full fixed top-32 left-32 select-none bg-bubble"></div>
      <div className="w-[300px] h-[300px] blur-[720px] rounded-full fixed bottom-32 right-16 select-none bg-bubble"></div>

      <Navbar />

      <div className="absolute p-8 pb-28 top-[100px] left-1/2 -translate-x-1/2 w-2/3 h-[calc(100vh-120px)] bg-transparent border-2 border-white/[.1] overflow-y-auto backdrop-blur-lg rounded-lg">
        {chat.map((message, index) =>
          message.role === "user" ? (
            <div key={index} className="my-4 flex justify-end items-center">
              <div className="text-black font-inriaSans bg-primary rounded-lg px-6 py-[7px]">
                {message.content}
              </div>
            </div>
          ) : (
            <div key={index} className="my-4 flex justify-start items-center">
              <div className="text-black whitespace-pre-line font-inriaSans bg-button-secondary rounded-lg px-6 py-[7px]">
                {message.content === "Loading..." ? (
                  <BeatLoader size={8} />
                ) : (
                  message.content
                )}
              </div>
            </div>
          )
        )}
      </div>

      {chat.length == 0 && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-gray-400 font-inriaSans text-2xl italic">
            What&apos;s on your mind?
          </div>
        </div>
      )}

      <div className="absolute bottom-16 w-full flex justify-center items-center">
        <div className="w-1/2 h-12 bg-navbar rounded-lg">
          <div className="px-4 w-full h-full flex justify-start items-center">
            <form onSubmit={handleSubmit} className="w-full h-full">
              <input
                type="text"
                placeholder="Ask me anything about the market..."
                className="w-full h-full bg-transparent outline-none"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 h-full"
              ></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
