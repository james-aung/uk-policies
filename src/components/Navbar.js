import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ onReset }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleResetClick = () => {
        setShowModal(true);
    };

    const handleConfirmReset = () => {
        setShowModal(false);
        onReset();
    };

    const handleCancelReset = () => {
        setShowModal(false);
    };

    return (
      <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-bold">Swipe on Policies</Link>
          <div className="flex">
            <Link to="/results" className="bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium">See Results</Link>
            <div className="hidden md:flex">
              <Link to="/categories" className="text-white px-3 py-2 rounded-md text-sm font-medium">Categories</Link>
              <button onClick={handleResetClick} className="text-white px-3 py-2 rounded-md text-sm font-medium">Reset</button>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white px-3 py-2 rounded-md text-sm font-medium">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link to="/categories" className="block text-white px-3 py-2 rounded-md text-sm font-medium">Select Categories</Link>
            <button onClick={handleResetClick} className="block text-white px-3 py-2 rounded-md text-sm font-medium">Reset</button>
          </div>
        )}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md">
              <p className="text-black">Are you sure you want to reset?</p>
              <div className="flex justify-end mt-4">
                <button onClick={handleCancelReset} className="mr-2 px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
                <button onClick={handleConfirmReset} className="px-4 py-2 bg-red-500 text-white rounded-md">Confirm</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    );
}

export default Navbar;