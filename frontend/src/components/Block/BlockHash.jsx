import React from 'react';


const BlockHash = () => {
    return (
        <div className="max-w-[1380px] mx-auto p-4 bg-[#fbfcfd]">
            <div className="py-3 border-b-2 border-gray-200">
                <h1 className="text-[#212529] text-[19px] font-bold leading-[23px]">
                    Block
                </h1>
            </div>

            <div className="flex py-5 gap-5">
                <button className='bg-[#3287b1] text-[#FFFFFF] rounded px-2 py-1 '           >
                    Overview
                </button>
            </div>


        </div>
    );
};

export default BlockHash;