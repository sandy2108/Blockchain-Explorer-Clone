import React from 'react'
import BlockHash from '../../components/Block/BlockHash'
import { useParams } from "react-router-dom";
import { useFetchBlockQuery } from "../../features/api/apislice";
import Loader from '../../utils/Loader';
import BlockInformation from "../../components/Block/BlockInformation";

const index = () => {
    const { block } = useParams();
    if (block.length != 8) {
        return <p>Invalid Valid</p>
    }
    const { data, isLoading, isError, isFetching } = useFetchBlockQuery(block);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <p>Error fetching Block data.</p>;
    }

    return (
        <div>
            <BlockHash />
            <BlockInformation data={data} />

        </div>
    )
}

export default index