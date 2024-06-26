import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import Button from './Button';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex items-center">
            <button
                className="text-gray-500 focus:outline-none lg:hidden"
                onClick={toggleMenu}
            >
                {isOpen ? <AiOutlineClose className="h-6 w-6 text-red-500" /> : <AiOutlineMenu className="h-6 w-6 text-blue-700" />}
            </button>

            <div
                className={`lg:hidden ${isOpen ? 'p-6 flex flex-col items-center gap-4 absolute top-14 left-0 w-full bg-blue-500 text-center text-white text-lg ' : 'hidden'}`}
            >
                <Link to="/discovery">Discovery</Link>
                <Link to="/mint">Mint</Link>
                <Link to="/list" >List</Link>
                <Button bg="bg-blue-800" textColor="text-white" btnText="Connect Wallect" className="max-w-fit" />
            </div>
        </div>
    );
};

export default HamburgerMenu;
