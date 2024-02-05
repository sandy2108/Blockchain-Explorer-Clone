import React from "react";
import Userlogo from "../../assets/userlogo.png";
import { FaRegCopy } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineQrCodeScanner } from "react-icons/md";



const Addressbar = ({ address }) => {

    const onClickCopy = () => {
        const addressToCopy = { address };
        if (addressToCopy) {
            navigator.clipboard.writeText(addressToCopy);
            toast.info('Copied address to clipboard!');
        }
    };

    return (
        <div className="w-full  bg-[#f8f9fa]">
            <div className="max-w-[1380px] mx-auto px-4 py-2 ">
                <div className="sm:flex items-center md:space-x-2 flex-auto border-b-2 border-slate-200 py-5">
                    <div className="flex items-center gap-2">
                        <img
                            src={Userlogo}
                            width={30}
                            height={30}
                            alt="Userlogo"
                            className="rounded-full"
                        />
                        <h1 className="text-[#212529] item-center leading-5 text-[19px] font-medium mr-2">
                            Address
                        </h1>
                    </div>
                    <div className="sm:flex items-center flex-wrap md:space-x-2 md:whitespace-normal break-words">
                        <p className="text-[15px] leading-7 font-normal mr-2 ">{address}</p>
                        <div className="flex my-2 space-x-4">

                            <FaRegCopy onClick={() => onClickCopy()} className="hover:cursor-pointer" />


                            <MdOutlineQrCodeScanner className="" />
                            <BiMessageDetail className="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addressbar;