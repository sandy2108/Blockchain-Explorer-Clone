import React, { useState } from "react";
import { SvgSearchIcon } from "../../assets/Icons";
import { useNavigate } from "react-router-dom"

const isValidAddress = (address) => /^0x[0-9a-fA-F]{40}$/.test(address);
const isValidBlock = (block) => /[0-9]{8}$/.test(block);
const isValidHash = (hash) => /^0x[0-9a-fA-F]{64}$/.test(hash);

const routes = [
    { isValid: isValidAddress, route: "/address/" },
    { isValid: isValidBlock, route: "/block/" },
    { isValid: isValidHash, route: "/tx/" }
];

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const { target: { searchInput: { value: inputValue } } } = event;

        for (const { isValid, route } of routes) {
            if (isValid(inputValue)) {
                navigate(`${route}${inputValue}`);
                setSearchInput("");
                return;
            }
        }

        alert("Invalid Ethereum address");
    };


    return (
        <div
            className="w-full min-h-[220px] bg-slate-800"
            style={{ backgroundImage: "url('/images/search-bg.svg')" }}
        >
            <div className="max-w-[1380px] pt-10 mx-auto px-5">
                <h1 className="text-white text-[20px] leading-[24px] mb-2">
                    The Ethereum Blockchain Explorer
                </h1>
                <form
                    className="md:max-w-[60%] bg-white rounded-md h-10"
                    onSubmit={handleSubmit}
                >
                    <span className="flex gap-2">
                        <input
                            id="searchInput"
                            name="searchInput"
                            placeholder="Search by Address / Txn Hash / Block "
                            className="pl-3 text-[15px] leading-[23px] my-1  rounded-md outline-0 w-full focus:outline-2 outline-slate-300 text-slate-600 placeholder:text-slate-600"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button
                            className="flex items-center rounded-lg bg-blue-400 px-1 py-1 m-1"
                            type="submit"
                        >
                            <SvgSearchIcon />
                        </button>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;