import { useState } from 'react';

export default function Calculator() {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleCalculate = () => {
        try {
            // Use eval carefully in real apps, here it's fine for a basic calculator
            const result = eval(input);
            setInput(result.toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">🧮 Calculator</h2>
            <input
                type="text"
                value={input}
                readOnly
                className="w-full mb-4 p-2 border rounded text-right text-lg"
            />
            <div className="grid grid-cols-4 gap-2">
                {['7', '8', '9', '/',
                    '4', '5', '6', '*',
                    '1', '2', '3', '-',
                    '0', '.', '=', '+'].map((btn, index) => (
                        <button
                            key={index}
                            onClick={() =>
                                btn === '=' ? handleCalculate() : handleClick(btn)
                            }
                            className="p-4 bg-gray-200 hover:bg-gray-300 rounded text-lg"
                        >
                            {btn}
                        </button>
                    ))}
                <button
                    onClick={handleClear}
                    className="col-span-4 p-3 bg-red-400 hover:bg-red-500 text-white rounded font-semibold"
                >
                    Clear
                </button>
            </div>
        </div>
    );
}
