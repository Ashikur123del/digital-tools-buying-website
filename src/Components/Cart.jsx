import React from 'react';
import { toast } from 'react-toastify';
import { FaTrashCan } from "react-icons/fa6"; 

const Cart = ({ carts, setCarts }) => {
  const total = carts.reduce((acc, cart) => acc + cart.price, 0);

  const handleRemove = () => {
    if (carts.length === 0) return;
    setCarts([]);
    toast.success(`Checkout successful! Thank you for your purchase.`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const hadeleDelete = (card) => {
    const newCarts = carts.filter(cart => cart.id !== card.id);
    setCarts(newCarts);
    toast.warn(`Removed ${card.title} from cart!`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className='py-16 max-w-5xl mx-auto px-4'>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-2">
          Your Selection
        </h2>
        <p className="text-zinc-500">Review your products before completing the subscription.</p>
      </div>

      {carts.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-zinc-200 rounded-3xl">
          <p className='text-2xl text-zinc-400 font-medium'>Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 space-y-4">
            {carts.map((cart) => (
              <div 
                className="flex items-center justify-between border border-zinc-100 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300" 
                key={cart.id}
              >
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-zinc-50 rounded-xl flex items-center justify-center p-3 border border-zinc-100">
                    <img
                      src={cart.icon_url}
                      alt={cart.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-zinc-900'>{cart.title}</h3>
                    <p className='text-zinc-500 text-sm line-clamp-1'>{cart.description}</p>
                    <p className='text-indigo-600 font-semibold mt-1'>${cart.price} <span className='text-xs text-zinc-400 font-normal'>{cart.billing_type}</span></p>
                  </div>
                </div>
                
                <button 
                  onClick={() => hadeleDelete(cart)} 
                  className='p-3 text-zinc-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors'
                  title="Remove item"
                >
                  <FaTrashCan size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-zinc-900 text-white p-8 rounded-3xl shadow-xl sticky top-24">
              <h3 className="text-xl font-bold mb-6 border-b border-zinc-700 pb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-4 border-t border-zinc-700">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handleRemove} 
                className='w-full py-4 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full font-bold text-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-indigo-900/20'
              >
                Proceed to Checkout
              </button>
              
              <p className="text-[10px] text-zinc-500 text-center mt-4">
                By proceeding, you agree to our Terms of Service.
              </p>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Cart;