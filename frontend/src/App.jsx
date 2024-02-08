
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Homepage"
import AddressPage from "./pages/Address";
import BlockPage from "./pages/Block";
import TxPage from "./pages/Txn";
import BlockTransaction from "./pages/BlockTransactions";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/address/:address" element={<AddressPage />} />
        <Route path="/block/:block" element={<BlockPage />} />
        <Route path="/tx/:tx" element={<TxPage />} />
        <Route path="/txs/:block" element={<BlockTransaction />} />

      </Routes>
    </Router>
  );
}

export default App;