import React, { useState } from "react";
import { SortAscending } from "../../assets/Icons/SortAscending";
import Erc721 from "./Erc721";
import Erc1155 from "./Erc1155";

const NftTransfers = ({ erc721, erc1155, address }) => {
    const [selectedButton, setSelectedButton] = useState("ERC721");


    const handleButtonClick = (buttonType) => {
        setSelectedButton(buttonType);
    };

    const getButtonClassName = (buttonName) => {
        return `px-2 py-1 rounded-lg text-[13px] leading-5 font-medium ${selectedButton === buttonName
            ? "bg-[#0784c3] text-white "
            : "bg-[#e9ecef] hover:bg-[#dee2e6] text-[#081d35]"
            }`;
    };

    const renderTabContent = () => {
        switch (selectedButton) {
            case "ERC721":
                return <Erc721 data={erc721} address={address} />;
            case "ERC1155":
                return <Erc1155 data={erc1155} address={address} />;
        }
    };

    return (
        <div className="w-full">
            <div className="max-w-[1380px] mx-auto">
                <div className="border rounded-lg my-5 border-[#eef0f3] bg-[#ffffff]">
                    <div className="flex items-center p-4">
                        <SortAscending />
                        <h1 className="font-normal text-[14px] leading-[22px] ml-1 text-[#212529]">
                            Latest 15 NFT Transfers Token Transfer Events
                        </h1>
                    </div>

                    <div className="flex items-center gap-4 p-4">
                        <button
                            className={getButtonClassName("ERC721")}
                            onClick={() => handleButtonClick("ERC721")}
                        >
                            ERC-721
                        </button>
                        <button
                            className={getButtonClassName("ERC1155")}
                            onClick={() => handleButtonClick("ERC1155")}
                        >
                            ERC-1155
                        </button>
                    </div>

                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
};

export default NftTransfers;