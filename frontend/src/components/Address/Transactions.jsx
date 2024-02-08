import React, { useState } from "react";
import { LiaQuestionCircle } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
import { SortAscending } from "../../assets/Icons/SortAscending";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import { timeDifference } from "../../utils/time";
import { formatNumbers } from "../../utils/formatNumbers";
import { getShortenAddress } from "../../utils/shortenAddress";
import { useNavigate } from "react-router-dom";


const Transactions = ({ data, address }) => {
    const navigate = useNavigate();

    const handleBlock = (blockNumber) => {
        navigate(`/block/${blockNumber}`)
    }

    const handlefromAddress = (from) => {
        navigate(`/address/${from}`);
    }
    const handletoAddress = (to) => {
        navigate(`/address/${to}`);
    }

    const handleTransactionHash = (hash) => {
        navigate(`/tx/${hash}`);
    }

    return (
        <div className="w-full">
            <div className="max-w-[1380px] mx-auto">
                <div className="border rounded-lg my-5 border-[#eef0f3] bg-[#ffffff]">
                    <div className="flex items-center p-4">
                        {/* Add your sorting component (SortAscending) here */}
                        <SortAscending />
                        <h1 className="font-normal text-[14px] leading-[22px] ml-1 text-[#212529]">

                            Latest 25 from overall  transactions

                        </h1>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-[#FFFFFF] text-[#212529] text-[13px] leading-[19px] font-bold">
                                <tr>
                                    <th className=" px-2 py-3 text-center tracking-wider md:w-[12px]">
                                        <div className="flex items-center justify-center">
                                            <LiaQuestionCircle size={20} />
                                        </div>
                                    </th>
                                    <th className="pl-2 py-3 text-left tracking-wider w-32">
                                        Transaction Hash
                                    </th>
                                    <th className="px-2 md:px-0 py-3 text-left tracking-wider w-8">
                                        <div className="flex gap-1 items-center">
                                            <p>Method</p>
                                            <LiaQuestionCircle size={20} />
                                        </div>
                                    </th>
                                    <th className="px-6 md:px-0  py-3 text-left tracking-wider w-20">
                                        Block
                                    </th>
                                    <th className="px-2 md:px-0  py-3 text-left text-[#066a9c] tracking-wider w-28">
                                        Age
                                    </th>
                                    <th className="px-2 md:px-0  py-3 text-left tracking-wider w-[50px]">
                                        From
                                    </th>
                                    <th className="px-2 md:px-0  py-3 text-left tracking-wider w-2"></th>
                                    <th className="px-2 md:px-0  py-3 text-left tracking-wider w-28">
                                        To
                                    </th>
                                    <th className="px-2 md:px-0  py-3 text-left tracking-wider w-16">
                                        Value
                                    </th>
                                    <th className="px-2 md:px-0  py-3 text-left text-[#066a9c] tracking-wider w-24">
                                        Txn Fee
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                                {Array.isArray(data) &&
                                    data.map((transaction) => (
                                        <tr
                                            key={transaction.hash}
                                            className="w-full py-5 bg-[#FFFFFF]"
                                        >
                                            <td className="px-2 whitespace-nowrap">
                                                <div className="flex items-center justify-center p-2 bg-white hover:bg-[#e9ecef] border border-[#eef0f3] rounded-md cursor-pointer">
                                                    <IoEyeOutline size={13} />
                                                </div>
                                            </td>
                                            <td className="pl-2 text-[14px] leading-[22px] font-normal whitespace-nowrap text-[#066a9c] flex my-2 ">
                                                <p onClick={() => handleTransactionHash(transaction.hash)} className="overflow-hidden cursor-pointer max-w-[130px]">
                                                    {transaction.hash}
                                                </p>
                                                ...
                                            </td>
                                            <td className="px-2 md:px-0">
                                                <p className="md:text-[12px] text-[11px] leading-[11px] max-w-[80px] text-[#000000] rounded-md bg-[#f8f9fa] md:px-4 md:py-2 py-1 px-2 border-[#eef0f3] border">
                                                    {transaction.methodId === "0x"
                                                        ? "Transfer"
                                                        : "Unknown"}
                                                </p>
                                            </td>
                                            <td className="px-2 md:px-0 text-[#066a9c] ">
                                                <p onClick={() => handleBlock(transaction.blockNumber)} className="max-w-[80px] cursor-pointer">
                                                    {transaction.blockNumber}
                                                </p>
                                            </td>
                                            <td className="px-2 md:px-0 whitespace-nowrap text-[14px] leading-[22px]">
                                                {timeDifference(transaction.timeStamp)}
                                            </td>
                                            <td className="flex text-[14px] max-w-[190px] leading-5 md:px-0 whitespace-nowrap gap-1">
                                                <p onClick={() => handlefromAddress(transaction.from)}
                                                    className={`cursor-pointer ${transaction.from === address.toLowerCase()
                                                        ? ""
                                                        : "text-[#066a9c]"
                                                        }`}
                                                >
                                                    {getShortenAddress(transaction.from)}
                                                </p>
                                                <FaRegCopy
                                                    size={15}
                                                    className="cursor-pointer text-gray-500"
                                                />
                                            </td>

                                            <td className="px-3 whitespace-nowrap">
                                                <p
                                                    className={`${transaction.from === address.toLowerCase()
                                                        ? "text-[#cc9a06] bg-[#fff6da] border  border-[#ffefbe]"
                                                        : "bg-[#e5f5f3] text-[#00a186] border border-[#bde6e0]   font-bold "
                                                        }flex px-1 items-center  text-center justify-center  text-[11px] leading-[11px]  font-bold rounded-md  py-1`}
                                                >
                                                    {transaction.from === address.toLowerCase()
                                                        ? "OUT"
                                                        : "IN"}
                                                </p>
                                            </td>
                                            <td className="flex text-[14px] max-w-[190px] leading-5 md:px-0 whitespace-nowrap gap-1">
                                                <p onClick={() => handletoAddress(transaction.to)}
                                                    className={`cursor-pointer ${transaction.to === address.toLowerCase()
                                                        ? ""
                                                        : "text-[#066a9c]"
                                                        }`}
                                                >
                                                    {getShortenAddress(transaction.to)}
                                                </p>
                                                <FaRegCopy
                                                    size={15}
                                                    className="cursor-pointer text-gray-500"
                                                />
                                            </td>
                                            <td className="px-2 md:px-0 text-[14px] font-medium leading-[22px] whitespace-nowrap">
                                                Ξ {transaction.value / 10 ** 18} ETH
                                            </td>
                                            <td className="px-2 md:px-0 text-[13px] leading-[19px] font-normal text-[#6c757d] whitespace-nowrap">
                                                {formatNumbers(
                                                    (transaction.gasPrice * transaction.gasUsed) / 1e18,
                                                    8
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex cursor-pointer text-[#6c757d] hover:text-[#066a9c]  items-center justify-center py-3 bg-[#F8F9FA]">
                        {/* Add your sorting component (SortAscending) here */}

                        <h1 className="font-normal text-[14px] leading-[22px] ml-1  ">
                            VIEW ALL TRANSACTIONS
                        </h1>
                        <IoIosArrowRoundForward size={20} className="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transactions;