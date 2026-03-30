import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({ carts }) => {
  return (
    <div className="bg-base-100 shadow-sm border-b border-zinc-200 sticky top-0 z-50">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 w-52 p-2 shadow border border-zinc-200"
            >
              <li><a className="font-bold text-[#4f39f6]">Products</a></li>
              <li><a className="font-bold text-[#4f39f6]">Features</a></li>
              <li><a className="font-bold text-[#4f39f6]">Pricing</a></li>
              <li><a className="font-bold text-[#4f39f6]">Testimonials</a></li>
              <li><a className="font-bold text-[#4f39f6]">FAQ</a></li>
            </ul>
          </div>
          <a className="text-xl md:text-2xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text cursor-pointer">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><a className="text-base font-bold text-[#4f39f6] hover:bg-purple-50 transition-all">Products</a></li>
            <li><a className="text-base font-bold text-[#4f39f6] hover:bg-purple-50 transition-all">Features</a></li>
            <li><a className="text-base font-bold text-[#4f39f6] hover:bg-purple-50 transition-all">Pricing</a></li>
            <li><a className="text-base font-bold text-[#4f39f6] hover:bg-purple-50 transition-all">Testimonials</a></li>
            <li><a className="text-base font-bold text-[#4f39f6] hover:bg-purple-50 transition-all">FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-2 md:gap-4">
          <div className="flex items-center gap-3 md:gap-5 mr-2">
            {/* Shopping Cart with dynamic badge */}
            <div className="relative group cursor-pointer">
              <div className="bg-zinc-100 rounded-full p-2.5 transition-all duration-300 group-hover:bg-zinc-200">
                <AiOutlineShoppingCart className="w-6 h-6 text-zinc-700" />
              </div>
              
              {/* Badge - শুধুমাত্র আইটেম থাকলে দেখাবে */}
              {carts.length > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-in zoom-in">
                  {carts.length}
                </span>
              )}
            </div>

            <a className="text-base font-bold text-zinc-700 hover:text-[#4f39f6] transition-colors cursor-pointer hidden sm:block">
              Login
            </a>
          </div>
          <a className="btn btn-sm md:btn-md rounded-full font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white border-none hover:opacity-90 shadow-md shadow-indigo-100">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;