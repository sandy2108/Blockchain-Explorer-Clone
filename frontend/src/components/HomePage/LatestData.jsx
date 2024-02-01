import React from 'react'
import { getShortenAddress, getShortenFirstAddress } from "../../utils/shortenAddress.jsx"
import { TbNotes } from "react-icons/tb";
import { SvgBlockIcon } from "../../assets/Icons";


export const LatestData = ({ block, transaction }) => {
    return (
        <div className='max-w-[1380px] mx-auto px-4 bg-[#fbfbfe]'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">


                <div className="bg-white pt-3 rounded-md shadow-md border border-stone-300 overflow-hidden">
                    {/* Heading Div */}
                    <div className="border-b">
                        <div className="mb-2 pl-4">
                            <h1 className="text-[15px] leading-[18px] font-normal block text-[#212529]">
                                Latest Blocks
                            </h1>
                        </div>
                    </div>
                    <div>
                        {block.map((block) => (
                            <BlockData key={block.timestamp} {...block} />
                        ))}
                    </div>



                    {/* View all Transactions */}
                    <div className="bg-[#f8f9fa]">
                        <div className="flex items-center justify-center cursor-pointer mt-2 py-4">
                            <a
                                href="/"
                                className="uppercase text-[#6c757d] text-md text-[14px] leading-[18px] mr-2"
                            >
                                View all Blocks
                            </a>
                            {/* Imported arrow icon form icons8.com  */}
                            <img
                                width="20"
                                height="10"
                                src="https://img.icons8.com/ios/50/000000/long-arrow-right--v1.png"
                                alt="long-arrow-right--v1"
                            />
                        </div>
                    </div>
                </div>



                <div>
                    <div className="bg-white py-3 rounded-md shadow-md border border-stone-300 overflow-hidden ">
                        {/* Heading Div */}
                        <div className="border-b">
                            <div className="mb-2 pl-4">
                                <h1 className="text-[15px] leading-[18px] font-normal block text-[#212529]">
                                    Latest Transactions
                                </h1>
                            </div>
                        </div>

                        <div>
                            {transaction.map((item) => (
                                <TransactionData key={item.transactionHash} {...item} />
                            ))}
                        </div>


                        {/* View all Transactions */}
                        <div className="bg-[#f8f9fa]">
                            <div className="flex items-center justify-center cursor-pointer mt-2 py-4">
                                <a
                                    href="/"
                                    className="uppercase text-[#6c757d] text-md text-[14px] leading-[18px] mr-2"
                                >
                                    {" "}
                                    View all Transactions
                                </a>
                                {/* Imported arrow icon form icons8.com  */}
                                <img
                                    width="20"
                                    height="10"
                                    src="https://img.icons8.com/ios/50/000000/long-arrow-right--v1.png"
                                    alt="long-arrow-right--v1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestData;

const BlockData = ({ miner, number, timestamp, transactions, agoTimeStamp }) => {
    return (
        <div className="min-h-[80px] sm:max-h-[80px] px-4 py-2">
            <div className="min-h-[100px] px-4">
                <div className="w-full mt-3 sm:flex">
                    <div className="sm:w-[40%] flex mr-5">
                        <div className="hidden sm:flex rounded-md bg-[#f8f9fa] p-4">
                            <SvgBlockIcon />
                        </div>
                        <div className=" mt-1 sm:ml-1 flex sm:block gap-1 ">
                            <div className="sm:hidden flex">Block</div>
                            <h1 className="text-[15px] text-center text-[#066a9c] leading-[22px] font-normal">
                                {number}
                            </h1>
                            <h2 className="text-[13px] leading-5 text-[#6c757d]">
                                {agoTimeStamp}
                            </h2>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-wrap md:flex-nowrap items-center  ">
                            <div className="mt-1  items-start">
                                <p className="text-[15px] leading-[22px] text-[#212529]">
                                    Fee Receipts:{" "}
                                    <span className="text-[#066a9c] cursor-pointer">
                                        {getShortenAddress(miner)}
                                    </span>
                                </p>
                                <p className="text-[15px] leading-[22px] text-[#066a9c] cursor-pointer">
                                    {transactions && transactions.length} &nbsp;txns&nbsp;{" "}
                                    <span className="text-[#6c757d] cursor-default">
                                        in {agoTimeStamp}
                                    </span>{" "}
                                    <span className="ml-1 rounded-md px-2 py-1 text-[11px] font-medium text-black leading-3 border-slate-20 border sm:hidden">
                                        0.02415 eth
                                    </span>
                                </p>
                            </div>
                            <h1 className="hidden sm:flex ml-auto items-end rounded-md px-2 py-1 text-[11px] font-medium text-black leading-3 border-slate-20 border">
                                {" "}
                                0.02415 ETH
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="border-b border-slate-20 mt-4"></div>
            </div>
        </div>
    );
};



const TransactionData = ({ ageTimeStamp, to, from, transactionHash }) => {
    return (
        <div className="min-h-[80px] sm:max-h-[80px] px-4 py-2">
            <div className="min-h-[100px] px-4">
                <div className="w-full mt-3 sm:flex">
                    <div className="sm:w-[40%] flex mr-5">
                        <div className="hidden sm:flex rounded-md bg-[#f8f9fa] p-4">
                            <TbNotes />
                        </div>
                        <div className=" mt-1 sm:ml-1 flex sm:block gap-1 ">
                            <div className="sm:hidden flex">TX#</div>
                            <h1 className="text-[15px] text-center text-[#066a9c] leading-[22px] font-normal">
                                {getShortenFirstAddress(transactionHash)}
                            </h1>
                            <h2 className="text-[13px] leading-5 text-[#6c757d]">
                                {ageTimeStamp} ago
                            </h2>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-wrap md:flex-nowrap items-center  ">
                            <div className="mt-1 items-start">
                                <p className="text-[15px] leading-[22px] text-[#212529]">
                                    From{" "}
                                    <span className="text-[#066a9c] cursor-pointer">
                                        {getShortenFirstAddress(from)}
                                    </span>
                                </p>
                                <p className="text-[15px] leading-[22px] text-[#212529] cursor-pointer">
                                    To
                                    <span className="text-[#066a9c] ml-1 cursor-default">
                                        {getShortenAddress(to)}
                                    </span>{" "}
                                    <span className="ml-1 rounded-md px-2 py-1 text-[11px] font-medium text-black leading-3 border-slate-20 border sm:hidden">
                                        0.02415 eth
                                    </span>
                                </p>
                            </div>
                            <h1 className="hidden sm:flex ml-auto items-end rounded-md px-2 py-1 text-[11px] font-medium text-black leading-3 border-slate-20 border">
                                {" "}
                                0.02415 ETH
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="border-b border-slate-20 mt-4"></div>
            </div>
        </div>
    );
};

