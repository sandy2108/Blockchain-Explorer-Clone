import React from "react";
import { SortAscending } from "../../assets/Icons/SortAscending";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import { formatNumbers } from "../../utils/formatNumbers.jsx";
import { getShortenAddress, getShortenFirstAddress } from "../../utils";
import { timeDifference } from "../../utils/time.jsx";


const InternalTransactions = ({ data }) => {
    if (data.error) { return <p className="text-center py-5">No Internal Transactions found</p> }
    return (
        <div className="w-full">
            <div className="max-w-[1380px] mx-auto">
                <div className="border rounded-lg my-5 border-[#eef0f3] bg-[#ffffff]">
                    <div className="flex items-center p-4">
                        {/* Add your sorting component (SortAscending) here */}
                        <SortAscending />
                        <h1 className="font-normal text-[14px] leading-[22px] ml-1 text-[#212529]">
                            Latest 25 internal transactions
                        </h1>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-[#FFFFFF] text-[#212529] text-[13px] leading-[19px] font-bold">
                                <tr>
                                    <th className="pl-2 py-3 text-left tracking-wider w-32">
                                        Parent Txn Hash
                                    </th>
                                    <th className="px-2 md:px-0  py-3 text-left tracking-wider w-16">
                                        Block
                                    </th>
                                    <th className="px-2 md:px-0  py-3 text-left text-[#066a9c] tracking-wider w-28">
                                        Age
                                    </th>
                                    <th className="px-2 md:px-0  py-3 text-left tracking-wider w-[50px]">
                                        From
                                    </th>

                                    <th className="px-2 md:px-0  py-3 text-left tracking-wider w-28">
                                        To
                                    </th>
                                    <th className="px-2 md:px-0  py-3 text-left tracking-wider w-16">
                                        Value
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">

                                {Array.isArray(data) && data.slice(0, 25).map((transaction) => (
                                    <tr className="w-full py-5 bg-[#FFFFFF] ">
                                        <td className="pl-2  whitespace-nowrap text-[#066a9c] flex my-2 ">
                                            <p className="overflow-hidden  text-[14px]  leading-[22px] font-normal ">
                                                {getShortenFirstAddress(transaction.hash, 19)}
                                            </p>

                                        </td>

                                        <td className="px-2 md:px-0  text-[#066a9c] ">
                                            <p className="max-w-[80px]">{transaction.blockNumber}</p>
                                        </td>

                                        <td className="px-2 md:px-0  whitespace-nowrap text-[14px] leading-[22px]">
                                            {timeDifference(transaction.timeStamp)}
                                        </td>

                                        <td className="flex text-[#066a9c] text-[14px] max-w-[170px] leading-5   md:px-0  whitespace-nowrap gap-1">
                                            <p>{getShortenAddress(transaction.from)}</p>{" "}
                                            <FaRegCopy
                                                size={15}
                                                className=" cursor-pointer text-gray-500"
                                            />
                                        </td>

                                        <td className="px-2 md:px-0 text-[14px]  font-medium leading-[22px] whitespace-nowrap">
                                            {getShortenAddress(transaction.to)}
                                        </td>

                                        <td className="px-2 md:px-0 text-[14px]  font-medium leading-[22px] whitespace-nowrap">
                                            {formatNumbers(transaction.value / 10 ** 18, 8)} ETH
                                        </td>
                                    </tr>


                                ))}

                            </tbody>
                        </table>
                    </div>
                    <div className="flex cursor-pointer text-[#6c757d] hover:text-[#066a9c]  items-center justify-center py-3 bg-[#F8F9FA]">
                        {/* Add your sorting component (SortAscending) here */}

                        <h1 className="font-normal text-[14px]  leading-[22px] ml-1  ">
                            VIEW ALL INTERNAL TRANSACTIONS
                        </h1>
                        <IoIosArrowRoundForward size={20} className="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternalTransactions;