import React, { use } from "react";
import { FaCheck } from "react-icons/fa6";

const CardModels = ({ cardDataPromise }) => {
  const cardData = use(cardDataPromise);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-5xl mb-4">Premium Digital Tools</h2>
            <p className="max-w-xl text-[#627382] mx-auto">Choose from our curated collection of premium digital products designed
                to boost your productivity and creativity.</p>
         </div>   

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="relative bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              {card.tag && (
                <span
                  className={`absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${card.tag_style}`}
                >
                  {card.tag}
                </span>
              )}

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
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
                {card.description}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-3xl font-extrabold text-zinc-900">
                  ${card.price}
                </span>
                <span className="text-zinc-400 text-sm font-medium">
                  {card.billing_type}
                </span>
              </div>

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

              <div className="mt-auto">
                <button className="w-full py-3.5 rounded-full font-bold bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white hover:opacity-90 transform active:scale-95 transition-all shadow-lg shadow-indigo-100">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardModels;
