import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm border-b border-zinc-200">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4  w-85 sm:w-100 p-2 shadow border
              border-zinc-200"
            >
             <li className="border-b border-zinc-200">
              <a className="text-base font-bold  text-[#4f39f6] hover:text-white hover:bg-purple-500">Products</a>
            </li>
            <li className="border-b border-zinc-200">
              <a className="text-base font-bold  text-[#4f39f6] hover:text-white hover:bg-purple-500">Features</a>
            </li>
            <li className="border-b border-zinc-200">
              <a className="text-base font-bold text-[#4f39f6] hover:text-white hover:bg-purple-500">Pricing</a>
            </li>
            <li className="border-b border-zinc-200">
              <a className="text-base font-bold  text-[#4f39f6] hover:text-white hover:bg-purple-500">Testimonials</a>
            </li>
            <li className="">
              <a className="text-base font-bold  text-[#4f39f6] hover:text-white hover:bg-purple-500">FAQ</a>
            </li>
         
            </ul>
          </div>
          <a className=" text-xl md:text-2xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-base font-bold  text-[#4f39f6] hover:text-white hover:bg-purple-500 transition-all duration-300">Products</a>
            </li>
            <li>
              <a className="text-base font-bold  text-[#4f39f6] hover:text-white hover:bg-purple-500 transition-all duration-300">Features</a>
            </li>
            <li>
              <a className="text-base font-bold  text-[#4f39f6] hover:text-white hover:bg-purple-500 transition-all duration-300">Pricing</a>
            </li>
            <li>
              <a className="text-base font-bold  text-[#4f39f6] hover:text-white hover:bg-purple-500 transition-all duration-300">Testimonials</a>
            </li>
            <li>
              <a className="text-base font-bold  text-[#4f39f6] hover:text-white hover:bg-purple-500 transition-all duration-300">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
            <div className="flex items-center gap-2  md:gap-4 mr-2">
                <AiOutlineShoppingCart className=" bg-zinc-100 rounded-full p-2 w-10 h-10 hover:bg-zinc-300 transition-all duration-300" />
                <a className="text-base font-bold">Login</a>
            </div>
          <a className="btn rounded-full font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
