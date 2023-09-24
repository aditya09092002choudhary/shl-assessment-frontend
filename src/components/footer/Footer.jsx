import React from 'react';

const Footer = () => {
    const footerStyle={
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--dark-color)",
        color: "var(--light-color)",
        height: "40px",
        marginTop: "20px"
    }
    return (
        <div className='footer' style={footerStyle}>
           SHL Assessment | 2023 | Aditya Choudhary
        </div>
    );
}

export default Footer;
