import React from 'react';

const Button = ({ type = 'button', className = 'bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800', label, onClick }) => {
    return (
        <button type={type} className={`btn ${className}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;