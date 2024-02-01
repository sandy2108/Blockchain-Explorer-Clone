import React, { useEffect } from 'react'
import SearchBar from "../../components/HomePage/SearchBar"
import MarketData from '../../components/HomePage/MarketData'
import LatestData from '../../components/HomePage/LatestData'
import { useFetchLatestDataQuery } from '../../features/api/apislice'
import Loader from "../../utils/Loader.jsx"


const index = () => {
    const { data, isFetching, isError, refetch } = useFetchLatestDataQuery();


    useEffect(() => {
        refetch();
    }, []);

    if (isFetching) {
        return <Loader />;
    }

    if (isError) {
        return <p>Error fetching data.</p>;
    }

    return (
        <div className=''>
            <SearchBar />
            <MarketData ethData={data.marketData.data} />
            <LatestData block={data.latestBlock} transaction={data.latestBlockTransaction} />

        </div>
    )
}

export default index