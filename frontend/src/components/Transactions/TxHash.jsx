import React from 'react';
import TxInformation from './TxInformation';


const TxHash = ({ data }) => {
    return (
        <div className="max-w-[1380px] mx-auto p-4 bg-[#fbfcfd]">
            <div className="py-3 border-b-2 border-gray-200">
                <h1 className="text-[#212529] text-[19px] font-medium leading-[23px]">
                    Transaction Details
                </h1>
            </div>

            <div className="flex py-5 gap-5">
                <button                >
                    Overview
                </button>
            </div>
            <TxInformation data={data} />

        </div>
    );
};

export default TxHash;