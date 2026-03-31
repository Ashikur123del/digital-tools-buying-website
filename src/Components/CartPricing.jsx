import React, { useState } from 'react';
import { HiCheck } from "react-icons/hi"; 

const CartPricing = () => {
  
    const [hoveredCard, setHoveredCard] = useState(2); 

    const pricingPlans = [
        {
            id: 1,
            title: 'Starter',
            desc: 'Perfect for getting started',
            price: '0',
            features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
            buttonText: 'Get Started Free',
        },
        {
            id: 2,
            title: 'Pro',
            desc: 'Best for professionals',
            price: '29',
            features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
            buttonText: 'Start Pro Trial',
        },
        {
            id: 3,
            title: 'Enterprise',
            desc: 'For teams and businesses',
            price: '99',
            features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
            buttonText: 'Contact Sales',
        }
    ];

    return (
        <section className="bg-base-100 py-7 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg opacity-60">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {pricingPlans.map((plan) => {
                        const isActive = hoveredCard === plan.id;
                        
                        return (
                            <div
                                key={plan.id}
                                onMouseEnter={() => setHoveredCard(plan.id)}
                                className={`card w-full border border-base-200 transition-all duration-500 cursor-pointer relative ${
                                    isActive 
                                    ? 'text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] shadow-2xl scale-105 z-10' 
                                    : 'bg-white text-gray-800 shadow-md scale-100'
                                }`}
                            >
                               
                                {plan.id === 2 && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="badge rounded-full bg-orange-300 text-gray-800 font-bold py-3 px-6 shadow-lg border-none">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="card-body p-8">
                                    <h3 className="text-2xl font-bold">{plan.title}</h3>
                                    <p className={`text-sm mb-4 ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                                        {plan.desc}
                                    </p>
                                    
                                    <div className="flex items-baseline mb-8">
                                        <span className="text-5xl font-black">${plan.price}</span>
                                        <span className={`text-lg ml-1 ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                                            /Month
                                        </span>
                                    </div>

                                    <ul className="space-y-4 mb-10">
                                        {plan.features.map((feature, id) => (
                                            <li key={id} className="flex items-center gap-3">
                                                <HiCheck className={`text-xl ${isActive ? 'text-white' : 'text-success'}`} />
                                                <span className={`text-sm ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="card-actions mt-auto">
                                        <button className={`btn btn-block rounded-full border-none font-bold text-lg transition-colors ${
                                            isActive 
                                            ? 'bg-white text-[#7c3aed] hover:bg-gray-100' 
                                            : 'text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:opacity-90'
                                        }`}>
                                            {plan.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CartPricing;