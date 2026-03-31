import React from 'react';

const ReadyToStart = () => {
    return (
      <section className='text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] shadow-2xl'>
        <div className="max-w-7xl mx-auto py-10 md:py-20 px-4">
            <div className="text-center">
                <h2 className=" text-3xl md:text-5xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
                <p className="text-lg opacity-75">
                    Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
                </p>
                <div className="">
                    <button className="btn btn-outline btn-white  bg-white rounded-full mt-8 px-8 py-6 text-lg font-bold text-[#7c3aed] transition-colors mr-3">
                        Explore Products
                    </button>
                    <button className=" btn bg-transparent text-white rounded-full mt-2 md:mt-8 px-8 py-6 text-lg font-bold  hover:text-[#7c3aed]  hover:bg-white transition-colors">
                        View Pricing
                    </button>

                    <p className="text-sm opacity-75 mt-4">
                        14-day free trial • No credit card required • Cancel anytime
                    </p>
                </div>
            </div>
            
        </div>
      </section>
    );
};

export default ReadyToStart;