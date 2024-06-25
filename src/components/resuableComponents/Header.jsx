import React from 'react';

const Header = ({ children }) => {
    return (
        <h1 className="text-white text-2xl lg:text-4xl font-semibold mb-5 text-center lg:text-start lg:mb-10">
            {children}
        </h1>
    );
};

export default Header;
