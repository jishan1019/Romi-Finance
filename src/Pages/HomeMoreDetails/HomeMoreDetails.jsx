import React from "react";

const HomeMoreDetails = () => {
  return (
    <div className="py-12 max-w-7xl mx-auto px-2 lg:px-10">
      {/* about card */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className=" p-2">
          <div className="inline-flex items-center gap-1">
            <img
              src="https://zomi.finance/static/media/ic_liquidity.505b3f30.svg"
              alt=""
            />
            <h1 className="text-xl font-semibold">Reduce Liquidation Risks</h1>
          </div>
          <p className="fourthColor mt-1">
            An aggregate of high-quality price feeds determine when liquidations
            occur. This keeps positions safe from temporary wicks.
          </p>
        </div>

        {/* Second card */}
        <div className=" p-2">
          <div className="inline-flex items-center gap-1">
            <img
              src="https://zomi.finance/static/media/ic_cost.b4a729d3.svg"
              alt=""
            />
            <h1 className="text-xl font-semibold">Save on Costs</h1>
          </div>
          <p className="fourthColor mt-1">
            Enter and exit positions with minimal spread and zero price impact.
            Get the optimal price without incurring additional costs.
          </p>
        </div>

        {/* 3rd Card */}
        <div className=" p-2">
          <div className="inline-flex items-center gap-1">
            <img
              src="https://zomi.finance/static/media/ic_simpleswaps.2005009f.svg"
              alt=""
            />
            <h1 className="text-xl font-semibold">Simple Swaps</h1>
          </div>
          <p className="fourthColor mt-1">
            Open positions through a simple swap interface. Conveniently swap
            from any supported asset into the position of your choice.
          </p>
        </div>
      </section>

      {/* Token Card */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 ">
        {/* 1st card */}
        <div className=" borderAll p-4">
          <div className="inline-flex items-center gap-2">
            <img
              className="h-12 w-12"
              src="https://i.ibb.co/zsGwMyJ/download.png"
              alt=""
            />
            <h1 className="text-xl font-semibold">$ZOMI</h1>
          </div>
          <p className="mt-2">
            $ZOMI is the utility and governance token. Accrues 30% of the
            platform's generated fees.
          </p>
          <p className="fourthColor mt-3">Ethereum APR: 0.00%</p>

          <div className="flex gap-4 mt-5">
            <button className="primaryBg px-5">Buy</button>
            <button className="borderAll p-2">Read more</button>
          </div>
        </div>

        {/* 3rd Card */}
        <div className=" borderAll p-4">
          <div className="inline-flex items-center gap-2">
            <img
              className="h-12 w-12"
              src="https://i.ibb.co/PcHyQX2/download.png"
              alt=""
            />
            <h1 className="text-xl font-semibold">$ZLP</h1>
          </div>
          <p className="mt-2">
            $ZLP is the utility and governance token. Accrues 30% of the
            platform's generated fees.
          </p>
          <p className="fourthColor mt-3">Ethereum APR: 0.00%</p>

          <div className="flex gap-4 mt-5">
            <button className="primaryBg px-5">Buy</button>
            <button className="borderAll p-2">Read more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeMoreDetails;
