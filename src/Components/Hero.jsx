import { IoPlayOutline } from "react-icons/io5";
import heroImg from '../assets/banner.png';

const Hero = () => {
    return (
        <section className='bg-base-100 overflow-hidden'>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-10 md:py-15">
                    
                    <div className="space-y-8 flex-1 text-center md:text-left">
                        <div className="bg-[#e1e7ff] px-4 py-1.5 rounded-full flex items-center gap-3 w-fit mx-auto md:mx-0 shadow-sm border border-indigo-100 transition-all hover:bg-[#d6ddff]">
                            <div className="h-3 w-3 rounded-full bg-orange-600 animate-pulse"></div> 
                            <p className="text-sm font-bold text-[#4f39f6]">New: AI-Powered Tools Available</p>
                        </div>
               
                        <h1 className='font-extrabold text-4xl md:text-6xl text-[#101727] leading-[1.1] tracking-tight'>
                            Supercharge Your <br className="hidden md:block" /> 
                            <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text">Digital Workflow</span>
                        </h1>

                        <p className='max-w-lg text-[#627382] text-lg md:text-xl leading-relaxed mx-auto md:mx-0'>
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 pt-4">
                            <button className="btn btn-lg rounded-full font-bold px-10 border-none bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-200">
                                Explore Products
                            </button>
                            
                            <button className="btn btn-lg btn-outline rounded-full font-bold px-10 border-2 border-[#8147ff] text-[#8147ff] hover:bg-[#8147ff] hover:text-white transition-all duration-300 flex items-center gap-2">
                                <IoPlayOutline className="text-2xl" />
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center items-center w-full">
                        <div className="relative group w-full max-w-[500px]">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                            <img 
                                src={heroImg} 
                                alt="Digital Workflow Hero" 
                                className="relative w-full h-auto object-contain rounded-3xl transform hover:-translate-y-2 transition-transform duration-500 shadow-sm" 
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;