import React, { useState } from 'react';
import Cart from "./Cart";
import CardModels from "./CardModels";

const OurExplore = ({ carts, setCarts, cardDataPromise }) => {
    const [activeTab, setActiveTab] = useState('Products');

    return (
 <div>
    <div className="mt-10">
  <div className="text-center mb-2 md:mb-12">
    <h2 className="text-3xl font-bold md:text-5xl mb-4 text-zinc-900">
      {activeTab === 'Products' ? "Explore Our Premium Tools" : "Your Shopping Cart"}
    </h2>
    <p className="max-w-xl text-[#627382] mx-auto text-lg">
      {activeTab === 'Products' 
        ? "Choose from our curated collection of premium digital products designed to boost your productivity and creativity."
        : `Review your selected ${carts.length} items before proceeding to checkout.`
      }
    </p>

    <div className="tabs tabs-boxed inline-flex justify-center mt-10 p-2 bg-zinc-100 rounded-full border border-zinc-200">
      <input 
        type="radio" 
        name="my_tabs_1" 
        className="tab w-40 rounded-full transition-all duration-300 checked:!bg-linear-to-r checked:from-[#4f39f6] checked:to-[#9514fa] checked:!text-white" 
        aria-label="Products" 
        defaultChecked 
        onClick={() => setActiveTab("Products")} 
      />
      <input 
        type="radio" 
        name="my_tabs_1" 
        className="tab w-40 rounded-full transition-all duration-300 checked:!bg-linear-to-r checked:from-[#4f39f6] checked:to-[#9514fa] checked:!text-white" 
        aria-label={`Cart (${carts.length})`} 
        onClick={() => setActiveTab('Cart')} 
      />
    </div>
  </div>


  <div className="max-w-7xl mx-auto px-4">
    {activeTab === 'Products' && (
      <CardModels 
        carts={carts} 
        setCarts={setCarts} 
        cardDataPromise={cardDataPromise} 
      />
    )}
    
    {activeTab === 'Cart' && (
      <Cart 
        carts={carts} 
        setCarts={setCarts} 
      />
    )}
  </div>
</div>
    
        </div>
    );
};

export default OurExplore;