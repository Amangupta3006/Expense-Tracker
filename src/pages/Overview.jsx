import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

export default function Overview({ totalSavings, budgetHistory }) {
    const [expenseInput, setExpenseInput] = useState('');
    const [expenseType, setExpenseType] = useState('');
    const [categoryExpenses, setCategoryExpenses] = useState({
        Entertainment: 0,
        'Eating Out': 0,
        Fuel: 0,
    });

    //updating the state when add is clicked
    const handleAddExpense = () => {
        const amount = Number(expenseInput);
        if (amount > 0 && expenseType) {
            const updatedExpenses = { ...categoryExpenses };
            updatedExpenses[expenseType] += amount;
            setCategoryExpenses(updatedExpenses);
            setExpenseInput('');
            setExpenseType('');
        }
    }

    const total = Object.values(categoryExpenses).reduce((sum, val) => sum + val, 0);

    const categories = Object.entries(categoryExpenses).map(([name, amount]) => ({
        name,
        amount,
        percent: total ? ((amount / total) * 100).toFixed(1) : 0,
    }));


    return (
        <div className="bg-gray-100 px-12 py-6 flex flex-col gap-5">
            <div className="flex gap-4 ">
                {/* Smaller Width and Height Box */}

                <div className='flex w-5/12 flex-col gap-6'>
                    <div className=" h-40 bg-white p-6 rounded-xl shadow-md">
                        <h1 className="text-xl font-bold mb-2">Total Budget</h1>
                        <p className="text-2xl text-green-600">₹ {totalSavings}</p>
                    </div>

                    <div className="h-50 bg-white p-6 rounded-xl shadow-md">
                        <h1 className="text-xl font-bold mb-2">Add Expense</h1>
                        <input
                            type='text'
                            className="w-full border px-3 py-2 rounded mb-4"
                            placeholder='Enter Amount'
                            onChange={(e) => setExpenseInput(e.target.value)}
                            value={expenseInput}
                        />
                        <div className='flex w-full justify-between'>
                            <select
                                value={expenseType}
                                onChange={(e) => setExpenseType(e.target.value)}
                                className="w-2/3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="">Choose Expense Type</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Eating Out">Eating Out</option>
                                <option value="Fuel">Fuel</option>
                            </select>
                            <button
                                onClick={handleAddExpense}
                                className='bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold px-4 py-2 rounded-md shadow-sm transition duration-200'
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>

                {/* Line graph */}

                <div className="flex-grow bg-white p-6 rounded-xl shadow-md flex flex-col">
                    <h1 className="text-xl font-bold mb-4">Budget Trend</h1>
                    <div className="h-64"> {/* Fixed height for chart area */}
                        {budgetHistory.length === 0 ? (
                            <p className="text-gray-500">No data yet</p>
                        ) : (
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={budgetHistory}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>
            </div>
            <div className="space-y-6 bg-white p-6 rounded-xl shadow">
                <h1 className='text-xl font-bold mb-4 '>Budgets </h1>
                {categories.map((cat) => (
                    <div key={cat.name}>
                        <div className="flex justify-between items-center mb-1">
                            <h2 className="text-sm font-semibold">{cat.name}</h2>
                            <span className='text-sm text-gray-600'>₹{cat.amount}</span>
                            <span className="text-sm text-gray-600">{cat.percent}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full">
                            <div
                                className="h-full bg-green-500 rounded-full transition-all duration-900 ease-outq"
                                style={{ width: `${cat.percent}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
