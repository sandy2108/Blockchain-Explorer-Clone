import React, { useState } from 'react'
import { SvgEthereumIcon } from "../../assets/Icons/EthereumIcon";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import { PiWalletBold } from "react-icons/pi";
import { formatNumbers } from '../../utils/formatNumbers';

const UserInfo = ({ eth, token, walletBalance }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isblockscandropdown, setBlockScanDropDown] = useState(false);

    return (
        <div className='w-full bg-[#fafbfd] text-[#212529] relative'>
            <div className='max-w-[1380px] mx-auto p-4'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
                    {/* First div */}
                    <div className='rounded-xl border-2 border-[#eef0f3] bg-[#ffffff] p-4 relative'>
                        <h1 className='text-md font-medium'>
                            Overview
                        </h1>
                        <div className="my-5">
                            <h1 className="text-[#6c757d] text-xs">ETH BALANCE</h1>
                            <p className="flex items-center font-medium tracking-wide space-x-3 text-[14px] leading-[29px] mt-1">
                                <SvgEthereumIcon width={18} height={19} />
                                {eth[0].token_balance
                                } ETH
                            </p>
                        </div>
                        <div className="my-3">
                            <h1 className="text-[#6c757d] text-xs">ETH VALUE</h1>
                            <p className="space-x-3 text-[14px] leading-[22px] mt-1">
                                ${formatNumbers(eth[0].token_balance * eth[0].price, 2)}
                                <span> (@ ${formatNumbers(eth[0].price, 2)}/ETH)</span>
                            </p>
                        </div>

                        <div className='mt-3 relative'>
                            <h1 className='text-[#6c757d] text-xs'>TOKEN HOLDINGS</h1>
                            <div className='flex items-center mt-1 gap-2 relative'>
                                <button className='flex flex-1 items-center justify-between hover:bg-[#e9ecef] text-left hover-[#e9ecef] border-[#f5f6f8] border-2 p-2 text-[14px] leading-[22px] rounded-md relative'
                                    onClick={() => setDropdownOpen(!isDropdownOpen)}>
                                    <div className="flex">
                                        <p className=" text-[14px] leading-[19px]">${formatNumbers(walletBalance - eth[0].token_balance * eth[0].price, 2)} </p>
                                        <span className="text-[#6c757d] ml-2 text-[14px] leading-[19px]">
                                            {token.length} (Tokens)
                                        </span>
                                    </div>

                                    {isDropdownOpen && (
                                        <div
                                            className="overlay"
                                            onClick={() => setDropdownOpen(false)}
                                        ></div>
                                    )}
                                    {
                                        isDropdownOpen && (
                                            <div className='dropdown absolute top-full left-0 z-10 bg-white border border-gray-300 rounded-md w-full  max-h-40 overflow-y-auto'>
                                                <p className="text-[#212529] text-[13px] bg-[#f8f9fa] font-bold  p-2">ERC-20 Tokens</p>
                                                {token.map((item) => (
                                                    <div key={item.asset.contracts[0]} className="p-2 cursor-pointer bg-[#ffffff] hover:bg-[#e9ecef] ">
                                                        <div className="flex items-center justify-between border-b-2 border-[#eef0f3]">
                                                            <div>

                                                                <div className="flex ">
                                                                    <img src={item.asset.logo} alt={item.asset.symbol} className="rounded-3xl h-4 w-4 object-contain items-center mr-1 mt-1 " />
                                                                    <h1 className="text-[#081d35] text-13px]">{item.asset.name} ({item.asset.symbol})</h1>
                                                                </div>
                                                                <p className="text-[#6c757d] text-[13px]">{item.token_balance} {item.asset.symbol}</p>
                                                            </div>

                                                            <div>
                                                                <p className="text-[#081d35] text-[13px] text-right">${formatNumbers(item.price * item.token_balance, 2)}</p>
                                                                <p className="text-[#6c757d] text-[11px] items-end">@{formatNumbers(item.price, 2)}</p>
                                                            </div>
                                                        </div>


                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }
                                    <MdOutlineKeyboardArrowDown size={20} className="" />

                                </button>
                                <div className="bg-[#e9ecef] p-3 rounded-md">
                                    <PiWalletBold />
                                </div>

                            </div>

                        </div>

                    </div>
                    {/* Second div */}
                    <div className="rounded-xl border-2 border-[#eef0f3] bg-[#ffffff] p-4">
                        <h1 className="text-md font-medium">More Info</h1>
                        <div className="my-5">
                            <h1 className="text-[#6c757d] text-xs">PRIVATE NAME TAGS</h1>
                            <button className="flex items-center rounded-2xl px-4 py-1  border-[#f5f6f8] border-2 font-medium space-x-3 text-[14px] leading-[22px] mt-1">
                                <LuPlus size={15} className="mr-2" />
                                Add
                            </button>
                        </div>


                    </div>
                    {/* Third div */}
                    <div className="rounded-xl min-h-full border-2 border-[#eef0f3] bg-[#ffffff] p-4 relative">
                        <h1 className="text-md font-medium">Multi Chain</h1>
                        <div className="my-5 flex-1">
                            <h1 className="text-[#6c757d] text-xs">MULTICHAIN ADDRESSES</h1>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default UserInfo