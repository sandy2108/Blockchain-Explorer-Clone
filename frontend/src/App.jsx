import React, { useEffect } from "react";
import { useFetchLatestDataQuery } from "./features/latestdata/latestdata-api-slice";

function App() {
  const { data, error, isLoading, refetch } = useFetchLatestDataQuery();

  useEffect(() => {
    refetch(); //triggger a refetch on components mount
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log("data:", data);

  return (
    <div>
      <h1>Data from Backend (latestBlock):</h1>
      <ul>
        {data.latestBlock.map((item) => (
          <h1 key={item.miner}>{item.number}</h1>
        ))}
      </ul>

      <h1>Data from Backend (latestBlockTransaction):</h1>
      <ul>
        {data.latestBlockTransaction.map((transaction) => (
          <p key={transaction.id}>{transaction.blockNumber}</p>
        ))}
      </ul>
    </div>
  );
}

export default App;
