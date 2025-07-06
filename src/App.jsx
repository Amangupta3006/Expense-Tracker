import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Fixednav from './components/Fixednav';
import Overview from './pages/Overview';
import Transaction from './pages/Transaction';
import Calculator from './pages/Calculator';
import Home from './pages/Home';

function App() {
  const [totalSavings, setTotalSavings] = useState(0);
  const [budgetHistory, setBudgetHistory] = useState([]);

  return (
    <Router>
      <div className="flex h-screen">

        {/* Sidebar */}
        <div className="w-64 h-full">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          <Fixednav
            totalSavings={totalSavings}
            setTotalSavings={setTotalSavings}
            budgetHistory={budgetHistory}
            setBudgetHistory={setBudgetHistory}
          />

          <div className="flex-1 bg-gray-100 p-4">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route
                path="/Overview"
                element={
                  <Overview
                    totalSavings={totalSavings}
                    budgetHistory={budgetHistory}
                  />
                }
              />
              <Route path="/Transactions" element={<Transaction />} />
              <Route path="/Calculator" element={<Calculator />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
