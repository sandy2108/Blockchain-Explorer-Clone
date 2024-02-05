import React from 'react'
import { useParams } from "react-router-dom";
import Loader from "../../utils/Loader.jsx"
import { useFetchAddressQuery } from '../../features/api/apislice.js';
import Addressbar from '../../components/Address/AddressBar.jsx';
import UserInfo from '../../components/Address/UserInfo.jsx';
import TransactionType from "../../components/Address/TransactionType.jsx"

const index = () => {
    const { address } = useParams()

    const { data, isFetching, isError } = useFetchAddressQuery(address);

    if (isFetching) {
        return <Loader />
    }
    if (isError) {
        return <p>Something wrong! Please try again later</p>
    }



    const EthereumAssets = [];
    const TokenAssets = [];
    const WalletBalance = data.tokenBalance.data.total_wallet_balance;



    if (data && data.tokenBalance && data.tokenBalance.data && data.tokenBalance.data.assets) {
        const filteredAssets = data.tokenBalance.data.assets.filter((item) => item.token_balance > 0 || item.asset.name == "Ethereum");

        // Separate assets into EthereumAssets and TokenAssets
        filteredAssets.forEach((item) => {
            if (item.asset.name === "Ethereum") {
                EthereumAssets.push(item);
            } else {
                TokenAssets.push(item);
            }
        });
    }

    return (
        <div>
            <Addressbar address={address} />
            <UserInfo eth={EthereumAssets} token={TokenAssets} walletBalance={WalletBalance} />
            <TransactionType address={address} />

        </div>
    )
}

export default index