'use client';

import React, { useEffect, useState } from 'react';
import { useUX } from './UXContext';

const CustomCursor: React.FC = () => {
    const { strategyNote } = useUX();
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
            {/* Strategy Note Tooltip */}
            <div
                className={`fixed pointer-events-none z-[10000] px-3 py-2 bg-brand-lime text-brand-black rounded-lg text-[9px] font-black uppercase tracking-wider transition-all duration-300 shadow-2xl ${strategyNote ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}
                style={{
                    left: position.x + 24,
                    top: position.y - 12,
                }}
            >
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-black rounded-full animate-pulse"></span>
                    {strategyNote}
                </div>
                {/* Connector Line */}
                <div className="absolute top-1/2 -left-2 w-2 h-px bg-brand-lime"></div>
            </div>

            {/* Main follower circle */}
            <div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-lime pointer-events-none z-[9999] transition-transform duration-300 ease-out flex items-center justify-center mix-blend-difference"
                style={{
                    transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering || strategyNote ? 2 : 1})`,
                }}
            >
                <div className={`w-1 h-1 bg-brand-lime rounded-full transition-all duration-300 ${strategyNote ? 'scale-[3]' : 'scale-100'}`}></div>
            </div>

            {/* Trailing glow */}
            <div
                className="fixed top-0 left-0 w-64 h-64 bg-brand-lime/10 blur-[100px] rounded-full pointer-events-none z-[9998] transition-transform duration-700 ease-out"
                style={{
                    transform: `translate(${position.x - 128}px, ${position.y - 128}px)`,
                }}
            ></div>
        </>
    );
};

export default CustomCursor;
