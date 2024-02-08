import React, { useEffect } from 'react';
import BlockTransactions from '../../components/BlockTransactions/BlockTransactions';
import { useFetchTxsQuery } from "../../features/api/apislice";
import { useParams } from 'react-router-dom';
import Loader from '../../utils/Loader';

const Index = () => {
    const { block } = useParams();

    const { data, isFetching, isLoading, isError, refetch } = useFetchTxsQuery(block);

    useEffect(() => {
        refetch();
    }, []); // Adding refetch to the dependency array

    if (isLoading || isFetching) {
        return <Loader />;
    }

    if (isError) {
        return <p>Error fetching data.</p>;
    }

    return (
        <div>
            <BlockTransactions data={data} />
        </div>
    );
};

export default Index;
