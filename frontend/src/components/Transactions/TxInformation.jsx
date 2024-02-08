import React from 'react'
import { FaRegCopy } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const TxInformation = ({ data }) => {
    const navigate = useNavigate()
    const handlefromAddress = () => {
        navigate(`/address/${data.from}`);
    }
    const handletoAddress = () => {
        navigate(`/address/${data.to}`);
    }

    const handleBlock = () => {
        navigate(`/block/${data.blockNumber}`)
    }
    return (
        <div className='bg-[#ffffff]'>
            <div className='rounded-2xl  border-2 border-gray-300 p-5'>
                <div className='border-b-2 border-[#d9dfde]'>
                    <div className='md:flex'>
                        <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>Transaction Hash:</p>
                        <p className='text-[15px] break-words md:flex gap-2 justify-start  items-start'>{data.transactionHash} <FaRegCopy
                            size={15}
                            className="cursor-pointer text-gray-500"
                        /></p>

                    </div>
                    <div className='md:flex my-5'>
                        <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>Block Hash:</p>
                        <p className='text-[15px] break-words md:flex gap-2 justify-start  items-start'>{data.blockHash}  <FaRegCopy
                            size={15}
                            className="cursor-pointer text-gray-500"
                        /></p>

                    </div>
                    <div className='flex space-x-2 md:space-x-0 my-5'>
                        <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>Status:</p>
                        <p
                            className={`${data.status === 1
                                ? "bg-[#e5f5f3] text-[#00a186] border border-[#bde6e0] font-bold "
                                : "text-[#cc9a06] bg-[#fff6da] border  border-[#ffefbe]"
                                }flex p-1 items-center  text-center justify-center  text-[11px] leading-[11px]  font-bold rounded-md `}
                        >
                            {data.status === 1
                                ? "Success"
                                : "Pending"}
                        </p>
                    </div>
                    <div className=' flex my-5  items-center'>
                        <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>Block:</p>
                        <h2 onClick={handleBlock} className='text-[15px] cursor-pointer text-center flex text-[#066a9c] leading-[22px] font-normal'>{data.blockNumber}  <span className='ml-1 rounded-md px-2 py-1 text-[11px] font-medium text-black leading-3 border-slate-20 border'>{data.confirmations} Block Confirmations</span></h2>

                    </div>
                </div>

                <div className=''>
                    <div className='md:flex my-5'>
                        <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>From:</p>
                        <p onClick={handlefromAddress} className='text-[15px] cursor-pointer break-words md:flex gap-2 justify-start text-[#066a9c] items-start'>{data.from}  <FaRegCopy
                            size={15}
                            className="cursor-pointer text-gray-500"
                        /></p>

                    </div>
                    <div className='md:flex my-5'>
                        <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>To:</p>
                        <p onClick={handletoAddress} className='text-[15px] cursor-pointer break-words md:flex gap-2 text-[#066a9c] justify-start  items-start'>{data.to} <FaRegCopy
                            size={15}
                            className="cursor-pointer text-gray-500"
                        /></p>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default TxInformation