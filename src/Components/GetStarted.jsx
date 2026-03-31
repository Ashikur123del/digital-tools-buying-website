import React from 'react';
import imags1 from '../assets/user.png'
import imags2 from '../assets/package.png'
import imags3 from '../assets/rocket.png'

const GetStarted = () => {

const getItems = [
    {id: 1, imags: imags1, title: "Create Account", desc: 'Sign up for free in seconds. No credit card required to get started.' },
    {id: 2,  imags: imags2,title: "Choose Products", desc: 'Browse our catalog and select the toolsthat fit your needs.'},
    {id: 3, imags: imags3, title: "Start Creating", desc: 'Download and start using your premium tools immediately.'},
]


    return (
    <section className="bg-base-100 py-7 md:py-20 px-4">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                Get Started in <span className="text-primary">3 Easy Steps</span>
            </h2>
            <p className="text-lg opacity-60">
                Start using premium digital tools in minutes, not hours.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getItems.map((item) => (
                <div 
                    key={item.id} 
                    className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                    <div className="absolute top-5 right-5">
                        <div className=" text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] h-10 w-10 rounded-full badge-md font-bold py-3 px-3 shadow-md group-hover:scale-110 transition-transform">
                            {item.id < 10 ? `0${item.id}` : item.id}
                        </div>
                    </div>

                    <div className="card-body items-center text-center pt-16 pb-12">
                        <div className="avatar mb-6">
                            <div className="w-24 rounded-full bg-primary/5 p-5 group-hover:bg-primary/10 transition-colors duration-300">
                                <img 
                                    src={item.imags} 
                                    alt={item.title} 
                                    className="object-contain transform group-hover:scale-110 transition-transform duration-500" 
                                />
                            </div>
                        </div>
                        <h3 className="card-title text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-base-content/70 max-w-[250px]">
                            {item.desc}
                        </p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
                </div>
            ))}
        </div>
    </div>
</section>
    );
};

export default GetStarted;