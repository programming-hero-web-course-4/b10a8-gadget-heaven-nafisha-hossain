import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const RepairSupport = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [deviceName, setDeviceName] = useState('');
    const [deviceCode, setDeviceCode] = useState('');
    const [issue, setIssue] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Submitting...');
        setTimeout(() => {
            setStatus('Your repair/support request has been received. We will get back to you shortly!');

            // Show toast notification
            toast.success("Thank you for reaching out! Our team will review your issue and get back to you shortly.");

            // Reset the form
            setName('');
            setEmail('');
            setDeviceName('');
            setDeviceCode('');
            setIssue('');
        }, 2000);
    };

    return (
        <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-black-800 mb-6">Repair & Support</h2>
            <Helmet>
                <title>Repair & Support | Gadget Haven</title>
            </Helmet>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 font-bold text-xl">Client Name</label>
                        <input
                            type="text"
                            placeholder="Write your name"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold text-xl">Client Email</label>
                        <input
                            type="email"
                            placeholder="Write your email"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold text-xl">Device Name</label>
                        <input
                            type="text"
                            placeholder="Write the device name"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                            value={deviceName}
                            onChange={(e) => setDeviceName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold text-xl">Device Code</label>
                        <input
                            type="text"
                            placeholder="Write device code"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                            value={deviceCode}
                            onChange={(e) => setDeviceCode(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-gray-700 font-bold text-xl">Device Issue</label>
                        <textarea
                            placeholder="Write the device problem"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                            rows="4"
                            value={issue}
                            onChange={(e) => setIssue(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-span-2 flex justify-center items-center">
                        <button
                            type="submit"
                            className="w-96 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                        >
                            Submit Request
                        </button>
                    </div>
                </form>

                {status && (
                    <div className="mt-4 text-center text-gray-700">
                        <p>{status}</p>
                    </div>
                )}
            </div>

            {/* Toast Container */}
            <ToastContainer position="top-center" autoClose={5000} />
        </div>
    );
};

export default RepairSupport;
