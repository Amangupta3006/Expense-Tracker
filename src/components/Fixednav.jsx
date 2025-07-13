import { useState } from 'react';

export default function Fixednav({
    setTotalSavings,
    setBudgetHistory,
}) {
    const [showDialog, setShowDialog] = useState(false);
    const [budgetInput, setBudgetInput] = useState('');

    const handleSave = () => {
        const amount = parseFloat(budgetInput);
        if (!isNaN(amount)) {
            setTotalSavings(prev => prev + amount); // update savings
            const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
            setBudgetHistory(prev => [...prev, { date: today, amount }]);
        }

        setBudgetInput('');
        setShowDialog(false); // close dialog
    };

    return (
        <div className="w-full">
            {/* Top Navigation */}
            <nav className= "w-full bg-blue-400 text-white px-6 py-3 flex items-center justify-between shadow-md">
                <div className="flex items-center space-x-3">
                    <button className="text-white text-xl font-bold">☰</button>
                    <h1 className="text-lg font-semibold">Overview</h1>
                </div>
                <div>
                    <button
                        onClick={() => setShowDialog(true)}
                        className="bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                    >
                        Add Budget
                    </button>
                </div>
            </nav>

            {/* Dialog Box */}
            {showDialog && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur z-50">
                    <div className="bg-white p-6 rounded-md shadow-lg w-80 text-black relative">
                        <h2 className="text-xl font-bold mb-4">Add Budget</h2>
                        <input
                            type="text"
                            value={budgetInput}
                            onChange={(e) => setBudgetInput(e.target.value)}
                            placeholder="Enter Amount"
                            className="w-full border px-3 py-2 rounded mb-4"
                        />
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowDialog(false)}
                                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Save
                            </button>
                        </div>
                        {/* Close icon (×) */}
                        <button
                            onClick={() => setShowDialog(false)}
                            className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
