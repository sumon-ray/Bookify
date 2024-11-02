import React from 'react';

const AnimatedShinyText = ({ className, children }) => {
    return (
        <span className={`bg-gradient-to-r from-transparent to-white bg-clip-text text-transparent animate-shine ${className}`}>
            {children}
        </span>
    );
};

export default AnimatedShinyText;
