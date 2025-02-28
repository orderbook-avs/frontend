import Feature from "./feature";

const Features = () => {
  return (
    <div className="w-full h-screen flex pt-[100vh-16px] items-start justify-center">
      <div className="mt-[80px] w-3/4 flex flex-col">
        <h1 className="my-12 text-4xl font-robotoMono text-white">Features</h1>
        <div className="flex flex-wrap gap-8">
          <Feature
            title="Decentralized"
            description="OrderBookAVS is a decentralized platform that allows users to create and execute limit orders on the blockchain."
          />
          <Feature
            title="AI-Powered"
            description="OrderBookAVS uses AI to analyze market conditions and create suggestions for the best price to buy or sell."
          />
          <Feature
            title="Limit Orders"
            description="OrderBookAVS allows users to create and execute limit orders on the blockchain, without relying on centralized exchanges."
          />
          <Feature
            title="Secure"
            description="OrderBookAVS uses smart contracts to ensure that all orders are executed securely and transparently."
          />
          <Feature
            title="Easy to use"
            description="OrderBookAVS has a user-friendly interface and intuitive design for seamless trading experience."
          />
          <Feature
            title="Real-Time Market Analytics"
            description="OrderBookAVS provides real-time market analytics and insights to help users make informed trading decisions."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
