'use client';

import React, { useRef, useState, ReactNode } from 'react';

interface MagneticProps {
    children: ReactNode;
    strength?: number;
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.5 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        // Calculate distance from center
        const x = (clientX - (left + width / 2)) * strength;
        const y = (clientY - (top + height / 2)) * strength;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="inline-block transition-transform duration-500 ease-out"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
        >
            {children}
        </div>
    );
};

export default Magnetic;
