import React, { useEffect } from 'react';

const SmoothScroll: React.FC = () => {
    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const st = window.scrollY || document.documentElement.scrollTop;
            const scrollAmount = 20;

            if (st > lastScrollTop) {
                // Scrolling down
                window.scrollTo({
                    top: st + scrollAmount, // Adjust the amount of extra scroll
                    behavior: 'smooth',
                });
            } else {
                // Scrolling up
                window.scrollTo({
                    top: st + scrollAmount, // Adjust the amount of extra scroll
                    behavior: 'smooth',
                });
            }

            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return null; // This component doesn't render anything
};

export default SmoothScroll;