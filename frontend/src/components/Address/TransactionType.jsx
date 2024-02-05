import React, { useState } from "react";
import InternalTransactions from "./InternalTransactions";
import Transactions from "./Transactions";
import TokenTransfers from "./TokenTransfers.jsx";
import NftTransfers from "./NftTransfers.jsx";

import { useFetchAddressQuery } from '../../features/api/apislice.js';
// import InternalTransactions from "./InternalTransactions";
// import TokenTransfers from "./TokenTransfers";
// import NftTransfers from "./NftTransfers";
// import AnalyticsInfo from "./AnalyticsInfo";
// import Transactions from "./Transactions";


const TransactionType = ({ address }) => {

    const { data, isLoading, isError, isFetching } = useFetchAddressQuery(address);

    const [activeButton, setActiveButton] = useState("Transactions");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const getButtonClassName = (buttonName) => {
        return `px-2 py-1 rounded-lg text-[13px] leading-5 font-medium ${activeButton === buttonName
            ? "bg-[#0784c3] text-white "
            : "bg-[#e9ecef] hover:bg-[#dee2e6] text-[#081d35]"
            }`;
    };

    const renderTabContent = () => {
        switch (activeButton) {
            case "InternalTransactions":
                return <InternalTransactions data={data.transactions.internal} />;
            case "TokenTransfers":
                return <TokenTransfers data={data.transactions.erc20} address={address} />;
            case "NFTTransfers":
                return <NftTransfers erc721={data.transactions.erc721} address={address} erc1155={data.transactions.erc1155} />;
            default:
                return <Transactions data={data.transactions.normal} address={address} />
        }
    };

    return (
        <div className="w-full">
            <div className="max-w-[1380px] mx-auto p-4">
                <div className="flex item-center whitespace-nowrap gap-4   overflow-x-auto">
                    <button
                        className={getButtonClassName("Transactions")}
                        onClick={() => handleButtonClick("Transactions")}
                    >
                        Transactions
                    </button>
                    <button
                        className={getButtonClassName("InternalTransactions")}
                        onClick={() => handleButtonClick("InternalTransactions")}
                    >
                        Internal Transactions
                    </button>
                    <button
                        className={getButtonClassName("TokenTransfers")}
                        onClick={() => handleButtonClick("TokenTransfers")}
                    >
                        Token Transfers (ERC-20)
                    </button>
                    <button
                        className={getButtonClassName("NFTTransfers")}
                        onClick={() => handleButtonClick("NFTTransfers")}
                    >
                        NFT Transfers
                    </button>

                </div>

                {renderTabContent()}
            </div>
        </div>
    );
};

export default TransactionType;