import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-slate-600 dark:text-slate-400 p-4">
            <p>
                All rights reserved &copy; albac.dev {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
