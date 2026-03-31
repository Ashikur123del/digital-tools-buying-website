import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify"; 

const Cards = ({ card, carts, setCarts }) => {
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = () => {
    const isFounded = carts.find(cartItem => cartItem.id === card.id);
    
    if (isFounded) {
      toast.error(`Already subscribed to ${card.title}!`);
      return;
    }

    setIsSubscribing(true);

   
      setCarts([...carts, card]);
      toast.success(`Subscribed to ${card.title} successfully!`, {
        position: "top-center",
        autoClose: 3000,
      });
      setIsSubscribing(false);
   
  };

  return (
    <div
      className="relative bg-white py-3 px-4  md:p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group"
    >
      {card.tag && (
        <span
          className={`absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${card.tag_style}`}
        >
          {card.tag}
        </span>
      )}

      {/* Icon */}
      <div className="w-14 h-14 mb-6 bg-zinc-50 rounded-full flex items-center justify-center p-3 border border-zinc-100 group-hover:scale-110 transition-transform duration-300">
        <img
          src={card.icon_url}
          alt={card.title}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="text-2xl font-bold text-zinc-900 mb-3">
        {card.title}
      </h3>
      
      <p className="text-zinc-500 text-sm leading-relaxed mb-3 md:mb-6 flex-grow">
        {card.description}
      </p>

      {/* Pricing */}
      <div className="flex items-baseline gap-1 mb-3 md:mb-8">
        <span className="text-3xl font-extrabold text-zinc-900">
          ${card.price}
        </span>
        <span className="text-zinc-400 text-sm font-medium">
          {card.billing_type}
        </span>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {card.features.map((feature, index) => (
          <div className="flex items-center gap-3" key={index}>
            <div className="text-green-500 bg-green-50 p-1 rounded-sm text-[10px]">
              <FaCheck />
            </div>
            <p className="text-zinc-600 text-sm font-medium">
              {feature}
            </p>
          </div>
        ))}
      </div>

      {/* Subscribe Button */}
      <div className="mt-auto">
        <button 
          disabled={isSubscribing}
          onClick={handleSubscribe} 
          className={`w-full py-3.5 rounded-full font-bold transition-all shadow-lg active:scale-95 
            ${isSubscribing ? 'bg-zinc-400 cursor-not-allowed' : 'bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white hover:opacity-90 shadow-indigo-100'}`}
        >
          {isSubscribing ? (
            <span className="flex items-center justify-center gap-2">
              Buy...
            </span>
          ) : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default Cards;