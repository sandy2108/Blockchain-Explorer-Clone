import React from 'react'
import { LiaQuestionCircle } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
import { SortAscending } from "../../assets/Icons/SortAscending";
import { formatTimeAgo } from "../../utils/time";
import { formatNumbers } from "../../utils/formatNumbers";
import { getShortenAddress } from "../../utils/shortenAddress";
import { useNavigate } from "react-router-dom";

const BlockTransactions = ({ data }) => {
    const navigate = useNavigate();

    const handleBlock = () => {
        navigate(`/block/${data[0].blockNumber}`)
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
        <div className="max-w-[1380px] mx-auto p-4 bg-[#fbfcfd]">
            <div className="py-3 border-b-2 border-gray-200">
                <h1 className="text-[#212529] text-[19px] font-bold leading-[23px]">
                    Transactions
                </h1>
                <h2 onClick={handleBlock} className='text-[#212529] cursor-pointer text-[16x] pt-2 font-medium leading-[23px]'>For Block <span className='text-[#066a9c]'> {data[0].blockNumber}</span></h2>
            </div>

            <div className='border rounded-lg my-5 border-[#eef0f3] bg-[#FFFFFFF]'>
                <div className="flex items-center p-4">
                    {/* Add your sorting component (SortAscending) here */}
                    <SortAscending />
                    <h1 className="font-normal text-[14px] leading-[22px] ml-1 text-[#212529]">

                        Latest 25 from overall  transactions

                    </h1>
                </div>
            </div>

            <div className='overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-200' >
                    <thead className='bg-[#FFFFFF] text-[#212529] text-[13px] leading-[19px] font-bold'>
                        <tr>
                            <th className='px-2 py-3 text-center tracking-wider md:w-[12px]'>
                                <div className="flex items-center justify-center">
                                    <LiaQuestionCircle size={20} />
                                </div>
                            </th>
                            <th className="pl-2 py-3 whitespace-nowrap font-semibold text-left tracking-wider w-32">
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
                            <th className="pl-2 py-3 font-semibold text-left tracking-wider w-32">
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

                    <tbody className='bg-white divide-y divide-gray-200'>
                        {Array.isArray(data) && data.map((transaction) => (
                            <tr key={transaction.hash}
                                className='w-full py-5'>
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
                                        {transaction.nonce === "null"
                                            ? "pending"
                                            : "Success"}
                                    </p>
                                </td>
                                <td className="px-2 md:px-0 text-[#066a9c] ">
                                    <p onClick={handleBlock} className="max-w-[80px] cursor-pointer">
                                        {transaction.blockNumber}
                                    </p>
                                </td>
                                <td className="px-2 md:px-0 whitespace-nowrap text-[14px] leading-[22px]">

                                    {formatTimeAgo(transaction.timestamp)}
                                </td>
                                <td className="flex text-[14px] max-w-[190px] leading-5 md:px-0 whitespace-nowrap gap-1">
                                    <p onClick={() => handlefromAddress(transaction.from)} className='text-[#066a9c] cursor-pointer'>
                                        {getShortenAddress(transaction.from)}
                                    </p>

                                </td>

                                <td className=" text-[14px] max-w-[190px] leading-5 md:px-0 whitespace-nowrap gap-1">
                                    <p onClick={() => handletoAddress(transaction.to)} className='text-[#066a9c] cursor-pointer'>
                                        {getShortenAddress(transaction.to)}
                                    </p>

                                </td>
                                <td className="px-2 md:px-0 text-[14px] font-medium leading-[22px] whitespace-nowrap">
                                    Ξ {transaction.value / 10 ** 18 > 0 ? formatNumbers(transaction.value / 10 ** 18, 8) : transaction.value / 10 ** 18} ETH
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>


        </div>
    )
}

export default BlockTransactions