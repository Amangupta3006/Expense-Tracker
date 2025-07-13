import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
    const location = useLocation(); // for highlighting active tab

    const isActive = (path) => location.pathname === path;

    return (
        <div className="w-64 h-screen fixed bg-white shadow-sm">
            <div className="p-6 font-bold text-xl">My Budget 💸</div>
            <nav className="px-4">
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/"
                            className={`block py-2 ${isActive('/') ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'
                                }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Overview"
                            className={`block py-2 ${isActive('/Overview') ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'
                                }`}
                        >
                            Overview
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Transactions"
                            className={`block py-2 ${isActive('/Transactions') ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'
                                }`}
                        >
                            Transactions
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Calculator"
                            className={`block py-2 ${isActive('/Calculator') ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'
                                }`}
                        >
                            Calculator
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
