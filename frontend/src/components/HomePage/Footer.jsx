import React from "react";
import { BiLogoFacebookCircle, BiLogoTwitter } from "react-icons/bi";
import { BsMedium } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";
import { PiArrowLineUpBold } from "react-icons/pi";
import { SvgEthereumIcon } from "../../assets/Icons";
import globeMap from "../../assets/map.png";
import { footerItems } from "../../datas";

const Footer = () => {
    return (
        <div className="w-full bg-[#f8f9fa]">
            <div className="max-w-[1380px] mx-auto p-4">
                {/* First row */}
                <div className="flex items-center justify-between pb-5 pt-3 border-b-2 border-slate-200">
                    <div className=" flex gap-2">
                        <a
                            href="https://twitter.com/etherscan"
                            className="rounded-full p-2 bg-[#e9ecef]"
                        >
                            <BiLogoTwitter />
                        </a>
                        <a
                            href="https://twitter.com/etherscan"
                            className="rounded-full p-2 bg-[#e9ecef]"
                        >
                            <BsMedium />
                        </a>

                        <a
                            href="https://twitter.com/etherscan"
                            className="rounded-full p-2 bg-[#e9ecef]"
                        >
                            <BiLogoFacebookCircle />
                        </a>

                        <a
                            href="https://twitter.com/etherscan"
                            className="rounded-full p-2 bg-[#e9ecef]"
                        >
                            <FaRedditAlien />
                        </a>
                    </div>
                    <div className="flex cursor-pointer">
                        <PiArrowLineUpBold size={14} className="mt-[5px] mr-1" />
                        <p className="flex item-center text-[14px] leading-[24px] text-[#6c757d]">
                            {" "}
                            Back to Top
                        </p>
                    </div>
                </div>
                {/* Second row */}
                <div className="my-10">
                    <div className="lg:flex  ">
                        <div className="lg:max-w-[400px] mr-5">
                            <div>
                                <div className="flex ">
                                    <SvgEthereumIcon width={30} height={30} />
                                    <p className="w-full text-[19px] leading-[28px] text-[#212529] ml-1">
                                        Powered by Ethereum
                                    </p>
                                </div>

                                <p className="text-[13px] leading-[19px] text-[#212529] py-3">
                                    Etherscan is a Block Explorer and Analytics Platform for
                                    Ethereum, a decentralized smart contracts platform.
                                </p>

                                <img
                                    src={globeMap}
                                    alt="globemap"
                                    className="lg:flex hidden h-40"
                                />
                            </div>
                        </div>
                        {/* company informations */}
                        <div className="grid md:grid-cols-3 w-full grid-cols-2 gap-3 md:gap-0 ">
                            {footerItems.map((section, index) => (
                                <div key={index} className="cols-span-3 flex-1 ">
                                    <h1 className="text-[14px] font-medium mb-2 leading-4 text-[#212529]">
                                        {section.title}
                                    </h1>
                                    <ul>
                                        {section.contents.map((content, idx) => (
                                            <li key={idx} className="my-1">
                                                <a
                                                    href={content.link}
                                                    className="text-[13px] leading-5 font-normal text-[#212529] hover:text-[#066a9c]"
                                                >
                                                    {content.subtitle}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t-2 border-slate-200">
                    <div className="md:flex items-center md:justify-between pt-3">
                        <h1 className="text-[13px] leading-4 text-[#212529]">
                            Etherscan © 2023 (A1)
                        </h1>
                        <p className="text-[13px] leading-4 text-[#212529] md:mt-0 mt-2">
                            Donations :{" "}
                            <span className="text-[#066a9c]">0xBa616...5488D94 </span>
                            &#10084;&#65039;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;