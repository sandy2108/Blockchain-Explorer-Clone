import React from 'react'
import { FaRegCircleQuestion } from "react-icons/fa6";
import TimeConverter from '../../utils/TimeConverter';
import { LuClock4 } from "react-icons/lu";

const BlockInformation = ({ data }) => {
    console.log("TxData:", data)
    return (
        <div className="max-w-[1380px] mx-auto p-4 bg-[#fbfcfd]">
            <div className='bg-[#ffffff]'>
                <div className='rounded-2xl  border-2 border-gray-300 p-5'>
                    <div className='border-b-2 border-[#d9dfde]'>
                        <div className='md:flex'>
                            <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>Block Height:</p>
                            <p className='text-[15px] break-words md:flex gap-2 justify-start  items-start'> {data.number}</p>
                        </div>
                        <div className='md:flex my-5'>
                            <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>TimeStamp:</p>
                            <p className='flex text-[15px] break-words md:flex gap-2 justify-start  md:items-center items-start'> <LuClock4 /><TimeConverter timestamp={data.timestamp} /></p>

                        </div>

                        <div className=' md:flex my-5  items-center'>
                            <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>Transactions:</p>
                            <p className='text-[#066a9c] text-[15px] leading-[22px] font-medium hover:cursor-pointer'>{data.transactions.length} transactions in this block</p>

                        </div>
                    </div>


                    <div className='border-b-2 border-gray-300 '>
                        <div className='md:flex my-5'>
                            <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span> Fee Recipient:</p>
                            <p className='text-[15px]  break-words md:flex gap-2 justify-start text-[#066a9c] items-start'>{data.miner}</p>

                        </div>
                        <div className='md:flex my-5'>
                            <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>BlockHash:</p>
                            <p className='text-[15px] break-words md:flex gap-2 text-[#066a9c] justify-start  items-start'>{data.hash}</p>

                        </div>
                        <div className='md:flex my-5'>
                            <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>ParentHash:</p>
                            <p className='text-[15px]  break-words md:flex gap-2 text-[#066a9c] justify-start  items-start'>{data.parentHash}</p>

                        </div>

                    </div>

                    <div className=''>
                        <div className='md:flex my-5'>
                            <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>Gas Used:</p>
                            <p className='text-[15px]  break-words md:flex gap-2 justify-start  items-start'>{parseInt(data.gasUsed.hex, 16)}</p>

                        </div>
                        <div className='md:flex my-5'>
                            <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>Gas Limit:</p>
                            <p className='text-[15px]  break-words md:flex gap-2  justify-start  items-start'>{parseInt(data.gasLimit.hex, 16)}</p>

                        </div>
                        <div className='md:flex my-5'>

                            <p className='md:min-w-[300px] flex items-center gap-1 text-[15px] text-[#081d35] md:text-[#6c757d]'> <span><FaRegCircleQuestion /></span>Extra Data:</p>
                            <p className='text-[15px]  break-words md:flex gap-2  justify-start  items-start'>(Hex:{data.extraData})</p>
                        </div>

                    </div>
                </div>
                <p className='text-[#6c757d]  text-[13px] py-2'>Blocks are batches of transactions linked via cryptographic hashes. Any tampering of a block would invalidate all following blocks as all subsequent hashes would change. Learn more about this page in our Knowledge Base.</p>

            </div>
        </div>
    )
}

export default BlockInformation