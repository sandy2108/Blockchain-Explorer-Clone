
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Homepage"
import AddressPage from "./pages/Address";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/address/:address" element={<AddressPage />} />

      </Routes>
    </Router>
  );
}

export default App;