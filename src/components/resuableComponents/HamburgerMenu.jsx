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
                {isOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
            </button>

            <div
                className={`lg:hidden ${isOpen ? 'p-6 flex flex-col gap-4 absolute top-14 left-0 w-full bg-blue-500 text-center text-white ' : 'hidden'}`}
            >
                <Link to="/discovery">Discovery</Link>
                <Link to="/">Mint</Link>
                <Link to="/about" >List</Link>
                <Button bg="bg-blue-800" textColor="text-white" btnText="Connect Wallect" />
            </div>
        </div>
    );
};

export default HamburgerMenu;
