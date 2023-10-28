import React from "react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto my-16">
      <div className="text-4xl lg:text-5xl font-semibold space-y-2">
        <h1>Decentralized</h1>
        <div className="inline-flex flex-col lg:flex-row lg:gap-2 space-y-2 lg:space-y-0 ">
          <h1>Perpetual</h1>
          <h1>Exchange</h1>
        </div>
      </div>

      <div className="thirdColor mt-8 text-lg lg:text-xl font-semibold">
        <p>Trade BTC, ETH, AVAX and other top</p>
        <p>cryptocurrencies with up to 30x leverage</p>
        <p>directly from your wallet</p>
      </div>

      <div className="mt-6">
        <button className="primaryBg px-3 py-[6px]">Launch Exchange</button>
      </div>

      {/* Botttpm Card */}
      <section className=" mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="cardCover p-4 flex gap-6">
          <img
            className="h-16 w-16"
            src="https://zomi.finance/static/media/ic_trading.2c53815a.svg"
            alt=""
          />
          <div>
            <h3 className="thirdColor text-[17px] mt-1">
              Total Trading Volume
            </h3>
            <h1 className="text-3xl font-semibold">$10</h1>
          </div>
        </div>

        <div className="cardCover p-4 flex gap-6 hover:boerderLeftRight">
          <img
            className="h-16 w-16"
            src="https://zomi.finance/static/media/ic_stats.f0a18011.svg"
            alt=""
          />
          <div>
            <h3 className="thirdColor text-[17px] mt-1">Open Interest</h3>
            <h1 className="text-3xl font-semibold">$4</h1>
          </div>
        </div>

        <div className="cardCover p-4 flex gap-6">
          <img
            className="h-16 w-16"
            src="https://zomi.finance/static/media/ic_totaluser.ae09b310.svg"
            alt=""
          />
          <div>
            <h3 className="thirdColor text-[17px] mt-1">Total Users</h3>
            <h1 className="text-3xl font-semibold">200</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
