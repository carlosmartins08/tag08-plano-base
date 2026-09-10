'use client';

import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Detect touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a') ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main follower circle */}
            <div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-lime pointer-events-none z-[9999] transition-transform duration-300 ease-brand flex items-center justify-center mix-blend-difference"
                style={{
                    transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 2 : 1})`,
                }}
            >
                <div className="w-1 h-1 rounded-full bg-brand-lime transition-all duration-300"></div>
            </div>

            {/* Trailing glow */}
            <div
                className="fixed top-0 left-0 w-64 h-64 bg-brand-lime/10 blur-[100px] rounded-full pointer-events-none z-[9998] transition-transform duration-700 ease-brand"
                style={{
                    transform: `translate(${position.x - 128}px, ${position.y - 128}px)`,
                }}
            ></div>
        </>
    );
};

export default CustomCursor;

