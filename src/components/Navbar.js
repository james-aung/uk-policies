import { Link } from 'react-router-dom';

function Navbar({ onReset }) {
    return (
      <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-bold">Swipe on Policies</Link>
          <div>
            <Link to="/results" className="text-white px-3 py-2 rounded-md text-sm font-medium">Results</Link>
            <Link to="/categories" className="text-white px-3 py-2 rounded-md text-sm font-medium">Categories</Link>
            <button onClick={onReset} className="text-white px-3 py-2 rounded-md text-sm font-medium">Reset</button>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;