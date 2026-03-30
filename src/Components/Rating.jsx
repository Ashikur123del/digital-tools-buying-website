import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ endValue, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseFloat(endValue);
        const totalMiliseconds = duration;
        const incrementTime = 20; 
        const totalSteps = totalMiliseconds / incrementTime;
        const increment = (end - start) / totalSteps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [endValue, duration]);

    return <span>{Number.isInteger(endValue) ? Math.floor(count) : count.toFixed(1)}</span>;
};

const Rating = () => {
    return (
        <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white'>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-around gap-12 py-8 md:py-10 text-center">
                    
                    <div>
                        <h3 className='text-3xl md:text-5xl font-bold'>
                            <AnimatedCounter endValue={50} />K+
                        </h3>
                        <p className='font-bold opacity-80'>Active Users</p>
                    </div>

                    <div>
                        <h3 className='text-3xl md:text-5xl font-bold'>
                            <AnimatedCounter endValue={200} />+
                        </h3>
                        <p className='font-bold opacity-80'>Premium Tools</p>
                    </div>

                    <div>
                        <h3 className='text-3xl md:text-5xl font-bold'>
                            <AnimatedCounter endValue={4.9} />
                        </h3>
                        <p className='font-bold opacity-80'>Rating</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Rating;