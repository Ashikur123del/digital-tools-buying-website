import React, { use } from "react";
import Cards from "./Cards";

const CardModels = ({ cardDataPromise,carts, setCarts }) => {

  const cardData = use(cardDataPromise);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData && cardData.length > 0 ? (
            cardData.map((card) => (
              <Cards key={card.id} card={card} carts={carts} setCarts={setCarts} />
            ))
          ) : (
            <p className="text-center col-span-full py-10 text-zinc-400">No tools found.</p>
          )}
        </div>

      </div>
    </section>
  );
};

export default CardModels;