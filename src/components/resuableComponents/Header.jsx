import React from 'react';

const Header = ({ children }) => {
    return (
        <h1 className="text-white text-3xl lg:text-5xl font-semibold mb-10">
            {children}
        </h1>
    );
};

export default Header;
