import { useState } from 'react';

export default function Transaction() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        street: '',
        city: '',
        region: '',
        postalCode: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload

        //fetching the backend
        try {
            const res = await fetch('http://localhost:3000/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await res.json();
            console.log('✅ Server response:', result);
            alert('Data saved successfully!');

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                country: '',
                street: '',
                city: '',
                region: '',
                postalCode: ''
            });
            } catch (err) {
            console.error('❌ Error saving data:', err);
            alert('Failed to save.');
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <form onSubmit={handleSubmit}>
                <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                id="first-name"
                                name="firstName"
                                type="text"
                                autoComplete="given-name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                id="last-name"
                                name="lastName"
                                type="text"
                                autoComplete="family-name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                            Country
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                value={formData.country}
                                onChange={handleChange}
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                            {/* <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            /> */}
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                            Street address
                        </label>
                        <div className="mt-2">
                            <input
                                id="street-address"
                                name="street"
                                type="text"
                                autoComplete="street-address"
                                value={formData.street}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                            City
                        </label>
                        <div className="mt-2">
                            <input
                                id="city"
                                name="city"
                                type="text"
                                autoComplete="address-level2"
                                value={formData.city}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                            State / Province
                        </label>
                        <div className="mt-2">
                            <input
                                id="region"
                                name="region"
                                type="text"
                                autoComplete="address-level1"
                                value={formData.region}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                            ZIP / Postal code
                        </label>
                        <div className="mt-2">
                            <input
                                id="postal-code"
                                name="postalCode"
                                type="text"
                                autoComplete="postal-code"
                                value={formData.postalCode}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm/6 font-semibold text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>

    )
};