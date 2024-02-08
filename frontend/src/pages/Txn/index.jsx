import React from 'react'
import { useParams } from 'react-router-dom'
import TxHash from '../../components/Transactions/TxHash';
import { useFetchTxQuery } from '../../features/api/apislice'
import Loader from '../../utils/Loader';

const index = () => {
    const { tx } = useParams();
    if (tx.length != 66) {
        return <p>Invalid TxnHash</p>
    }
    const { data, isLoading, isError, isFetching } = useFetchTxQuery(tx);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <p>Error fetching data.</p>;
    }



    return (
        <div>
            <TxHash data={data} />
        </div>
    )
}

export default index