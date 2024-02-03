import React from "react";
import {
    SvgGlobeIcon,
    SvgMeterIcon,
    SvgEthereumIcon,
    SvgServerIcon,
} from "../../assets/Icons";
import { formatNumbers } from "../../utils/formatNumbers"

const MarketData = (ethData) => {
    console.log(ethData)
    return (
        <div className="relative -top-12">
            <div className="max-w-[1380px] mx-auto p-4">
                <div className="rounded-lg bg-white drop-shadow-sm border border-stone-300 ">
                    <div className="py-3 px-5">
                        <div className="grid md:grid-cols-12">
                            <div className="col-span-4 md:border-r ">
                                <div className="border-b py-3 flex gap-3 items-center">
                                    <SvgEthereumIcon height={30} width={30} />
                                    <div className="">
                                        <h1 className="text-[12px] leading-[18px] text-[#6c757d] uppercase font-normal">
                                            Ether Price
                                        </h1>
                                        <span className="text-[15px] leading-6">
                                            {formatNumbers(ethData.ethData.price, 2)}&nbsp;
                                            <span className={ethData.ethData.volume_change_24h < 0 ? 'text-red-500' : 'text-green-600'}>
                                                ( {formatNumbers(ethData.ethData.volume_change_24h, 2)}%)
                                            </span>
                                        </span>

                                    </div>
                                </div>
                                <div className="py-3 flex gap-3 items-center">
                                    <SvgGlobeIcon />
                                    <div>
                                        <h1 className="text-[12px] leading-[18px] text-[#6c757d]">
                                            MARKET CAP
                                        </h1>
                                        <p className="text-[15px] leading-6">${formatNumbers(ethData.ethData.market_cap)}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-4 md:border-r md:px-2">
                                <div className="border-b py-3 flex gap-2 items-center">

                                    <div className="flex items-center justify-between w-full gap-3">
                                        <div>
                                            <h1 className="text-[12px] leading-[18px] text-[#6c757d] uppercase font-normal">
                                                Change (1H)
                                            </h1>
                                            <p className={ethData.ethData.price_change_1h < 0 ? 'text-red-500' : 'text-green-600'}>
                                                {formatNumbers(ethData.ethData.price_change_1h, 2)}%
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className="text-[12px] leading-[18px] text-[#6c757d] uppercase font-normal">
                                                Change (7D)
                                            </h1>
                                            <p className={`leading-[15px] text-[15px] ${ethData.ethData.price_change_7d < 0 ? 'text-red-500' : 'text-green-600'}`}>
                                                {formatNumbers(ethData.ethData.price_change_7d, 2)}%
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="py-3 flex gap-2 items-center">

                                    <div className="flex items-center justify-between w-full gap-3">
                                        <div>
                                            <h1 className="text-[12px] leading-[18px] text-[#6c757d]">
                                                Change (1W)
                                            </h1>
                                            <p className={`leading-[15px] text-[15px] ${ethData.ethData.price_change_1m < 0 ? 'text-red-500' : 'text-green-600'}`}>{formatNumbers(ethData.ethData.price_change_1m, 2)}%</p>
                                        </div>
                                        <div>
                                            <h1 className="text-[12px] leading-[18px] text-[#6c757d] uppercase font-normal">
                                                Change (1M)
                                            </h1>
                                            <p className={`leading-[15px] text-[15px] ${ethData.ethData.price_change_1y < 0 ? 'text-red-500' : 'text-green-600'}`}>{formatNumbers(ethData.ethData.price_change_1y, 2)}%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 md:px-2">
                                <div className="border-b py-3 flex gap-2 items-center">

                                    <div className="flex items-center justify-between w-full gap-3">
                                        <div>
                                            <h1 className="text-[12px] leading-[18px] text-[#6c757d] uppercase font-normal">
                                                Volume
                                            </h1>
                                            <p className="text-[15px] leading-[15px]">
                                                ${formatNumbers(ethData.ethData.volume)}
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className="text-[12px] leading-[18px] text-[#6c757d] uppercase font-normal">
                                                Volume (7d)
                                            </h1>
                                            <p className="leading-[15px] text-[15px]">
                                                ${formatNumbers(ethData.ethData.volume_7d)}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="py-3 flex gap-2 items-center">

                                    <div className="flex items-center justify-between w-full gap-3">

                                        <div>
                                            <h1 className="text-[12px] leading-[18px] text-[#6c757d] uppercase font-normal">
                                                All Time Low (ATL)
                                            </h1>
                                            <p className="leading-[15px] text-[15px]">${formatNumbers(ethData.ethData.atl, 2)}</p>
                                        </div>
                                        <div>
                                            <h1 className="text-[12px] leading-[18px] text-[#6c757d]">
                                                All Time High (ATH)
                                            </h1>
                                            <p className="leading-[15px] text-[15px]">${formatNumbers(ethData.ethData.ath, 2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MarketData;