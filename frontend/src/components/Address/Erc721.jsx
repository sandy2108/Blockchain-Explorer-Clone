import React from "react";
import { LiaQuestionCircle } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import { timeDifference } from "../../utils/time";
import { getShortenAddress, getShortenFirstAddress } from "../../utils/shortenAddress";


const Erc721 = ({ data, address }) => {
    if (data.error) { return <p className="text-center py-5">No ERC721 Transactions found</p> }
    return (
        <div className="w-full">
            <div className="max-w-[1380px] mx-auto">
                <div className="border rounded-b-lg border-[#eef0f3] bg-[#ffffff]">
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
                                        Transaction Info
                                    </th>
                                    <th className="px-2 md:px-0 py-3 text-left tracking-wider w-8">
                                        <div className="flex gap-1 items-center">
                                            <p>Method</p>
                                            <LiaQuestionCircle size={20} />
                                        </div>
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
                                        Item
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {Array.isArray(data) && data.map((transaction) => (
                                    <tr className="w-full py-5 bg-[#FFFFFF]">
                                        <td className="px-2  whitespace-nowrap">
                                            <div className="flex items-center justify-center p-2 bg-white  hover:bg-[#e9ecef] border border-[#eef0f3] rounded-md cursor-pointer">
                                                <IoEyeOutline size={13} />
                                            </div>
                                        </td>
                                        <td className="pl-2  text-[14px] leading-[22px] font-normal whitespace-nowrap text-[#066a9c] flex my-2 ">
                                            <p className="overflow-hidden  max-w-[130px]">
                                                {getShortenFirstAddress(transaction.hash, 19)}
                                            </p>
                                            ...
                                        </td>
                                        <td className="px-2 md:px-0">
                                            <p className="md:text-[12px] text-[11px] leading-[11px] max-w-[80px] text-[#000000] rounded-md bg-[#f8f9fa] md:px-4 md:py-2 py-1 px-2 border-[#eef0f3] border">
                                                Transfer
                                            </p>
                                        </td>

                                        <td className="px-2 md:px-0  whitespace-nowrap text-[14px] leading-[22px]">
                                            {timeDifference(transaction.timeStamp)}
                                        </td>
                                        <td className="flex  text-[14px] leading-5   md:px-0  whitespace-nowrap gap-1">
                                            <p className={`${transaction.from === address.toLowerCase()
                                                ? ""
                                                : "text-[#066a9c]"
                                                }`}>{getShortenAddress(transaction.from)}</p>{" "}
                                            <FaRegCopy
                                                size={15}
                                                className=" cursor-pointer text-gray-500"
                                            />
                                        </td>

                                        <td className="px-3 whitespace-nowrap">
                                            <p
                                                className={`${transaction.from === address.toLowerCase()
                                                    ? "text-[#cc9a06] bg-[#fff6da] border  border-[#ffefbe]"
                                                    : "bg-[#e5f5f3] text-[#00a186] border border-[#bde6e0]   font-bold "
                                                    }flex md:px-0 px-1  text-center justify-center  text-[11px] leading-[11px]  font-bold rounded-md  py-1`}
                                            >
                                                {transaction.from === address.toLowerCase()
                                                    ? "OUT"
                                                    : "IN"}
                                            </p>
                                        </td>

                                        <td className=" items-center  text-[14px] max-w-[170px] leading-5   md:px-0  whitespace-nowrap gap-1">
                                            <div className="flex items-center gap-1">
                                                <p className={`${transaction.to === address.toLowerCase()
                                                    ? ""
                                                    : "text-[#066a9c]"
                                                    }`}>{getShortenAddress(transaction.to)}</p>{" "}
                                                <FaRegCopy
                                                    size={15}
                                                    className=" cursor-pointer text-gray-500"
                                                />
                                            </div>
                                        </td>

                                        <td className="px-2 md:px-0 text-[14px]  font-medium leading-[22px] whitespace-nowrap">
                                            <div className="flex text-[#066a9c] items-center">
                                                <p className="text-md">{transaction.tokenName}</p>
                                                <p className=""># {transaction.tokenID.length > 4 ? `${getShortenFirstAddress(transaction.tokenID, 4)}` : transaction.tokenID.length}</p>
                                            </div>

                                            <p className="text-sm">{transaction.tokenSymbol}</p>


                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                    <div className="flex cursor-pointer text-[#6c757d] hover:text-[#066a9c]  items-center justify-center py-3 bg-[#F8F9FA]">
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

export default Erc721;